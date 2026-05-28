import { promoTickerItems } from "./data";

export function PromoTicker({ items = promoTickerItems }) {
  return (
    <section className="fn-ticker" aria-label="Promotions">
      {items.map((item) => (
        <article className="fn-ticker-item" key={item.title}>
          <p>{item.title}</p>
          <h3>{item.subtitle}</h3>
          <button className="fn-link-btn fn-link-btn-light" type="button">{item.cta}</button>
        </article>
      ))}
    </section>
  );
}
