# 💧 CleanFlow of Ohio | Official Website

A high-performance, mobile-first static marketing website for CleanFlow of Ohio, serving the greater Miami Valley with gutter cleaning, gutter protection, seamless gutter installation, dryer vent cleaning, and drainage-related exterior services.

---

## Project Overview

This repository contains the custom-built static frontend for **CleanFlow of Ohio**. The site is built with semantic HTML, CSS, and vanilla JavaScript for fast loading, mobile responsiveness, and straightforward deployment through Vercel.

The website is designed to support local SEO and lead generation for high-value exterior services, including gutter cleaning, gutter guards, seamless gutter installation, dryer vent cleaning, underground downspout extensions, and drainage solutions.

---

## Core Features

- **Static, fast-loading website:** Built without a heavy frontend framework.
- **Mobile-first design:** Responsive layout for phones, tablets, and desktops.
- **Local SEO structure:** Service pages, localized page titles, meta descriptions, structured data, sitemap, and clean routing.
- **Conversion-focused layout:** Phone call buttons, quote form, floating CTA, cost calculator, service sections, and FAQs.
- **Service-focused content:** Supports gutter cleaning, gutter guards, gutter installation, dryer vent cleaning, and drainage-related services.
- **Vercel-ready deployment:** Uses `vercel.json` for clean URL routing, redirects, and caching headers.

---

## Site Architecture

```text
cleanflow-ohio/
├── assets/
│   ├── mascot.png
│   ├── gutter-install-before-after.jpg
│   └── og-image.jpg
├── services/
│   ├── dryer-vent-cleaning.html
│   └── gutter-installation.html
├── index.html
├── services.html
├── about.html
├── script.js
├── style.css
├── sitemap.xml
├── robots.txt
├── vercel.json
└── LICENSE
```

---

## Current Pages

```text
/
├── Home page
/services
├── Services overview
/about
├── About CleanFlow of Ohio
/services/dryer-vent-cleaning
├── Dryer vent cleaning service page
/services/gutter-installation
└── Seamless gutter installation service page
```

---

## Local Testing

This is a static website and does not require a backend, database, or build system.

To test locally:

```bash
# Open the project folder, then open index.html in a browser.
```

Or use a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## Deployment

This project is configured for deployment on Vercel.

Vercel uses `vercel.json` for:

- Clean URL rewrites
- Non-www to www redirect
- Static asset caching
- HTML revalidation behavior

---

## Important Business Notes

- Business name: **CleanFlow of Ohio**
- Website: `https://www.cleanflowohio.com`
- Phone: `937-478-0689`
- Email: `cleanflowofohio@gmail.com`
- Service area: Greater Miami Valley, including Dayton, Kettering, Centerville, Washington Township, Oakwood, Beavercreek, and surrounding communities.

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