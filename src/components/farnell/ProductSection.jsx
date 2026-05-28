function ProductCard({ item }) {
  return (
    <article className="fn-product-card">
      <p className="fn-brand">{item.brand}</p>
      <h4>{item.name}</h4>
      <div className="fn-chip-list">
        {(item.chips || []).map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>
      <a href="/">View details</a>
    </article>
  );
}

export function ProductSection({ title = "Products", subtitle = "", items = [] }) {
  return (
    <section className="fn-product-section">
      <div className="fn-section-heading">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="fn-product-grid">
        {items.map((item) => (
          <ProductCard item={item} key={`${item.brand}-${item.name}`} />
        ))}
      </div>
    </section>
  );
}
