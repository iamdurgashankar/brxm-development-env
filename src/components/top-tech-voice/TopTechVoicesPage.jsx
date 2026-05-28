import {
  episodeTopics,
  featuredEpisode,
  manufacturersLogos,
  platformLinks,
  topProducts,
  topTechHero,
  topTechHost,
  topTechSpeakers,
} from "./topTechVoicesData";
import "./TopTechVoices.css";

function TopTechHero({ hero }) {
  return (
    <section className="ttv-hero" aria-label="Top Tech Voices hero">
      <p className="ttv-eyebrow">{hero.eyebrow}</p>
      <h1>{hero.title}</h1>
      <h2>{hero.subtitle}</h2>
      <p className="ttv-copy">{hero.description}</p>
      <a className="ttv-btn" href={hero.ctaHref} target="_blank" rel="noreferrer">
        {hero.ctaLabel}
      </a>
    </section>
  );
}

function HostSpotlight({ host, speakers }) {
  return (
    <section className="ttv-host" aria-label="Host and speakers">
      <article className="ttv-host-card">
        <img src={host.image} alt={host.name} loading="lazy" />
        <div>
          <h3>{host.name}</h3>
          <p className="ttv-meta">{host.title}</p>
          <p>{host.bio}</p>
        </div>
      </article>

      <div className="ttv-speaker-grid">
        {speakers.map((speaker) => (
          <article key={speaker.name} className="ttv-speaker-card">
            <img src={speaker.image} alt={speaker.name} loading="lazy" />
            <h4>{speaker.name}</h4>
            <p>{speaker.topic}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EpisodeTimeline({ topics }) {
  return (
    <section className="ttv-topics" aria-label="Episode topics">
      <header className="ttv-section-head">
        <h3>Episode topics</h3>
        <p>Season 2 timeline and availability</p>
      </header>
      <div className="ttv-topic-grid">
        {topics.map((topic) => (
          <article key={topic.number} className="ttv-topic-card">
            <p className="ttv-topic-number">{topic.number}</p>
            <h4>{topic.title}</h4>
            {topic.availability ? <span>{topic.availability}</span> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedEpisode({ episode }) {
  return (
    <section className="ttv-featured" aria-label="Featured episode">
      <header className="ttv-section-head">
        <h3>{episode.title}</h3>
        <p>{episode.guest}</p>
      </header>
      <p className="ttv-copy">{episode.bio}</p>
      <h4>In this episode you will learn about</h4>
      <ul>
        {episode.learnPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <a href={episode.transcriptHref} target="_blank" rel="noreferrer">
        Get an overview of the topics covered within the interview
      </a>
    </section>
  );
}

function PlatformLinks({ links }) {
  return (
    <section className="ttv-platforms" aria-label="Streaming channels">
      <h3>Our Top Tech Voices series is available on</h3>
      <div className="ttv-pill-row">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function ManufacturerGrid({ logos }) {
  return (
    <section className="ttv-manufacturers" aria-label="Manufacturers">
      <header className="ttv-section-head">
        <h3>Discover our top tech manufacturers</h3>
        <p>Together with our top manufacturers, we prepared special offers for each episode.</p>
      </header>
      <div className="ttv-logo-grid">
        {logos.map((item) => (
          <article key={item.name} className="ttv-logo-card" title={item.name}>
            <img src={item.image} alt={item.name} loading="lazy" />
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase({ items }) {
  return (
    <section className="ttv-products" aria-label="Top products">
      <header className="ttv-section-head">
        <h3>Discover top products</h3>
        <p>Products highlighted across season episodes</p>
      </header>
      <div className="ttv-product-grid">
        {items.map((item) => (
          <article key={`${item.episode}-${item.name}`} className="ttv-product-card">
            <img className="ttv-product-image" src={item.image} alt={item.name} loading="lazy" />
            <div className="ttv-product-body">
              <p className="ttv-topic-number">{item.episode}</p>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <img className="ttv-brand-logo" src={item.logo} alt="manufacturer logo" loading="lazy" />
              <a href={item.href} target="_blank" rel="noreferrer">Learn more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TopTechVoicesPage() {
  return (
    <div className="ttv-page">
      <TopTechHero hero={topTechHero} />
      <HostSpotlight host={topTechHost} speakers={topTechSpeakers} />
      <EpisodeTimeline topics={episodeTopics} />
      <FeaturedEpisode episode={featuredEpisode} />
      <PlatformLinks links={platformLinks} />
      <ManufacturerGrid logos={manufacturersLogos} />
      <ProductShowcase items={topProducts} />
    </div>
  );
}
