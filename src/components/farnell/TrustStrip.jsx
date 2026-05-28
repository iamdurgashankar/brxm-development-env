import { trustStats } from "./data";

export function TrustStrip({ items = trustStats }) {
  return (
    <section className="fn-trust-strip" aria-label="Trust metrics">
      {items.map((item) => (
        <article key={item.label}>
          <h4>{item.value}</h4>
          <p>{item.label}</p>
        </article>
      ))}
    </section>
  );
}
