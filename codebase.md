===== FILE: LICENSE =====
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


===== FILE: README.md =====
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

===== FILE: about.html =====
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

===== FILE: index.html =====
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleanFlow of Ohio | Professional Gutter Cleaning, Protection & Drainage</title>
    <meta name="description" content="CleanFlow of Ohio provides professional gutter cleaning, gutter guards, seamless gutters, dryer vent cleaning, underground downspout extensions, and drainage solutions in Dayton and the greater Miami Valley.">
    <meta name="keywords" content="gutter cleaning, gutter protection, gutter maintenance, gutter repairs, gutter guards, Dayton gutter cleaning, Montgomery County gutter services, Greene County gutter services, professional gutter cleaning, seamless gutters, dryer vent cleaning, underground downspout extensions, drainage solutions, French drains, pooling water yard drainage">
    <link rel="canonical" href="https://www.cleanflowohio.com/" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/">
    <meta property="og:title" content="CleanFlow of Ohio | Professional Gutter Cleaning & Drainage Services">
    <meta property="og:description" content="Professional gutter cleaning, protection, installation, dryer vent cleaning, and drainage solutions in the greater Miami Valley. Call 937-478-0689.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="CleanFlow of Ohio | Professional Gutter Cleaning">
    <meta name="twitter:description" content="Professional gutter cleaning, gutter protection, dryer vent cleaning, and drainage services in Dayton and the greater Miami Valley.">
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
      "description": "Professional gutter cleaning, gutter protection, seamless gutter installation, dryer vent cleaning, underground downspout extensions, and drainage solutions in Dayton and the greater Miami Valley.",
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
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dryer Vent Cleaning"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Seamless Gutter Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Underground Downspout Extensions and Drainage Solutions"}}
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
                    <p>Prevent costly water damage with expert gutter maintenance, gutter protection, seamless gutter installation, dryer vent cleaning, and drainage solutions from CleanFlow of Ohio.</p>
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
                            <option value="Gutter Installation">Gutter Installation</option>
                            <option value="Dryer Vent Cleaning">Dryer Vent Cleaning</option>
                            <option value="Underground Drainage / Downspout Extensions">Underground Drainage / Downspout Extensions</option>
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
                        <strong>Here's what most homeowners don't realize:</strong> When gutters clog, water doesn't just overflow. It backs up behind the gutters, slowly rotting your fascia boards and soffits from the inside out. <br>
                        <span class="price-highlight">A $200 cleaning today can help prevent a $2,000+ repair tomorrow.</span>
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
                        <p>On-time arrival and tidy workmanship.</p>
                    </div>
                    <div class="step">
                        <i class="fas fa-thumbs-up"></i>
                        <h3>3 • Peace of Mind</h3>
                        <p>Cleaner gutters, better water flow, and fewer exterior headaches.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-overview" class="section-pad" style="background:var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Services</h2>
                    <p>Professional gutter, dryer vent, and drainage-related services to help protect your home.</p>
                </div>

                <div class="grid grid-3" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-card">
                        <div class="service-image">
                            <img src="https://cdn.prod.website-files.com/614a070736f4a72073561d14/614a732f2f7c6cfc52315c10_gutter-cleaning-before-after.jpg" alt="Professional Gutter Cleaning Service">
                        </div>
                        <div class="service-content">
                            <h3>Gutter Cleaning</h3>
                            <p>Complete removal of debris from gutters and downspouts to ensure proper water flow and help prevent water damage.</p>
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
                            <p>Expert repairs for leaking gutters, sagging sections, loose hangers, separated joints, and downspout issues.</p>
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
                            <p>High-quality gutter guards that reduce clogs, protect your gutter system, and include a lifetime warranty.</p>
                            <a href="services.html#gutter-protection-service" class="service-btn">
                                Learn More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="drainage-overview" class="section-pad" style="background:#fff;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Drainage & Downspout Solutions</h2>
                    <p>Moving roof runoff away from the home is just as important as keeping the gutters clean.</p>
                </div>

                <div class="warning-box" data-aos="fade-up" style="background: var(--light); border-color: var(--primary);">
                    <div class="warning-content">
                        <strong>Need help with pooling water or downspout runoff?</strong><br><br>
                        CleanFlow of Ohio also helps homeowners with underground downspout extensions, drainage solutions, water pooling near the home, yard drainage concerns, and runoff problems around foundations, walkways, patios, and landscaping.
                        <br><br>
                        <span class="price-highlight" style="color: var(--primary);">A dedicated drainage page is coming soon, but you can call now for a drainage assessment.</span>
                    </div>
                </div>

                <div class="text-center">
                    <a href="tel:9374780689" class="btn btn-primary btn-lg">
                        <i class="fas fa-phone-alt"></i> Call for Drainage Assessment
                    </a>
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
                            <p>If you notice water spilling over the sides of your gutters during rainfall, they're likely clogged with debris and need cleaning to prevent water damage.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-seedling"></i>
                        <h3>Plants Growing</h3>
                        <div class="sign-content">
                            <p>Seeds carried by wind or birds can settle in debris-filled gutters and start growing. If you see greenery sprouting from your gutters, it's time for a cleaning.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-water"></i>
                        <h3>Water Stains</h3>
                        <div class="sign-content">
                            <p>Water stains on siding or foundation walls can be a sign that water isn't being properly moved away from your home.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-weight-hanging"></i>
                        <h3>Sagging Gutters</h3>
                        <div class="sign-content">
                            <p>Sagging gutters often mean the system is weighed down with debris and water. That extra weight can eventually cause sections to pull loose.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-bug"></i>
                        <h3>Pest Infestations</h3>
                        <div class="sign-content">
                            <p>Standing water and decomposing debris in gutters can attract mosquitoes, carpenter ants, rodents, and other pests.</p>
                        </div>
                    </div>

                    <div class="sign-card" onclick="toggleSign(this)">
                        <i class="fas fa-icicles"></i>
                        <h3>Ice Dams</h3>
                        <div class="sign-content">
                            <p>In winter, clogged gutters can contribute to ice dams and water backing up under shingles, which can lead to interior water damage.</p>
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
                        <p>Summer is the perfect time to inspect your gutters, clean out storm debris, and evaluate drainage concerns while weather conditions are favorable.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Check for nests from birds, wasps, or other pests</li>
                            <li>Inspect for sagging sections that need reinforcement</li>
                            <li>Clear debris from summer storms</li>
                            <li>Look for signs of rust or corrosion on metal gutters</li>
                            <li>Watch for pooling water around downspouts and foundation areas</li>
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
                            <li>Clean gutters after the majority of leaves have fallen</li>
                            <li>Consider a second cleaning if you have many trees</li>
                            <li>Check downspouts for clogs and proper drainage</li>
                            <li>Inspect for loose gutter sections before winter</li>
                            <li>Consider installing gutter guards for long-term protection</li>
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
                            <li>Monitor for ice dam formation during freeze and thaw cycles</li>
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
                        <p>Properly functioning gutters direct water away from your home's foundation, helping prevent cracks, leaks, and structural damage.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3 class="benefit-title">Preserve Exterior</h3>
                        <p>Clean gutters prevent overflow that can damage siding, fascia boards, soffits, and painted surfaces.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <h3 class="benefit-title">Protect Landscaping</h3>
                        <p>Properly diverted rainwater protects garden beds, plants, mulch, and soil around your property.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-bug-slash"></i>
                        </div>
                        <h3 class="benefit-title">Prevent Pests</h3>
                        <p>Clean gutters help eliminate standing water and debris that attract mosquitoes, termites, rodents, and other pests.</p>
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
                            <li>Hand removal of debris from gutters and roof valleys</li>
                            <li>Complete downspout flush and flow testing</li>
                            <li>Minor repairs such as resealing joints and realigning sections</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="checkmark-list">
                            <li>Before and after photos of your gutters</li>
                            <li>Honest assessment and recommendations</li>
                            <li>Optional gutter guards with lifetime warranty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="special-offer">
            <div class="container">
                <div class="special-offer" data-aos="fade-up">
                    <div class="offer-title"><i class="fas fa-fire-extinguisher"></i> SUMMER SPECIAL: Dryer Vent Cleaning</div>
                    <div class="offer-text">Professional dryer vent cleaning to reduce fire risk and improve dryer efficiency.</div>
                    <div style="font-size: 2rem; font-weight: 700; margin: 15px 0;">$150 Summer Special</div>
                    <div style="font-size: 0.95rem; margin-bottom: 20px; opacity: 0.9;">Regularly $200 • Save $50 when you mention this special • Valid through September 1, 2026</div>
                    <div style="font-size: 0.9rem; margin-bottom: 20px; opacity: 0.9; max-width: 760px; margin-left: auto; margin-right: auto;">
                        Promotional price applies to standard one-story, ground-level dryer vent access. Roof access, difficult ladder placement, elevated exterior vents, unusually long vent runs, or heavily restricted systems may require a custom quote.
                    </div>
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
                    <h2>Ready for Better Water Flow?</h2>
                    <p>Call now for a free estimate and to schedule your professional gutter, dryer vent, or drainage-related service.</p>
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
                    <p>Professional gutter cleaning, gutter protection, dryer vent cleaning, seamless gutter installation, and drainage-related exterior services in Dayton and the greater Miami Valley.</p>
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
                        <li><a href="index.html#drainage-overview">Drainage Solutions</a></li>
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
                        <li><a href="services.html#underground-drainage-service">Drainage Solutions</a></li>
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

