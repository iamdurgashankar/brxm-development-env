import { TopTechVoicesPage } from "./TopTechVoicesPage";

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

export function BrxTopTechVoicesPage({ component }) {
  return withSpacing(component, <TopTechVoicesPage />, { top: false, bottom: false });
}
