```markdown
# 💧 CleanFlow of Ohio | Official Website

> A high-performance, mobile-first static marketing website designed for seamless gutter installation, maintenance, and exterior home services in the greater Miami Valley.

---

## 🌟 Project Overview

This repository contains the custom-built, SEO-optimized frontend for **CleanFlow of Ohio**. Engineered without the bloat of heavy frameworks, this site guarantees lightning-fast load times, perfect mobile responsiveness, and a high-converting user experience. It acts as a dedicated funnel for both routine maintenance and high-ticket installation services.

## ✨ Core Features

* **Lightning Fast Performance:** Built purely with semantic HTML5, modern CSS3, and Vanilla JavaScript.
* **SEO Dominant:** Features fully integrated Schema.org JSON-LD markup, deeply localized keyword targeting for the Miami Valley, and a perfectly structured `sitemap.xml`.
* **Interactive UI/UX:** Includes a completely custom, animated radial overlay menu to make mobile navigation smooth and engaging.
* **Conversion-Driven Tools:** Integrated dynamic cost calculators, floating Call-To-Action (CTA) buttons, and expanding accordion FAQs to build customer trust.
* **Zero-Friction Hosting:** Configured specifically for edge-network deployment via Vercel.

---

## 📂 Site Architecture

```text
cleanflow-ohio/
├── assets/
│   ├── mascot.png                       # Brand mascot / logo
│   ├── gutter-install-before-after.jpg  # Installation social proof
│   └── og-image.jpg                     # Social media sharing graphic
├── services/
│   ├── dryer-vent-cleaning.html         # Specialized service funnel
│   └── gutter-installation.html         # High-ticket installation funnel
├── script.js          # Core logic (Nav, radial menu, calculator, animations)
├── style.css          # Global stylesheet and responsive media queries
├── index.html         # Primary landing page
├── services.html      # General services overview
├── about.html         # Trust-building and company history page
├── sitemap.xml        # Search engine indexing map
├── robots.txt         # Crawler directives
└── vercel.json        # Advanced routing and caching configurations

```
## 🚀 Deployment & Local Setup
This project is built to be strictly static, requiring no backend databases or complex build steps.
**To run locally for testing:**
 1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/yourusername/cleanflow-ohio.git](https://github.com/yourusername/cleanflow-ohio.git)
   
   ```
 2. Open the folder and simply double-click index.html to view it in your browser.
**To deploy live to Vercel:**
 1. Log into your Vercel dashboard.
 2. Click **Add New Project** and import this GitHub repository.
 3. Leave all build settings as their default values.
 4. Click **Deploy**. Vercel will automatically read the vercel.json file and set up your clean URL routing and SSL certificates.
## 🔐 Security & Infrastructure
 * **Frontend Only:** Completely static architecture eliminates traditional database vulnerabilities.
 * **Edge Caching:** vercel.json strictly controls browser caching for immediate load times.
 * **Always Encrypted:** Forced HTTPS and SSL management handled natively via Vercel.
## 📄 License
This software is distributed under the MIT License. See the LICENSE file in the repository for more information.
```

```
