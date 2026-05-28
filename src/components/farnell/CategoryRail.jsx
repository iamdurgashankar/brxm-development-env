import { categoryCards } from "./data";

export function CategoryRail({ items = categoryCards }) {
  return (
    <section className="fn-categories" aria-label="Top categories">
      {items.map((item) => (
        <article className="fn-category-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <button className="fn-link-btn" type="button">Shop now</button>
        </article>
      ))}
    </section>
  );
}
