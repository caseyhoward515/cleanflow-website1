# Codebase Export

## Repository Snapshot Note

- Branch: jules-693105127557205324-bef49cc6
- Timestamp: 2026-04-13 00:40:24 UTC
- This is an export of the currently attached repository state.
- Total files discovered: 12
- Total files inlined: 12
- Total files excluded: 0

## File Manifest

```text
INCLUDED  /LICENSE
INCLUDED  /README.md
INCLUDED  /about.html
INCLUDED  /index.html
INCLUDED  /robots.txt
INCLUDED  /script.js
INCLUDED  /services.html
INCLUDED  /services/dryer-vent-cleaning.html
INCLUDED  /services/gutter-installation.html
INCLUDED  /sitemap.xml
INCLUDED  /style.css
INCLUDED  /vercel.json
```

## Full File Contents

### FILE: /LICENSE

```text
MIT License

Copyright (c) 2024 The CleanFlow Ohio Project Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

### FILE: /README.md

```markdown
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

```

### FILE: /about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About CleanFlow of Ohio | Miami Valley's Trusted Gutter Cleaning Expert</title>
    <meta name="description" content="Learn about CleanFlow of Ohio, your trusted, owner-operated gutter cleaning specialist with over 20 years of experience serving the greater Miami Valley area.">
    <meta name="keywords" content="about CleanFlow, Miami Valley gutter expert, owner operated gutter service, greater Miami Valley gutter cleaning">
    <link rel="canonical" href="https://www.cleanflowohio.com/about" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/about">
    <meta property="og:title" content="About CleanFlow of Ohio | Miami Valley Gutter Experts">
    <meta property="og:description" content="Owner-operated gutter cleaning with 20+ years experience serving the greater Miami Valley area.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="About CleanFlow of Ohio | Miami Valley Gutter Experts">
    <meta name="twitter:description" content="Owner-operated gutter cleaning with 20+ years experience.">
    <meta name="twitter:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.cleanflowohio.com/#business",
      "name": "CleanFlow of Ohio",
      "url": "https://www.cleanflowohio.com",
      "telephone": "+1-937-478-0689",
      "email": "cleanflowofohio@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dayton",
        "addressRegion": "OH",
        "addressCountry": "US"
      },
      "priceRange": "$$"
    }
    </script>
</head>
<body>
    <div class="topbar">
        <div class="container">
            <div class="topbar-container">
                <div class="topbar-item">
                    <i class="fas fa-phone-alt"></i> Call or Text: <a href="tel:9374780689">937-478-0689</a>
                </div>
                <div class="topbar-item">
                    <i class="fas fa-envelope"></i> Email: <a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a>
                </div>
            </div>
        </div>
    </div>

    <header id="header">
        <div class="container">
            <div class="header-container">
                <div class="logo" onclick="location.href='index.html'">
                    CleanFlow<span>of Ohio</span>
                </div>
                <nav>
                    <ul id="nav-menu">
                        <li><a href="index.html" id="home-link">Home</a></li>
                        <li><a href="services.html" id="services-link">Services</a></li>
                        <li><a href="about.html" id="about-link" class="active">About</a></li>
                        <li><i class="fas fa-times close-menu" id="close-menu"></i></li>
                    </ul>
                    <div class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </nav>
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <div id="radial-menu-overlay" class="radial-overlay">
      <div class="radial-menu-center">
        <div class="radial-close"><i class="fas fa-times"></i></div>
        <a href="services/gutter-installation.html" class="radial-item item-1">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>
        <a href="services/dryer-vent-cleaning.html" class="radial-item item-2">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>
        <a href="services.html" class="radial-item item-3">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning & More</span>
        </a>
      </div>
    </div>

    <div id="about-page" class="page page-content">
        <section id="about-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>About CleanFlow of Ohio</h1>
                    <p>Your trusted premium gutter maintenance partner in the greater Miami Valley area</p>
                </div>
            </div>
        </section>

        <section id="about-story" class="section-pad" style="background: #fff;">
            <div class="container">
                <div data-aos="fade-up" style="max-width: 900px; margin: 0 auto;">
                    <h2>Our Story</h2>
                    <p>My name is Casey, and at CleanFlow of Ohio, we provide premium gutter maintenance, cleaning, installation, and protection services throughout the greater Miami Valley area. From routine cleanouts and screen installation to alignment checks, sealing, and full system upkeep, we handle every job with precision and pride.</p>

                    <p>I've been in this industry for over 20 years. CleanFlow is the result of experience, high standards, and a deep commitment to doing the job right. Our crew is made up of professionals—no temps, just skilled people I trust to show up early, work clean, and treat every home with respect.</p>

                    <p>What sets us apart isn't just the work. It's how we show up. I genuinely enjoy helping people. There's something satisfying about solving a messy problem and hearing, "Wow, that was smooth." That kind of reaction is what keeps us going.</p>

                    <p>We offer a premium service because that's what I expect at my own home. We believe in quality over quantity. Details matter. Communication matters. And trust? That's everything.</p>

                    <p>Supporting CleanFlow means working with a local business that takes pride in every job, large or small. No corporate scripts. No cut corners. Just real pros who care about doing things right and leaving you with one less thing to worry about.</p>

                    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 40px; justify-content: center;">
                        <div style="display: flex; align-items: center; gap: 10px; background: var(--light); padding: 15px 25px; border-radius: 50px;">
                            <i class="fas fa-user-check" style="color: var(--accent); font-size: 24px;"></i>
                            <span style="font-weight: 600; color: var(--primary-dark);">Owner-Operated</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; background: var(--light); padding: 15px 25px; border-radius: 50px;">
                            <i class="fas fa-award" style="color: var(--accent); font-size: 24px;"></i>
                            <span style="font-weight: 600; color: var(--primary-dark);">20+ Years Experience</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; background: var(--light); padding: 15px 25px; border-radius: 50px;">
                            <i class="fas fa-hand-holding-heart" style="color: var(--accent); font-size: 24px;"></i>
                            <span style="font-weight: 600; color: var(--primary-dark);">Personal Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-choose" class="section-pad" style="background: var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Why Choose CleanFlow?</h2>
                    <p>What sets us apart from other gutter services</p>
                </div>

                <div class="benefits-grid" data-aos="fade-up">
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h3 class="benefit-title">Owner-Operated</h3>
                        <p>You deal directly with me from start to finish. No call centers, no subcontractors – just personalized, accountable service.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3 class="benefit-title">20+ Years Experience</h3>
                        <p>Two decades of gutter expertise means I've seen it all and know exactly how to address any gutter issue your home may have.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <h3 class="benefit-title">Fair, Honest Pricing</h3>
                        <p>No hidden fees or surprise charges. I provide clear, upfront pricing and stand behind every quote I give.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3 class="benefit-title">Fully Insured</h3>
                        <p>Your home is protected. I carry full liability insurance for your peace of mind during every service visit.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-broom"></i>
                        </div>
                        <h3 class="benefit-title">Thorough Clean-Up</h3>
                        <p>I never leave a mess behind. All debris is removed and your property is left clean after every job.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-camera"></i>
                        </div>
                        <h3 class="benefit-title">Before & After Photos</h3>
                        <p>I document my work with photos so you can see exactly what was done – even if you're not home during the service.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background: #fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Credentials</h2>
                    <p>Trusted expertise you can count on</p>
                </div>

                <div class="badges" data-aos="fade-up">
                    <div class="badge-item">
                        <i class="fas fa-award badge-icon"></i>
                        <div class="badge-title">20+ Years Experience</div>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-user-check badge-icon"></i>
                        <div class="badge-title">Fully Insured</div>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-thumbs-up badge-icon"></i>
                        <div class="badge-title">Satisfaction Guaranteed</div>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-tools badge-icon"></i>
                        <div class="badge-title">Professional Equipment</div>
                    </div>
                    <div class="badge-item">
                        <i class="fas fa-house-user badge-icon"></i>
                        <div class="badge-title">Locally Owned</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-area" class="section-pad" style="background: var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Service Area</h2>
                    <p>Proudly serving the greater Miami Valley area</p>
                </div>

                <div class="text-center" data-aos="fade-up" style="max-width: 800px; margin: 0 auto;">
                    <p style="font-size: 1.1rem; color: var(--dark);">We provide premium gutter cleaning, repair, and installation services to homeowners and businesses throughout the <strong>greater Miami Valley area</strong>. Whether you are in the heart of the valley or the surrounding suburbs, we've got you covered.</p>
                    <p class="mt-3" style="font-style: italic; color: var(--gray);">Not sure if you're in our service area? Give me a call – I'm always happy to discuss your needs!</p>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready to Experience the CleanFlow Difference?</h2>
                    <p>Contact me today for a free estimate on your gutter service needs.</p>
                    <div class="cta-buttons">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call: 937-478-0689
                        </a>
                        <a href="index.html#calculator" class="btn btn-primary btn-lg">
                            <i class="fas fa-calculator"></i> Cost Calculator
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-about">
                    <a href="index.html" class="footer-logo">
                        CleanFlow<span>of Ohio</span>
                    </a>
                    <p>Professional gutter cleaning and protection services in the greater Miami Valley area. With over 20 years of experience, I provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-globe"></i>
                            <p><a href="https://www.cleanflowohio.com" target="_blank">www.cleanflowohio.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Open 24 Hours<br>7 Days a Week</p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Serving the greater Miami Valley area</p>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="index.html#calculator">Cost Calculator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services/gutter-installation.html">Gutter Installation</a></li>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services/dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving the greater Miami Valley area</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta" id="floating-cta">
        <span class="cta-label">Get a Quote</span>
        <a href="tel:9374780689" aria-label="Call CleanFlow of Ohio">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>

    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer></script>
    <script src="script.js" defer></script>
</body>
</html>

```

### FILE: /index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleanFlow of Ohio | Professional Gutter Cleaning & Protection</title>
    <meta name="description" content="CleanFlow of Ohio provides professional gutter cleaning, maintenance, and protection services in Dayton and surrounding areas. Protect your home from water damage with our expert gutter services.">
    <meta name="keywords" content="gutter cleaning, gutter protection, gutter maintenance, gutter repairs, gutter guards, Dayton gutter cleaning, Montgomery County gutter services, Greene County gutter services, professional gutter cleaning, seamless gutters, dryer vent cleaning">
    <link rel="canonical" href="https://www.cleanflowohio.com/" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/">
    <meta property="og:title" content="CleanFlow of Ohio | Professional Gutter Cleaning">
    <meta property="og:description" content="Professional gutter cleaning, maintenance, and protection in Dayton. 20+ years experience. Call 937-478-0689.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="CleanFlow of Ohio | Professional Gutter Cleaning">
    <meta name="twitter:description" content="Professional gutter cleaning in Dayton. 20+ years experience.">
    <meta name="twitter:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.cleanflowohio.com/#business",
      "name": "CleanFlow of Ohio",
      "description": "Professional gutter cleaning, maintenance, and protection services in Dayton and surrounding areas.",
      "url": "https://www.cleanflowohio.com",
      "telephone": "+1-937-478-0689",
      "email": "cleanflowofohio@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dayton",
        "addressRegion": "OH",
        "addressCountry": "US"
      },
      "areaServed": [
        {"@type": "City", "name": "Dayton, Ohio"},
        {"@type": "City", "name": "Centerville, Ohio"},
        {"@type": "City", "name": "Washington Township, Ohio"},
        {"@type": "City", "name": "Kettering, Ohio"},
        {"@type": "City", "name": "Oakwood, Ohio"},
        {"@type": "City", "name": "Beavercreek, Ohio"}
      ],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Cleaning"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Repairs"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Guard Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dryer Vent Cleaning"}}
        ]
      }
    }
    </script>