===== FILE: robots.txt =====
User-agent: *
Allow: /

Sitemap: https://www.cleanflowohio.com/sitemap.xml

===== FILE: script.js =====
(function () {
  "use strict";

  const CALCULATOR_DISCOUNT_RATE = 0.20;

  function roundToNearestFive(amount) {
    return Math.round(amount / 5) * 5;
  }

  function applyCalculatorDiscount(amount) {
    return roundToNearestFive(amount * (1 - CALCULATOR_DISCOUNT_RATE));
  }

  function formatMoney(amount) {
    return "$" + Math.round(amount).toLocaleString("en-US");
  }

  function getSizeAdjustment(linearFeet) {
    if (linearFeet <= 160) return 0;
    if (linearFeet <= 220) return 20;
    if (linearFeet <= 280) return 40;
    if (linearFeet <= 350) return 70;
    return 110;
  }

  function getDebrisAdjustment(debrisLevel) {
    const debrisAdjustments = {
      light: -15,
      medium: 0,
      heavy: 45
    };

    return debrisAdjustments[debrisLevel] || 0;
  }

  function calculateGutterEstimate() {
    const linearFeetInput = document.getElementById("linearFeet");
    const storiesInput = document.getElementById("stories");
    const debrisInput = document.getElementById("debris");
    const resultBox = document.getElementById("resultBox");
    const estimatedPrice = document.getElementById("estimatedPrice");

    if (!linearFeetInput || !storiesInput || !debrisInput || !resultBox || !estimatedPrice) {
      return;
    }

    const linearFeet = Number(linearFeetInput.value);
    const stories = storiesInput.value;
    const debrisLevel = debrisInput.value;

    if (!linearFeet || linearFeet < 50) {
      estimatedPrice.textContent = "Enter at least 50 linear feet";
      resultBox.style.display = "block";
      resultBox.classList.add("active");
      return;
    }

    const basePrice = stories === "2" ? 235 : 185;
    const sizeAdjustment = getSizeAdjustment(linearFeet);
    const debrisAdjustment = getDebrisAdjustment(debrisLevel);

    let lowEstimate = basePrice + sizeAdjustment + debrisAdjustment;

    if (stories === "1") {
      lowEstimate = Math.max(lowEstimate, 170);
    } else {
      lowEstimate = Math.max(lowEstimate, 220);
    }

    const highEstimate = lowEstimate + 50;

    const discountedLowEstimate = applyCalculatorDiscount(lowEstimate);
    const discountedHighEstimate = applyCalculatorDiscount(highEstimate);

    estimatedPrice.textContent = `${formatMoney(discountedLowEstimate)} - ${formatMoney(discountedHighEstimate)}`;

    const resultTitle = resultBox.querySelector(".result-title");
    const resultNote = resultBox.querySelector(".result-note");

    if (resultTitle) {
      resultTitle.textContent = "Estimated Starting Range";
    }

    if (resultNote) {
      resultNote.innerHTML = 'This is a starting estimate. Final pricing may vary depending on access, roof height, gutter guards, debris level, roof pitch, downspout clogs, and overall job difficulty. For an accurate quote, call or text <a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a>.';
    }

    resultBox.style.display = "block";
    resultBox.classList.add("active");

    resultBox.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }

  function getServiceWheelMarkup() {
    return `
      <div class="radial-menu-center">
        <div class="radial-close" aria-label="Close service menu">
          <i class="fas fa-times"></i>
        </div>

        <a href="/services.html#gutter-cleaning-service" class="radial-item item-1">
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning</span>
        </a>

        <a href="/services.html#gutter-repairs-service" class="radial-item item-2">
          <i class="fas fa-wrench"></i>
          <span>Gutter Repairs</span>
        </a>

        <a href="/services.html#gutter-protection-service" class="radial-item item-3">
          <i class="fas fa-shield-alt"></i>
          <span>Gutter Guards</span>
        </a>

        <a href="/services/gutter-installation.html" class="radial-item item-4">
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>

        <a href="/services/dryer-vent-cleaning.html" class="radial-item item-5">
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>

        <a href="/services.html#underground-drainage-service" class="radial-item item-6">
          <i class="fas fa-water"></i>
          <span>Drainage Solutions</span>
        </a>
      </div>
    `;
  }

  function ensureSitewideServiceWheel() {
    let radialOverlay = document.getElementById("radial-menu-overlay");

    if (!radialOverlay) {
      radialOverlay = document.createElement("div");
      radialOverlay.id = "radial-menu-overlay";
      radialOverlay.className = "radial-overlay";
      document.body.appendChild(radialOverlay);
    }

    radialOverlay.classList.add("radial-overlay");
    radialOverlay.innerHTML = getServiceWheelMarkup();

    const existingTriggers = document.querySelectorAll(".floating-service-trigger");

    if (!existingTriggers.length) {
      const floatingServiceTrigger = document.createElement("button");

      floatingServiceTrigger.type = "button";
      floatingServiceTrigger.className = "floating-service-trigger";
      floatingServiceTrigger.setAttribute("data-service-menu-trigger", "true");
      floatingServiceTrigger.setAttribute("aria-label", "Open service wheel");
      floatingServiceTrigger.innerHTML = '<i class="fas fa-th-large"></i><span>Services</span>';

      document.body.appendChild(floatingServiceTrigger);
      return;
    }

    existingTriggers.forEach(function (trigger) {
      trigger.setAttribute("data-service-menu-trigger", "true");
      trigger.setAttribute("aria-label", "Open service wheel");

      if (trigger.tagName.toLowerCase() === "button") {
        trigger.type = "button";
      }

      trigger.innerHTML = '<i class="fas fa-th-large"></i><span>Services</span>';
    });
  }

  function toggleSign(card) {
    if (!card) return;
    card.classList.toggle("active");
  }

  function toggleAccordion(header) {
    if (!header) return;

    const accordionItem = header.closest(".accordion-item");
    const accordion = header.closest(".accordion");
    const content = accordionItem ? accordionItem.querySelector(".accordion-content") : null;

    if (!accordionItem || !content) return;

    const isOpen = header.classList.contains("active");

    if (accordion) {
      accordion.querySelectorAll(".accordion-header").forEach(function (item) {
        item.classList.remove("active");
      });

      accordion.querySelectorAll(".accordion-content").forEach(function (item) {
        item.classList.remove("active");
        item.style.maxHeight = null;
      });
    }

    if (!isOpen) {
      header.classList.add("active");
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + 48 + "px";
    }
  }

  window.toggleSign = toggleSign;
  window.toggleAccordion = toggleAccordion;

  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 80
      });
    }
  }

  function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    if (!menuToggle || !navMenu) return;

    function openMenu() {
      navMenu.classList.add("active");
      document.body.classList.add("menu-open");
    }

    function closeMobileMenu() {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }

    menuToggle.addEventListener("click", openMenu);

    if (closeMenu) {
      closeMenu.addEventListener("click", closeMobileMenu);
    }

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });

    window.closeMobileMenu = closeMobileMenu;
  }

  function initRadialMenu() {
    const radialOverlay = document.getElementById("radial-menu-overlay");
    const radialClose = document.querySelector(".radial-close");
    const triggers = document.querySelectorAll("[data-service-menu-trigger]");

    if (!radialOverlay) return;

    function openRadialMenu(event) {
      if (event) {
        event.preventDefault();
      }

      radialOverlay.classList.add("active");
      document.body.classList.add("radial-menu-open");

      const navMenu = document.getElementById("nav-menu");

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      document.body.classList.remove("menu-open");
    }

    function closeRadialMenu() {
      radialOverlay.classList.remove("active");
      document.body.classList.remove("radial-menu-open");
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", openRadialMenu);
    });

    if (radialClose) {
      radialClose.addEventListener("click", closeRadialMenu);
    }

    radialOverlay.addEventListener("click", function (event) {
      if (event.target === radialOverlay) {
        closeRadialMenu();
      }
    });

    radialOverlay.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeRadialMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeRadialMenu();
      }
    });

    window.openRadialMenu = openRadialMenu;
    window.closeRadialMenu = closeRadialMenu;
  }

  function initCalculator() {
    const calculateBtn = document.getElementById("calculateBtn");

    if (!calculateBtn) return;

    calculateBtn.addEventListener("click", function (event) {
      event.preventDefault();
      calculateGutterEstimate();
    });

    const inputs = ["linearFeet", "stories", "debris"]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    inputs.forEach(function (input) {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          calculateGutterEstimate();
        }
      });
    });
  }

  function initSeasonTabs() {
    const tabs = document.querySelectorAll(".season-tab");
    const contents = document.querySelectorAll(".season-content");

    if (!tabs.length || !contents.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const season = tab.getAttribute("data-season");

        tabs.forEach(function (item) {
          item.classList.remove("active");
        });

        contents.forEach(function (content) {
          content.classList.remove("active");
        });

        tab.classList.add("active");

        const activeContent = document.getElementById(season + "-content");

        if (activeContent) {
          activeContent.classList.add("active");
        }
      });
    });
  }

  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        if (target.classList.contains("service-detail-section")) {
          target.classList.add("section-highlight");

          window.setTimeout(function () {
            target.classList.remove("section-highlight");
          }, 1200);
        }
      });
    });
  }

  function initScrollEffects() {
    const header = document.getElementById("header");
    const backToTop = document.getElementById("back-to-top");
    const floatingCta = document.getElementById("floating-cta");

    function handleScroll() {
      const scrolled = window.scrollY > 120;

      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 40);
        header.classList.toggle("sticky", window.scrollY > 40);
      }

      if (backToTop) {
        backToTop.classList.toggle("active", scrolled);
      }

      if (floatingCta) {
        floatingCta.classList.toggle("active", scrolled);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  }

  function initQuoteFormStatus() {
    const formMessage = document.getElementById("formMessage");

    if (!formMessage) return;

    const params = new URLSearchParams(window.location.search);
    const submitted = params.get("submitted");

    if (submitted === "true") {
      formMessage.textContent = "Thank you. Your quote request was sent successfully. We will follow up as soon as possible.";
      formMessage.classList.add("success");
      formMessage.style.display = "block";
    }

    if (submitted === "error") {
      formMessage.textContent = "Something went wrong. Please call or text 937-478-0689 for the fastest response.";
      formMessage.classList.add("error");
      formMessage.style.display = "block";
    }
  }

  function initActiveNavLinks() {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href) return;

      link.classList.remove("active");

      if (
        (currentPath === "" && href === "index.html") ||
        (currentPath === "/" && href === "index.html") ||
        currentPath.endsWith(href.replace(".html", "")) ||
        currentPath.endsWith(href) ||
        (currentPath.includes("/services") && href === "services.html")
      ) {
        link.classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureSitewideServiceWheel();
    initAOS();
    initMobileMenu();
    initRadialMenu();
    initCalculator();
    initSeasonTabs();
    initSmoothScrolling();
    initScrollEffects();
    initQuoteFormStatus();
    initActiveNavLinks();
  });
})();

