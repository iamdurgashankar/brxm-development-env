import { CategoryRail } from "./CategoryRail";
import { FarnellHeader } from "./FarnellHeader";
import { HeroPanel } from "./HeroPanel";
import { ManufacturerCloud } from "./ManufacturerCloud";
import { ProductSection } from "./ProductSection";
import { PromoTicker } from "./PromoTicker";
import { SiteFooter } from "./SiteFooter";
import { TrustStrip } from "./TrustStrip";

function resolvePath(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "object") {
    return value.path || value.value || value.id || null;
  }

  return null;
}

function normalizeLines(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item : String(item || "")))
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return String(value)
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getConfig(component) {
  return {
    ...(component.getParameters?.() || {}),
    ...(component.getProperties?.() || {}),
  };
}

function toBool(value, fallback = false) {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value).trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes" || normalized === "on";
}

function withSpacing(component, content, defaults = {}) {
  const config = getConfig(component);
  const top = toBool(config.spaceTop ?? config.spacingTop, defaults.top ?? false);
  const bottom = toBool(config.spaceBottom ?? config.spacingBottom, defaults.bottom ?? true);
  const classes = [
    "fn-block-shell",
    top ? "fn-space-top" : "",
    bottom ? "fn-space-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{content}</div>;
}

function getDocumentData(component, page, keys) {
  const config = getConfig(component);

  for (const key of keys) {
    const path = resolvePath(config[key]);
    if (!path) {
      continue;
    }

    const data = page.getContent(path)?.getData();
    if (data) {
      return data;
    }
  }

  return null;
}

function parsePipeItems(value, mapper) {
  return normalizeLines(value)
    .map((line) => line.split("|").map((item) => item.trim()))
    .map((parts) => mapper(parts))
    .filter(Boolean);
}

function toStringArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }

  return normalizeLines(value);
}

function parseProductItems(value) {
  return parsePipeItems(value, (parts) => {
    const [brand, name, chips] = parts;
    if (!brand || !name) {
      return null;
    }

    return {
      brand,
      name,
      chips: chips ? chips.split(",").map((chip) => chip.trim()).filter(Boolean) : [],
    };
  });
}

function parseFooterColumns(value) {
  return parsePipeItems(value, (parts) => {
    const [title, linksCsv] = parts;
    if (!title) {
      return null;
    }

    return {
      title,
      links: linksCsv ? linksCsv.split(",").map((item) => item.trim()).filter(Boolean) : [],
    };
  });
}

export function BrxFarnellHeader({ component, page }) {
  const data = getDocumentData(component, page, ["document", "settingsDocument", "headerDocument"]);

  if (!data) {
    return withSpacing(component, <FarnellHeader />, { top: false, bottom: true });
  }

  return withSpacing(component, (
    <FarnellHeader
      countryLabel={data.countrylabel || data.countryLabel || "United Kingdom"}
      vatLabel={data.vatlabel || data.vatLabel || "Ex VAT"}
      utilityItems={toStringArray(data.utilitylinks || data.utilityLinks)}
      navItems={toStringArray(data.navlinks || data.navLinks || data.primarynav || data.primaryNav)}
      title={data.title || data.headertitle || data.headerTitle}
      subtitle={data.subtitle || data.headerSubtitle}
      searchPlaceholder={data.searchplaceholder || data.searchPlaceholder}
    />
  ), { top: false, bottom: true });
}

export function BrxPromoTicker({ component, page }) {
  const data = getDocumentData(component, page, ["document", "tickerDocument", "promoDocument"]);
  const items = data
    ? parsePipeItems(data.items || data.entries, (parts) => {
        const [title, subtitle, cta] = parts;
        if (!title || !subtitle) {
          return null;
        }

        return {
          title,
          subtitle,
          cta: cta || "Explore",
        };
      })
    : [];

  return withSpacing(component, <PromoTicker items={items.length ? items : undefined} />);
}

export function BrxHeroPanel({ component, page }) {
  const data = getDocumentData(component, page, ["document", "heroDocument"]);

  if (!data) {
    return withSpacing(component, <HeroPanel />);
  }

  return withSpacing(component, (
    <HeroPanel
      kicker={data.kicker}
      heading={data.heading || data.title}
      description={data.description}
      primaryCta={data.primaryctalabel || data.primaryCtaLabel}
      secondaryCta={data.secondaryctalabel || data.secondaryCtaLabel}
      cardKicker={data.cardkicker || data.cardKicker}
      cardTitle={data.cardtitle || data.cardTitle}
      cardBullets={toStringArray(data.cardbullets || data.cardBullets)}
    />
  ));
}

export function BrxCategoryRail({ component, page }) {
  const data = getDocumentData(component, page, ["document", "categoriesDocument"]);
  const items = data
    ? parsePipeItems(data.items || data.entries, (parts) => {
        const [title, detail] = parts;
        if (!title || !detail) {
          return null;
        }

        return { title, detail };
      })
    : [];

  return withSpacing(component, <CategoryRail items={items.length ? items : undefined} />);
}

export function BrxProductSection({ component, page }) {
  const config = getConfig(component);
  const data = getDocumentData(component, page, ["document", "sectionDocument"]);

  const title =
    config.title ||
    config.sectionTitle ||
    data?.title ||
    "Products";

  const subtitle =
    config.subtitle ||
    config.sectionSubtitle ||
    data?.subtitle ||
    "";

  const items = data ? parseProductItems(data.items || data.entries) : [];

  return withSpacing(component, <ProductSection title={title} subtitle={subtitle} items={items.length ? items : []} />);
}

export function BrxManufacturerCloud({ component, page }) {
  const data = getDocumentData(component, page, ["document", "manufacturersDocument"]);

  if (!data) {
    return withSpacing(component, <ManufacturerCloud />);
  }

  return withSpacing(component, (
    <ManufacturerCloud
      title={data.title}
      subtitle={data.subtitle}
      items={toStringArray(data.items || data.manufacturers)}
    />
  ));
}

export function BrxTrustStrip({ component, page }) {
  const data = getDocumentData(component, page, ["document", "trustDocument", "statsDocument"]);
  const items = data
    ? parsePipeItems(data.items || data.stats, (parts) => {
        const [value, label] = parts;
        if (!value || !label) {
          return null;
        }

        return { value, label };
      })
    : [];

  return withSpacing(component, <TrustStrip items={items.length ? items : undefined} />);
}

export function BrxSiteFooter({ component, page }) {
  const data = getDocumentData(component, page, ["document", "footerDocument"]);

  if (!data) {
    return withSpacing(component, <SiteFooter />, { top: true, bottom: false });
  }

  return withSpacing(component, (
    <SiteFooter
      columns={parseFooterColumns(data.columns)}
      footnote={data.footnote}
    />
  ), { top: true, bottom: false });
}