</head>
<body>
    <div class="topbar">
        <div class="container">
            <div class="topbar-container">
                <div class="topbar-item">
                    <i class="fas fa-phone-alt"></i> Call or Text: <a href="tel:9374780689">937-478-0689</a>
                </div>
                <div class="topbar-item">
                    <i class="fas fa-envelope"></i> Email: <a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a>
                </div>
            </div>
        </div>
    </div>

    <header id="header">
        <div class="container">
            <div class="header-container">
                <div class="logo" onclick="location.href='index.html'">
                    CleanFlow<span>of Ohio</span>
                </div>
                <nav>
                    <ul id="nav-menu">
                        <li><a href="index.html" id="home-link" class="active">Home</a></li>
                        <li><a href="services.html" id="services-link">Services</a></li>
                        <li><a href="about.html" id="about-link">About</a></li>
                        <li><i class="fas fa-times close-menu" id="close-menu"></i></li>
                    </ul>
                    <div class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </nav>
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <div id="radial-menu-overlay" class="radial-overlay">
      <div class="radial-menu-center">
        <div class="radial-close"><i class="fas fa-times"></i></div>
        <a href="services/gutter-installation.html" class="radial-item item-1">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>
        <a href="services/dryer-vent-cleaning.html" class="radial-item item-2">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>
        <a href="services.html" class="radial-item item-3">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning & More</span>
        </a>
      </div>
    </div>

    <div id="home-page" class="page">
        <section id="hero">
            <div class="container">
                <div class="hero-content" data-aos="fade-up">
                    <h1>Professional Gutter Cleaning & Protection</h1>
                    <p>Prevent costly water damage with expert gutter maintenance from the most trusted service in Dayton and surrounding areas.</p>
                    <div class="hero-btns">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
                        </a>
                        <a href="#calculator" class="btn btn-accent btn-lg">
                            <i class="fas fa-calculator"></i> Free Cost Calculator
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="quote" class="lead-form-section">
            <div class="container">
                <form id="quoteForm" class="lead-form" data-aos="fade-up" action="https://formspree.io/f/xpqqeklz" method="POST">
                    <input type="hidden" name="_next" value="https://www.cleanflowohio.com/?submitted=true">
                    <h3>Request Your Free Quote</h3>
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required>
                    </div>
                    <div class="form-group">
                        <select id="service" name="service">
                            <option value="Gutter Cleaning">Gutter Cleaning</option>
                            <option value="Gutter Guards">Gutter Guards</option>
                            <option value="Dryer Vent Cleaning">Dryer Vent Cleaning</option>
                            <option value="Multiple Services">Multiple Services</option>
                        </select>
                    </div>
                    <div class="form-submit">
                        <button type="submit" class="btn btn-primary btn-pulse">Send Request</button>
                    </div>
                    <div id="formMessage" class="form-message"></div>
                    <noscript>
                        <p style="color: var(--accent); font-weight: 600; text-align: center;">
                            For fastest response, call or text 937-478-0689
                        </p>
                    </noscript>
                </form>
            </div>
        </section>

        <section id="warning" class="py-5">
            <div class="container">
                <div class="warning-box" data-aos="fade-up">
                    <div class="warning-content">
                        <strong>Here's what most homeowners don't realize:</strong> When gutters clog, water doesn't just overflow – it backs up behind the gutters, slowly rotting your fascia boards and soffits from the inside out. <br>
                        <span class="price-highlight">A $200 cleaning today prevents a $2,000+ repair tomorrow.</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background:#fff">
            <div class="container">
                <h2 style="margin-bottom:2.5rem;">How It Works</h2>
                <div class="process" data-aos="fade-up">
                    <div class="step">
                        <i class="fas fa-phone-volume"></i>
                        <h3>1 • Schedule</h3>
                        <p>Call, text, or use the quick form.</p>
                    </div>
                    <div class="step">
                        <i class="fas fa-broom"></i>
                        <h3>2 • We Clean / Install</h3>
                        <p>On-time arrival & tidy workmanship.</p>
                    </div>
                    <div class="step">
                        <i class="fas fa-thumbs-up"></i>
                        <h3>3 • Peace of Mind</h3>
                        <p>Leak-free gutters & zero debris worries.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-overview" class="section-pad" style="background:var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Services</h2>
                    <p>Professional gutter cleaning and protection services to keep your home safe and dry.</p>
                </div>

                <div class="grid grid-3" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-card">
                        <div class="service-image">
                            <img src="https://cdn.prod.website-files.com/614a070736f4a72073561d14/614a732f2f7c6cfc52315c10_gutter-cleaning-before-after.jpg" alt="Professional Gutter Cleaning Service">
                        </div>
                        <div class="service-content">
                            <h3>Gutter Cleaning</h3>
                            <p>Complete removal of debris from gutters and downspouts to ensure proper water flow, preventing damage to your home.</p>
                            <a href="services.html#gutter-cleaning-service" class="service-btn">
                                Learn More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image">
                            <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2023/08/01151936/Gutter_iStock-1310417362-e1747423219898.jpeg" alt="Gutter Repairs and Maintenance">
                        </div>
                        <div class="service-content">
                            <h3>Gutter Repairs</h3>
                            <p>Expert repairs for leaking gutters, realigning sections, resealing joints, and fixing any issues to ensure proper function.</p>
                            <a href="services.html#gutter-repairs-service" class="service-btn">
                                Learn More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image">
                            <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2022/06/29223354/gutter_guard_image_for_blog_2400px-scaled.jpeg" alt="Gutter Guard Protection Systems">
                        </div>
                        <div class="service-content">
                            <h3>Gutter Protection</h3>
                            <p>Installation of high-quality gutter guards to prevent leaves and debris from clogging your gutters with a 3-year guarantee.</p>
                            <a href="services.html#gutter-protection-service" class="service-btn">
                                Learn More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="calculator" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Gutter Cleaning Cost Calculator</h2>
                    <p>Get a quick estimate for your gutter cleaning service</p>
                </div>

                <div class="calculator-card" data-aos="fade-up">
                    <div class="calculator-form">
                        <div class="grid">
                            <div class="form-group">
                                <label for="linearFeet">Linear Feet of Gutters</label>
                                <input type="number" id="linearFeet" placeholder="Enter linear feet (approximately house perimeter)" min="50" max="500">
                            </div>
                            <div class="form-group">
                                <label for="stories">Number of Stories</label>
                                <select id="stories">
                                    <option value="1">1 Story</option>
                                    <option value="2">2 Stories</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="debris">Debris Level</label>
                                <select id="debris">
                                    <option value="light">Light (Few trees nearby)</option>
                                    <option value="medium" selected>Medium (Some trees nearby)</option>
                                    <option value="heavy">Heavy (Many trees, pine needles, etc.)</option>
                                </select>
                            </div>
                        </div>

                        <div class="text-center mt-2">
                            <button class="btn btn-primary" id="calculateBtn">Calculate Estimate</button>
                        </div>

                        <div class="result-box" id="resultBox">
                            <div class="result-title">Estimated Cost</div>
                            <div class="result-price" id="estimatedPrice">$200 - $300</div>
                            <p class="result-note">This is just an estimate. For an accurate quote, please call us at <a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a> or send a photo of your gutters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="signs" class="signs-section">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Signs You Need Gutter Cleaning</h2>
                    <p>Click on each sign to learn more</p>
                </div>

                <div class="signs-grid" data-aos="fade-up">
                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-tint"></i>
                        <h3>Overflowing Gutters</h3>
                        <div class="sign-content">
                            <p>If you notice water spilling over the sides of your gutters during rainfall, it's a clear indication they're clogged with debris and need immediate cleaning to prevent water damage.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-seedling"></i>
                        <h3>Plants Growing</h3>
                        <div class="sign-content">
                            <p>Seeds carried by wind or birds can settle in debris-filled gutters and actually start growing plants. If you see greenery sprouting from your gutters, it's definitely time for a cleaning.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-water"></i>
                        <h3>Water Stains</h3>
                        <div class="sign-content">
                            <p>Water stains on your home's exterior siding or foundation walls are indicators that water isn't being properly channeled away from your home, often due to clogged gutters.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-weight-hanging"></i>
                        <h3>Sagging Gutters</h3>
                        <div class="sign-content">
                            <p>Gutters sagging or pulling away from the roofline typically means they're weighed down with debris and water. This extra weight can eventually cause them to detach completely.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-bug"></i>
                        <h3>Pest Infestations</h3>
                        <div class="sign-content">
                            <p>Standing water and decomposing debris in gutters create perfect breeding grounds for mosquitoes, carpenter ants, rodents, and other pests you don't want around your home.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-icicles"></i>
                        <h3>Ice Dams</h3>
                        <div class="sign-content">
                            <p>In winter, clogged gutters can cause ice dams to form, which prevent melting snow from draining properly. This can lead to water backing up under shingles and causing interior water damage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="calendar" class="calendar-section">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Seasonal Gutter Maintenance Guide</h2>
                    <p>Keep your gutters functioning properly year-round</p>
                </div>

                <div class="season-tabs" data-aos="fade-up">
                    <div class="season-tab active" data-season="spring">Spring</div>
                    <div class="season-tab" data-season="summer">Summer</div>
                    <div class="season-tab" data-season="fall">Fall</div>
                    <div class="season-tab" data-season="winter">Winter</div>
                </div>

                <div class="season-content active" id="spring-content" data-aos="fade-up">
                    <div class="season-card">
                        <div class="season-header">
                            <i class="fas fa-seedling season-icon"></i>
                            <h3 class="season-title">Spring Gutter Maintenance</h3>
                        </div>
                        <p>Spring is a critical time for gutter cleaning as trees shed flowers, seeds, and pollen that can quickly clog your gutter system.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Remove winter debris and accumulated leaves</li>
                            <li>Check for and repair any winter damage</li>
                            <li>Ensure downspouts are clear and directing water away from foundation</li>
                            <li>Inspect gutters for proper pitch and alignment</li>
                            <li>Consider gutter guard installation before heavy spring rains</li>
                        </ul>
                        <div class="mt-3">
                            <a href="tel:9374780689" class="btn btn-accent">Schedule Spring Cleaning</a>
                        </div>
                    </div>
                </div>

                <div class="season-content" id="summer-content">
                    <div class="season-card">
                        <div class="season-header">
                            <i class="fas fa-sun season-icon"></i>
                            <h3 class="season-title">Summer Gutter Maintenance</h3>
                        </div>
                        <p>Summer is the perfect time to inspect your gutters and make any necessary repairs while weather conditions are favorable.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Check for nests from birds, wasps, or other pests</li>
                            <li>Inspect for sagging sections that need reinforcement</li>
                            <li>Clear any debris from summer storms</li>
                            <li>Look for signs of rust or corrosion on metal gutters</li>
                            <li>Ensure proper drainage during summer thunderstorms</li>
                        </ul>
                        <div class="mt-3">
                            <a href="tel:9374780689" class="btn btn-accent">Schedule Summer Maintenance</a>
                        </div>
                    </div>
                </div>

                <div class="season-content" id="fall-content">
                    <div class="season-card">
                        <div class="season-header">
                            <i class="fas fa-leaf season-icon"></i>
                            <h3 class="season-title">Fall Gutter Maintenance</h3>
                        </div>
                        <p>Fall is the most important season for gutter maintenance as falling leaves and debris can quickly overwhelm your gutter system.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Clean gutters after majority of leaves have fallen</li>
                            <li>Consider a second cleaning if you have many trees</li>
                            <li>Check downspouts for clogs and proper drainage</li>
                            <li>Inspect for any loose gutter sections before winter</li>
                            <li>Consider installing gutter guards for winter protection</li>
                        </ul>
                        <div class="mt-3">
                            <a href="tel:9374780689" class="btn btn-accent">Schedule Fall Cleaning</a>
                        </div>
                    </div>
                </div>

                <div class="season-content" id="winter-content">
                    <div class="season-card">
                        <div class="season-header">
                            <i class="fas fa-snowflake season-icon"></i>
                            <h3 class="season-title">Winter Gutter Maintenance</h3>
                        </div>
                        <p>Winter presents unique challenges for gutter systems, including ice dams and potential damage from snow and ice weight.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Monitor for ice dam formation during freeze/thaw cycles</li>
                            <li>Check gutters after heavy snow or ice storms</li>
                            <li>Look for signs of gutters pulling away due to ice weight</li>
                            <li>Ensure downspouts are clear for melting snow drainage</li>
                            <li>Plan for a comprehensive spring cleaning</li>
                        </ul>
                        <div class="mt-3">
                            <a href="tel:9374780689" class="btn btn-accent">Schedule Winter Inspection</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="benefits" class="benefits-section">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Benefits of Professional Gutter Cleaning</h2>
                    <p>Why proper gutter maintenance is essential for your home</p>
                </div>

                <div class="benefits-grid" data-aos="fade-up">
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-home"></i>
                        </div>
                        <h3 class="benefit-title">Protect Your Foundation</h3>
                        <p>Properly functioning gutters direct water away from your home's foundation, preventing cracks, leaks, and costly structural damage.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3 class="benefit-title">Preserve Exterior</h3>
                        <p>Clean gutters prevent water overflow that can damage siding, fascia boards, and painted surfaces on your home's exterior.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <h3 class="benefit-title">Protect Landscaping</h3>
                        <p>Properly diverted rainwater protects your garden beds, plants and prevents soil erosion around your property.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-bug-slash"></i>
                        </div>
                        <h3 class="benefit-title">Prevent Pests</h3>
                        <p>Clean gutters eliminate standing water and debris that attract mosquitoes, termites, rodents and other pests to your home.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="what-you-get" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">What You Get With Every Service</h2>
                    <p>I provide comprehensive gutter services with attention to detail and customer satisfaction.</p>
                </div>

                <div class="grid grid-2 mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <ul class="checkmark-list">
                            <li>Hand removal of ALL debris from gutters & roof valleys</li>
                            <li>Complete downspout flush & flow testing</li>
                            <li>Minor repairs: resealing joints & realigning sections</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="checkmark-list">
                            <li>Before & after photos of your gutters</li>
                            <li>Honest assessment & recommendations</li>
                            <li>Optional: Gutter guards with 3-year guarantee</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="special-offer">
            <div class="container">
                <div class="special-offer" data-aos="fade-up">
                    <div class="offer-title"><i class="fas fa-fire-extinguisher"></i> NEW SERVICE: Dryer Vent Cleaning</div>
                    <div class="offer-text">Reduce fire risk and improve dryer efficiency. Clogged dryer vents cause 2,900 house fires every year.</div>
                    <div style="font-size: 2rem; font-weight: 700; margin: 15px 0;">$99 Limited Time Offer</div>
                    <div style="font-size: 0.95rem; margin-bottom: 20px; opacity: 0.9;">Mention this offer when booking • Regular price starts at $135</div>
                    <a href="services/dryer-vent-cleaning.html" class="btn btn-primary btn-lg" style="margin-right: 10px;">
                        <i class="fas fa-info-circle"></i> Learn More
                    </a>
                    <a href="tel:9374780689" class="btn btn-primary btn-lg">
                        <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
                    </a>
                </div>
            </div>
        </section>

        <section class="bottom-cta" id="contact">
            <div class="container">
                <div data-aos="fade-up">
                    <h2>Ready for Clog-Free Gutters?</h2>
                    <p>Call now for a free estimate and to schedule your professional gutter service.</p>
                    <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                        <i class="fas fa-phone-alt"></i> 937-478-0689
                    </a>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-about">
                    <a href="index.html" class="footer-logo">
                        CleanFlow<span>of Ohio</span>
                    </a>
                    <p>Professional gutter cleaning and protection services in Dayton and surrounding areas. With over 20 years of experience, I provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-globe"></i>
                            <p><a href="https://www.cleanflowohio.com" target="_blank">www.cleanflowohio.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Open 24 Hours<br>7 Days a Week</p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Serving Dayton and surrounding areas<br>Montgomery & Greene Counties</p>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="index.html#calculator">Cost Calculator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services/gutter-installation.html">Gutter Installation</a></li>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services/dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta" id="floating-cta">
        <span class="cta-label">Get a Quote</span>
        <a href="tel:9374780689" aria-label="Call CleanFlow of Ohio">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>

    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer></script>
    <script src="script.js" defer></script>