===== FILE: services.html =====
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Services | CleanFlow of Ohio - Gutters, Dryer Vents & Drainage</title>
    <meta name="description" content="Professional gutter cleaning, gutter repair, gutter protection, dryer vent cleaning, seamless gutter installation, underground downspout extensions, and drainage solutions in the greater Miami Valley area.">
    <meta name="keywords" content="gutter cleaning services, gutter repair, gutter guards, gutter protection, dryer vent cleaning, Miami Valley gutter services, professional gutter maintenance, underground downspout extensions, drainage solutions, pooling water, yard drainage, French drains">
    <link rel="canonical" href="https://www.cleanflowohio.com/services" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/services">
    <meta property="og:title" content="Our Services | CleanFlow of Ohio">
    <meta property="og:description" content="Professional gutter cleaning, repair, protection, dryer vent cleaning, and drainage-related services for the greater Miami Valley area.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Our Services | CleanFlow of Ohio">
    <meta name="twitter:description" content="Professional gutter, dryer vent, and drainage-related services in the greater Miami Valley.">
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
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dryer Vent Cleaning"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Seamless Gutter Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Underground Downspout Extensions and Drainage Solutions"}}
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
            "text": "Most homes should have gutters cleaned at least twice a year, once in the spring and once in the fall after the leaves have fallen. Homes with pine trees or heavy debris may need more frequent cleanings."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs that I need gutter repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs include sagging gutters, gutters pulling away from the house, water marks on siding, water pooling around the foundation, visible cracks, rust, and leaks from joints or corners during rainfall."
          }
        },
        {
          "@type": "Question",
          "name": "Do gutter guards really work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, quality gutter guards work when properly installed. While no system eliminates every future maintenance need, gutter guards can significantly reduce clogs and cleaning frequency."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer drainage solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CleanFlow of Ohio helps with underground downspout extensions, drainage concerns, pooling water, and runoff problems around homes and foundations."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CleanFlow of Ohio proudly serves the greater Miami Valley area."
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
            <div class="radial-close" aria-label="Close service menu">
                <i class="fas fa-times"></i>
            </div>
            <a href="services/gutter-installation.html" class="radial-item item-1">
                <i class="fas fa-tools"></i>
                <span>New Gutter Installation</span>
            </a>
            <a href="services/dryer-vent-cleaning.html" class="radial-item item-2">
                <i class="fas fa-fire-extinguisher"></i>
                <span>Dryer Vent Cleaning</span>
            </a>
            <a href="services.html#service-selector" class="radial-item item-3">
                <i class="fas fa-broom"></i>
                <span>Gutter Cleaning & More</span>
            </a>
        </div>
    </div>

    <div id="services-page" class="page page-content">
        <section id="services-hero" class="services-hero-wow">
            <div class="container">
                <div class="section-header text-center services-hero-content" data-aos="fade-up">
                    <div class="hero-kicker">CleanFlow of Ohio Services</div>
                    <h1>Choose the Right Service for Your Home</h1>
                    <p>Gutter cleaning, gutter protection, dryer vent cleaning, seamless gutter installation, and drainage-related services designed to help protect your home from clogs, overflow, poor drainage, and exterior water problems.</p>

                    <div class="service-hero-badges">
                        <span><i class="fas fa-camera"></i> Photo Documentation</span>
                        <span><i class="fas fa-water"></i> Flow Testing</span>
                        <span><i class="fas fa-shield-alt"></i> Lifetime Guard Warranty</span>
                    </div>

                    <div class="services-hero-actions">
                        <a href="#service-selector" class="btn hero-main-cta">
                            <i class="fas fa-hand-pointer"></i> Explore Services
                        </a>
                        <a href="tel:9374780689" class="btn hero-call-cta">
                            <i class="fas fa-phone-alt"></i> Call 937-478-0689
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-selector" class="service-card-showcase-section">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">What Can We Help With?</h2>
                    <p>Choose the service that best fits your home. Each card below gives you a quick path to the details, pricing notes, and next step.</p>
                </div>

                <div class="premium-service-grid">
                    <article class="premium-service-card card-from-left" data-aos="fade-right" data-aos-delay="50">
                        <div class="premium-service-media cleaning-card">
                            <i class="fas fa-broom"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Most Common Service</span>
                            <h3>Gutter Cleaning</h3>
                            <p>Debris removal, downspout flushing, flow checks, before and after photos, and cleanup when the job is complete.</p>
                            <ul>
                                <li>Starting at $150 for standard homes</li>
                                <li>Includes downspout flush and visible inspection</li>
                                <li>Great for spring, fall, and storm cleanup</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="#gutter-cleaning-service" class="btn btn-primary">View Details</a>
                                <a href="index.html#calculator" class="btn btn-accent">Estimate Tool</a>
                            </div>
                        </div>
                    </article>

                    <article class="premium-service-card card-from-right" data-aos="fade-left" data-aos-delay="100">
                        <div class="premium-service-media repair-card">
                            <i class="fas fa-wrench"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Fix Water Issues</span>
                            <h3>Gutter Repairs</h3>
                            <p>Repair support for leaking corners, loose sections, sagging gutters, separated joints, hangers, brackets, end caps, and downspout issues.</p>
                            <ul>
                                <li>Good option when replacement is not necessary</li>
                                <li>Targets problem areas causing overflow</li>
                                <li>Helps extend the life of the gutter system</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="#gutter-repairs-service" class="btn btn-primary">View Details</a>
                                <a href="tel:9374780689" class="btn btn-accent">Call Now</a>
                            </div>
                        </div>
                    </article>

                    <article class="premium-service-card card-from-left" data-aos="fade-right" data-aos-delay="150">
                        <div class="premium-service-media guards-card">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Lifetime Warranty</span>
                            <h3>Gutter Guards</h3>
                            <p>Professionally installed gutter guards designed to reduce clogs, help prevent overflow, and protect your gutter system long term.</p>
                            <ul>
                                <li>Lifetime warranty on gutter guard installations</li>
                                <li>Helps reduce cleaning frequency</li>
                                <li>Professional bolt-in installation</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="#gutter-protection-service" class="btn btn-primary">View Details</a>
                                <a href="tel:9374780689" class="btn btn-accent">Get Quote</a>
                            </div>
                        </div>
                    </article>

                    <article class="premium-service-card card-from-right featured-service-card" data-aos="fade-left" data-aos-delay="200">
                        <div class="premium-service-media install-card">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Precision Installation</span>
                            <h3>New Gutter Installation</h3>
                            <p>Seamless gutter replacement and installation with clean routing, proper sizing, and downspout planning for your home.</p>
                            <ul>
                                <li>5-inch systems available with 2x3 downspouts</li>
                                <li>6-inch systems available with 3x4 downspouts</li>
                                <li>Clean routing, proper sizing, and downspout planning</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="services/gutter-installation.html" class="btn btn-primary">Open Installation Page</a>
                                <a href="tel:9374780689" class="btn btn-accent">Call Now</a>
                            </div>
                        </div>
                    </article>

                    <article class="premium-service-card card-from-left special-service-card" data-aos="fade-right" data-aos-delay="250">
                        <div class="premium-service-media dryer-card">
                            <i class="fas fa-fire-extinguisher"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Summer Special</span>
                            <h3>Dryer Vent Cleaning</h3>
                            <p>Professional dryer vent cleaning to improve airflow, lower drying times, reduce lint buildup, and reduce fire risk.</p>
                            <ul>
                                <li>Summer special: $150, regularly $200</li>
                                <li>Valid through September 1, 2026</li>
                                <li>Dedicated dryer vent page available</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="services/dryer-vent-cleaning.html" class="btn btn-primary">Open Dryer Vent Page</a>
                                <a href="tel:9374780689" class="btn btn-accent">Book Service</a>
                            </div>
                        </div>
                    </article>

                    <article class="premium-service-card card-from-right" data-aos="fade-left" data-aos-delay="300">
                        <div class="premium-service-media drainage-card">
                            <i class="fas fa-water"></i>
                        </div>
                        <div class="premium-service-body">
                            <span class="premium-service-label">Water Management</span>
                            <h3>Drainage Solutions</h3>
                            <p>Support for underground downspout extensions, pooling water, runoff problems, and water dumping too close to the home.</p>
                            <ul>
                                <li>Downspout extension planning</li>
                                <li>Pooling water and runoff assessments</li>
                                <li>Drainage page coming soon</li>
                            </ul>
                            <div class="premium-service-actions">
                                <a href="#underground-drainage-service" class="btn btn-primary">View Details</a>
                                <a href="tel:9374780689" class="btn btn-accent">Call for Assessment</a>
                            </div>
                        </div>
                    </article>
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
                        <div class="service-detail-header">
                            <div class="service-icon"><i class="fas fa-broom"></i></div>
                            <div>
                                <span class="service-eyebrow">Clean, flush, document</span>
                                <h2>Gutter Cleaning</h2>
                            </div>
                        </div>
                        <p class="service-desc">Complete removal of leaves, debris, and blockages from your gutters and downspouts to ensure proper water flow away from your home.</p>

                        <h3>What's Included:</h3>
                        <ul class="checkmark-list">
                            <li>Hand removal of debris from gutters</li>
                            <li>Flushing and testing of downspouts</li>
                            <li>Minor repairs and resealing of joints when appropriate</li>
                            <li>Inspection for visible issues or damage</li>
                            <li>Before and after photos</li>
                            <li>Cleanup of removed debris</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-tag"></i>
                            Starting at <strong>$150</strong> for standard homes
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
                        <div class="service-detail-header">
                            <div class="service-icon"><i class="fas fa-wrench"></i></div>
                            <div>
                                <span class="service-eyebrow">Leaks, sagging, loose sections</span>
                                <h2>Gutter Repairs</h2>
                            </div>
                        </div>
                        <p class="service-desc">Professional repair services for leaking, sagging, or damaged gutters. I restore your gutters to proper working condition whenever repair is the right option.</p>

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
                        <div class="service-detail-header">
                            <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
                            <div>
                                <span class="service-eyebrow">Reduce clogs long term</span>
                                <h2>Gutter Protection</h2>
                            </div>
                        </div>
                        <p class="service-desc">High-quality gutter guard installation to reduce clogs, protect your gutter system, and provide long-term peace of mind with a lifetime warranty.</p>

                        <h3>Benefits of Gutter Guards:</h3>
                        <ul class="checkmark-list">
                            <li>Dramatically reduce gutter cleaning frequency</li>
                            <li>Help prevent clogs and water overflow</li>
                            <li>Keep birds, rodents, and insects out of gutters</li>
                            <li>Extend the life of your gutter system</li>
                            <li>Lifetime warranty on gutter guard installations</li>
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

        <section id="gutter-installation-service" class="service-detail-section alt-bg">
            <div class="container">
                <div class="service-detail service-detail-single" data-aos="fade-up">
                    <div class="service-detail-content">
                        <div class="service-detail-header">
                            <div class="service-icon"><i class="fas fa-tools"></i></div>
                            <div>
                                <span class="service-eyebrow">Seamless gutters, properly sized</span>
                                <h2>New Gutter Installation & Replacement</h2>
                            </div>
                        </div>
                        <p class="service-desc">New gutters should do more than replace an old system. CleanFlow of Ohio installs seamless gutter systems with proper sizing, clean routing, correct pitch, and downspout planning to help move water away from the home while improving the finished look of the exterior.</p>

                        <h3>What's Included:</h3>
                        <ul class="checkmark-list">
                            <li>5-inch systems available with 2x3 downspouts</li>
                            <li>6-inch systems available with 3x4 downspouts</li>
                            <li>Proper pitch, outlet placement, and downspout planning</li>
                            <li>Clean routing with attention to curb appeal</li>
                            <li>Fascia board checked before installation, with compromised sections replaced at material cost when needed</li>
                            <li>Replacement for leaking, sagging, failing, or undersized gutter systems</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-tag"></i>
                            5-inch and 6-inch gutter systems available. Final pricing is based on measurements, access, color choice, and downspout layout.
                        </div>

                        <div class="cta-buttons mt-3" style="justify-content: flex-start;">
                            <a href="services/gutter-installation.html" class="btn btn-primary">Open Installation Page</a>
                            <a href="tel:9374780689" class="btn btn-accent">Call Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="underground-drainage-service" class="service-detail-section alt-bg">
            <div class="container">
                <div class="service-detail service-detail-single" data-aos="fade-up">
                    <div class="service-detail-content drainage-feature-panel">
                        <div class="service-detail-header">
                            <div class="service-icon"><i class="fas fa-water"></i></div>
                            <div>
                                <span class="service-eyebrow">Move water away from the home</span>
                                <h2>Underground Drainage & Downspout Extensions</h2>
                            </div>
                        </div>
                        <p class="service-desc">Water problems often start where the gutter system ends. CleanFlow of Ohio helps with underground downspout extensions, roof runoff management, yard drainage concerns, and pooling water around homes, foundations, sidewalks, patios, and landscaping.</p>

                        <h3>Common Drainage Concerns:</h3>
                        <ul class="checkmark-list two-column-list">
                            <li>Water pooling near the foundation</li>
                            <li>Downspouts dumping water too close to the home</li>
                            <li>Standing water in the yard after heavy rain</li>
                            <li>Drainage issues around walkways, patios, and landscaping</li>
                            <li>Underground downspout extension planning</li>
                            <li>Drainage assessments for water management improvements</li>
                        </ul>

                        <div class="pricing-note">
                            <i class="fas fa-water"></i>
                            Dedicated drainage page coming soon. Call now for a drainage assessment.
                        </div>

                        <a href="tel:9374780689" class="btn btn-primary mt-3">Call for Drainage Assessment</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="additional-services" class="service-detail-section">
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
                        <div class="service-detail-header">
                            <div class="service-icon service-icon-hot"><i class="fas fa-fire-extinguisher"></i></div>
                            <div>
                                <span class="service-eyebrow">Summer special</span>
                                <h2>Dryer Vent Cleaning</h2>
                            </div>
                        </div>
                        <p class="service-desc">Professional dryer vent cleaning to reduce fire risk, improve dryer efficiency, and lower drying times. A clogged vent can make your dryer work harder and create a serious safety concern.</p>

                        <h3>What's Included:</h3>
                        <ul class="checkmark-list">
                            <li>Lint removal from the dryer vent run</li>
                            <li>Professional rotary brush and high-powered vacuum process</li>
                            <li>Exterior vent hood cleaning and inspection</li>
                            <li>Airflow check before and after when accessible</li>
                            <li>Photo documentation of work completed</li>
                        </ul>

                        <div class="pricing-note dryer-special-note">
                            <i class="fas fa-tag"></i>
                            <strong>SUMMER SPECIAL: $150</strong> regularly $200. Save $50 when you mention this special at booking or service.<br>
                            <small>Valid through September 1, 2026. Standard one-story, ground-level access only. Roof access, difficult ladder placement, elevated exterior vents, unusually long vent runs, or heavily restricted systems may require a custom quote.</small>
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
                    <p>See the difference professional gutter service makes</p>
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
                    <p>Common questions about gutter, dryer vent, and drainage services</p>
                </div>

                <div class="accordion" data-aos="fade-up">
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>How often should I have my gutters cleaned?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most homes should have gutters cleaned at least twice a year, once in the spring and once in the fall after the leaves have fallen. If you have pine trees or heavy debris near your home, you may need more frequent cleanings.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>What are the signs that I need gutter repairs?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Common signs include sagging gutters, gutters pulling away from the house, water marks on siding, water pooling around your foundation, visible rust or cracks, and leaks from joints or corners during rainfall.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>Do gutter guards really work?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes, quality gutter guards work effectively when properly installed. While no system eliminates every future maintenance need, gutter guards can significantly reduce clogs and cleaning frequency.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>Do you help with drainage and downspout extensions?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes. CleanFlow of Ohio helps with underground downspout extensions, roof runoff management, pooling water concerns, and drainage solutions designed to move water away from the home and foundation.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>What areas do you serve?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>CleanFlow of Ohio proudly serves the greater Miami Valley area. If you're unsure if we service your specific neighborhood, please give me a call.</p>
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
                        <a href="https://www.xproeliteexteriors.com/our-services" target="_blank" rel="noopener noreferrer">XPRO Elite Exterior Builders</a>
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
                    <p>Professional gutter cleaning, gutter protection, dryer vent cleaning, seamless gutter installation, and drainage-related exterior services in the greater Miami Valley area.</p>
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
                        <li><a href="services.html#underground-drainage-service">Drainage Solutions</a></li>
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
                        <li><a href="services.html#underground-drainage-service">Drainage Solutions</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2003-2026 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving the greater Miami Valley area</p>
            </div>
        </div>
    </footer>

    <button type="button" class="floating-service-trigger" data-service-menu-trigger="true" aria-label="Open service wheel">
        <i class="fas fa-th-large"></i>
        <span>Services</span>
    </button>

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

===== FILE: sitemap.xml =====
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.cleanflowohio.com/</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/services</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/about</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.50</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/services/dryer-vent-cleaning</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/services/gutter-installation</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>

===== FILE: style.css =====
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

body.menu-open,
body.radial-menu-open {
    overflow: hidden;
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

.section-pad {
    padding: 80px 0;
}

.alt-bg {
    background: var(--light);
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

header {
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    margin-top: 40px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header.sticky,
header.scrolled {
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

header.sticky .header-container,
header.scrolled .header-container {
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

.close-menu {
    display: none;
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

.floating-service-trigger {
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 998;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 2px solid rgba(243, 156, 18, 0.85);
    border-radius: 999px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    padding: 15px 22px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow:
        0 16px 36px rgba(30, 60, 114, 0.35),
        0 0 0 0 rgba(243, 156, 18, 0.75);
    transition: transform 0.3s ease, background 0.3s ease;
    animation: floatingServiceHugePulse 1.75s infinite;
    will-change: transform, box-shadow;
}

.floating-service-trigger i {
    color: var(--accent);
    font-size: 19px;
}

.floating-service-trigger:hover {
    transform: translateY(-5px) scale(1.06);
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
}

@keyframes floatingServiceHugePulse {
    0% {
        box-shadow:
            0 16px 36px rgba(30, 60, 114, 0.35),
            0 0 0 0 rgba(243, 156, 18, 0.78);
        transform: translateY(0) scale(1);
    }
    55% {
        box-shadow:
            0 18px 42px rgba(30, 60, 114, 0.38),
            0 0 0 24px rgba(243, 156, 18, 0);
        transform: translateY(-2px) scale(1.045);
    }
    100% {
        box-shadow:
            0 16px 36px rgba(30, 60, 114, 0.35),
            0 0 0 0 rgba(243, 156, 18, 0);
        transform: translateY(0) scale(1);
    }
}

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

#hero {
    height: 100vh;
    background: linear-gradient(rgba(30, 60, 114, 0.8), rgba(30, 60, 114, 0.8)), url('https://nedstevens.com/wp-content/uploads/2020/12/gutter-cleaning-hero-new.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
    padding: 0;
    margin-top: 40px;
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

.bottom-cta,
.cta-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    text-align: center;
    padding: 60px 0;
}

.bottom-cta h2,
.cta-content h2 {
    color: white;
    margin-bottom: 20px;
}

.bottom-cta h2:after,
.cta-content h2:after {
    content: none;
}

.bottom-cta p,
.cta-content p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
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

.page-content {
    padding-top: 100px;
}

.services-hero-wow {
    position: relative;
    padding: 115px 0 85px;
    background:
        radial-gradient(circle at 20% 20%, rgba(243, 156, 18, 0.26), transparent 26%),
        radial-gradient(circle at 85% 12%, rgba(58, 111, 199, 0.32), transparent 28%),
        linear-gradient(135deg, rgba(30, 60, 114, 0.96), rgba(44, 90, 160, 0.94)),
        url('https://nedstevens.com/wp-content/uploads/2020/12/gutter-cleaning-hero-new.jpg') no-repeat center center/cover;
    color: white;
    overflow: hidden;
}

.services-hero-wow:before {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.18);
    top: -180px;
    right: -120px;
}

.services-hero-wow:after {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(243, 156, 18, 0.15);
    bottom: -130px;
    left: -80px;
}

.services-hero-content {
    position: relative;
    z-index: 1;
    max-width: 950px;
    margin: 0 auto;
}

.services-hero-content h1 {
    color: white;
    font-size: clamp(2.4rem, 5vw, 4.6rem);
    line-height: 1.08;
    margin-bottom: 18px;
    text-shadow: 0 10px 35px rgba(0,0,0,0.28);
}

.services-hero-content h1:after,
.services-hero-content h2:after {
    content: none;
}

.services-hero-content p {
    color: rgba(255,255,255,0.92);
    max-width: 820px;
    margin: 0 auto 24px;
    font-size: 1.12rem;
}

.hero-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.18);
    color: white;
    border-radius: 999px;
    padding: 8px 16px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    font-size: 0.82rem;
    margin-bottom: 18px;
    backdrop-filter: blur(10px);
    cursor: default;
    box-shadow: none;
}

.hero-kicker:before {
    content: '\f058';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: var(--accent);
}

.service-hero-badges {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 22px auto 30px;
}

.service-hero-badges span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.09);
    color: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 999px;
    padding: 9px 14px;
    font-weight: 600;
    font-size: 0.92rem;
    backdrop-filter: blur(10px);
    cursor: default;
    box-shadow: none;
    opacity: 0.9;
}

.service-hero-badges i {
    color: var(--accent);
}

.services-hero-actions {
    display: flex;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.hero-main-cta,
.hero-call-cta {
    min-width: 275px;
    min-height: 66px;
    border-radius: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border: 2px solid transparent;
    position: relative;
}

.hero-main-cta {
    background: linear-gradient(135deg, var(--accent), var(--accent-dark));
    color: white;
    box-shadow:
        0 18px 38px rgba(243, 156, 18, 0.38),
        0 0 0 0 rgba(243, 156, 18, 0.65);
    animation: heroOrangePulse 2.2s infinite;
}

.hero-main-cta:hover {
    color: white;
    transform: translateY(-5px) scale(1.03);
    box-shadow:
        0 26px 58px rgba(243, 156, 18, 0.52),
        0 0 0 10px rgba(243, 156, 18, 0.14);
}

.hero-call-cta {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    border-color: rgba(243, 156, 18, 0.85);
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,0.12),
        0 16px 34px rgba(0,0,0,0.18),
        0 0 0 0 rgba(243, 156, 18, 0.48);
    backdrop-filter: blur(10px);
    animation: heroOutlinePulse 2.6s infinite;
}

.hero-call-cta:hover {
    color: white;
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--accent);
    transform: translateY(-5px) scale(1.02);
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,0.18),
        0 24px 52px rgba(0,0,0,0.26),
        0 0 0 10px rgba(243, 156, 18, 0.12);
}

