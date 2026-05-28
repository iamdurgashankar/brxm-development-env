import { CategoryRail } from "./CategoryRail";
import { FarnellHeader } from "./FarnellHeader";
import { HeroPanel } from "./HeroPanel";
import { ManufacturerCloud } from "./ManufacturerCloud";
import { ProductSection } from "./ProductSection";
import { PromoTicker } from "./PromoTicker";
import { SiteFooter } from "./SiteFooter";
import { TrustStrip } from "./TrustStrip";
import { featuredProducts, greatDeals, newProducts } from "./data";

export function FarnellHome() {
  return (
    <div className="fn-page">
      <FarnellHeader />
      <main className="fn-main">
        <PromoTicker />
        <HeroPanel />
        <CategoryRail />
        <ProductSection
          title="New products"
          subtitle="Showcasing the latest technology"
          items={newProducts}
        />
        <ProductSection
          title="Great deals"
          subtitle="Showcasing offers and savings"
          items={greatDeals}
        />
        <ProductSection
          title="Featured products"
          subtitle="Hand picked by supplier campaigns"
          items={featuredProducts}
        />
        <ManufacturerCloud />
        <TrustStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