</body>
</html>

```

### FILE: /robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://www.cleanflowohio.com/sitemap.xml

```

### FILE: /script.js

```javascript
// Initialize AOS Animation (Guarded to prevent crashes)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Navigation Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

if (menuToggle && navMenu && closeMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Sticky Header, Back to Top & Floating CTA Visibility
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');
const floatingCta = document.getElementById('floating-cta');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            if (backToTop) backToTop.classList.add('active');
            if (floatingCta) floatingCta.classList.add('active');
        } else {
            header.classList.remove('sticky');
            if (backToTop) backToTop.classList.remove('active');
            if (floatingCta) floatingCta.classList.remove('active');
        }
    });

    // Back to Top Click Handler
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Down (Hero Section) Click Handler
const scrollDownButton = document.getElementById('scroll-down');
if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
        const nextSection = document.getElementById('warning');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Accordion Toggle
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains('active');

    // Close all other accordion items
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionHeaders.forEach(header => {
        if (header !== element) {
            header.classList.remove('active');
        }
    });
    accordionContents.forEach(cont => {
        if (cont !== content) {
            cont.classList.remove('active');
            cont.style.maxHeight = null;
        }
    });

    // Open or close the clicked accordion item
    if (!isActive) {
        element.classList.add('active');
        if (content) {
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    } else {
        element.classList.remove('active');
        if (content) {
            content.classList.remove('active');
            content.style.maxHeight = null;
        }
    }
}

// Toggle Signs Content
function toggleSign(element) {
    element.classList.toggle('active');
}

// Season Tabs
const seasonTabs = document.querySelectorAll('.season-tab');
if (seasonTabs.length > 0) {
    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            seasonTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.season-content').forEach(content => {
                content.classList.remove('active');
            });

            const season = tab.dataset.season;
            const activeSeasonContent = document.getElementById(`${season}-content`);
            if (activeSeasonContent) {
                activeSeasonContent.classList.add('active');
            }
        });
    });
}

// Gutter Cleaning Cost Calculator
const calculateBtn = document.getElementById('calculateBtn');
const linearFeetInput = document.getElementById('linearFeet');
const storiesSelect = document.getElementById('stories');
const debrisSelect = document.getElementById('debris');
const estimatedPriceEl = document.getElementById('estimatedPrice');
const resultBoxEl = document.getElementById('resultBox');

function calculatePrice() {
    if (!linearFeetInput || !storiesSelect || !debrisSelect || !estimatedPriceEl || !resultBoxEl) {
        console.error("Calculator elements not found.");
        return;
    }

    const linearFeet = parseFloat(linearFeetInput.value) || 0;
    const stories = storiesSelect.value;
    const debris = debrisSelect.value;

    // --- NEW PRICING LOGIC (2026 Market Rates) ---
    let baseRate = 0;

    // Increased base rates to account for insurance/labor
    switch (debris) {
        case 'light': baseRate = 1.15; break;
        case 'medium': baseRate = 1.35; break;
        case 'heavy': baseRate = 1.85; break;
        default: baseRate = 1.35;
    }

    // 2-Story Surcharge: Now adds $0.40/ft instead of flat $50
    if (stories === '2') {
        baseRate += 0.40;
    }

    let estimatedTotal = linearFeet * baseRate;

    // Minimum Service Charge
    if (estimatedTotal < 150) {
        estimatedTotal = 150;
    }

    // Calculate Range (Low = Calc Price, High = Calc Price + 25%)
    let highEnd = estimatedTotal * 1.25;

    // Update the display text to show a range
    estimatedPriceEl.textContent = '$' + Math.ceil(estimatedTotal) + ' - $' + Math.ceil(highEnd);

    // Add a disclaimer if not already there (Dynamically adding text)
    let disclaimer = resultBoxEl.querySelector('.dynamic-disclaimer');
    if (!disclaimer) {
        disclaimer = document.createElement('p');
        disclaimer.className = 'result-note dynamic-disclaimer';
        disclaimer.style.marginTop = '5px';
        disclaimer.style.fontStyle = 'italic';
        disclaimer.innerHTML = 'Range allows for factors like steep roofs or gutter guards.';
        resultBoxEl.appendChild(disclaimer);
    }

    resultBoxEl.classList.add('active');
}

if (calculateBtn) calculateBtn.addEventListener('click', calculatePrice);
if (linearFeetInput) linearFeetInput.addEventListener('input', calculatePrice);
if (storiesSelect) storiesSelect.addEventListener('change', calculatePrice);
if (debrisSelect) debrisSelect.addEventListener('change', calculatePrice);

// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    // Check if returning from successful submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been sent. I will reach out shortly.";
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}

// --------------------------------------------------------
// RADIAL MENU LOGIC (Smarter Interception)
// --------------------------------------------------------
const headerFooterLinks = document.querySelectorAll('header a, footer a');
const radialOverlay = document.getElementById('radial-menu-overlay');
const radialClose = document.querySelector('.radial-close');

if (radialOverlay && radialClose) {
  headerFooterLinks.forEach(link => {
    const href = link.getAttribute('href');

    // We ONLY want to intercept the main Services page links.
    // We ignore links inside the radial menu itself, and we ignore footer links that have #anchor tags (like services.html#gutter-cleaning)
    if (href === 'services.html' || href === '../services.html' || href === '/services' || href === '/services.html') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            radialOverlay.classList.add('active');
        });
    }
  });

  radialClose.addEventListener('click', () => {
    radialOverlay.classList.remove('active');
  });

  // Close if clicking anywhere outside the buttons
  radialOverlay.addEventListener('click', (e) => {
    if (e.target === radialOverlay) {
      radialOverlay.classList.remove('active');
    }
  });
}

```

