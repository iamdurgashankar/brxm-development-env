const defaultColumns = [
  {
    title: "Customer Service",
    links: ["Contact us", "Delivery options", "Returns"],
  },
  {
    title: "Quick Links",
    links: ["Trade account", "Sourcing tools", "Technical resources"],
  },
  {
    title: "Our Company",
    links: ["About", "Careers", "Legal and privacy"],
  },
];

export function SiteFooter({
  columns = defaultColumns,
  footnote = "Demo storefront built from reusable components inspired by enterprise electronics distributor patterns.",
}) {
  return (
    <footer className="fn-footer">
      {columns.map((column) => (
        <div key={column.title}>
          <h4>{column.title}</h4>
          {(column.links || []).map((label) => (
            <a href="/" key={`${column.title}-${label}`}>{label}</a>
          ))}
        </div>
      ))}
      <p className="fn-footnote">{footnote}</p>
    </footer>
  );
}
