import React from 'react';
import './TopTechVoices.css';
import {
  topTechHero,
  topTechHost,
  topTechSpeakers,
  episodeTopics,
  featuredEpisode,
  platformLinks,
  manufacturersLogos,
} from './topTechVoicesData';

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

function ManufacturerLogos({ logos }) {
  return (
    <section className="ttv-manufacturers" aria-label="Partner manufacturers">
      <h3>In partnership with</h3>
      <div className="ttv-logo-grid">
        {logos.map((logo) => (
          <div key={logo.name} className="ttv-logo-item">
            <img src={logo.image} alt={logo.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function TopTechVoicesPreview() {
  return (
    <div className="ttv-page">
      <TopTechHero hero={topTechHero} />
      <HostSpotlight host={topTechHost} speakers={topTechSpeakers} />
      <EpisodeTimeline topics={episodeTopics} />
      <FeaturedEpisode episode={featuredEpisode} />
      <PlatformLinks links={platformLinks} />
      <ManufacturerLogos logos={manufacturersLogos} />
    </div>
  );
}