### FILE: /services.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Services | CleanFlow of Ohio - Gutter Cleaning, Repairs & Protection</title>
    <meta name="description" content="Professional gutter cleaning, repair, protection, and dryer vent cleaning services in the greater Miami Valley area. Expert maintenance serving your local community.">
    <meta name="keywords" content="gutter cleaning services, gutter repair, gutter guards, gutter protection, dryer vent cleaning, Miami Valley gutter services, professional gutter maintenance">
    <link rel="canonical" href="https://www.cleanflowohio.com/services" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/services">
    <meta property="og:title" content="Our Services | CleanFlow of Ohio">
    <meta property="og:description" content="Professional gutter cleaning, repair, and protection services. Expert maintenance for the greater Miami Valley area.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Our Services | CleanFlow of Ohio">
    <meta name="twitter:description" content="Professional gutter cleaning, repair, and protection services in the Miami Valley.">
    <meta name="twitter:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.cleanflowohio.com/#business",
      "name": "CleanFlow of Ohio",
      "url": "https://www.cleanflowohio.com",
      "telephone": "+1-937-478-0689",
      "email": "cleanflowofohio@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dayton",
        "addressRegion": "OH",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Cleaning"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Repairs"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gutter Guard Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dryer Vent Cleaning"}}
        ]
      }
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I have my gutters cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most homes should have gutters cleaned at least twice a year - once in the spring and once in the fall after the leaves have fallen. If you have pine trees or other debris-dropping trees near your home, you may need more frequent cleanings."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs that I need gutter repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs include visible sagging or pulling away from the house, water marks on siding beneath gutters, water pooling around your foundation, visible rust or cracks, and water leaking from joints or corners during rainfall."
          }
        },
        {
          "@type": "Question",
          "name": "Do gutter guards really work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, quality gutter guards work effectively when properly installed. While no system completely eliminates maintenance, gutter guards can significantly reduce cleaning frequency to several years between cleanings."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CleanFlow of Ohio proudly serves the greater Miami Valley area."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical gutter cleaning take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most average-sized homes with moderate debris, a thorough cleaning takes about 1-2 hours. Homes with multiple stories or heavily clogged gutters may take longer."
          }
        }
      ]
    }
    </script>
</head>
<body>
    <div class="topbar">
        <div class="container">
            <div class="topbar-container">
                <div class="topbar-item">
                    <i class="fas fa-phone-alt"></i> Call or Text: <a href="tel:9374780689">937-478-0689</a>
                </div>
                <div class="topbar-item">
                    <i class="fas fa-envelope"></i> Email: <a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a>
                </div>
            </div>
        </div>
    </div>

    <header id="header">
        <div class="container">
            <div class="header-container">
                <div class="logo" onclick="location.href='index.html'">
                    CleanFlow<span>of Ohio</span>
                </div>
                <nav>
                    <ul id="nav-menu">
                        <li><a href="index.html" id="home-link">Home</a></li>
                        <li><a href="services.html" id="services-link" class="active">Services</a></li>
                        <li><a href="about.html" id="about-link">About</a></li>
                        <li><i class="fas fa-times close-menu" id="close-menu"></i></li>
                    </ul>
                    <div class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </nav>
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <div id="radial-menu-overlay" class="radial-overlay">
      <div class="radial-menu-center">
        <div class="radial-close"><i class="fas fa-times"></i></div>
        <a href="services/gutter-installation.html" class="radial-item item-1">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>
        <a href="services/dryer-vent-cleaning.html" class="radial-item item-2">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>
        <a href="services.html" class="radial-item item-3">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning & More</span>
        </a>
      </div>
    </div>

    <div id="services-page" class="page page-content">
        <section id="services-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p>Comprehensive gutter cleaning and home protection services to keep your home safe from water damage and fire hazards.</p>
                </div>
            </div>
        </section>

        <section id="gutter-cleaning-service" class="service-detail-section">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-image">
                        <img src="https://cdn.prod.website-files.com/614a070736f4a72073561d14/614a732f2f7c6cfc52315c10_gutter-cleaning-before-after.jpg" alt="Gutter Cleaning Before and After">
                    </div>
                    <div class="service-detail-content">
                        <h2>Gutter Cleaning</h2>
                        <p class="service-desc">Complete removal of leaves, debris, and blockages from your gutters and downspouts to ensure proper water flow away from your home.</p>

                        <h3>What's Included:</h3>
                        <ul class="checkmark-list">
                            <li>Hand removal of all debris from gutters</li>
                            <li>Flushing and testing of all downspouts</li>
                            <li>Minor repairs and resealing of joints</li>
                            <li>Inspection for any issues or damage</li>
                            <li>Before and after photos</li>
                            <li>Complete cleanup of all debris</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-tag"></i>
                            Starting at <strong>$185</strong> for standard homes
                        </div>

                        <a href="index.html#calculator" class="btn btn-primary mt-3">Get Your Estimate</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="gutter-repairs-service" class="service-detail-section alt-bg">
            <div class="container">
                <div class="service-detail reverse" data-aos="fade-up">
                    <div class="service-detail-image">
                        <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2023/08/01151936/Gutter_iStock-1310417362-e1747423219898.jpeg" alt="Gutter Repair Service">
                    </div>
                    <div class="service-detail-content">
                        <h2>Gutter Repairs</h2>
                        <p class="service-desc">Professional repair services for leaking, sagging, or damaged gutters. I'll restore your gutters to proper working condition.</p>

                        <h3>Common Repairs:</h3>
                        <ul class="checkmark-list">
                            <li>Sealing leaking joints and corners</li>
                            <li>Realigning sagging gutter sections</li>
                            <li>Replacing damaged hangers and brackets</li>
                            <li>Fixing or replacing end caps</li>
                            <li>Reconnecting separated sections</li>
                            <li>Downspout repairs and adjustments</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-tag"></i>
                            Repair pricing varies based on scope of work
                        </div>

                        <a href="tel:9374780689" class="btn btn-primary mt-3">Call for Assessment</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="gutter-protection-service" class="service-detail-section">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-image">
                        <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2022/06/29223354/gutter_guard_image_for_blog_2400px-scaled.jpeg" alt="Gutter Guard Protection">
                    </div>
                    <div class="service-detail-content">
                        <h2>Gutter Protection</h2>
                        <p class="service-desc">High-quality gutter guard installation to prevent leaves and debris from clogging your gutters. Reduce maintenance and protect your home year-round.</p>

                        <h3>Benefits of Gutter Guards:</h3>
                        <ul class="checkmark-list">
                            <li>Dramatically reduce gutter cleaning frequency</li>
                            <li>Prevent clogs and water overflow</li>
                            <li>Keep birds, rodents and insects out of gutters</li>
                            <li>Extend the life of your gutter system</li>
                            <li>3-year guarantee on all installations</li>
                            <li>Professional installation included</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-tag"></i>
                            Contact for a customized quote based on your home
                        </div>

                        <a href="tel:9374780689" class="btn btn-primary mt-3">Get a Quote</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="additional-services" class="service-detail-section alt-bg">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Additional Home Services</h2>
                    <p>Protecting your home inside and out</p>
                </div>

                <div class="service-detail" data-aos="fade-up" style="margin-top: 40px;">
                    <div class="service-detail-image">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" alt="Dryer Vent Cleaning Service">
                    </div>
                    <div class="service-detail-content">
                        <h2><i class="fas fa-fire-extinguisher" style="color: var(--accent); margin-right: 10px;"></i>Dryer Vent Cleaning</h2>
                        <p class="service-desc">Professional dryer vent cleaning to reduce fire risk, improve dryer efficiency, and lower your energy bills. Clogged dryer vents cause 2,900 house fires every year.</p>

                        <h3>What's Included:</h3>
                        <ul class="checkmark-list">
                            <li>Complete lint removal from entire vent run</li>
                            <li>Professional rotary brush and high-powered vacuum</li>
                            <li>Exterior vent hood cleaning and inspection</li>
                            <li>Airflow test before and after</li>
                            <li>Photo documentation of work completed</li>
                        </ul>

                        <div class="pricing-note" style="background: #fff3cd; border-left: 4px solid var(--accent); padding: 15px; margin: 20px 0;">
                            <i class="fas fa-tag"></i>
                            <strong style="color: var(--accent);">LIMITED TIME: $99</strong> (Regular price starts at $135)<br>
                            <small>Mention this offer when booking</small>
                        </div>

                        <a href="services/dryer-vent-cleaning.html" class="btn btn-accent mt-3" style="margin-right: 10px;">Learn More</a>
                        <a href="tel:9374780689" class="btn btn-primary mt-3 btn-pulse">Call Now</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-gallery" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Work</h2>
                    <p>See the difference professional gutter cleaning makes</p>
                </div>

                <div class="gallery-grid" data-aos="fade-up">
                    <div class="gallery-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/6563ac7666f1f6169a77f1f5/7af4c2ba-5db0-4ed6-b2ea-3f4f66026e2a/Cleaning+before+and+after.JPG" alt="Gutter Cleaning Before and After">
                        <div class="gallery-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://nedstevens.com/wp-content/uploads/2025/01/gutter-cleaning-staff-roof.jpg" alt="Professional Gutter Service">
                        <div class="gallery-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://static.wixstatic.com/media/6bc844_e4b19ee527ca45bd91bfcc2a0f10cd8c~mv2.jpg/v1/fill/w_640,h_432,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6bc844_e4b19ee527ca45bd91bfcc2a0f10cd8c~mv2.jpg" alt="Gutter Guard Installation">
                        <div class="gallery-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-faq" class="section-pad alt-bg">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Frequently Asked Questions</h2>
                    <p>Common questions about gutter services</p>
                </div>

                <div class="accordion" data-aos="fade-up">
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>How often should I have my gutters cleaned?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most homes should have gutters cleaned at least twice a year - once in the spring and once in the fall after the leaves have fallen. However, if you have pine trees or other debris-dropping trees near your home, you may need more frequent cleanings. I can assess your specific situation and recommend a maintenance schedule.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>What are the signs that I need gutter repairs?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Common signs that your gutters need repair include visible sagging or pulling away from the house, water marks on siding beneath gutters, water pooling around your foundation, visible rust or cracks, and water leaking from joints or corners during rainfall. If you notice any of these signs, it's best to have your gutters professionally inspected.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>Do gutter guards really work?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes, quality gutter guards do work effectively when properly installed. The systems I install are designed to allow water to flow while keeping out leaves, pine needles, and other debris. While no system completely eliminates the need for maintenance, my gutter protection systems can significantly reduce how often you need to have your gutters cleaned, often extending the time between cleanings to several years.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>What areas do you serve?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>CleanFlow of Ohio proudly serves the greater Miami Valley area. If you're unsure if we service your specific neighborhood, please give me a call!</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>How long does a typical gutter cleaning take?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>The time required depends on the size of your home and the condition of your gutters. For most average-sized homes with moderate debris, a thorough cleaning takes about 1-2 hours. Homes with multiple stories or heavily clogged gutters may take longer. I pride myself on being thorough rather than rushing through the job.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready to Get Started?</h2>
                    <p>Contact me today for a free estimate on any of our services.</p>
                    <div class="cta-buttons">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call: 937-478-0689
                        </a>
                        <a href="index.html#calculator" class="btn btn-primary btn-lg">
                            <i class="fas fa-calculator"></i> Cost Calculator
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 40px 0; background: #fff;">
            <div class="container">
                <div style="max-width: 860px; margin: 0 auto; text-align: center; background: var(--light); border: 1px solid #e9ecef; border-radius: 12px; padding: 28px 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.05);" data-aos="fade-up">
                    <h3 style="margin-bottom: 12px; color: var(--primary-dark);">Trusted Local Exterior Partner</h3>
                    <p style="margin-bottom: 14px; color: var(--gray);">
                        For roofing related concerns that go beyond our normal service scope, we may recommend
                        <a href="https://www.xproeliteexteriors.com/" target="_blank" rel="noopener noreferrer">XPRO Elite Exterior Builders</a>
                        for next step evaluation.
                    </p>
                    <p style="margin-bottom: 0; font-size: 0.96rem; color: var(--gray);">
                        We stay focused on gutters, drainage, and related exterior problem spotting while helping point homeowners in the right direction when broader roofing scope is involved.
                    </p>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-about">
                    <a href="index.html" class="footer-logo">
                        CleanFlow<span>of Ohio</span>
                    </a>
                    <p>Professional gutter cleaning and protection services in the greater Miami Valley area. With over 20 years of experience, I provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-globe"></i>
                            <p><a href="https://www.cleanflowohio.com" target="_blank">www.cleanflowohio.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Open 24 Hours<br>7 Days a Week</p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Serving the greater Miami Valley area</p>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="index.html#calculator">Cost Calculator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services/gutter-installation.html">Gutter Installation</a></li>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services/dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving the greater Miami Valley area</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta" id="floating-cta">
        <span class="cta-label">Get a Quote</span>
        <a href="tel:9374780689" aria-label="Call CleanFlow of Ohio">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>

    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer></script>
    <script src="script.js" defer></script>