.hero-main-cta i,
.hero-call-cta i {
    color: white;
    font-size: 17px;
}

@keyframes heroOrangePulse {
    0% {
        box-shadow:
            0 18px 38px rgba(243, 156, 18, 0.38),
            0 0 0 0 rgba(243, 156, 18, 0.65);
    }
    70% {
        box-shadow:
            0 18px 38px rgba(243, 156, 18, 0.38),
            0 0 0 18px rgba(243, 156, 18, 0);
    }
    100% {
        box-shadow:
            0 18px 38px rgba(243, 156, 18, 0.38),
            0 0 0 0 rgba(243, 156, 18, 0);
    }
}

@keyframes heroOutlinePulse {
    0% {
        box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.12),
            0 16px 34px rgba(0,0,0,0.18),
            0 0 0 0 rgba(243, 156, 18, 0.48);
    }
    70% {
        box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.12),
            0 16px 34px rgba(0,0,0,0.18),
            0 0 0 16px rgba(243, 156, 18, 0);
    }
    100% {
        box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.12),
            0 16px 34px rgba(0,0,0,0.18),
            0 0 0 0 rgba(243, 156, 18, 0);
    }
}

.service-card-showcase-section {
    position: relative;
    background:
        radial-gradient(circle at 0% 10%, rgba(44, 90, 160, 0.08), transparent 28%),
        radial-gradient(circle at 100% 90%, rgba(243, 156, 18, 0.12), transparent 30%),
        linear-gradient(180deg, #ffffff 0%, var(--light) 100%);
    padding: 75px 0 90px;
    overflow: hidden;
}

.service-card-showcase-section .section-header {
    max-width: 820px;
    margin: 0 auto;
}

.service-card-showcase-section .section-header p {
    color: var(--gray);
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
}

.premium-service-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 42px;
}

