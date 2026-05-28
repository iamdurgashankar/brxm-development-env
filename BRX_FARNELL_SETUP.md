# Bloomreach Setup Guide (Easy Step By Step)

This guide helps you make your Farnell-style homepage fully editable from Bloomreach.

## Before You Start

1. Your frontend is already ready for dynamic rendering.
2. Mapping is configured in src/App.js.
3. You only need to create content types, documents, and page components in Bloomreach.

## Step 1: Create 8 Document Types in Content App

Open Content app -> Content Types -> Create new type.

Create these document types exactly with these fields.

### 1. FarnellHeaderDocument

- title (String)
- subtitle (String)
- countryLabel (String)
- vatLabel (String)
- searchPlaceholder (String)
- utilityLinks (String, multiple)
- navLinks (String, multiple)

Example:

- utilityLinks: Order history, Track your order, My account, Help
- navLinks: Semiconductors, Passives, Interconnect, Power, Tools

### 2. PromoTickerDocument

- items (String, multiple)

Each item format:

- Title|Subtitle|CTA Label

Example rows:

- Top Tech Voices|Biohacking and human enhancement|Explore
- AI for Test|Faster validation workflows|Learn more

### 3. HeroPanelDocument

- kicker (String)
- heading (String)
- description (String)
- primaryCtaLabel (String)
- secondaryCtaLabel (String)
- cardKicker (String)
- cardTitle (String)
- cardBullets (String, multiple)

### 4. CategoryRailDocument

- items (String, multiple)

Each item format:

- Title|Detail

Example rows:

- Semiconductors|MCUs, analog, power ICs
- Interconnect|Connectors and cable systems

### 5. ProductSectionDocument

- title (String)
- subtitle (String)
- items (String, multiple)

Each item format:

- Brand|Product Name|chip1,chip2,chip3

Example row:

- Analog Devices|Smart high-efficiency digital audio amplifier|Audio,Low Power,IoT

Create 3 separate documents using this type:

- New Products
- Great Deals
- Featured Products

### 6. ManufacturerCloudDocument

- title (String)
- subtitle (String)
- items (String, multiple)

Example items:

- Analog Devices
- NXP
- Infineon
- Weller

### 7. TrustStripDocument

- items (String, multiple)

Each item format:

- Value|Label

Example rows:

- 1M+|Products available online
- 3,000|New products each month

### 8. FooterDocument

- columns (String, multiple)
- footnote (String)

Each column format:

- Column Title|link1,link2,link3

Example rows:

- Customer Service|Contact us,Delivery options,Returns
- Quick Links|Trade account,Sourcing tools,Technical resources

## Step 2: Create 8 Site Components in Site Development

Open Site Development -> Components -> Create component.

For every component below:

1. Set ctype exactly as listed.
2. Add property named document.
3. Property type must be content path.

Create these components:

1. Farnell Header -> ctype: FarnellHeader
2. Promo Ticker -> ctype: PromoTicker
3. Hero Panel -> ctype: HeroPanel
4. Category Rail -> ctype: CategoryRail
5. Product Section -> ctype: ProductSection
6. Manufacturer Cloud -> ctype: ManufacturerCloud
7. Trust Strip -> ctype: TrustStrip
8. Site Footer -> ctype: SiteFooter

Optional for Product Section component:

- Add optional string params: title, subtitle

## Step 3: Create Documents in Content Tree

Create one document for each section:

1. Header document (FarnellHeaderDocument)
2. Promo ticker document (PromoTickerDocument)
3. Hero document (HeroPanelDocument)
4. Category document (CategoryRailDocument)
5. New products document (ProductSectionDocument)
6. Great deals document (ProductSectionDocument)
7. Featured products document (ProductSectionDocument)
8. Manufacturer document (ManufacturerCloudDocument)
9. Trust document (TrustStripDocument)
10. Footer document (FooterDocument)

## Step 4: Build the Page in Experience Manager

Add components to page in this order:

1. Farnell Header
2. Promo Ticker
3. Hero Panel
4. Category Rail
5. Product Section (set document = New Products doc)
6. Product Section (set document = Great Deals doc)
7. Product Section (set document = Featured Products doc)
8. Manufacturer Cloud
9. Trust Strip
10. Site Footer

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

- FarnellHeader
- PromoTicker
- HeroPanel
- CategoryRail
- ProductSection
- ManufacturerCloud
- TrustStrip
- SiteFooter

## Product Section Ready Content (Copy Paste)

Use this content for the 3 ProductSection documents referenced in Step 4.

### New Products document

- title: New Products
- subtitle: Showcasing the latest technology
- items (add each line as one value in the multiple field):
	- Analog Devices|MAX98366A smart digital audio amplifier for compact edge devices|Audio,Low Power,IoT
	- Littelfuse|Bidirectional ESD protection device in SOD523 package|Protection,ESD,Automotive
	- APEM|Assist wheel drive evaluation kit for HMI testing|Evaluation,Control,Industrial
	- Same Sky|Fine-pitch FPC and FFC connector family for dense PCB designs|Connector,Board-to-board,Reliability
	- NXP|TJA1101 100BASE-T1 PHY for automotive ethernet nodes|Automotive,Ethernet,PHY
	- Raspberry Pi|Industrial compute module platform for embedded systems|Compute,Embedded,Industrial

### Great Deals document

- title: Great Deals
- subtitle: Showcasing our best offers and savings
- items (add each line as one value in the multiple field):
	- Tektronix|Lab upgrade bundle with software and probe discounts|Savings,Lab,Instruments
	- Weller|Rework station package for electronics assembly teams|Soldering,Bundle,Workshop
	- NI-Emerson|Measurement workflow bundle for test automation teams|Offer,Test,Automation
	- Keysight|Trade-in promotion for benchtop oscilloscope upgrades|Trade-in,Scope,Lab
	- Fluke|Calibration tool kit with limited-time discount pricing|Calibration,Maintenance,Offer
	- Phoenix Contact|DIN rail starter pack for panel build projects|Panel,Industrial,Starter

### Featured Products document

- title: Featured Products
- subtitle: Hand picked by our suppliers
- items (add each line as one value in the multiple field):
	- Nordic Semiconductor|nPM1304 ultra-efficient PMIC for wearable and IoT platforms|Power,Battery,Wearable
	- Infineon|High-voltage MOSFET family for efficient motor drives|MOSFET,Drive,Efficiency
	- Mean Well|XDR-E slim DIN rail power supply range for control cabinets|Power,DIN,Industrial
	- STMicroelectronics|STM32 MCU lineup for secure connected applications|MCU,Security,Connectivity
	- Microchip|dsPIC digital signal controllers for real-time motor control|DSP,Motor,Control
	- TE Connectivity|High-reliability connector system for harsh environments|Interconnect,Rugged,Reliability

Quick format rule for each items row:

- Brand|Product Name|chip1,chip2,chip3
