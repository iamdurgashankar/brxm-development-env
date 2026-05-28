# Top Tech Voices Replica Setup Guide

This guide explains how to run and use the new Top Tech Voices campaign components in this project.

## What was added

- Campaign data model: `src/components/top-tech-voice/topTechVoicesData.js`
- Campaign page components: `src/components/top-tech-voice/TopTechVoicesPage.jsx`
- Campaign styling: `src/components/top-tech-voice/TopTechVoices.css`
- BRXM wrapper mapping: `src/components/top-tech-voice/BrxTopTechVoicesPage.jsx`
- BRXM component registration: `src/App.js`

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Open the app at:

- http://localhost:3000

## BRXM integration setup

The app uses `BrPage` mapping in `src/App.js`.

Mapped names for this campaign component:

- `TopTechVoicesPage`
- `top-tech-voices-page`

To render this from BRXM:

1. In your BRXM page, add a component using one of the names above.
2. Place it in the desired container on your page.
3. Publish and open the page route in this React app.

## Content customization

Edit `src/components/top-tech-voice/topTechVoicesData.js` for:

- Hero copy and CTA
- Host and speaker cards
- Episode timeline
- Featured episode block
- Platform links
- Manufacturer logos
- Product cards

## Styling customization

Edit `src/components/top-tech-voice/TopTechVoices.css`.

The file is sectioned by class groups:

- `.ttv-hero`
- `.ttv-host`, `.ttv-speaker-grid`
- `.ttv-topics`, `.ttv-topic-grid`
- `.ttv-featured`
- `.ttv-platforms`
- `.ttv-manufacturers`, `.ttv-logo-grid`
- `.ttv-products`, `.ttv-product-grid`

## Notes

- This implementation closely mirrors the structure and content style of the target page while keeping the code modular and reusable.
- Images are remote URLs from the Farnell public site.
- External links open in a new tab for campaign-style behavior.
