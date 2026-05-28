import { manufacturers } from "./data";

export function ManufacturerCloud({
  title = "2,000 leading manufacturers",
  subtitle = "Supplier-focused discovery block with dense logo-link behavior.",
  items = manufacturers,
}) {
  return (
    <section className="fn-manufacturers">
      <div className="fn-section-heading">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="fn-manufacturer-cloud">
        {items.map((name) => (
          <a href="/" key={name}>
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
