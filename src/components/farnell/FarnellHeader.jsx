import { primaryNav, utilityLinks } from "./data";

export function FarnellHeader({
  countryLabel = "United Kingdom",
  vatLabel = "Ex VAT",
  utilityItems = utilityLinks,
  navItems = primaryNav,
  title = "Farnell-style Components",
  subtitle = "Industrial and electronic sourcing layout",
  searchPlaceholder = "Search by part number, keyword, manufacturer",
}) {
  return (
    <header className="fn-header">
      <div className="fn-utility-bar">
        <p>{countryLabel} | {vatLabel}</p>
        <ul>
          {utilityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="fn-main-bar">
        <div className="fn-logo-block">
          <span className="fn-logo-mark">F</span>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className="fn-search-wrap">
          <input
            type="search"
            placeholder={searchPlaceholder}
            aria-label="Search products"
          />
          <button type="button">Search</button>
        </div>

        <div className="fn-actions">
          <button type="button">Favourites</button>
          <button type="button">Basket (0)</button>
        </div>
      </div>

      <nav className="fn-nav">
        {navItems.map((item) => (
          <a href="/" key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