</body>
</html>

```

### FILE: /services/dryer-vent-cleaning.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dryer Vent Cleaning in Dayton & Centerville, Ohio | CleanFlow of Ohio</title>
    <meta name="description" content="Professional dryer vent cleaning in Dayton, Centerville, and Washington Township. Reduce fire risk, lower energy bills, and extend dryer life. $99 limited time offer. Call 937-478-0689.">
    <meta name="keywords" content="dryer vent cleaning, dryer vent cleaning Dayton, dryer vent cleaning Centerville, dryer vent cleaning Washington Township, lint removal, dryer fire prevention, dryer efficiency">
    <link rel="canonical" href="https://www.cleanflowohio.com/services/dryer-vent-cleaning" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/services/dryer-vent-cleaning">
    <meta property="og:title" content="Dryer Vent Cleaning | CleanFlow of Ohio">
    <meta property="og:description" content="Professional dryer vent cleaning in Dayton. Reduce fire risk and improve efficiency. $99 limited time offer.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Dryer Vent Cleaning | CleanFlow of Ohio">
    <meta name="twitter:description" content="Professional dryer vent cleaning in Dayton. $99 limited time offer.">
    <meta name="twitter:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dryer Vent Cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.cleanflowohio.com/#business",
        "name": "CleanFlow of Ohio",
        "telephone": "+1-937-478-0689",
        "email": "cleanflowofohio@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dayton",
          "addressRegion": "OH",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        {"@type": "City", "name": "Dayton, Ohio"},
        {"@type": "City", "name": "Centerville, Ohio"},
        {"@type": "City", "name": "Washington Township, Ohio"},
        {"@type": "City", "name": "Kettering, Ohio"},
        {"@type": "City", "name": "Oakwood, Ohio"},
        {"@type": "City", "name": "Beavercreek, Ohio"}
      ],
      "description": "Professional dryer vent cleaning service to reduce fire risk, improve dryer efficiency, and lower energy costs.",
      "offers": {
        "@type": "Offer",
        "price": "99.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-03-31",
        "description": "Limited time promotional price. Regular price starts at $135."
      }
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.cleanflowohio.com/#business",
      "name": "CleanFlow of Ohio",
      "url": "https://www.cleanflowohio.com",
      "telephone": "+1-937-478-0689",
      "email": "cleanflowofohio@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dayton",
        "addressRegion": "OH",
        "addressCountry": "US"
      },
      "priceRange": "$$"
    }
    </script>
</head>
<body>
    <div class="topbar">
        <div class="container">
            <div class="topbar-container">
                <div class="topbar-item">
                    <i class="fas fa-phone-alt"></i> Call or Text: <a href="tel:9374780689">937-478-0689</a>
                </div>
                <div class="topbar-item">
                    <i class="fas fa-envelope"></i> Email: <a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a>
                </div>
            </div>
        </div>
    </div>

    <header id="header">
        <div class="container">
            <div class="header-container">
                <div class="logo" onclick="location.href='../index.html'">
                    CleanFlow<span>of Ohio</span>
                </div>
                <nav>
                    <ul id="nav-menu">
                        <li><a href="../index.html" id="home-link">Home</a></li>
                        <li><a href="../services.html" id="services-link" class="active">Services</a></li>
                        <li><a href="../about.html" id="about-link">About</a></li>
                        <li><i class="fas fa-times close-menu" id="close-menu"></i></li>
                    </ul>
                    <div class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </nav>
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <div id="radial-menu-overlay" class="radial-overlay">
      <div class="radial-menu-center">
        <div class="radial-close"><i class="fas fa-times"></i></div>
        <a href="/services/gutter-installation.html" class="radial-item item-1">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>
        <a href="/services/dryer-vent-cleaning.html" class="radial-item item-2">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>
        <a href="/services.html" class="radial-item item-3">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning & More</span>
        </a>
      </div>
    </div>

    <div id="dryer-vent-page" class="page page-content">

        <section id="dryer-hero" style="background: linear-gradient(rgba(30, 60, 114, 0.85), rgba(30, 60, 114, 0.85)), url('https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200') no-repeat center center/cover; padding: 120px 0 80px; color: white; text-align: center;">
            <div class="container">
                <div data-aos="fade-up">
                    <h1 style="color: white; font-size: 2.8rem;">Dryer Vent Cleaning in Dayton & Surrounding Areas</h1>
                    <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto 30px;">Protect your home from fire hazards and reduce energy bills with professional dryer vent cleaning.</p>

                    <div style="background: var(--accent); display: inline-block; padding: 20px 40px; border-radius: 10px; margin-bottom: 30px;">
                        <div style="font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Limited Time Offer</div>
                        <div style="font-size: 3rem; font-weight: 700;">$99</div>
                        <div style="font-size: 0.95rem;">Mention this offer when booking</div>
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 5px;">Regular price starts at $135</div>
                    </div>

                    <div>
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: #fff;">
            <div class="container">
                <div class="warning-box" data-aos="fade-up" style="border-color: #e74c3c; background: #fdf2f2;">
                    <div class="warning-content">
                        <strong style="color: #e74c3c;"><i class="fas fa-fire" style="margin-right: 10px;"></i>Did You Know?</strong><br><br>
                        According to the U.S. Fire Administration, <strong>2,900 home dryer fires are reported each year</strong>, causing an estimated 5 deaths, 100 injuries, and $35 million in property loss. The leading cause? <strong>Failure to clean the dryer vent.</strong><br><br>
                        <span class="price-highlight" style="color: #e74c3c;">A $99 cleaning today could save your home and your family.</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="benefits-section" style="padding: 60px 0;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Why Clean Your Dryer Vent?</h2>
                    <p>The benefits go far beyond fire prevention</p>
                </div>

                <div class="benefits-grid" data-aos="fade-up">
                    <div class="benefit-card">
                        <div class="benefit-icon" style="background: #e74c3c;">
                            <i class="fas fa-fire-extinguisher"></i>
                        </div>
                        <h3 class="benefit-title">Prevent House Fires</h3>
                        <p>Lint is highly flammable. When it builds up in your dryer vent, it can ignite from the heat of your dryer, causing a devastating house fire.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3 class="benefit-title">Lower Energy Bills</h3>
                        <p>A clogged vent makes your dryer work harder and run longer. Clean vents can reduce drying time by up to 50%, saving you money every month.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <h3 class="benefit-title">Extend Dryer Life</h3>
                        <p>When your dryer overheats due to poor ventilation, it wears out faster. Regular vent cleaning can add years to your appliance's lifespan.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h3 class="benefit-title">Faster Drying</h3>
                        <p>Clothes taking two or three cycles to dry? A clean vent restores proper airflow so your clothes dry in one cycle, as designed.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="signs-section" style="padding: 60px 0;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Signs Your Dryer Vent Needs Cleaning</h2>
                    <p>If you notice any of these, call us immediately</p>
                </div>

                <div class="signs-grid" data-aos="fade-up">
                    <div class="sign-card">
                        <i class="fas fa-clock" style="color: var(--accent);"></i>
                        <h3>Clothes Take Longer to Dry</h3>
                        <p>If your dryer needs multiple cycles to dry a normal load, restricted airflow from lint buildup is likely the cause.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-temperature-high" style="color: #e74c3c;"></i>
                        <h3>Dryer Feels Hot</h3>
                        <p>The outside of your dryer or your clothes feel unusually hot after a cycle. This indicates the heat isn't exhausting properly.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-smog" style="color: var(--gray);"></i>
                        <h3>Burning Smell</h3>
                        <p>A burning odor when the dryer runs is a serious warning sign. Lint may be overheating. Stop using the dryer and call immediately.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-wind" style="color: var(--primary);"></i>
                        <h3>Weak Exhaust Flow</h3>
                        <p>Go outside and check your vent hood while the dryer runs. If airflow is weak or you don't feel much air, the vent is likely clogged.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-calendar-alt" style="color: var(--accent);"></i>
                        <h3>It's Been Over a Year</h3>
                        <p>Most households should have their dryer vent cleaned annually. High-use households (large families) may need it every 6 months.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-ruler-vertical" style="color: var(--primary-dark);"></i>
                        <h3>Long Vent Run</h3>
                        <p>If your dryer is far from an exterior wall or the vent has multiple turns, lint accumulates faster and needs more frequent cleaning.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background: #fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">What's Included in Every Service</h2>
                    <p>Thorough, professional dryer vent cleaning</p>
                </div>

                <div class="grid grid-2 mt-4" data-aos="fade-up">
                    <div>
                        <ul class="checkmark-list">
                            <li>Complete lint removal from entire vent run</li>
                            <li>Professional rotary brush and high-powered vacuum</li>
                            <li>Inspection of vent condition and connections</li>
                            <li>Exterior vent hood cleaning and inspection</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="checkmark-list">
                            <li>Dryer lint trap area cleaning</li>
                            <li>Airflow test before and after</li>
                            <li>Photo documentation of work completed</li>
                            <li>Recommendations if repairs are needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Simple, Transparent Pricing</h2>
                    <p>No hidden fees, no surprises</p>
                </div>

                <div class="calculator-card" data-aos="fade-up" style="max-width: 500px; margin: 0 auto; text-align: center;">
                    <div style="background: var(--accent); color: white; padding: 30px; border-radius: 10px 10px 0 0; margin: -30px -30px 20px -30px;">
                        <div style="font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Campaign Special</div>
                        <div style="font-size: 3.5rem; font-weight: 700;">$99</div>
                        <div style="font-size: 1rem;">Mention this offer when booking</div>
                    </div>

                    <p style="color: var(--gray); margin-bottom: 20px;">Regular pricing starts at <strong>$135</strong></p>
                    <p style="color: var(--gray); font-size: 0.95rem;">Final price depends on vent accessibility and condition.<br>Call or text for your exact quote.</p>

                    <div style="margin-top: 25px;">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call: 937-478-0689
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: #fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Serving the Miami Valley</h2>
                    <p>Dryer vent cleaning throughout Montgomery and Greene Counties</p>
                </div>

                <div class="grid grid-2" data-aos="fade-up" style="max-width: 600px; margin: 0 auto;">
                    <div>
                        <h4 style="color: var(--primary-dark); margin-bottom: 15px;">Montgomery County</h4>
                        <ul class="checkmark-list">
                            <li>Dayton</li>
                            <li>Centerville</li>
                            <li>Washington Township</li>
                            <li>Kettering</li>
                            <li>Oakwood</li>
                            <li>Miamisburg</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-dark); margin-bottom: 15px;">Greene County</h4>
                        <ul class="checkmark-list">
                            <li>Beavercreek</li>
                            <li>Bellbrook</li>
                            <li>Fairborn</li>
                            <li>Xenia</li>
                            <li>Yellow Springs</li>
                            <li>Cedarville</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready to Protect Your Home?</h2>
                    <p>Don't wait for a dryer fire. Schedule your professional vent cleaning today.</p>
                    <div style="font-size: 2rem; font-weight: 700; margin: 20px 0; color: var(--accent);">$99 Limited Time Offer</div>
                    <div class="cta-buttons">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call: 937-478-0689
                        </a>
                        <a href="../index.html#quote" class="btn btn-primary btn-lg">
                            <i class="fas fa-envelope"></i> Request Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 40px 0; background: var(--light);">
            <div class="container" style="text-align: center;">
                <p style="color: var(--gray);">Also need <a href="../services.html#gutter-cleaning-service" style="color: var(--primary);">gutter cleaning</a> or <a href="../services.html#gutter-protection-service" style="color: var(--primary);">gutter guard installation</a>? We do that too!</p>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-about">
                    <a href="../index.html" class="footer-logo">
                        CleanFlow<span>of Ohio</span>
                    </a>
                    <p>Professional gutter cleaning, dryer vent cleaning, and home protection services in Dayton and surrounding areas. With over 20 years of experience, I provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-globe"></i>
                            <p><a href="https://www.cleanflowohio.com" target="_blank">www.cleanflowohio.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Open 24 Hours<br>7 Days a Week</p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Serving Dayton and surrounding areas<br>Montgomery & Greene Counties</p>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../services.html">Services</a></li>
                        <li><a href="../about.html">About</a></li>
                        <li><a href="../index.html#calculator">Cost Calculator</a></li>
                        <li><a href="../index.html#signs">Signs You Need Service</a></li>
                        <li><a href="../index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="gutter-installation.html">Gutter Installation</a></li>
                        <li><a href="../services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="../services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="../services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                        <li><a href="../about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta" id="floating-cta">
        <span class="cta-label">Get a Quote</span>
        <a href="tel:9374780689" aria-label="Call CleanFlow of Ohio">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>

    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer></script>
    <script src="../script.js" defer></script>
</body>
</html>

```