.premium-service-card {
    display: grid;
    grid-template-columns: 280px 1fr;
    background: #ffffff;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid rgba(30, 60, 114, 0.08);
    box-shadow: 0 18px 48px rgba(30, 60, 114, 0.09);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.premium-service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 26px 70px rgba(30, 60, 114, 0.16);
    border-color: rgba(243, 156, 18, 0.38);
}

.premium-service-card.card-from-right {
    grid-template-columns: 1fr 280px;
}

.premium-service-card.card-from-right .premium-service-media {
    order: 2;
}

.premium-service-card.card-from-right .premium-service-body {
    order: 1;
}

.premium-service-media {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: white;
}

.premium-service-media:before {
    content: '';
    position: absolute;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.25);
    top: -70px;
    right: -70px;
}

.premium-service-media:after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255,255,255,0.13);
    bottom: -60px;
    left: -50px;
}

.premium-service-media i {
    position: relative;
    z-index: 1;
    width: 112px;
    height: 112px;
    border-radius: 32px;
    background: rgba(255,255,255,0.17);
    border: 1px solid rgba(255,255,255,0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    box-shadow: 0 18px 45px rgba(0,0,0,0.22);
}

.cleaning-card {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
}

.repair-card {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
}

.guards-card {
    background: linear-gradient(135deg, #17345f, var(--primary-dark));
}

.install-card {
    background: linear-gradient(135deg, var(--primary-dark), var(--accent));
}

.dryer-card {
    background: linear-gradient(135deg, var(--accent-dark), var(--accent));
}

.drainage-card {
    background: linear-gradient(135deg, var(--primary-dark), #0d8abc);
}

.premium-service-body {
    padding: 34px 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.premium-service-label {
    display: inline-block;
    width: fit-content;
    background: rgba(243, 156, 18, 0.12);
    color: var(--accent-dark);
    border: 1px solid rgba(243, 156, 18, 0.24);
    border-radius: 999px;
    padding: 7px 13px;
    font-size: 0.76rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.7px;
    margin-bottom: 14px;
}

.premium-service-body h3 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--primary-dark);
    margin-bottom: 12px;
}

.premium-service-body p {
    color: var(--gray);
    font-size: 1.04rem;
    margin-bottom: 16px;
}

.premium-service-body ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
}

.premium-service-body ul li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
    color: var(--dark);
    line-height: 1.55;
}

