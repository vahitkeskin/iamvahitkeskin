# Copilot instructions — iamvahitkeskin

Short, actionable notes to help an AI agent be productive in this repo.

## Overview
- Static personal website (vanilla HTML/CSS/JS). No build pipeline. Serve the files or open `index.html` in a browser.
- Main runtime files: `index.html` → loads `data.js`, `language.js`, `weather.js`, `script.js`. Styling lives in `styles.css` and images under `images/`.

## Major components & why
- `data.js` — single source of truth for dynamic content (PROFILE: `skills` and `projects`). Editing user-visible content should usually start here.
- `language.js` — translation map `TRANSLATIONS` and language switcher logic. UI text uses `data-translate` attributes; a few elements are updated by ID in `updatePageLanguage()`.
- `weather.js` — location + weather stack. Uses free services (ipapi.co, wttr.in, open-meteo) with fallbacks. Expect network variability; errors are handled and logged to console.
- `script.js` — glue code: renders skills/projects from `PROFILE`, controls theme, visitor counter, contact form, mobile nav, animations and small UI utilities (`$`, `$$`, `el`). This file contains most runtime behaviour.

## Important data flows & runtime contracts
- PROFILE (global const in `data.js`) — shape: { skills: [...], projects: [...] }. `script.js` expects `PROFILE.skills` and `PROFILE.projects` arrays.
- TRANSLATIONS (in `language.js`) — languages keyed by short codes (`tr`, `en`, `de`, ...). Use `data-translate="key"` on elements to wire translations.
- Visitor counter (`VisitorCounter` in `script.js`) — uses external CountAPI endpoints, with fallback to `localStorage`. Session uniqueness: `sessionStorage.visitorSessionId`.
- Contact form submission: primary AJAX to FormSubmit; fallbacks to form POST and `mailto:`.

## Project-specific conventions
- Use `$` / `$$` for selectors and `el()` to create DOM nodes (see top of `script.js`).
- Animation hook: add `data-animate` to sections or elements to have `script.js` observe and add `.in` when visible.
- Persisted keys: `localStorage.selectedLanguage`, `localStorage.theme`, `localStorage.mobileMenuOpen`, `localStorage.userLocation`.
- IDs used across code: `#skillsGrid`, `#projectsGrid`, `#visitor-count`, `#refresh-counter`, `#language-switcher`, `#language-dropdown`, `#menuBtn`, `#navDrawer`, `#contact-form` — prefer using these existing IDs rather than creating parallel state.

## Integration & external dependencies
- No node/npm or other package system. External runtime dependencies are remote services and CDN assets (FontAwesome, Google Fonts, flagcdn images).
- Weather endpoints: `ipapi.co`, `wttr.in`, `open-meteo` — avoid frequent automated requests during development to prevent throttling.
- Visitor counter uses CountAPI endpoints — treat them as unreliable and prefer local testing (localStorage fallback).

## How to preview & quick tests
- Quick preview (HTTP server recommended for fetch requests):

```bash
# from repo root
python3 -m http.server 8000
# then open http://localhost:8000/
```

- Check browser console for fetch-related logs from `weather.js` and `VisitorCounter` when testing network fallbacks.

## Concrete edit examples
- Add a skill: open `data.js`, append an object to `PROFILE.skills`. `script.js` will auto-render entries into the skills grid (`#skillsGrid`).
- Add a translation: add the key to every language block inside `TRANSLATIONS` (in `language.js`) and add `data-translate="your.key"` to the target element in the HTML.
- Add a project: append an item to `PROFILE.projects` with fields `name`, `description`, `tags`, `link`, `image`, and optional boolean `featured`.

## Safety / gotchas
- Many features rely on free 3rd-party endpoints that may rate-limit or return different schemas; preserve existing fallback logic when modifying `weather.js` or `VisitorCounter`.
- Avoid renaming the global names `PROFILE`, `TRANSLATIONS`, or the helper functions `$`, `$$`, `el()` unless you update all call sites.
- Tests: there are no automated tests in this repo. Use manual browser checks and console logs.

If anything important is missing or you'd like the file to include a small examples section (e.g., a sample `PROFILE.skills` edit snippet), tell me which examples you want and I will add them.