### FILE: /services/gutter-installation.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seamless Gutter Installation Dayton & Miami Valley | CleanFlow</title>
    <meta name="description" content="Professional 5-inch and 6-inch seamless gutter installation in the greater Miami Valley. Owner-operated, .032 gauge aluminum, and on-site fabrication.">
    <meta name="keywords" content="seamless gutter installation, 5 inch gutters, 6 inch gutters, gutter replacement Dayton, Miami Valley seamless gutters, aluminum gutters">
    <link rel="canonical" href="https://www.cleanflowohio.com/services/gutter-installation" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/services/gutter-installation">
    <meta property="og:title" content="Seamless Gutter Installation | CleanFlow of Ohio">
    <meta property="og:description" content="Expert 5 and 6-inch seamless aluminum gutter installation serving the Miami Valley area.">
    <meta property="og:image" content="https://i.ibb.co/Lz0YmH8/gutter-install-preview.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Seamless Gutter Installation | CleanFlow of Ohio">
    <meta name="twitter:description" content="Professional 5 and 6-inch seamless gutter installation in the Miami Valley.">
    <meta name="twitter:image" content="https://i.ibb.co/Lz0YmH8/gutter-install-preview.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Seamless Gutter Installation",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.cleanflowohio.com/#business",
        "name": "CleanFlow of Ohio",
        "telephone": "+1-937-478-0689",
        "email": "cleanflowofohio@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dayton",
          "addressRegion": "OH",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        {"@type": "City", "name": "Dayton, Ohio"},
        {"@type": "City", "name": "Centerville, Ohio"},
        {"@type": "City", "name": "Washington Township, Ohio"},
        {"@type": "City", "name": "Kettering, Ohio"},
        {"@type": "City", "name": "Oakwood, Ohio"},
        {"@type": "City", "name": "Beavercreek, Ohio"}
      ],
      "description": "Custom 5-inch and 6-inch seamless aluminum gutter installation."
    }
    </script>
</head>
<body>

    <div class="topbar">
        <div class="container">
            <div class="topbar-container">
                <div class="topbar-item">
                    <i class="fas fa-phone-alt"></i> Call or Text: <a href="tel:9374780689">937-478-0689</a>
                </div>
                <div class="topbar-item">
                    <i class="fas fa-envelope"></i> Email: <a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a>
                </div>
            </div>
        </div>
    </div>

    <header id="header">
        <div class="container">
            <div class="header-container">
                <div class="logo" onclick="location.href='../index.html'">
                    CleanFlow<span>of Ohio</span>
                </div>
                <nav>
                    <ul id="nav-menu">
                        <li><a href="../index.html" id="home-link">Home</a></li>
                        <li><a href="../services.html" id="services-link" class="active">Services</a></li>
                        <li><a href="../about.html" id="about-link">About</a></li>
                        <li><i class="fas fa-times close-menu" id="close-menu"></i></li>
                    </ul>
                    <div class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </nav>
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <div id="radial-menu-overlay" class="radial-overlay">
      <div class="radial-menu-center">
        <div class="radial-close"><i class="fas fa-times"></i></div>
        <a href="/services/gutter-installation.html" class="radial-item item-1">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>
        <a href="/services/dryer-vent-cleaning.html" class="radial-item item-2">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>
        <a href="/services.html" class="radial-item item-3">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning & More</span>
        </a>
      </div>
    </div>

    <div id="installation-page" class="page page-content">
        <section id="install-hero" style="background: var(--light); padding: 80px 0;">
            <div class="container">
                <div class="grid grid-2 flex-center" data-aos="fade-up">
                    <div>
                        <h1 style="font-size: 2.8rem; margin-bottom: 20px;">Seamless Gutter Installation in the Miami Valley</h1>
                        <p style="font-size: 1.2rem; color: var(--gray); margin-bottom: 30px;">Protect your home's foundation and roofline with heavy-duty, custom-fabricated 5-inch and 6-inch seamless aluminum gutters. Installed right the first time by a 20+ year industry veteran.</p>
                        <ul class="checkmark-list mb-4" style="font-weight: 500;">
                            <li>Custom on-site fabrication for a perfect fit</li>
                            <li>Durable .032 gauge heavy-duty aluminum</li>
                            <li>5-inch & 6-inch high-capacity systems available</li>
                            <li>Owner-operated precision and accountability</li>
                        </ul>
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Get Your Free Estimate
                        </a>
                    </div>
                    <div class="text-center">
                        <img src="https://i.ibb.co/5Y2Q8b4/cleanflow-mascot.png" alt="CleanFlow of Ohio Mascot" style="max-width: 100%; height: auto; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));">
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background: #fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Why Upgrade to Seamless Gutters?</h2>
                    <p>Sectional gutters are a thing of the past. Here is why seamless is the only way to go.</p>
                </div>
                <div class="grid grid-3" data-aos="fade-up">
                    <div class="service-card" style="padding: 30px; text-align: center;">
                        <i class="fas fa-tint-slash" style="font-size: 40px; color: var(--primary); margin-bottom: 20px;"></i>
                        <h3>Zero Leaks</h3>
                        <p>Because there are no seams along the length of the gutter, there is no place for water to leak through and rot your fascia boards.</p>
                    </div>
                    <div class="service-card" style="padding: 30px; text-align: center;">
                        <i class="fas fa-ruler-combined" style="font-size: 40px; color: var(--primary); margin-bottom: 20px;"></i>
                        <h3>Custom On-Site Fit</h3>
                        <p>We roll-form your new gutters right in your driveway, ensuring exact measurements tailored perfectly to your home's unique roofline.</p>
                    </div>
                    <div class="service-card" style="padding: 30px; text-align: center;">
                        <i class="fas fa-shield-alt" style="font-size: 40px; color: var(--primary); margin-bottom: 20px;"></i>
                        <h3>.032 Gauge Durability</h3>
                        <p>We don't use flimsy builder-grade materials. Our .032 gauge aluminum withstands heavy Ohio snow, ice, and severe summer storms.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background: var(--primary-dark); color: white;">
            <div class="container">
                <div class="grid grid-2 flex-center" data-aos="fade-up">
                    <div>
                        <h2 style="color: white;">5-Inch vs. 6-Inch Gutters:<br>What Do You Need?</h2>
                        <p style="color: rgba(255,255,255,0.8); margin-bottom: 20px;">One of the most common questions I get asked. Sizing your system properly is the difference between a dry basement and an overflowing mess during a heavy downpour.</p>
                        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                            <h4 style="color: var(--accent); margin-bottom: 10px;">5-Inch Seamless Gutters</h4>
                            <p style="margin: 0; font-size: 0.95rem;">The industry standard for most traditional residential homes in the Miami Valley area. Perfect for standard pitched roofs and average rainfall.</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
                            <h4 style="color: var(--accent); margin-bottom: 10px;">6-Inch Seamless Gutters</h4>
                            <p style="margin: 0; font-size: 0.95rem;">Holds up to 40% more water! Highly recommended for large, steep roofs, metal roofs, or homes that regularly experience heavy water runoff pooling near the foundation.</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-home" style="font-size: 150px; color: rgba(255,255,255,0.1);"></i>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad" style="background: var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">See The Difference</h2>
                    <p>A properly pitched, seamlessly installed system instantly upgrades your home's curb appeal.</p>
                </div>
                <div class="text-center" data-aos="fade-up">
                    <img src="https://i.ibb.co/GvT1wS4/gutter-install-before-after.jpg" alt="New Gutter Installation Before and After" style="max-width: 100%; border-radius: 10px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: #fff;">
            <div class="container">
                <div class="warning-box" data-aos="fade-up" style="border-color: var(--primary); background: #f0f4f8;">
                    <div class="warning-content">
                        <strong style="color: var(--primary-dark);"><i class="fas fa-tag" style="margin-right: 10px;"></i>Honest Talk About Gutter Installation Cost</strong><br><br>
                        Homeowners frequently search for "seamless gutter installation cost." I don't play games with pricing. Your quote depends on the linear footage of your roofline, whether you need 5-inch or 6-inch capacity, downspout routing, and if we are tearing down old gutters. <br><br>
                        <span class="price-highlight" style="color: var(--primary);">I measure exactly what you need, and you get a written estimate. No high-pressure sales, just straight answers from the owner.</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-pad alt-bg">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Installation FAQ</h2>
                    <p>Common questions from homeowners right before they hire us.</p>
                </div>
                <div class="accordion" data-aos="fade-up">
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>How much will new seamless gutters cost?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Pricing depends on the size of your home, whether you choose 5-inch or 6-inch gutters, the materials, and any downspout or drainage upgrades. I provide a clear, written estimate after measuring your roofline so you know exactly what’s included. No surprise charges.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>Are you licensed and insured?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes, absolutely. I am fully insured and happy to provide proof before any work begins. It protects your property, protects my crew, and gives you complete peace of mind.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>What size gutters do I actually need?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most standard homes do perfectly fine with 5-inch gutters. However, if you have a larger roof, a very steep pitch, or live in an area with heavy water runoff, upgrading to 6-inch gutters is often the smartest choice. I'll evaluate your roofline and give you an honest recommendation.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>How long will installation take, and what should I expect?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most residential homes are completed in a single day. I provide a clear timeline, keep the job site spotless, and maintain open communication if weather affects our scheduling. Minimal disruption to your day is a priority.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>Will these gutters actually solve my water problems?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Properly sized seamless gutters, pitched perfectly, and paired with the right downspouts are designed specifically to move water far away from your home. During my inspection, I'll also check for existing fascia damage or drainage issues so the new system performs exactly as it should to protect your foundation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: #fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Serving the Miami Valley</h2>
                    <p>Professional seamless gutter installation throughout Montgomery and Greene Counties</p>
                </div>

                <div class="grid grid-2" data-aos="fade-up" style="max-width: 600px; margin: 0 auto;">
                    <div>
                        <h4 style="color: var(--primary-dark); margin-bottom: 15px;">Montgomery County</h4>
                        <ul class="checkmark-list">
                            <li>Dayton</li>
                            <li>Centerville</li>
                            <li>Washington Township</li>
                            <li>Kettering</li>
                            <li>Oakwood</li>
                            <li>Miamisburg</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-dark); margin-bottom: 15px;">Greene County</h4>
                        <ul class="checkmark-list">
                            <li>Beavercreek</li>
                            <li>Bellbrook</li>
                            <li>Fairborn</li>
                            <li>Xenia</li>
                            <li>Yellow Springs</li>
                            <li>Cedarville</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready for an Upgrade?</h2>
                    <p>Protect your home with a premium seamless gutter system. Serving the greater Miami Valley area.</p>
                    <div class="cta-buttons">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg btn-pulse">
                            <i class="fas fa-phone-alt"></i> Call for a Free Estimate: 937-478-0689
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 40px 0; background: var(--light);">
            <div class="container" style="text-align: center;">
                <p style="color: var(--gray);">Also need <a href="../services.html#gutter-cleaning-service" style="color: var(--primary);">routine gutter cleaning</a> or <a href="dryer-vent-cleaning.html" style="color: var(--primary);">dryer vent cleaning</a>? We do that too!</p>
            </div>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-about">
                    <a href="../index.html" class="footer-logo">
                        CleanFlow<span>of Ohio</span>
                    </a>
                    <p>Professional gutter cleaning, dryer vent cleaning, installation, and home protection services in Dayton and surrounding areas. With over 20 years of experience, I provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <p><a href="mailto:cleanflowofohio@gmail.com">cleanflowofohio@gmail.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-globe"></i>
                            <p><a href="https://www.cleanflowohio.com" target="_blank">www.cleanflowohio.com</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Open 24 Hours<br>7 Days a Week</p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Serving Dayton and surrounding areas<br>Montgomery & Greene Counties</p>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../services.html">Services</a></li>
                        <li><a href="../about.html">About</a></li>
                        <li><a href="../index.html#calculator">Cost Calculator</a></li>
                        <li><a href="../index.html#signs">Signs You Need Service</a></li>
                        <li><a href="../index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="gutter-installation.html">Gutter Installation</a></li>
                        <li><a href="../services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="../services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="../services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                        <li><a href="../about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta" id="floating-cta">
        <span class="cta-label">Get a Quote</span>
        <a href="tel:9374780689" aria-label="Call CleanFlow of Ohio">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>

    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer></script>
    <script src="../script.js" defer></script>
