# Top Tech Voices Page Bloomreach Setup Guide (Step By Step)

This guide helps you make your Top Tech Voices page fully editable from Bloomreach.

## Before You Start

1. Your frontend is already ready for dynamic rendering.
2. Mapping is configured in src/App.js.
3. You only need to create content types, documents, and page components in Bloomreach.

## Step 1: Create 7 Document Types in Content App

Open Content app -> Content Types -> Create new type.

Create these document types exactly with these fields.

### 1. TopTechHeroDocument

- eyebrow (String)
- title (String)
- subtitle (String)
- description (String)
- ctaLabel (String)
- ctaHref (String)

Example:
- eyebrow: Building the technology of tomorrow
- title: Our award-winning podcast returns for Season 2
- subtitle: Hear insights from top experts on how technology serves people
- description: For the next three months, join a six-episode journey exploring people-first technology, from biohacking and sustainable innovation to smarter cities and work-life balance.
- ctaLabel: Watch on YouTube
- ctaHref: https://www.youtube.com/user/element14

### 2. HostSpotlightDocument

- hostName (String)
- hostTitle (String)
- hostBio (String)
- hostImage (String) - URL to host image
- speakers (String, multiple)

Each speaker format:
- Name|Topic|Image URL

Example rows:
- Dr Jack Lewis|Mental Health and Technology|https://uk.farnell.com/.../ttv-speaker-01.jpg
- Fionn Ferreira|Sustainable Tech: Innovations for a Greener Planet|https://uk.farnell.com/.../ttv-speaker-02.jpg
- Prof. Anil Seth|Neuro-Tech and Brain Interfaces|https://uk.farnell.com/.../ttv-speaker-03.jpg

### 3. EpisodeTopicsDocument

- sectionTitle (String)
- sectionSubtitle (String)
- topics (String, multiple)

Each topic format:
- Number|Title|Availability (availability is optional)

Example rows:
- 01|Mental Health and Technology|
- 02|Sustainable Tech|
- 03|Neuro-Tech and Brain Interfaces|
- 04|Biohacking and Human Enhancement|
- 05|Work-Tech Life Balance|Available from 28 Apr 2026
- 06|Smart Cities and Urban Tech|Available from 19 May 2026

### 4. FeaturedEpisodeDocument

- title (String)
- guest (String)
- bio (String)
- learnPoints (String, multiple)
- transcriptHref (String)

Example learn points:
- How music and sound can shape emotional state and performance.
- Why healthspan still lags behind lifespan despite medical progress.
- Why behavior change tools fail without strong accountability.
- How to bridge the gap between wellness data and real habits.

### 5. PlatformLinksDocument

- items (String, multiple)

Each item format:
- Label|URL

Example rows:
- YouTube|https://www.youtube.com/user/element14
- Spotify|https://open.spotify.com/show/2nuPIADj0I483miQZfqQgV
- Instagram|https://www.instagram.com/farnell_electronics/
- LinkedIn|https://www.linkedin.com/company/farnell-electronics
- Facebook|https://www.facebook.com/FarnellElectronics
- X|https://x.com/Farnell_Avnet

### 6. ManufacturerLogosDocument

- items (String, multiple)

Each item format:
- Name|Image URL

Example rows:
- Analog Devices|https://uk.farnell.com/.../analog-devices-l.gif
- Avnet|https://uk.farnell.com/.../avnet-l.gif
- Micron|https://uk.farnell.com/.../micron-l.gif
- Murata|https://uk.farnell.com/.../murata-l.gif
- NI|https://uk.farnell.com/.../ni-l.gif
- Nordic Semiconductor|https://uk.farnell.com/.../nordic-l.gif

### 7. PageHeaderDocument

- title (String)
- description (String)

Example:
- title: Top Tech Voices
- description: An award-winning podcast series featuring top technology experts

## Step 2: Create 6 Site Components in Site Development

Open Site Development -> Components -> Create component.

For every component below:

1. Set ctype exactly as listed.
2. Add property named document.
3. Property type must be content path.

Create these components:

1. Top Tech Hero -> ctype: TopTechHero
2. Host Spotlight -> ctype: HostSpotlight
3. Episode Topics -> ctype: EpisodeTopics
4. Featured Episode -> ctype: FeaturedEpisode
5. Platform Links -> ctype: PlatformLinks
6. Manufacturer Logos -> ctype: ManufacturerLogos

## Step 3: Create Documents in Content Tree

Create one document for each section:

1. Page Header document (PageHeaderDocument)
2. Hero document (TopTechHeroDocument)
3. Host Spotlight document (HostSpotlightDocument)
4. Episode Topics document (EpisodeTopicsDocument)
5. Featured Episode document (FeaturedEpisodeDocument)
6. Platform Links document (PlatformLinksDocument)
7. Manufacturer Logos document (ManufacturerLogosDocument)