.premium-service-body ul li:before {
    content: '\f00c';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 1px;
    color: var(--accent);
}

.premium-service-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.featured-service-card {
    border-color: rgba(44, 90, 160, 0.18);
}

.special-service-card {
    border-color: rgba(243, 156, 18, 0.34);
}

.service-detail-section {
    position: relative;
}

.service-detail {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 38px;
    align-items: center;
    margin-bottom: 60px;
}

.service-detail.reverse .service-detail-image {
    order: 2;
}

.service-detail-single {
    grid-template-columns: 1fr;
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
}

.service-detail-header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 18px;
}

.service-detail-header h2 {
    margin-bottom: 0;
    padding-bottom: 0;
}

.service-detail-header h2:after {
    content: none;
}

.service-eyebrow {
    display: inline-block;
    color: var(--accent-dark);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 800;
    margin-bottom: 5px;
}

.service-icon {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 26px;
    flex-shrink: 0;
    box-shadow: 0 14px 28px rgba(30, 60, 114, 0.2);
}

.service-icon-hot {
    background: linear-gradient(135deg, var(--accent), var(--accent-dark));
}

.service-detail-content {
    background: white;
    padding: 34px;
    border-radius: 22px;
    box-shadow: 0 18px 48px rgba(30, 60, 114, 0.08);
    border: 1px solid rgba(30, 60, 114, 0.08);
}

.service-detail-content h3 {
    font-size: 1.25rem;
}

.service-desc {
    color: var(--gray);
    font-size: 1.08rem;
}

.service-detail-image {
    border-radius: 22px;
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: 0 18px 48px rgba(30, 60, 114, 0.12);
    min-height: 330px;
}