</body>
</html>

```

### FILE: /sitemap.xml

```xml
https://www.cleanflowohio.com/ 2026-04-09 monthly 1.00
https://www.cleanflowohio.com/services 2026-04-09 monthly 0.90
https://www.cleanflowohio.com/about 2026-04-09 yearly 0.50
https://www.cleanflowohio.com/services/dryer-vent-cleaning 2026-04-09 monthly 0.85
https://www.cleanflowohio.com/services/gutter-installation 2026-04-09 monthly 0.95

```

### FILE: /style.css

```css
:root {
    --primary-dark: #1e3c72;
    --primary: #2c5aa0;
    --primary-light: #3a6fc7;
    --accent: #f39c12;
    --accent-dark: #e67e22;
    --light: #f8f9fa;
    --dark: #212529;
    --gray: #6c757d;
    --warning: #fff3cd;
    --warning-border: #ffc107;
    --danger: #e74c3c;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    overflow-x: hidden;
    background-color: var(--light);
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 80px 0;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--primary-dark);
}

h1 {
    font-size: 2.8rem;
}

h2 {
    font-size: 2.2rem;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 30px;
}

h2:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: var(--accent);
}

h3 {
    font-size: 1.8rem;
}

p {
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1.05rem;
}

a {
    text-decoration: none;
    color: var(--primary);
    transition: all 0.3s ease;
}

a:hover {
    color: var(--accent);
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: none;
    text-align: center;
}

.btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
    z-index: -1;
}

.btn:hover:before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
    color: white;
    transform: translateY(-3px);
}

.btn-accent {
    background: var(--accent);
    color: white;
}

.btn-accent:hover {
    background: var(--accent-dark);
    color: white;
    transform: translateY(-3px);
}

.btn-lg {
    padding: 15px 35px;
    font-size: 16px;
}

/* Pulse Animation for CTAs */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(243, 156, 18, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(243, 156, 18, 0);
    }
}

.btn-pulse {
    animation: pulse 2s infinite;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.flex-center {
    justify-content: center;
    align-items: center;
}

.flex-between {
    justify-content: space-between;
}

.flex-column {
    flex-direction: column;
}

.gap-1 {
    gap: 1rem;
}

.gap-2 {
    gap: 2rem;
}

.mt-1 {
    margin-top: 1rem;
}

.mt-2 {
    margin-top: 2rem;
}

.mt-3 {
    margin-top: 3rem;
}

.mt-4 {
    margin-top: 4rem;
}

.mb-1 {
    margin-bottom: 1rem;
}

.mb-2 {
    margin-bottom: 2rem;
}

.mb-3 {
    margin-bottom: 3rem;
}

.mb-4 {
    margin-bottom: 4rem;
}

.grid {
    display: grid;
    gap: 30px;
}

.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
    grid-template-columns: repeat(4, 1fr);
}

/* Top Bar Styles */
.topbar {
    background-color: var(--primary-dark);
    color: white;
    padding: 8px 0;
    font-size: 0.9rem;
}

.topbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.topbar a {
    color: var(--accent);
    font-weight: 500;
}

.topbar a:hover {
    color: white;
}

.topbar-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Header Styles */
header {
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    margin-top: 40px; /* Height of topbar */
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header.sticky {
    padding: 10px 0;
    margin-top: 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease;
}

header.sticky .header-container {
    padding: 10px 0;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-dark);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo span {
    color: var(--accent);
    margin-left: 5px;
}

nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
}

nav ul li {
    position: relative;
}

nav ul li a {
    color: var(--dark);
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
}

nav ul li a:hover {
    color: var(--accent);
}

nav ul li a.active {
    color: var(--primary);
    font-weight: 600;
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--accent);
    bottom: -5px;
    left: 0;
    transition: all 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--dark);
}

.phone-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--primary);
    color: var(--accent);
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.phone-btn:hover {
    background-color: var(--primary-dark);
    color: var(--accent);
    transform: translateY(-3px);
}

.phone-btn i {
    font-size: 18px;
    color: var(--accent);
}

/* Floating CTA Button */
.floating-cta {
    position: fixed;
    bottom: 90px;
    right: 20px;
    z-index: 998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.floating-cta.active {
    opacity: 1;
    visibility: visible;
}

.floating-cta a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 24px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
}

.floating-cta a:hover {
    background: var(--accent-dark);
    transform: scale(1.1);
    color: white;
}

.floating-cta .cta-label {
    position: absolute;
    right: 70px;
    background: var(--dark);
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.floating-cta:hover .cta-label {
    opacity: 1;
    visibility: visible;
}

.floating-cta .cta-label:after {
    content: '';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent transparent var(--dark);
}

/* Hero Section */
#hero {
    height: 100vh;
    background: linear-gradient(rgba(30, 60, 114, 0.8), rgba(30, 60, 114, 0.8)), url('https://nedstevens.com/wp-content/uploads/2020/12/gutter-cleaning-hero-new.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
    padding: 0;
    margin-top: 40px; /* Height of topbar */
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-content h1 {
    color: white;
    font-size: 3.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.hero-btns {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.scroll-down {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    color: white;
    font-size: 30px;
    cursor: pointer;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

/* Lead Form */
.lead-form-section {
    padding: 50px 0;
}

.lead-form {
    background: #fff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
    padding: 30px;
    border-radius: 10px;
    margin-top: -100px;
    position: relative;
    z-index: 2;
}

.lead-form h3 {
    color: var(--primary);
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--primary-dark);
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 12px 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(44, 90, 160, 0.2);
    outline: none;
}

.form-submit {
    text-align: center;
}

.form-message {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    display: none;
    text-align: center;
}

.form-message.success {
    background-color: #d4edda;
    color: #155724;
}

.form-message.error {
    background-color: #f8d7da;
    color: #721c24;
}

/* About Section */
.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-text {
    flex: 1;
}

.about-image {
    flex: 1;
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-image::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid var(--accent);
    border-radius: 10px;
    top: 20px;
    left: 20px;
    z-index: -1;
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background-color: var(--primary);
    color: white;
    padding: 15px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.experience-badge span:first-child {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
}

.experience-badge span:last-child {
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1;
}

/* Process Section */
.process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.step {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.step:hover {
    transform: translateY(-10px);
}

.step i {
    font-size: 40px;
    color: var(--accent);
    margin-bottom: 20px;
}

/* Services Section */
.service-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-image {
    height: 200px;
    overflow: hidden;
}

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
}

.service-card:hover .service-image img {
    transform: scale(1.1);
}

.service-content {
    padding: 30px;
}

.service-content h3 {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 15px;
}

.service-content p {
    color: var(--gray);
    margin-bottom: 20px;
}

.service-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--primary);
    font-weight: 600;
    transition: all 0.3s ease;
}

.service-btn:hover {
    color: var(--accent);
    gap: 15px;
}

/* Warning Box */
.warning-box {
    background: var(--warning);
    border: 2px solid var(--warning-border);
    border-radius: 10px;
    padding: 30px;
    position: relative;
    margin: 40px 0;
}

.warning-box::before {
    content: '\f071';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 24px;
    position: absolute;
    top: 20px;
    left: 20px;
    color: var(--warning-border);
}

.warning-content {
    margin-left: 40px;
    font-size: 1.1rem;
    color: var(--dark);
}

.price-highlight {
    font-weight: bold;
    color: var(--accent-dark);
    font-size: 1.2rem;
    margin-top: 15px;
    display: block;
}

/* Special Offer */
.special-offer {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
    color: white;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    margin: 40px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.offer-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
}

.offer-text {
    font-size: 1.2rem;
    margin-bottom: 25px;
}

/* Calculator Styles */
.calculator-card {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
}

.calculator-form {
    margin-top: 20px;
}

.calculator-form .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.result-box {
    background-color: var(--light);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    border: 1px solid #ddd;
    display: none;
}

.result-box.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

.result-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-dark);
    margin-bottom: 10px;
}

.result-price {
    font-size: 28px;
    font-weight: 700;
    color: var(--accent);
    margin: 10px 0;
}

.result-note {
    font-size: 14px;
    color: var(--gray);
}

/* Signs Section */
.signs-section {
    background-color: var(--light);
    padding: 60px 0;
}

.signs-container {
    margin-top: 40px;
}

.signs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.sign-card {
    background: white;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.sign-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.sign-card i {
    font-size: 40px;
    color: var(--accent);
    margin-bottom: 20px;
}

.sign-card h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: var(--primary-dark);
}

.sign-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.sign-card:hover .sign-content,
.sign-card.active .sign-content {
    max-height: 200px;
}

/* Seasonal Calendar */
.calendar-section {
    padding: 60px 0;
}

.season-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.season-tab {
    padding: 12px 25px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border-radius: 50px;
    margin: 5px 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.season-tab:hover {
    background-color: var(--light);
}

.season-tab.active {
    background-color: var(--primary);
    color: white;
}

.season-content {
    display: none;
    animation: fadeIn 0.5s ease;
}

.season-content.active {
    display: block;
}

.season-card {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.season-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 15px;
}

.season-icon {
    font-size: 40px;
    color: var(--accent);
}

.season-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}

/* Benefits Section */
.benefits-section {
    background-color: var(--light);
    padding: 60px 0;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.benefit-card {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    height: 100%;
}

.benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.benefit-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 30px;
    transition: all 0.3s ease;
}

.benefit-card:hover .benefit-icon {
    background: var(--accent);
    transform: rotateY(180deg);
}

.benefit-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--primary-dark);
}