## Step 4: Build the Page in Experience Manager

Add components to page in this order:

1. Top Tech Hero
2. Host Spotlight
3. Episode Topics
4. Featured Episode
5. Platform Links
6. Manufacturer Logos

For each component instance, set document field to its matching document.

## Step 5: Publish

1. Publish all created documents.
2. Publish page changes.
3. Refresh preview.

## Quick Troubleshooting

If section does not update:

1. Check ctype spelling matches exactly.
2. Check property name is exactly document.
3. Check document is selected in component editor.
4. Check document is published.
5. Check you edited the correct project and channel.

If you still see fallback demo content:

1. Re-open component and re-select document.
2. Republish the page.

## Exact Ctype Values (Copy Paste)

- TopTechHero
- HostSpotlight
- EpisodeTopics
- FeaturedEpisode
- PlatformLinks
- ManufacturerLogos

## Ready-to-Use Content (Copy Paste)

### Hero Document Values

- eyebrow: Building the technology of tomorrow
- title: Our award-winning podcast returns for Season 2
- subtitle: Hear insights from top experts on how technology serves people
- description: For the next three months, join a six-episode journey exploring people-first technology, from biohacking and sustainable innovation to smarter cities and work-life balance.
- ctaLabel: Watch on YouTube
- ctaHref: https://www.youtube.com/user/element14

### Host Spotlight Document Values

- hostName: Georgia Lewis Anderson
- hostTitle: AI consultant and prompt engineering specialist
- hostBio: Georgia Lewis Anderson is a leading AI consultant and prompt engineering specialist known for work with major technology companies and for translating complex technical topics into practical, human-centered insights.
- hostImage: https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/landing/top-tech-voices-season-two/ttv-speaker-carousel/ttv-speaker-01.jpg
- speakers (add each line as one value in the multiple field):
  - Dr Jack Lewis|Mental Health and Technology|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/landing/top-tech-voices-season-two/ttv-speaker-carousel/ttv-speaker-01.jpg
  - Fionn Ferreira|Sustainable Tech: Innovations for a Greener Planet|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/landing/top-tech-voices-season-two/ttv-speaker-carousel/ttv-speaker-02.jpg
  - Prof. Anil Seth|Neuro-Tech and Brain Interfaces|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/landing/top-tech-voices-season-two/ttv-speaker-carousel/ttv-speaker-03.jpg

### Episode Topics Document Values

- sectionTitle: Episode topics
- sectionSubtitle: Season 2 timeline and availability
- topics (add each line as one value in the multiple field):
  - 01|Mental Health and Technology|
  - 02|Sustainable Tech|
  - 03|Neuro-Tech and Brain Interfaces|
  - 04|Biohacking and Human Enhancement|
  - 05|Work-Tech Life Balance|Available from 28 Apr 2026
  - 06|Smart Cities and Urban Tech|Available from 19 May 2026

### Featured Episode Document Values

- title: Biohacking and Human Enhancement: Redefining Our Limits
- guest: Dr Julia Jones
- bio: Dr Julia Jones is a psychologist and neuroscientist with over 30 years of experience studying habits, behavior, and wellbeing, combining science and practical biohacking approaches for healthier, more resilient lifestyles.
- learnPoints (add each line as one value in the multiple field):
  - How music and sound can shape emotional state and performance.
  - Why healthspan still lags behind lifespan despite medical progress.
  - Why behavior change tools fail without strong accountability.
  - How to bridge the gap between wellness data and real habits.
- transcriptHref: https://uk.farnell.com/dr-julia-jones-biohacking-and-human-enhancement?ICID=I-CT-LP-TOPTECHVOICES-YOUTUBE_PODCAST-S2-EPS4-TRANSCRIPTION-WF4139832

### Platform Links Document Values

items (add each line as one value in the multiple field):
- YouTube|https://www.youtube.com/user/element14
- Spotify|https://open.spotify.com/show/2nuPIADj0I483miQZfqQgV
- Instagram|https://www.instagram.com/farnell_electronics/
- LinkedIn|https://www.linkedin.com/company/farnell-electronics
- Facebook|https://www.facebook.com/FarnellElectronics
- X|https://x.com/Farnell_Avnet

### Manufacturer Logos Document Values

items (add each line as one value in the multiple field):
- Analog Devices|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/analog-devices-l.gif
- Avnet|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/avnet-l.gif
- Micron|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/micron-l.gif
- Murata|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/murata-l.gif
- NI|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/ni-l.gif
- Nordic Semiconductor|https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/manufacturer_logos/large/nordic-l.gif

Quick format rule for Platform Links:
- Label|URL

Quick format rule for Manufacturer Logos:
- Name|Image URL

Quick format rule for Speakers:
- Name|Topic|Image URL

Quick format rule for Topics:
- Number|Title|Availability (optional)