.service-detail-image img {
    width: 100%;
    height: 100%;
    min-height: 330px;
    display: block;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-detail:hover .service-detail-image img {
    transform: scale(1.045);
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

.pricing-note {
    background: var(--light);
    border-left: 4px solid var(--accent);
    padding: 16px 18px;
    border-radius: 12px;
    margin: 22px 0 0;
    color: var(--primary-dark);
    font-weight: 600;
}

.pricing-note i {
    color: var(--accent);
    margin-right: 8px;
}

.dryer-special-note {
    background: #fff3cd;
    border-left: 4px solid var(--accent);
}

.dryer-special-note strong {
    color: var(--accent-dark);
}

.drainage-feature-panel {
    background:
        radial-gradient(circle at 100% 0%, rgba(58,111,199,0.11), transparent 32%),
        radial-gradient(circle at 0% 100%, rgba(243,156,18,0.12), transparent 28%),
        #fff;
}

.two-column-list {
    columns: 2;
    column-gap: 34px;
}

.two-column-list li {
    break-inside: avoid;
}

.section-highlight {
    animation: sectionGlow 1.2s ease;
}

@keyframes sectionGlow {
    0% {
        box-shadow: inset 0 0 0 0 rgba(243, 156, 18, 0);
    }
    40% {
        box-shadow: inset 0 0 0 8px rgba(243, 156, 18, 0.16);
    }
    100% {
        box-shadow: inset 0 0 0 0 rgba(243, 156, 18, 0);
    }
}

.gallery {
    margin-top: 40px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.gallery-item {
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 18px 45px rgba(30, 60, 114, 0.08);
    position: relative;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 230px;
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

.faq-section {
    background-color: #f8f9fa;
    padding: 80px 0;
}

.accordion {
    margin-top: 40px;
}

.accordion-item {
    margin-bottom: 15px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 28px rgba(30, 60, 114, 0.07);
    border: 1px solid rgba(30, 60, 114, 0.07);
}

.accordion-header {
    background-color: white;
    padding: 20px 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    font-weight: 700;
    color: var(--primary-dark);
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

.accordion-header.active h3,
.accordion-header.active span {
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
    padding: 20px 30px;
}

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

.map-container {
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
}

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

.radial-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(circle at 50% 50%, rgba(243,156,18,0.2), transparent 30%),
    rgba(30, 60, 114, 0.95);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
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
  width: 66px;
  height: 66px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 12px 30px rgba(0,0,0,0.32);
  transition: transform 0.3s ease, background 0.3s ease;
}

.radial-close:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--accent-dark);
}

.radial-item {
  --tx: 0px;
  --ty: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 138px;
  height: 138px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: var(--primary-dark);
  font-weight: 800;
  font-size: 13px;
  line-height: 1.2;
  box-shadow: 0 18px 40px rgba(0,0,0,0.28);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 4px solid rgba(255,255,255,0.7);
  padding: 13px;
}

.radial-item i {
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 8px;
}

.radial-item span {
  max-width: 110px;
}

.radial-item:hover {
  color: var(--accent);
  box-shadow: 0 24px 54px rgba(0,0,0,0.34);
}

.radial-item:hover i {
  color: var(--accent);
}

.radial-item.item-1 {
  --tx: 0px;
  --ty: -196px;
}

.radial-item.item-2 {
  --tx: 170px;
  --ty: -98px;
}

.radial-item.item-3 {
  --tx: 170px;
  --ty: 98px;
}

.radial-item.item-4 {
  --tx: 0px;
  --ty: 196px;
}

.radial-item.item-5 {
  --tx: -170px;
  --ty: 98px;
}

.radial-item.item-6 {
  --tx: -170px;
  --ty: -98px;
}

.radial-overlay.active .radial-item {
  opacity: 1;
  transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
}

.radial-overlay.active .radial-item:hover {
  transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.06);
}

.radial-overlay.active .item-1 {
  transition-delay: 0.05s;
}

.radial-overlay.active .item-2 {
  transition-delay: 0.10s;
}

.radial-overlay.active .item-3 {
  transition-delay: 0.15s;
}

.radial-overlay.active .item-4 {
  transition-delay: 0.20s;
}

.radial-overlay.active .item-5 {
  transition-delay: 0.25s;
}

.radial-overlay.active .item-6 {
  transition-delay: 0.30s;
}

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

    .premium-service-card,
    .premium-service-card.card-from-right {
        grid-template-columns: 1fr;
    }

    .premium-service-card.card-from-right .premium-service-media,
    .premium-service-card.card-from-right .premium-service-body {
        order: initial;
    }

    .premium-service-media {
        min-height: 220px;
    }

    .premium-service-body {
        padding: 30px 26px;
    }

    .service-detail,
    .service-detail.reverse {
        grid-template-columns: 1fr;
    }

    .service-detail.reverse .service-detail-image {
        order: 0;
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
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
    }

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

    header.sticky .header-container,
    header.scrolled .header-container {
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

    .floating-service-trigger {
        left: 15px;
        bottom: 18px;
        padding: 14px 17px;
        font-size: 12px;
    }

    .floating-service-trigger i {
        font-size: 17px;
    }

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

    .services-hero-wow {
        padding: 95px 0 70px;
    }

    .services-hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .hero-main-cta,
    .hero-call-cta {
        width: 100%;
        max-width: 360px;
        min-width: 0;
        min-height: 62px;
        border-radius: 16px;
    }

    .two-column-list {
        columns: 1;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
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

    .service-hero-badges {
        flex-direction: column;
        align-items: center;
    }

    .service-card-showcase-section {
        padding: 62px 0 72px;
    }

    .premium-service-grid {
        gap: 22px;
        margin-top: 34px;
    }

    .premium-service-card {
        border-radius: 22px;
    }

    .premium-service-media {
        min-height: 180px;
    }

    .premium-service-media i {
        width: 86px;
        height: 86px;
        border-radius: 26px;
        font-size: 40px;
    }

    .premium-service-body {
        padding: 26px 20px;
    }

    .premium-service-body h3 {
        font-size: 1.75rem;
    }

    .premium-service-actions {
        flex-direction: column;
    }

    .premium-service-actions .btn {
        width: 100%;
    }

    .service-detail-content {
        padding: 24px;
    }

    .service-detail-header {
        align-items: flex-start;
    }

    .service-detail-header h2 {
        font-size: 1.65rem;
    }

    .service-detail-image,
    .service-detail-image img {
        min-height: 240px;
    }

    .radial-menu-center {
        width: 70px;
        height: 70px;
    }

    .radial-close {
        width: 54px;
        height: 54px;
        font-size: 20px;
    }

    .radial-item {
        width: 102px;
        height: 102px;
        font-size: 10.5px;
        padding: 8px;
        border-width: 3px;
    }

    .radial-item i {
        font-size: 21px;
        margin-bottom: 5px;
    }

    .radial-item.item-1 {
        --tx: 0px;
        --ty: -138px;
    }

    .radial-item.item-2 {
        --tx: 118px;
        --ty: -68px;
    }

    .radial-item.item-3 {
        --tx: 118px;
        --ty: 68px;
    }

    .radial-item.item-4 {
        --tx: 0px;
        --ty: 138px;
    }

    .radial-item.item-5 {
        --tx: -118px;
        --ty: 68px;
    }

    .radial-item.item-6 {
        --tx: -118px;
        --ty: -68px;
    }
}

===== FILE: vercel.json =====
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

===== FILE: services/dryer-vent-cleaning.html =====
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dryer Vent Cleaning in Dayton & Centerville, Ohio | CleanFlow of Ohio</title>
    <meta name="description" content="Professional dryer vent cleaning in Dayton, Centerville, Kettering, Washington Township, and the greater Miami Valley. Summer special: $150, regularly $200. Save $50 when you mention this special.">
    <meta name="keywords" content="dryer vent cleaning, dryer vent cleaning Dayton, dryer vent cleaning Centerville, dryer vent cleaning Washington Township, dryer vent cleaning Kettering, lint removal, dryer fire prevention, dryer efficiency, dryer vent summer special">
    <link rel="canonical" href="https://www.cleanflowohio.com/services/dryer-vent-cleaning" />

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cleanflowohio.com/services/dryer-vent-cleaning">
    <meta property="og:title" content="Dryer Vent Cleaning | CleanFlow of Ohio">
    <meta property="og:description" content="Professional dryer vent cleaning in the greater Miami Valley. Summer special: $150, regularly $200. Save $50 when you mention this special.">
    <meta property="og:image" content="https://www.cleanflowohio.com/assets/og-image.jpg">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Dryer Vent Cleaning | CleanFlow of Ohio">
    <meta name="twitter:description" content="Professional dryer vent cleaning. Summer special: $150, regularly $200.">
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
      "description": "Professional dryer vent cleaning service to reduce fire risk, improve dryer efficiency, and help restore proper airflow.",
      "offers": {
        "@type": "Offer",
        "name": "Dryer Vent Cleaning Summer Special",
        "price": "150.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-09-01",
        "description": "Summer special dryer vent cleaning. Regular price $200. Save $50 when mentioned at booking or service. Standard one-story, ground-level access only. Roof access, difficult ladder placement, elevated exterior vents, unusually long vent runs, and heavily restricted systems may require a custom quote."
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
                    <p style="font-size: 1.2rem; max-width: 760px; margin: 0 auto 30px;">Protect your home from fire hazards, improve dryer efficiency, and help restore proper airflow with professional dryer vent cleaning from CleanFlow of Ohio.</p>

                    <div style="background: var(--accent); display: inline-block; padding: 20px 40px; border-radius: 10px; margin-bottom: 30px;">
                        <div style="font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Summer Special</div>
                        <div style="font-size: 3rem; font-weight: 700;">$150</div>
                        <div style="font-size: 0.95rem;">Regularly $200 • Save $50</div>
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 5px;">Mention this special at booking or service to receive promotional pricing</div>
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 5px;">Valid through September 1, 2026</div>
                    </div>

                    <div style="max-width: 760px; margin: 0 auto 30px; font-size: 0.95rem; opacity: 0.95;">
                        Promotional rate applies to standard one-story, ground-level dryer vent access. Roof access, difficult ladder placement, elevated exterior vents, unusually long vent runs, or heavily restricted systems may require a custom quote.
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
                        <strong style="color: #e74c3c;"><i class="fas fa-fire" style="margin-right: 10px;"></i>Why Dryer Vent Cleaning Matters</strong><br><br>
                        A clogged dryer vent can restrict airflow, cause your dryer to run longer, increase heat buildup, and create a serious fire concern. If your clothes are taking longer to dry, your dryer feels hot, or you notice a burning smell, it is time to have the vent checked.
                        <br><br>
                        <span class="price-highlight" style="color: #e74c3c;">Summer Special: $150, regularly $200. Save $50 when you mention this special.</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="benefits-section" style="padding: 60px 0;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Why Clean Your Dryer Vent?</h2>
                    <p>The benefits go beyond fire prevention</p>
                </div>

                <div class="benefits-grid" data-aos="fade-up">
                    <div class="benefit-card">
                        <div class="benefit-icon" style="background: #e74c3c;">
                            <i class="fas fa-fire-extinguisher"></i>
                        </div>
                        <h3 class="benefit-title">Reduce Fire Risk</h3>
                        <p>Lint buildup is highly flammable. Cleaning the vent helps reduce heat buildup and improves dryer safety.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3 class="benefit-title">Improve Efficiency</h3>
                        <p>A clogged vent makes your dryer work harder and run longer. A clean vent helps restore better airflow.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <h3 class="benefit-title">Help Protect the Dryer</h3>
                        <p>When your dryer overheats due to poor ventilation, it can wear out faster and work harder than necessary.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h3 class="benefit-title">Faster Drying</h3>
                        <p>If clothes are taking two or three cycles to dry, restricted airflow may be part of the problem.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="signs-section" style="padding: 60px 0;">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Signs Your Dryer Vent Needs Cleaning</h2>
                    <p>If you notice any of these, give us a call</p>
                </div>

                <div class="signs-grid" data-aos="fade-up">
                    <div class="sign-card">
                        <i class="fas fa-clock" style="color: var(--accent);"></i>
                        <h3>Clothes Take Longer to Dry</h3>
                        <p>If your dryer needs multiple cycles to dry a normal load, restricted airflow from lint buildup may be the cause.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-temperature-high" style="color: #e74c3c;"></i>
                        <h3>Dryer Feels Hot</h3>
                        <p>The outside of your dryer or your clothes may feel unusually hot after a cycle when the heat is not exhausting properly.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-smog" style="color: var(--gray);"></i>
                        <h3>Burning Smell</h3>
                        <p>A burning odor when the dryer runs is a serious warning sign. Stop using the dryer and schedule a vent inspection.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-wind" style="color: var(--primary);"></i>
                        <h3>Weak Exhaust Flow</h3>
                        <p>Check your exterior vent hood while the dryer runs. Weak airflow may indicate a clogged or restricted vent.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-calendar-alt" style="color: var(--accent);"></i>
                        <h3>It's Been Over a Year</h3>
                        <p>Many households benefit from annual dryer vent cleaning. High-use households may need service more often.</p>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-ruler-vertical" style="color: var(--primary-dark);"></i>
                        <h3>Long Vent Run</h3>
                        <p>If your dryer is far from an exterior wall or the vent has multiple turns, lint can accumulate faster.</p>
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
                            <li>Lint removal from the dryer vent run</li>
                            <li>Professional rotary brush and high-powered vacuum process</li>
                            <li>Inspection of accessible vent condition and connections</li>
                            <li>Exterior vent hood cleaning and inspection when accessible</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="checkmark-list">
                            <li>Dryer lint trap area cleaning</li>
                            <li>Airflow check before and after when accessible</li>
                            <li>Photo documentation of work completed</li>
                            <li>Recommendations if repairs or access concerns are found</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="padding: 60px 0; background: var(--light);">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Simple, Transparent Pricing</h2>
                    <p>Summer special pricing with clear access limitations</p>
                </div>

                <div class="calculator-card" data-aos="fade-up" style="max-width: 620px; margin: 0 auto; text-align: center;">
                    <div style="background: var(--accent); color: white; padding: 30px; border-radius: 10px 10px 0 0; margin: -30px -30px 20px -30px;">
                        <div style="font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Summer Special</div>
                        <div style="font-size: 3.5rem; font-weight: 700;">$150</div>
                        <div style="font-size: 1rem;">Regularly $200 • Save $50</div>
                    </div>

                    <p style="color: var(--gray); margin-bottom: 20px;">Mention this summer special at booking or service to receive promotional pricing.</p>
                    <p style="color: var(--gray); font-size: 0.95rem;">Valid through <strong>September 1, 2026</strong>.</p>

                    <div style="background: #fff3cd; border-left: 4px solid var(--accent); padding: 16px; text-align: left; margin: 20px 0; border-radius: 6px;">
                        <strong>Important access note:</strong><br>
                        The $150 promotional rate applies to standard one-story, ground-level dryer vent access. Roof access, steep roof pitches, difficult ladder placement, elevated exterior vents, unusually long vent runs, or heavily restricted systems may require a custom quote.
                    </div>

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
                    <p>Schedule your professional dryer vent cleaning today.</p>
                    <div style="font-size: 2rem; font-weight: 700; margin: 20px 0; color: var(--accent);">$150 Summer Special</div>
                    <p style="max-width: 760px; margin: 0 auto 25px;">Regularly $200. Save $50 when you mention this special. Valid through September 1, 2026. Standard one-story, ground-level access only.</p>
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
                <p style="color: var(--gray);">Also need <a href="../services.html#gutter-cleaning-service" style="color: var(--primary);">gutter cleaning</a>, <a href="../services.html#gutter-protection-service" style="color: var(--primary);">gutter guard installation</a>, or <a href="../services.html#underground-drainage-service" style="color: var(--primary);">drainage help</a>? We do that too.</p>
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
                    <p>Professional gutter cleaning, dryer vent cleaning, gutter protection, seamless gutter installation, and drainage-related exterior services in Dayton and surrounding areas.</p>
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
                        <li><a href="../services.html#underground-drainage-service">Drainage Solutions</a></li>
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
                        <li><a href="../services.html#underground-drainage-service">Drainage Solutions</a></li>
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

===== FILE: services/gutter-installation.html =====
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