/* Bottom CTA */
.bottom-cta {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    text-align: center;
    padding: 60px 0;
}

.bottom-cta h2 {
    color: white;
    margin-bottom: 20px;
}

.bottom-cta h2:after {
    content: none;
}

.bottom-cta p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
}

/* CTA Section */
.cta-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    text-align: center;
    padding: 60px 0;
}

.cta-content h2 {
    color: white;
    margin-bottom: 20px;
}

.cta-content h2:after {
    content: none;
}

.cta-content p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
}

.phone-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 20px 0;
    display: inline-block;
    transition: all 0.3s ease;
    color: var(--accent);
}

.phone-number:hover {
    transform: scale(1.05);
    color: var(--accent);
}

.phone-number i {
    color: var(--accent);
}

.text-option {
    font-size: 1.1rem;
    margin-top: 15px;
    font-style: italic;
}

/* Badge Section */
.badge-section {
    margin-top: 40px;
}

.badges {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.badge-item {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.badge-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.badge-icon {
    font-size: 36px;
    color: var(--primary);
    margin-bottom: 10px;
}

.badge-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-dark);
    text-align: center;
    line-height: 1.3;
}

/* Serving Since */
.serving-since {
    background-color: var(--primary-dark);
    color: white;
    padding: 15px 0;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
}

.serving-since span {
    color: var(--accent);
}

/* Footer */
footer {
    background: #f8f9fa;
    padding: 50px 0 20px;
}

.footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 30px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
}

.footer-logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 20px;
    display: inline-block;
}

.footer-logo span {
    color: var(--accent);
}

.footer-about p {
    color: var(--gray);
    margin-bottom: 20px;
}

.footer-contact {
    margin-top: 20px;
}

.footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;
}

.footer-contact-item i {
    color: var(--primary);
    font-size: 18px;
    margin-top: 5px;
}

.footer-contact-item a {
    color: var(--accent);
}

.footer-contact-item p {
    color: var(--gray);
    margin: 0;
}

.footer-links h4 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--primary-dark);
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 12px;
}

.footer-links ul li a {
    color: var(--gray);
    transition: all 0.3s ease;
    position: relative;
    padding-left: 15px;
}

.footer-links ul li a:before {
    content: '\f105';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--accent);
}

.footer-links ul li a:hover {
    color: var(--primary);
    padding-left: 20px;
}

.footer-bottom {
    text-align: center;
    color: var(--gray);
    font-size: 14px;
}

/* Services Page */
.service-detail {
    margin-bottom: 60px;
}

.service-detail-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.service-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    flex-shrink: 0;
}

.service-detail-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.service-detail-image {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.service-detail-image img {
    width: 100%;
    height: auto;
    display: block;
}

.service-features {
    margin: 30px 0;
}

.service-feature {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;
}

.service-feature i {
    color: var(--accent);
    font-size: 18px;
    margin-top: 5px;
}

.service-feature p {
    margin: 0;
}

.gallery {
    margin-top: 40px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.gallery-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: all 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(30, 60, 114, 0.8), rgba(30, 60, 114, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: all 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-overlay i {
    font-size: 30px;
    color: white;
}

/* FAQ */
.faq-section {
    background-color: #f8f9fa;
    padding: 80px 0;
}

.accordion {
    margin-top: 40px;
}

.accordion-item {
    margin-bottom: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.accordion-header {
    background-color: white;
    padding: 20px 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.accordion-header h3 {
    font-size: 1.1rem;
    margin: 0;
}

.accordion-header i {
    color: var(--primary);
    transition: all 0.3s ease;
}

.accordion-header.active {
    background-color: var(--primary);
    color: white;
}

.accordion-header.active h3 {
    color: white;
}

.accordion-header.active i {
    color: white;
    transform: rotate(180deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background-color: white;
}

.accordion-content.active {
    max-height: 500px;
    padding: 20px 30px;
}

/* Contact */
.contact-info-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: all 0.3s ease;
}

.contact-info-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.contact-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    margin: 0 auto 20px;
}

.contact-info-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: var(--primary-dark);
}

.contact-info-card p,
.contact-info-card a {
    color: var(--gray);
    margin-bottom: 0;
}

.contact-info-card a {
    color: var(--accent);
}

.contact-info-card a:hover {
    color: var(--primary);
}

/* Map */
.map-container {
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
}

/* Back to Top */
.back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--primary-dark);
    transform: translateY(-5px);
}

/* Page Content */
.page-content {
    padding-top: 100px;
}

/* Checkmark List */
.checkmark-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.checkmark-list li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    line-height: 1.7;
}

.checkmark-list li:before {
    content: '\f00c';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 0;
    color: var(--accent);
}

/* Animation Classes */
.fade-up {
    animation: fadeUp 1s ease forwards;
    opacity: 0;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 1s ease forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Responsive Styles */
@media screen and (max-width: 1199.98px) {
    .container {
        max-width: 960px;
    }
}

@media screen and (max-width: 991.98px) {
    .container {
        max-width: 720px;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    .grid-3 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-4 {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-top {
        grid-template-columns: 1fr 1fr;
    }

    .lead-form {
        margin-top: -50px;
    }
}

@media screen and (max-width: 767.98px) {
    .container {
        max-width: 540px;
    }

    nav ul {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 70%;
        background: white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
        z-index: 1001;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    }

    nav ul.active {
        right: 0;
    }

    .menu-toggle {
        display: block;
        padding: 10px;
    }

    .close-menu {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
    }

    /* Mobile Header - Icon Only Phone Button */
    .phone-btn {
        padding: 0;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        justify-content: center;
    }

    .phone-btn span {
        display: none;
    }

    .phone-btn i {
        font-size: 20px;
        margin: 0;
    }

    .logo {
        font-size: 20px;
    }

    .header-container {
        padding: 12px 0;
    }

    header.sticky .header-container {
        padding: 8px 0;
    }

    .grid-2 {
        grid-template-columns: 1fr;
    }

    .grid-3 {
        grid-template-columns: 1fr;
    }

    .grid-4 {
        grid-template-columns: 1fr;
    }

    .footer-top {
        grid-template-columns: 1fr;
    }

    .about-content {
        flex-direction: column;
    }

    .about-image {
        order: -1;
    }

    .about-image::before {
        display: none;
    }

    .experience-badge {
        right: 20px;
        top: 20px;
        width: 80px;
        height: 80px;
    }

    .experience-badge span:first-child {
        font-size: 1.5rem;
    }

    .experience-badge span:last-child {
        font-size: 0.8rem;
    }

    .phone-number {
        font-size: 2rem;
    }

    .hero-btns {
        flex-direction: column;
        align-items: center;
    }

    .lead-form {
        margin-top: -30px;
    }

    /* Mobile Topbar - Better Visibility */
    .topbar {
        padding: 10px 0;
    }

    .topbar-container {
        flex-direction: column;
        gap: 8px;
    }

    .topbar-item {
        font-size: 0.85rem;
    }

    /* Floating CTA adjustments */
    .floating-cta {
        bottom: 80px;
        right: 15px;
    }

    .floating-cta a {
        width: 55px;
        height: 55px;
        font-size: 22px;
    }

    .floating-cta .cta-label {
        display: none;
    }
}

@media screen and (max-width: 575.98px) {
    h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero-btns {
        flex-direction: column;
    }

    .phone-number {
        font-size: 1.8rem;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .lead-form {
        padding: 20px 15px;
        margin-top: 0;
    }

    /* Smaller screens - even smaller header */
    .logo {
        font-size: 18px;
    }

    .phone-btn {
        width: 42px;
        height: 42px;
    }

    .phone-btn i {
        font-size: 18px;
    }

    .menu-toggle {
        font-size: 22px;
    }
}
/* Radial Menu Overlay */
.radial-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(30, 60, 114, 0.95);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.radial-overlay.active {
  opacity: 1;
  visibility: visible;
}

.radial-menu-center {
  position: relative;
  width: 100px;
  height: 100px;
}

.radial-close {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.radial-close:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--accent-dark);
}

.radial-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.radial-item i {
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 8px;
}

.radial-item:hover {
  color: var(--accent);
  transform: scale(1.05);
}

.radial-overlay.active .item-1 {
  transform: translate(-160%, -120%) scale(1);
  opacity: 1;
  transition-delay: 0.1s;
}

.radial-overlay.active .item-2 {
  transform: translate(60%, -120%) scale(1);
  opacity: 1;
  transition-delay: 0.2s;
}

.radial-overlay.active .item-3 {
  transform: translate(-50%, 60%) scale(1);
  opacity: 1;
  transition-delay: 0.3s;
}

@media screen and (max-width: 575.98px) {
  .radial-item { width: 110px; height: 110px; font-size: 12px; }
  .radial-overlay.active .item-1 { transform: translate(-130%, -110%) scale(1); }
  .radial-overlay.active .item-2 { transform: translate(30%, -110%) scale(1); }
  .radial-overlay.active .item-3 { transform: translate(-50%, 40%) scale(1); }
}

```

### FILE: /vercel.json

```json
{
  "rewrites": [
    {"source": "/services", "destination": "/services.html"},
    {"source": "/about", "destination": "/about.html"},
    {"source": "/services/dryer-vent-cleaning", "destination": "/services/dryer-vent-cleaning.html"},
    {"source": "/services/gutter-installation", "destination": "/services/gutter-installation.html"}
  ],
  "redirects": [
    {
      "source": "/:path*",
      "has": [{"type": "host", "value": "cleanflowohio.com"}],
      "destination": "https://www.cleanflowohio.com/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico)",
      "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]
    },
    {
      "source": "/(.*)",
      "headers": [{"key": "Cache-Control", "value": "public, max-age=0, must-revalidate"}]
    }
  ]
}

```

## Excluded or Unreadable Files Report

None


## Completion Report

Export completed successfully.