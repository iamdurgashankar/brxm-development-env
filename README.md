# BRXM Development Environment

This repository contains a React application built with Bloomreach SDK components for the BRXM development environment. It includes the Farnell-style commerce experience, a Top Tech Voices experience, and a mock API fallback so the app can still render when the Bloomreach delivery endpoint is unavailable.

## What this project does

- Renders Bloomreach pages through `@bloomreach/react-sdk`.
- Maps Bloomreach component names to local React implementations in `src/components`.
- Supports a Farnell experience with reusable blocks such as the header, hero, product section, trust strip, and footer.
- Includes a Top Tech Voices page and preview content for that experience.
- Falls back to mock data when the configured Bloomreach endpoint cannot be reached.

## Prerequisites

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) in your browser.

### `npm test`

Runs the test suite in watch mode.

### `npm run build`

Creates a production build in the `build` folder.

### `npm run eject`

Removes the Create React App abstraction and copies the build configuration into the project. This is permanent.

## Project Structure

- `src/App.js` bootstraps the Bloomreach page renderer and mock API fallback.
- `src/components/farnell` contains the Farnell page sections and shared BRXM mappings.
- `src/components/top-tech-voice` contains the Top Tech Voices page and preview assets.
- `src/services/mockApi.js` provides the fallback API client used when the live endpoint is not reachable.
- `public/top-tech-voices-preview.html` provides a preview page for the Top Tech Voices experience.

## Configuration Notes

The Bloomreach endpoint is configured in `src/App.js`:

```text
https://developers.bloomreach.io/delivery/site/v1/channels/brxm-development-env/pages
```

If you point this project at another channel, update the endpoint and any related component mappings in `src/App.js`.

## Usage

1. Install dependencies with `npm install`.
2. Start the app with `npm start`.
3. Open the local site and browse to the path published in Bloomreach.
4. If the live endpoint is not available, the app automatically shows the mock API fallback banner.

## Build Output

The production build is generated in `build/`. That directory is ignored by default because it is a generated artifact.
