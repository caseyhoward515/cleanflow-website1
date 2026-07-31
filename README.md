# 💧 CleanFlow of Ohio | Official Website

A high-performance, mobile-first static marketing website for CleanFlow of Ohio,
serving the greater Miami Valley with gutter cleaning, gutter protection, seamless
gutter installation, dryer vent cleaning, and drainage-related exterior services.

---

## Project Overview

This repository contains the custom-built static frontend for **CleanFlow of Ohio**.
The site is semantic HTML, one shared stylesheet, and one shared vanilla-JavaScript
file. There is no framework, no build step, and no package manifest — the files in
this repository are the files that ship.

That means there are **no local package dependencies to install**, but the site is
**not dependency-free at runtime**. It relies on several third-party services that
must be reachable in the browser; see [Runtime dependencies](#runtime-dependencies).

The site is designed to support local SEO and lead generation for high-value
exterior services, including gutter cleaning, gutter guards, seamless gutter
installation, dryer vent cleaning, underground downspout extensions, and drainage
solutions.

---

## Core Features

- **Static, fast-loading website:** No frontend framework, no bundler, and nothing
  to install locally.
- **Mobile-first design:** Responsive layout for phones, tablets, and desktops.
- **Accessible interaction:** Semantic controls, keyboard-operable menu, service
  wheel, accordions and seasonal tabs, skip links, and `prefers-reduced-motion`
  support throughout.
- **Local SEO structure:** Per-page titles, meta descriptions, canonical URLs,
  Open Graph and Twitter metadata, JSON-LD structured data, sitemap, and clean routing.
- **Conversion-focused layout:** Quote form, the CleanFlow Checkup, a gutter-cleaning
  cost calculator, a floating phone CTA, a floating service wheel, and FAQs.
- **Vercel-ready deployment:** `vercel.json` supplies clean-URL rewrites, the
  non-www redirect, and caching headers.

---

## Site Architecture

```text
cleanflow-website1/
├── assets/
│   ├── brand/
│   │   ├── cleanflow-mascot.png
│   │   ├── hero-pattern.svg
│   │   └── og-image.source.html
│   ├── og-image.png
│   └── README.md
├── services/
│   ├── gutter-cleaning.html
│   ├── gutter-installation.html
│   └── dryer-vent-cleaning.html
├── index.html
├── services.html
├── about.html
├── script.js
├── style.css
├── sitemap.xml
├── robots.txt
├── vercel.json
├── README.md
└── LICENSE
```

All imagery is tracked locally under `assets/`. The site loads **no externally
hosted images**. Where an authentic CleanFlow photograph is not available, the
page uses a branded media panel (`.brand-media`) rather than a stand-in
photograph, so nothing on the site implies a job result that did not happen.

Every asset and its ownership or licensing basis is recorded in
[`assets/README.md`](assets/README.md).

---

## Current Pages and Routes

| Page | File | Clean URL | Vercel rewrite |
| --- | --- | --- | --- |
| Home | `index.html` | `/` | n/a (root) |
| Services overview | `services.html` | `/services` | yes |
| About | `about.html` | `/about` | yes |
| Gutter cleaning | `services/gutter-cleaning.html` | `/services/gutter-cleaning` | yes |
| Seamless gutter installation | `services/gutter-installation.html` | `/services/gutter-installation` | yes |
| Dryer vent cleaning | `services/dryer-vent-cleaning.html` | `/services/dryer-vent-cleaning` | yes |

All six routes appear in `sitemap.xml`, and each page's canonical URL is the clean
URL above. Internal links throughout the site use these clean paths.

Gutter repairs, gutter guards, and underground drainage are currently sections on
`/services` (`#gutter-repairs-service`, `#gutter-protection-service`,
`#underground-drainage-service`) rather than dedicated pages.

---

## Shared Front-End Behaviour

`script.js` is a single IIFE. Every initialiser guards for missing DOM, so each
page only wires up the components it actually contains.

| Component | Notes |
| --- | --- |
| Service wheel | A complete six-service static fallback ships in every page. JavaScript enhances that markup and only fills the overlay if a page shipped it empty. Exactly one floating trigger is guaranteed. |
| Mobile navigation | Toggle button with `aria-expanded` / `aria-controls`, Escape to close, and focus moved into and restored out of the menu. |
| Cost calculator | Gutter-cleaning estimate range. Inputs: linear feet, stories, debris level, access conditions. Produces a range, never a binding quote. |
| CleanFlow Checkup | Guided questionnaire that assembles a summary, preselects the quote form's service, and posts to Formspree as `multipart/form-data` with optional photos. Photos are validated client-side for type, per-file size, and total size before submit. |
| Review carousel | Auto-advancing with pause control, dot navigation with `aria-current`, and reduced-motion handling. |
| Accordions | Semantic buttons with `aria-expanded` and `aria-controls`. |
| Seasonal tabs | Full `tablist` / `tab` / `tabpanel` pattern with arrow, Home, and End key navigation. |
| Reduced motion | When `prefers-reduced-motion: reduce` is set, infinite pulses stop, transitions are neutralised, and AOS attributes are stripped so content stays visible without animating. |

---

## Runtime dependencies

No packages are installed to build or serve this site, but the following external
services are loaded at runtime and are real dependencies. If one is unreachable,
the corresponding part of the page degrades.

| Dependency | Loaded from | Used for | If unavailable |
| --- | --- | --- | --- |
| Poppins | `fonts.googleapis.com` / `fonts.gstatic.com` | Site typeface | Falls back to the system sans-serif |
| Font Awesome Free 6.4.0 | `cdn.jsdelivr.net` | All icons, including the CSS pseudo-element glyphs | Icons do not render |
| AOS 2.3.4 | `cdn.jsdelivr.net` | Scroll-reveal animations | Handled: `initAOS` strips `data-aos` when reduced motion is requested, and the reduced-motion stylesheet keeps `[data-aos]` content visible |
| Formspree | `formspree.io` | Quote form and CleanFlow Checkup submissions | Form submissions fail; the phone and text fallback is always shown |
| — | — | Imagery is **not** an external dependency. Every image is tracked in `assets/`, or drawn with CSS. See [`assets/README.md`](assets/README.md). | — |

Both CDN dependencies are version-pinned. Icons still come from the Font
Awesome CDN; bringing them in-repo is not yet done. **Imagery is already
local** — the site references no external image host.

There is no analytics, tag manager, or tracking script on the site.

---

## Local Testing

This is a static website with no backend, database, or build system.

Serve the folder over HTTP so root-relative links such as `/services` behave the
way they do in production:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Note that clean URLs (`/services`, `/services/gutter-cleaning`) are produced by
Vercel rewrites. A plain local static server will not rewrite them — use a Vercel
preview deployment to test routing end to end.

Static checks used on this project:

```bash
node --check script.js     # JavaScript syntax
python3 -c "import json"   # JSON-LD blocks are parsed in CI-style scripts
```

---

## Deployment

This project is configured for deployment on Vercel. `vercel.json` provides:

- Clean-URL rewrites for `/services`, `/about`, and the three service pages
- A permanent non-www to www redirect
- Long-lived caching for static image formats
- `must-revalidate` for HTML

---

## Important Business Notes

- Business name: **CleanFlow of Ohio**
- Website: `https://www.cleanflowohio.com`
- Phone: `937-478-0689`
- Email: `cleanflowofohio@gmail.com`
- Established: 2024, backed by more than 20 years of hands-on industry experience
- Availability: call or text 24 hours a day, 7 days a week to request service or
  schedule an appointment. Field service is completed during scheduled appointment
  times.
- Credentials: fully insured and bonded
- Service area: greater Miami Valley, including Dayton, Kettering, Centerville,
  Washington Township, Oakwood, Beavercreek, and surrounding communities

### Published pricing and warranty facts

- Gutter cleaning starts at **$150**. A typical smaller one-story home is generally
  around **$185**; a typical two-story home is generally around **$235**. Final
  pricing depends on home size, height, gutter length, access, debris level, system
  condition, and safety.
- Gutter guards carry a **lifetime warranty**.
- New gutter and downspout installations carry a **one-year CleanFlow installation
  workmanship warranty**, separate from any manufacturer product warranty.

---

## Services Represented

- Gutter cleaning
- Gutter repairs
- Gutter guard installation
- Seamless gutter installation
- Dryer vent cleaning
- Underground downspout extensions
- Drainage solutions for pooling water and foundation runoff

---

## License

This software is distributed under the MIT License. See the `LICENSE` file for details.
