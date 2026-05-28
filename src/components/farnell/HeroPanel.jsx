export function HeroPanel({
  kicker = "Design. Source. Build.",
  heading = "One destination for components, tools, and engineering workflows",
  description = "A reusable hero section inspired by large-scale electronics distribution storefronts, optimized for campaign visibility and rapid category access.",
  primaryCta = "Browse Components",
  secondaryCta = "View New Products",
  cardKicker = "Campaign Focus",
  cardTitle = "Automation Ready",
  cardBullets = [
    "High-availability inventory signals",
    "Supplier-prioritized featured slots",
    "Fast path from discovery to checkout",
  ],
}) {
  return (
    <section className="fn-hero">
      <div className="fn-hero-content">
        <p className="fn-kicker">{kicker}</p>
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="fn-hero-actions">
          <button type="button">{primaryCta}</button>
          <button type="button" className="fn-secondary-btn">
            {secondaryCta}
          </button>
        </div>
      </div>
      <div className="fn-hero-card" aria-hidden="true">
        <p>{cardKicker}</p>
        <h3>{cardTitle}</h3>
        <ul>
          {cardBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
