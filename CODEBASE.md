# Project File Structure Overview

This document provides a high-level overview of the project's file structure. Each file entry includes the file name and a concise description of its purpose and functionality.

## Top-Level Files and Folders

-   `.gitignore`
-   `CODEBASE.md`
-   `CONTRIBUTING.md`
    -   _Purpose:_ Provides guidelines for reporting bugs, suggesting enhancements, and submitting pull requests.
    -   _Functionality:_ Informs contributors how to structure issues and pull requests, and points to `docs/documentation.md` for high-level history.
-   `LICENSE`
-   `README.md`
-   `about.html`
-   `index.html`
-   `robots.txt`
-   `services.html`
-   `sitemap.xml`
-   `style.css`
-   `assets/` folder (with `assets/main.js`)
-   `docs/` folder (with `docs/documentation.md`)

---

## Full Codebase Dump (bonus)
Below is the entire codebase, file by file, exactly as it exists. You can copy any section into another LLM or offline tool to analyze every line, comment, and snippet.

### File: `.gitignore`
```
# Dependencies
node_modules/
jspm_packages/
bower_components/

# Build artifacts
dist/
build/
out/

# System files
.DS_Store
Thumbs.db

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Log files
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### File: `CODEBASE.md`
```markdown
# Project File Structure Overview

This document provides a high-level overview of the project's file structure. Each file entry includes the file name and a concise description of its purpose and functionality.

---

## `.gitignore`

- **Purpose:** Specifies intentionally untracked files that Git should ignore.
- **Functionality:** Prevents system files, build artifacts, and other non-essential files from being committed to the repository.

---

## `CODEBASE.md`

- **Purpose:** This file. Provides a high-level overview of the project's file structure and the purpose of each file.
- **Functionality:** Helps developers understand the organization of the codebase and quickly locate relevant files.

---

## `LICENSE`

- **Purpose:** Contains the legal license under which the project's code is distributed.
- **Functionality:** Specifies the permissions, conditions, and limitations for using, modifying, and distributing the software. (Currently an MIT License).

---

## `README.md`

- **Purpose:** Provides a general introduction and overview of the project.
- **Functionality:** Typically includes a project description, installation instructions, usage examples, and contribution guidelines. Serves as the main entry point for anyone visiting the repository.

---

## `about.html`

- **Purpose:** The "About Us" page for the CleanFlow of Ohio website.
- **Functionality:** Displays information about the company, its story, values, service areas, and contact details. Links to `style.css` for styling and `assets/main.js` for JavaScript functionalities.

---

## `assets/main.js`

- **Purpose:** Contains the primary JavaScript code for the website.
- **Functionality:** Handles dynamic behaviors such as navigation menu toggling, sticky header, animations (AOS library), accordion functionality for FAQs, seasonal content tabs, gutter cleaning cost calculation, and form submissions.

---

## `index.html`

- **Purpose:** The main landing page (homepage) for the CleanFlow of Ohio website.
- **Functionality:** Presents an overview of services, calls to action, customer testimonials (if any), a lead generation form, a cost estimator, and general information about the business. Links to `style.css` for styling and `assets/main.js` for JavaScript functionalities. It also includes a Content Security Policy (CSP) to enhance security.

---

## `robots.txt`

- **Purpose:** Provides instructions to web crawlers (e.g., search engine bots) about which pages or sections of the website should not be crawled or indexed.
- **Functionality:** Helps manage search engine indexing. In this project, it currently allows all user-agents to crawl all content (`Disallow:` is empty).

---

## `services.html`

- **Purpose:** The "Services" page for the CleanFlow of Ohio website.
- **Functionality:** Details the various gutter services offered, such as cleaning, repair, and protection. Includes descriptions of each service, pricing information (potentially), and calls to action. Links to `style.css` for styling and `assets/main.js` for JavaScript functionalities.

---

## `sitemap.xml`

- **Purpose:** Provides a structured list of all essential pages on the website for search engines.
- **Functionality:** Helps search engines discover and index website content more efficiently. Lists the main HTML pages: `index.html`, `services.html`, and `about.html`.

---

## `style.css`

- **Purpose:** Contains all the CSS rules for styling the website.
- **Functionality:** Defines the visual appearance of all HTML pages, including layout, typography, colors, responsiveness, and animations. It uses CSS variables for theming and is structured to style various components like headers, footers, buttons, forms, and specific sections of the website.
---

## `docs/`

- **Purpose:** A central folder for high-level project history and documentation.
- **Functionality:** Contains documents that provide an overview of the project's evolution, architectural decisions, and iteration history.

---

## `docs/documentation.md`

- **Purpose:** Chronological log of each iteration and summary of changes.
- **Functionality:** Provides a detailed history of the project's development, including changes made in each iteration, branch names, and key features or updates implemented.
---
```

### File: `CONTRIBUTING.md`
```markdown
# Contributing to CleanFlow Ohio Static Marketing Website

First off, thank you for considering contributing to the CleanFlow Ohio project! Any contributions you make are **greatly appreciated**.

## Ways to Contribute

We welcome several types of contributions, including:

*   **Reporting Bugs:** If you find a bug, please let us know.
*   **Suggesting Enhancements:** Have an idea to make this project better? We'd love to hear it.
*   **Pull Requests:** If you've fixed a bug or implemented a new feature, feel free to submit a pull request.

## Reporting Bugs

If you encounter a bug, please help us by reporting it. Good bug reports are extremely helpful!

*   **Check if the bug has already been reported:** Search the existing issues to see if someone else has already reported it.
*   **Be detailed:** Describe the bug clearly, including steps to reproduce it, what you expected to happen, and what actually happened.
*   **Include specifics:** Mention your browser, operating system, and any relevant versions.

You can report bugs by opening a new issue on the GitHub repository.

## Suggesting Enhancements

If you have an idea for an enhancement:

*   **Explain your idea:** Clearly describe the enhancement and why you think it would be valuable to the project.
*   **Scope:** Is this a small change or a major new feature?

You can suggest enhancements by opening a new issue on the GitHub repository and labeling it as an "enhancement."

## Pull Requests

For an overview of past iterations and project structure, see [docs/documentation.md](./docs/documentation.md).

We welcome pull requests for bug fixes and enhancements.

1.  **Fork the repository:** Click the "Fork" button at the top right of the repository page.
2.  **Clone your fork:** `git clone https://github.com/YOUR_USERNAME/cleanflow-ohio.git`
3.  **Create a new branch:** `git checkout -b feature/YourFeatureName` or `fix/BugFixDescription`
4.  **Make your changes:** Implement your feature or fix the bug.
    *   Ensure your code follows the existing style and conventions.
    *   If you're adding new features, please include or update relevant documentation (README, comments, etc.).
5.  **Commit your changes:** `git commit -m 'Add some feature' -m 'Detailed description of changes.'`
    *   Write clear and concise commit messages. The first line should be a short summary (max 72 chars), followed by a blank line and then a more detailed explanation if necessary.
6.  **Push to your branch:** `git push origin feature/YourFeatureName`
7.  **Open a Pull Request:** Go to the original repository on GitHub and click the "New pull request" button.
    *   Provide a clear title and description for your pull request, explaining the changes you've made.
    *   Reference any related issues (e.g., "Fixes #123").

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. (We can add a `CODE_OF_CONDUCT.md` later if needed, for now, this statement is a placeholder).

## Questions?

If you have any questions, feel free to reach out by opening an issue.

Thank you for contributing!
```

### File: `LICENSE`
```
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

### File: `README.md`
```markdown
# CleanFlow Ohio Static Marketing Website

A mobile-first, responsive HTML/CSS/JS marketing site designed for gutter cleaning services. Simple, modern, SEO-friendly, and easy to customize. Currently deployed on [Vercel](https://vercel.com/).

## 📦 Features

- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **SEO-Ready:** Includes sitemap (`sitemap.xml`) and clean, semantic HTML structure.
- **Pages Included:**
  - Home (`index.html`)
  - Services (`services.html`)
  - About (`about.html`)
- **Easy to Customize:** Simple file structure, clear CSS classes, minimal JavaScript.
- **Quick Deployment:** Seamless deployment via [Vercel](https://vercel.com/).

## Documentation

See [docs/documentation.md](./docs/documentation.md) for a full history of iterations and high-level project overview.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cleanflow-ohio.git
   cd cleanflow-ohio

2. **Modify content**
   - **HTML:** Edit text, images, and links directly within the `index.html`, `services.html`, and `about.html` files.
   - **CSS:** Modify `style.css` to change the website's appearance. Key variables for colors and fonts are defined at the top of the file for easy customization.
   - **Images:** Replace or add images in the `assets/` directory. Update their paths in the HTML files (e.g., `index.html`, `services.html`) accordingly if you change filenames or add new images.

3. **Deploy to Vercel (Recommended)**



3. Deploy to Vercel (Recommended)

Create a free account at Vercel.

Connect your GitHub repository.

Follow the guided setup, leaving default settings as-is.

Your website will automatically deploy when you push changes to GitHub.




🗂 Repository Structure

cleanflow-ohio/
├── .gitignore             # Specifies intentionally untracked files that Git should ignore.
├── CODEBASE.md            # Overview of the project's file structure and purpose of each file.
├── LICENSE                # Contains the MIT License for the project.
├── README.md              # This file - provides an overview of the project.
├── about.html             # The "About Us" page.
├── assets/                # Directory for static assets.
│   └── main.js            # Main JavaScript file for website interactivity.
├── index.html             # The main landing page (homepage).
├── robots.txt             # Instructions for web crawlers.
├── services.html          # The "Services" page.
├── sitemap.xml            # Provides a sitemap for search engines.
└── style.css              # Main CSS file for all website styling.

## 🧩 Project Modules

This section outlines the key components and their roles within the project.

-   **HTML Files (`index.html`, `services.html`, `about.html`):**
    -   `index.html`: Serves as the main landing page, providing an overview of services and calls to action.
    -   `services.html`: Describes the various services offered by CleanFlow of Ohio in detail.
    -   `about.html`: Contains information about the company, its mission, and contact details.
    -   All HTML files are structured semantically to enhance SEO and accessibility.

-   **CSS File (`style.css`):**
    -   Handles all styling for the website, including layout, typography, color schemes, and responsiveness.
    -   Utilizes CSS variables (custom properties) at the top of the file for easy global changes to themes (e.g., primary colors, fonts).

-   **JavaScript File (`assets/main.js`):**
    -   Manages dynamic behaviors and interactivity on the website.
    -   Functionalities include: navigation menu toggling, sticky header behavior, scroll-triggered animations (AOS library), accordion functionality for FAQs, seasonal content tabs, and the gutter cleaning cost calculator.

-   **`CODEBASE.md`:**
    -   A detailed document that provides an overview of the entire project's file structure.
    -   It describes the purpose and functionality of each file in the repository, serving as a technical reference for developers.

-   **`sitemap.xml` & `robots.txt`:**
    -   `sitemap.xml`: Helps search engines discover and index all important pages on the website.
    -   `robots.txt`: Instructs web crawlers on which pages or sections of the site to crawl or ignore.
    -   Both files are crucial for Search Engine Optimization (SEO).

🛠 Technologies Used

HTML5 & CSS3: Semantic structure and responsive styling.

Vanilla JavaScript: Simple interactions, no heavy libraries.

Vercel: Easy and fast hosting and deployment.


🔐 Security

No backend or sensitive server-side code included. Completely static frontend.

Hosted via Vercel’s secure infrastructure.


📌 Contributing

Feel free to fork and modify for your own business! Contributions are welcome. Just submit a pull request.

📄 License

Distributed under the MIT License. See LICENSE for details.

---

## Project Overview

**Project description:** Static marketing site for CleanFlow of Ohio.

**Note:** Iteration 1: Security Hardening—CSP added, inline JS externalized to assets/main.js, robots.txt added, CODEBASE.md generated.
```

### File: `about.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About CleanFlow of Ohio | Dayton Gutter Experts</title>
    <meta name="description" content="Learn about CleanFlow of Ohio, your trusted, owner-operated gutter cleaning and maintenance specialist with over 20 years of experience in Dayton and surrounding areas.">
    <meta name="keywords" content="about us, gutter company Dayton, experienced gutter cleaner, local gutter service, CleanFlow of Ohio story">
    <link rel="canonical" href="https://www.cleanflowohio.com/about" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <!-- AOS Animation Library -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Top Contact Bar Section -->
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
    <!-- End Top Contact Bar Section -->

    <!-- Header Section -->
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
    <!-- End Header Section -->

    <!-- Main About Page Content Wrapper -->
    <div id="about-page-content" class="page-content"> <!-- Changed ID to avoid conflict if script.js uses it -->
        <!-- About Hero Section -->
        <section id="about-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>About CleanFlow of Ohio</h1>
                    <p>Your trusted gutter cleaning specialist in Dayton and surrounding areas.</p>
                </div>
            </div>
        </section>
        <!-- End About Hero Section -->

        <!-- Our Story Section -->
        <section id="about-story">
            <div class="container">
                <div class="about-content" data-aos="fade-up">
                    <div class="about-text">
                        <h2>Our Story</h2>
                        <p>CleanFlow of Ohio was founded with a simple mission: to provide homeowners with honest, dependable gutter services that truly protect their homes from water damage.</p>

                        <p>With over 20 years of hands-on experience in gutter cleaning and maintenance, I've seen firsthand the devastating damage that can occur when gutters fail. What started as helping neighbors has grown into a trusted service throughout Montgomery and Greene counties.</p>

                        <p>At CleanFlow of Ohio, I believe in doing things right the first time. That means thorough cleaning, proper repairs, and honest recommendations. I never upsell unnecessary services or cut corners just to finish a job quickly.</p>

                        <p>My approach is simple: I treat every home as if it were my own, providing the level of care and attention to detail that I would want for my own property.</p>
                    </div>

                    <div class="about-image">
                        <img src="https://nedstevens.com/wp-content/uploads/2020/12/gutter-cleaning-hero-new.jpg" alt="CleanFlow of Ohio - Professional Gutter Service">
                        <div class="experience-badge">
                            <span>20+</span>
                            <span>Years</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Our Story Section -->

        <!-- Why Choose Us Section -->
        <section id="why-choose" class="bg-light">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Why Choose CleanFlow of Ohio</h2>
                    <p>I'm committed to providing the highest quality gutter services in the Dayton area.</p>
                </div>

                <div class="grid grid-3 mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-medal" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Quality Workmanship</h3>
                            <p>Every job is completed to the highest standards with attention to detail and thorough inspection to ensure proper water flow.</p>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-dollar-sign" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Fair & Competitive Pricing</h3>
                            <p>I provide honest, upfront pricing with no hidden fees or surprise charges. You'll always know the cost before work begins.</p>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-bolt" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Fast Service</h3>
                            <p>I respect your time and work efficiently, often providing same-day service when you need it most.</p>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-check-double" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Satisfaction Guaranteed</h3>
                            <p>I stand behind my work with a satisfaction guarantee. If you're not happy with the service, I'll make it right.</p>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-handshake" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Honest & Reliable</h3>
                            <p>I provide straightforward advice and never recommend services you don't need. Your trust is my top priority.</p>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-content text-center">
                            <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                            <h3>Locally Owned & Operated</h3>
                            <p>As a local business, I take pride in serving our community with integrity and building lasting relationships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Why Choose Us Section -->

        <!-- Our Credentials Section -->
        <section class="badge-section">
            <div class="container">
                <div class="text-center" data-aos="fade-up">
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
                        <div class="badge-title">Locally Owned & Operated</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Our Credentials Section -->

        <!-- Service Area Section -->
        <section id="service-area">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Service Area</h2>
                    <p>CleanFlow of Ohio proudly serves homes throughout Dayton and surrounding communities.</p>
                </div>

                <div class="grid grid-2 gap-2 mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <h3>Montgomery County</h3>
                        <ul class="checkmark-list">
                            <li>Dayton</li>
                            <li>Oakwood</li>
                            <li>Kettering</li>
                            <li>Centerville</li>
                            <li>Miamisburg</li>
                            <li>West Carrollton</li>
                            <li>Moraine</li>
                            <li>Huber Heights</li>
                            <li>Vandalia</li>
                            <li>Englewood</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Greene County</h3>
                        <ul class="checkmark-list">
                            <li>Beavercreek</li>
                            <li>Bellbrook</li>
                            <li>Fairborn</li>
                            <li>Xenia</li>
                            <li>Yellow Springs</li>
                            <li>Cedarville</li>
                            <li>Jamestown</li>
                        </ul>
                        <p class="mt-4">Don't see your location? Give me a call to check if I service your area!</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Service Area Section -->

        <!-- Contact Information Section -->
        <section id="contact-info" class="bg-light">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Contact Information</h2>
                    <p>Reach out to me for all your gutter cleaning and maintenance needs.</p>
                </div>

                <div class="grid grid-3 mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="contact-info-card">
                        <div class="contact-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <h3>Phone</h3>
                        <a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a>
                        <p>Call or text for a free estimate</p>
                    </div>

                    <div class="contact-info-card">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 8am - 3pm</p>
                        <p>Sunday: Closed</p>
                    </div>

                    <div class="contact-info-card">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Service Area</h3>
                        <p>Serving Dayton and surrounding areas</p>
                        <p>Montgomery & Greene Counties</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Contact Information Section -->

        <!-- Call to Action (CTA) Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready to Experience the CleanFlow Difference?</h2>
                    <p>Contact me today to schedule your professional gutter service with Dayton's most trusted gutter specialist.</p>
                    <a href="tel:9374780689" class="phone-number">
                        <i class="fas fa-phone-alt"></i> 937-478-0689
                    </a>
                    <div class="text-option">Text me a photo of your gutters for a quick estimate – I respond within hours!</div>
                </div>
            </div>
        </section>
        <!-- End Call to Action (CTA) Section -->
    </div>
    <!-- End Main About Page Content Wrapper -->

    <!-- Footer Section -->
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
                            <p><a href="http://bit.ly/CleanFlowOhio" target="_blank">bit.ly/CleanFlowOhio</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Monday - Friday: 8am - 6pm<br>Saturday: 8am - 3pm<br>Sunday: Closed</p>
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
                        <li><a href="index.html#calculator">Cost Estimator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services.html#service-faq">Maintenance FAQs</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties since 2003</p>
            </div>
        </div>
    </footer>
    <!-- End Footer Section -->

    <!-- Back to Top Button -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>
    <!-- End Back to Top Button -->

    <!-- AOS Animation Library -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="assets/main.js"></script>
</body>
</html>
```

### File: `assets/main.js`
```javascript
//--------------------------------------------------------------
// Initialize AOS (Animate On Scroll) Library
//--------------------------------------------------------------
// Initializes the AOS library with custom settings for scroll animations.
AOS.init({
    duration: 800, // Animation duration in milliseconds
    easing: 'ease-in-out', // Type of easing for animations
    once: true, // Whether animation should happen only once - while scrolling down
    mirror: false // Whether elements should animate out while scrolling past them
});

//--------------------------------------------------------------
// Navigation Menu Toggle
//--------------------------------------------------------------
// Handles the opening and closing of the mobile navigation menu.
const menuToggle = document.getElementById('menu-toggle'); // The hamburger icon
const navMenu = document.getElementById('nav-menu'); // The navigation menu UL
const closeMenu = document.getElementById('close-menu'); // The close icon within the menu

if (menuToggle && navMenu && closeMenu) {
    menuToggle.addEventListener('click', () => {
        // Show the navigation menu when toggle is clicked
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        // Hide the navigation menu when close icon is clicked
        navMenu.classList.remove('active');
    });
}

//--------------------------------------------------------------
// Sticky Header & Back to Top Button Visibility
//--------------------------------------------------------------
// Manages the header becoming sticky on scroll and the visibility of the Back to Top button.
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    if (header && backToTop) {
        if (window.scrollY > 100) {
            // When scrolled more than 100 pixels
            header.classList.add('sticky'); // Make header sticky
            backToTop.classList.add('active'); // Show Back to Top button
        } else {
            // When scrolled less than 100 pixels
            header.classList.remove('sticky'); // Remove sticky class from header
            backToTop.classList.remove('active'); // Hide Back to Top button
        }
    }
});

//--------------------------------------------------------------
// Back to Top Button Click Handler
//--------------------------------------------------------------
// Smoothly scrolls the page to the top when the Back to Top button is clicked.
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
}

//--------------------------------------------------------------
// Scroll Down Button (Hero Section) Click Handler
//--------------------------------------------------------------
// Smoothly scrolls to the 'warning' section when the scroll-down arrow is clicked.
const scrollDownButton = document.getElementById('scroll-down');
if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
        const nextSection = document.getElementById('warning'); // Target section
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
        }
    });
}

//--------------------------------------------------------------
// Accordion Toggle Functionality
//--------------------------------------------------------------
/**
 * Toggles the display of an accordion item's content.
 * Closes other open accordion items to ensure only one is open at a time.
 * @param {HTMLElement} element - The header element of the accordion item that was clicked.
 */
function toggleAccordion(element) {
    const content = element.nextElementSibling; // The content div following the header
    const isActive = element.classList.contains('active'); // Check if the clicked accordion is already active

    // Get all accordion headers and contents
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    // Close all other accordion items
    accordionHeaders.forEach(header => {
        if (header !== element) { // Don't remove active from the clicked one yet
            header.classList.remove('active');
        }
    });
    accordionContents.forEach(cont => {
        if (cont !== content) { // Don't hide the clicked one's content yet
            cont.classList.remove('active');
            cont.style.maxHeight = null; // Collapse the content
        }
    });

    // Open or close the clicked accordion item
    if (!isActive) {
        // If it wasn't active, open it
        element.classList.add('active');
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full content height
    } else {
        // If it was active, close it (by removing classes, already handled by the loop above for other items)
        element.classList.remove('active');
        content.classList.remove('active');
        content.style.maxHeight = null;
    }
}

//--------------------------------------------------------------
// Toggle Signs Content Functionality
//--------------------------------------------------------------
/**
 * Toggles the 'active' class on a "sign" card element.
 * Used to show or hide additional content within the sign card.
 * @param {HTMLElement} element - The sign card element that was clicked.
 */
function toggleSign(element) {
    // Simply toggle the active class to show/hide content via CSS
    element.classList.toggle('active');
}

//--------------------------------------------------------------
// Season Tabs Functionality
//--------------------------------------------------------------
// Handles switching between different seasonal content sections.
const seasonTabs = document.querySelectorAll('.season-tab');
if (seasonTabs.length > 0) {
    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            seasonTabs.forEach(t => t.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Hide all season content sections
            document.querySelectorAll('.season-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show the content section corresponding to the clicked tab
            const season = tab.dataset.season; // Get season from data attribute
            const activeSeasonContent = document.getElementById(`${season}-content`);
            if (activeSeasonContent) {
                activeSeasonContent.classList.add('active');
            }
        });
    });
}

//--------------------------------------------------------------
// Gutter Cleaning Cost Calculator
//--------------------------------------------------------------
// Attaches event listeners to calculator inputs and button.
const calculateBtn = document.getElementById('calculateBtn');
const linearFeetInput = document.getElementById('linearFeet');
const storiesSelect = document.getElementById('stories');
const debrisSelect = document.getElementById('debris');

if (calculateBtn) {
    calculateBtn.addEventListener('click', calculatePrice);
}
if (linearFeetInput) {
    linearFeetInput.addEventListener('input', calculatePrice);
}
if (storiesSelect) {
    storiesSelect.addEventListener('change', calculatePrice);
}
if (debrisSelect) {
    debrisSelect.addEventListener('change', calculatePrice);
}

/**
 * Calculates the estimated gutter cleaning price based on user inputs.
 * Updates the displayed price on the page.
 */
function calculatePrice() {
    // Get input values, providing defaults if parsing fails
    const linearFeet = parseFloat(linearFeetInput.value) || 0;
    const stories = storiesSelect.value;
    const debris = debrisSelect.value;

    let ratePerFoot = 0;
    // Determine rate based on debris level
    switch (debris) {
        case 'light':
            ratePerFoot = 0.75;
            break;
        case 'medium':
            ratePerFoot = 0.85; // Default rate
            break;
        case 'heavy':
            ratePerFoot = 0.95;
            break;
        default:
            ratePerFoot = 0.85; // Fallback rate
    }

    // Calculate the initial price
    let price = linearFeet * ratePerFoot;

    // Apply a minimum charge if applicable
    if (price < 135) {
        price = 135; // Minimum service charge
    }

    // Add extra cost for two-story homes
    if (stories === '2') {
        price += 50; // Additional charge for second story
    }

    // Display the calculated price
    const estimatedPriceEl = document.getElementById('estimatedPrice');
    const resultBoxEl = document.getElementById('resultBox');
    if (estimatedPriceEl && resultBoxEl) {
        estimatedPriceEl.textContent = '$' + price.toFixed(2); // Format to two decimal places
        resultBoxEl.classList.add('active'); // Show the result box
    }
}

//--------------------------------------------------------------
// Quote Form Submission
//--------------------------------------------------------------
// Handles the submission of the quote request form by opening a mailto link.
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        // Construct mailto link components
        const subject = "New Quote Request from " + name;
        // Encode each part of the body for the mailto link
        const encodedName = encodeURIComponent(name);
        const encodedPhone = encodeURIComponent(phone);
        const encodedService = encodeURIComponent(service);
        const body = "Name: " + encodedName + "%0D%0APhone: " + encodedPhone + "%0D%0AService: " + encodedService;

        // Open the mail client with pre-filled information
        window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;

        // Display success message
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";

            // Reset the form after submission
            quoteForm.reset();

            // Hide the success message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = 'none';
                messageDiv.classList.remove('success'); // Clean up class
            }, 5000);
        }
    });
}
```

### File: `docs/documentation.md`
```markdown
# Project Iteration History

This document provides a chronological log of each completed iteration, detailing the major changes and enhancements made to the project over time.

## Iteration One (branch: iteration-one-secure)

-   Added security hardening.
-   Created initial test files for core modules.

## Iteration Two (branch: iteration-two-docs)

-   Enhanced `README.md` with repository structure, quick-start, and “Project Modules.”
-   Updated `CODEBASE.md` to reflect full file/folder list.
-   Created `CONTRIBUTING.md` with bug/PR guidelines.
-   Added HTML comments in `index.html`, `services.html`, and `about.html`.
-   Added CSS comments in `style.css`.
-   Added JSDoc comments in `assets/main.js`.
```

### File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleanFlow of Ohio | Professional Gutter Cleaning & Protection</title>
    <meta name="description" content="CleanFlow of Ohio provides professional gutter cleaning, maintenance, and protection services in Dayton and surrounding areas. Protect your home from water damage with our expert gutter services.">
    <meta name="keywords" content="gutter cleaning, gutter protection, gutter maintenance, gutter repairs, gutter guards, Dayton gutter cleaning, Montgomery County gutter services, Greene County gutter services, professional gutter cleaning, seamless gutters">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <!-- AOS Animation Library -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Top Contact Bar Section -->
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
    <!-- End Top Contact Bar Section -->

    <!-- Header Section -->
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
    <!-- End Header Section -->

    <!-- Main Home Page Content Wrapper -->
    <div id="home-page" class="page">
        <!-- Hero Section -->
        <section id="hero">
            <div class="container">
                <div class="hero-content" data-aos="fade-up">
                    <h1>Professional Gutter Cleaning & Protection</h1>
                    <p>Prevent costly water damage with expert gutter maintenance from the most trusted service in Dayton and surrounding areas.</p>
                    <div class="hero-btns">
                        <a href="tel:9374780689" class="btn btn-accent btn-lg">
                            <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
                        </a>
                        <a href="#quote" class="btn btn-primary btn-lg">
                            <i class="fas fa-clipboard-list"></i> Request a Quote
                        </a>
                    </div>
                </div>
            </div>
            <div class="scroll-down" id="scroll-down">
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>
        <!-- End Hero Section -->

        <!-- Lead Form Section -->
        <section id="quote" class="lead-form-section">
            <div class="container">
                <form id="quoteForm" class="lead-form" data-aos="fade-up">
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
                            <option value="Both Services">Both Services</option>
                        </select>
                    </div>
                    <div class="form-submit">
                        <button type="submit" class="btn btn-primary">Send Request</button>
                    </div>
                    <div id="formMessage" class="form-message"></div>
                </form>
            </div>
        </section>
        <!-- End Lead Form Section -->

        <!-- Warning Box Section -->
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
        <!-- End Warning Box Section -->

        <!-- How It Works Process Section -->
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
        <!-- End How It Works Process Section -->

        <!-- Services Overview Section -->
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
        <!-- End Services Overview Section -->

        <!-- Gutter Cleaning Cost Estimator Section -->
        <section id="calculator" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Gutter Cleaning Cost Estimator</h2>
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
        <!-- End Gutter Cleaning Cost Estimator Section -->

        <!-- Signs You Need Gutter Cleaning Section -->
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
        <!-- End Signs You Need Gutter Cleaning Section -->

        <!-- Seasonal Maintenance Calendar Section -->
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
        <!-- End Seasonal Maintenance Calendar Section -->

        <!-- Benefits of Professional Gutter Cleaning Section -->
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
        <!-- End Benefits of Professional Gutter Cleaning Section -->

        <!-- What You Get With Every Service Section -->
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
        <!-- End What You Get With Every Service Section -->

        <!-- Special Offer Section -->
        <section id="special-offer">
            <div class="container">
                <div class="special-offer" data-aos="fade-up">
                    <div class="offer-title">Scheduling Oakwood Neighbors This Week</div>
                    <div class="offer-text">I prefer working neighborhood by neighborhood for efficiency – call now for priority scheduling and faster service!</div>
                    <a href="tel:9374780689" class="btn btn-primary btn-lg">
                        <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
                    </a>
                </div>
            </div>
        </section>
        <!-- End Special Offer Section -->

        <!-- Bottom Call to Action Section -->
        <section class="bottom-cta" id="contact">
            <div class="container">
                <div data-aos="fade-up">
                    <h2>Ready for Clog-Free Gutters?</h2>
                    <p>Call now for a free estimate and to schedule your professional gutter service.</p>
                    <a href="tel:9374780689" class="btn btn-accent btn-lg">
                        <i class="fas fa-phone-alt"></i> 937-478-0689
                    </a>
                </div>
            </div>
        </section>
        <!-- End Bottom Call to Action Section -->
    </div>
    <!-- End Main Home Page Content Wrapper -->

    <!-- Footer Section -->
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
                            <p><a href="http://bit.ly/CleanFlowOhio" target="_blank">bit.ly/CleanFlowOhio</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Monday - Friday: 8am - 6pm<br>Saturday: 8am - 3pm<br>Sunday: Closed</p>
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
                        <li><a href="index.html#calculator">Cost Estimator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services.html#service-faq">Maintenance FAQs</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties since 2003</p>
            </div>
        </div>
    </footer>
    <!-- End Footer Section -->

    <!-- Back to Top Button -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>
    <!-- End Back to Top Button -->

    <!-- AOS Animation Library -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="assets/main.js"></script>
</body>
</html>
```

### File: `robots.txt`
```
User-agent: *
Disallow:
```

### File: `services.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Services | CleanFlow of Ohio</title>
    <meta name="description" content="Explore the professional gutter cleaning, repair, and protection services offered by CleanFlow of Ohio. Serving Dayton and surrounding areas.">
    <meta name="keywords" content="gutter cleaning services, gutter repair, gutter guard installation, gutter maintenance, Dayton Ohio gutter company">
    <link rel="canonical" href="https://www.cleanflowohio.com/services" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

    <!-- AOS Animation Library -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Top Contact Bar Section -->
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
    <!-- End Top Contact Bar Section -->

    <!-- Header Section -->
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
    <!-- End Header Section -->

    <!-- Main Services Page Content Wrapper -->
    <div id="services-page-content" class="page-content"> <!-- Changed ID to avoid conflict if script.js uses it -->
        <!-- Services Hero Section -->
        <section id="services-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p>Comprehensive gutter cleaning and protection services to keep your home safe from water damage.</p>
                </div>
            </div>
        </section>
        <!-- End Services Hero Section -->

        <!-- Gutter Cleaning Service Section -->
        <section id="gutter-cleaning-service">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon">
                            <i class="fas fa-brush"></i>
                        </div>
                        <h2>Gutter Cleaning</h2>
                    </div>

                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-content">
                            <p>Regular gutter cleaning is essential to prevent water damage to your home. At CleanFlow of Ohio, I provide thorough professional gutter cleaning services to ensure your gutters function properly year-round.</p>

                            <p>My comprehensive gutter cleaning service includes:</p>

                            <div class="service-features">
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Complete removal of all debris from gutters and roof valleys</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Thorough flushing of all downspouts to ensure proper flow</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Flow testing to verify proper drainage</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Inspection for potential issues or damage</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Before and after photos so you can see the results</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Cleanup of all debris removed from your gutters</p>
                                </div>
                            </div>

                            <p><strong>Pricing:</strong> My gutter cleaning services are competitively priced based on the size of your home and the condition of your gutters. For most homes in the Dayton area, gutter cleaning service starts at $200.</p>

                            <p>Don't wait until it's too late! Regular gutter cleaning can save you thousands in potential water damage repairs.</p>

                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent">
                                    <i class="fas fa-phone-alt"></i> Schedule Gutter Cleaning Now
                                </a>
                            </div>
                        </div>

                        <div class="service-detail-image">
                            <img src="https://cdn.prod.website-files.com/614a070736f4a72073561d14/614a732f2f7c6cfc52315c10_gutter-cleaning-before-after.jpg" alt="Professional Gutter Cleaning Service">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Gutter Cleaning Service Section -->

        <!-- Gutter Repairs Service Section -->
        <section id="gutter-repairs-service" class="bg-light">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <h2>Gutter Repairs</h2>
                    </div>

                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-image">
                            <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2023/08/01151936/Gutter_iStock-1310417362-e1747423219898.jpeg" alt="Gutter Repairs and Maintenance">
                        </div>

                        <div class="service-detail-content">
                            <p>Even the best gutters can develop issues over time. Weather, age, and improper installation can all lead to gutter problems that require professional repairs.</p>

                            <p>My gutter repair services include:</p>

                            <div class="service-features">
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Re-sealing leaking gutter joints and corners</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Re-securing loose gutters and downspouts</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Fixing improper gutter slope that causes standing water</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Replacing damaged sections while preserving existing gutters</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Installing additional downspouts if needed for proper drainage</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Repairing or replacing damaged fascia boards</p>
                                </div>
                            </div>

                            <p><strong>Pricing:</strong> Minor repairs are often included in my standard gutter cleaning service. For more extensive repairs, I provide fair and transparent pricing based on the specific needs of your gutters.</p>

                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent">
                                    <i class="fas fa-phone-alt"></i> Get a Repair Estimate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Gutter Repairs Service Section -->

        <!-- Gutter Protection Service Section -->
        <section id="gutter-protection-service">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h2>Gutter Protection</h2>
                    </div>

                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-content">
                            <p>Tired of cleaning your gutters multiple times a year? My gutter guard protection systems can significantly reduce gutter maintenance while ensuring proper water flow.</p>

                            <p>Benefits of my gutter protection systems:</p>

                            <div class="service-features">
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Prevents leaves, pine needles, and debris from entering your gutters</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Reduces required maintenance and extends gutter lifespan</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Prevents pest nesting and breeding in your gutters</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Helps prevent ice dams during winter months</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Compatible with most existing gutter systems</p>
                                </div>
                                <div class="service-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <p>Backed by my 3-year performance guarantee</p>
                                </div>
                            </div>

                            <p><strong>Pricing:</strong> My gutter protection systems are competitively priced based on the length of your gutters and the specific system chosen. I offer options for every budget with financing available.</p>

                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent">
                                    <i class="fas fa-phone-alt"></i> Get a Protection Quote
                                </a>
                            </div>
                        </div>

                        <div class="service-detail-image">
                            <img src="https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2022/06/29223354/gutter_guard_image_for_blog_2400px-scaled.jpeg" alt="Gutter Guard Protection Systems">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Gutter Protection Service Section -->

        <!-- Our Work Gallery Section -->
        <section id="service-gallery" class="bg-light">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Work</h2>
                    <p>See the difference professional gutter service makes</p>
                </div>

                <div class="gallery" data-aos="fade-up" data-aos-delay="100">
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/6563ac7666f1f6169a77f1f5/7af4c2ba-5db0-4ed6-b2ea-3f4f66026e2a/Cleaning+before+and+after.JPG" alt="Before and after gutter cleaning">
                            <div class="gallery-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://nedstevens.com/wp-content/uploads/2025/01/gutter-cleaning-staff-roof.jpg" alt="Gutter repair service">
                            <div class="gallery-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://static.wixstatic.com/media/6bc844_e4b19ee527ca45bd91bfcc2a0f10cd8c~mv2.jpg/v1/fill/w_640,h_432,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6bc844_e4b19ee527ca45bd91bfcc2a0f10cd8c~mv2.jpg" alt="Gutter guard installation">
                            <div class="gallery-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Our Work Gallery Section -->

        <!-- Frequently Asked Questions (FAQ) Section -->
        <section id="service-faq">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Frequently Asked Questions</h2>
                    <p>Get answers to common questions about our gutter services</p>
                </div>

                <div class="accordion" data-aos="fade-up" data-aos-delay="100">
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <h3>How often should I have my gutters cleaned?</h3>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most homes should have gutters cleaned at least twice a year - once in the spring and once in the fall after the leaves have fallen. However, if you have pine trees or other debris-dropping trees near your home, you may need more frequent cleanings. I can assess your specific situation and recommend a maintenance schedule.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <h3>What are the signs that I need gutter repairs?</h3>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Common signs that your gutters need repair include visible sagging or pulling away from the house, water marks on siding beneath gutters, water pooling around your foundation, visible rust or cracks, and water leaking from joints or corners during rainfall. If you notice any of these signs, it's best to have your gutters professionally inspected.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <h3>Do gutter guards really work?</h3>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes, quality gutter guards do work effectively when properly installed. The systems I install are designed to allow water to flow while keeping out leaves, pine needles, and other debris. While no system completely eliminates the need for maintenance, my gutter protection systems can significantly reduce how often you need to have your gutters cleaned, often extending the time between cleanings to several years.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <h3>What areas do you serve?</h3>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>CleanFlow of Ohio proudly serves Dayton and surrounding areas including Oakwood, Kettering, Centerville, Beavercreek, Bellbrook, and throughout Montgomery and Greene counties. If you're unsure if we service your area, please give me a call!</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <h3>How long does a typical gutter cleaning take?</h3>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>The time required depends on the size of your home and the condition of your gutters. For most average-sized homes with moderate debris, a thorough cleaning takes about 1-2 hours. Homes with multiple stories or heavily clogged gutters may take longer. I pride myself on being thorough rather than rushing through the job.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Frequently Asked Questions (FAQ) Section -->

        <!-- Call to Action (CTA) Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-content" data-aos="fade-up">
                    <h2>Ready to Schedule Your Gutter Service?</h2>
                    <p>Don't let clogged or damaged gutters put your home at risk. Contact me today for professional gutter cleaning, repairs, or protection!</p>
                    <a href="tel:9374780689" class="phone-number">
                        <i class="fas fa-phone-alt"></i> 937-478-0689
                    </a>
                    <div class="text-option">Text me a photo of your gutters for a quick estimate – I respond within hours!</div>
                </div>
            </div>
        </section>
        <!-- End Call to Action (CTA) Section -->
    </div>
    <!-- End Main Services Page Content Wrapper -->

    <!-- Footer Section -->
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
                            <p><a href="http://bit.ly/CleanFlowOhio" target="_blank">bit.ly/CleanFlowOhio</a></p>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <p>Monday - Friday: 8am - 6pm<br>Saturday: 8am - 3pm<br>Sunday: Closed</p>
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
                        <li><a href="index.html#calculator">Cost Estimator</a></li>
                        <li><a href="index.html#signs">Signs You Need Service</a></li>
                        <li><a href="index.html#calendar">Maintenance Guide</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="services.html#gutter-cleaning-service">Gutter Cleaning</a></li>
                        <li><a href="services.html#gutter-repairs-service">Gutter Repairs</a></li>
                        <li><a href="services.html#gutter-protection-service">Gutter Guards</a></li>
                        <li><a href="services.html#service-faq">Maintenance FAQs</a></li>
                        <li><a href="about.html#service-area">Service Areas</a></li>
                        <li><a href="tel:9374780689">Get a Quote</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 CleanFlow of Ohio. All Rights Reserved. | Owner-Operated | 20+ Years Experience | Proudly Serving Montgomery & Greene Counties since 2003</p>
            </div>
        </div>
    </footer>
    <!-- End Footer Section -->

    <!-- Back to Top Button -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>
    <!-- End Back to Top Button -->

    <!-- AOS Animation Library -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="assets/main.js"></script>
</body>
</html>
```

### File: `sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.cleanflowohio.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.cleanflowohio.com/services.html</loc></url>
  <url><loc>https://www.cleanflowohio.com/about.html</loc></url>
</urlset>
```

### File: `style.css`
```css
/*--------------------------------------------------------------
# Root Variables
--------------------------------------------------------------*/
/* Define global color palette and reusable values */
:root {
            --primary-dark: #1e3c72; /* Darker shade of primary color */
            --primary: #2c5aa0; /* Main primary color */
            --primary-light: #3a6fc7; /* Lighter shade of primary color */
            --accent: #f39c12; /* Accent color for highlights and CTAs */
            --accent-dark: #e67e22; /* Darker shade of accent color */
            --light: #f8f9fa; /* Light background color */
            --dark: #212529; /* Dark text color */
            --gray: #6c757d; /* Gray text and element color */
            --warning: #fff3cd; /* Warning message background color */
            --warning-border: #ffc107; /* Warning message border color */
            --danger: #e74c3c; /* Danger/error color */
        }

/*--------------------------------------------------------------
# General Styles
--------------------------------------------------------------*/
/* Basic reset and default body styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; /* Ensures padding and border are included in element's total width and height */
        }

        body {
            font-family: 'Poppins', sans-serif; /* Default font family */
            color: var(--dark); /* Default text color */
            overflow-x: hidden; /* Prevents horizontal scrolling */
            background-color: var(--light); /* Default background color for the body */
        }

/*--------------------------------------------------------------
# Layout & Structure Utilities
--------------------------------------------------------------*/
        .container {
            width: 100%;
            max-width: 1200px; /* Maximum width of content area */
            margin: 0 auto; /* Centers content on the page */
            padding: 0 20px; /* Horizontal padding for smaller screens */
        }

        section {
            padding: 80px 0; /* Standard vertical padding for sections */
        }

/* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--primary-dark); /* Default heading color */
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
            width: 80px; /* Underline width for h2 */
            height: 4px; /* Underline thickness for h2 */
            background: var(--accent); /* Underline color for h2 */
        }

        h3 {
            font-size: 1.8rem;
        }

        p {
            line-height: 1.7; /* Standard line height for paragraphs */
            margin-bottom: 1rem;
            font-size: 1.05rem; /* Standard paragraph font size */
        }

        a {
            text-decoration: none; /* Removes default underline from links */
            color: var(--primary);
            transition: all 0.3s ease; /* Smooth transition for link hover effects */
        }

        a:hover {
            color: var(--accent); /* Link color on hover */
        }

/*--------------------------------------------------------------
# Button Styles
--------------------------------------------------------------*/
        .btn {
            display: inline-block;
            padding: 12px 28px; /* Default button padding */
            border-radius: 50px; /* Fully rounded corners for pill shape */
            text-transform: uppercase; /* Uppercase button text */
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            cursor: pointer;
            letter-spacing: 0.5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
            position: relative; /* For pseudo-element positioning */
            overflow: hidden; /* To contain pseudo-elements */
            z-index: 1; /* Ensures button is above other elements if needed */
            border: none; /* Remove default border */
            text-align: center;
        }

        /* Shine effect on hover */
        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); /* Light shine gradient */
            transition: all 0.5s ease;
            z-index: -1; /* Behind the button text */
        }

        .btn:hover:before {
            left: 100%; /* Moves shine effect across the button */
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); /* Primary button gradient */
            color: white;
        }

        .btn-primary:hover {
            background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%); /* Lighter gradient on hover */
            color: white;
            transform: translateY(-3px); /* Slight lift effect on hover */
        }

        .btn-accent {
            background: var(--accent); /* Accent button background */
            color: white;
        }

        .btn-accent:hover {
            background: var(--accent-dark); /* Darker accent on hover */
            color: white;
            transform: translateY(-3px); /* Slight lift effect on hover */
        }

        .btn-lg {
            padding: 15px 35px; /* Larger padding for large buttons */
            font-size: 16px; /* Larger font size for large buttons */
        }

/*--------------------------------------------------------------
# Utility Classes
--------------------------------------------------------------*/
/* Text alignment */
        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

/* Flexbox utilities */
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

/* Gap utilities */
        .gap-1 {
            gap: 1rem;
        }

        .gap-2 {
            gap: 2rem;
        }

/* Margin top utilities */
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

/* Margin bottom utilities */
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

/* Grid utilities */
        .grid {
            display: grid;
            gap: 30px; /* Default gap for grid layouts */
        }

        .grid-2 {
            grid-template-columns: repeat(2, 1fr); /* 2-column grid */
        }

        .grid-3 {
            grid-template-columns: repeat(3, 1fr); /* 3-column grid */
        }

        .grid-4 {
            grid-template-columns: repeat(4, 1fr); /* 4-column grid */
        }

/*--------------------------------------------------------------
# Top Bar Styles
--------------------------------------------------------------*/
        .topbar {
            background-color: var(--primary-dark); /* Dark background for top bar */
            color: white; /* Light text color for top bar */
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

/*--------------------------------------------------------------
# Header & Navigation Styles
--------------------------------------------------------------*/
        header {
            background-color: rgba(255, 255, 255, 0.95); /* Semi-transparent white background */
            position: fixed; /* Sticky header */
            width: 100%;
            z-index: 1000; /* Ensures header is above other content */
            top: 0;
            margin-top: 40px; /* Space for the topbar initially */
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        }

        /* Styles for header when scrolled (sticky) */
        header.sticky {
            padding: 10px 0; /* Reduced padding when sticky */
            margin-top: 0; /* No margin when sticky */
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0; /* Default header padding */
            transition: all 0.3s ease;
        }

        header.sticky .header-container {
            padding: 10px 0; /* Reduced padding for sticky header container */
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
            color: var(--accent); /* Accent color for part of the logo */
            margin-left: 5px;
        }

        nav ul {
            display: flex;
            gap: 30px; /* Spacing between navigation items */
            list-style: none; /* Remove default list styling */
        }

        nav ul li {
            position: relative; /* For positioning the underline pseudo-element */
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
            color: var(--primary); /* Color for active navigation link */
            font-weight: 600;
        }

        /* Underline effect for navigation links */
        nav ul li a::after {
            content: '';
            position: absolute;
            width: 0; /* Starts with no width */
            height: 2px;
            background: var(--accent);
            bottom: -5px; /* Position below the link */
            left: 0;
            transition: all 0.3s ease;
        }

        nav ul li a:hover::after,
        nav ul li a.active::after {
            width: 100%; /* Full width on hover/active */
        }

        /* Mobile menu toggle button */
        .menu-toggle {
            display: none; /* Hidden on desktop */
            font-size: 24px;
            cursor: pointer;
            color: var(--dark);
        }

        /* Phone button in header */
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

/*--------------------------------------------------------------
# Hero Section Styles
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Lead Form Section Styles
--------------------------------------------------------------*/
        .lead-form-section {
            padding: 50px 0; /* Padding for the section containing the form */
        }

        .lead-form {
            background: #fff; /* White background for the form card */
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08); /* Soft shadow for the form card */
            padding: 30px;
            border-radius: 10px;
            margin-top: -100px; /* Negative margin to overlap with hero section */
            position: relative; /* For z-index stacking */
            z-index: 2; /* Ensures form is above hero image if overlapping */
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

/*--------------------------------------------------------------
# About Section Styles (Homepage)
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Process Section / How It Works Styles
--------------------------------------------------------------*/
        .process {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid for process steps */
            gap: 30px;
            margin-top: 40px;
        }

        .step {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* Soft shadow for steps */
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

/*--------------------------------------------------------------
# Service Card Styles (Used in multiple sections)
--------------------------------------------------------------*/
        .service-card {
            background-color: white;
            border-radius: 10px; /* Rounded corners for cards */
            overflow: hidden; /* Ensures content respects border radius */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* Soft shadow for cards */
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

/*--------------------------------------------------------------
# Warning Box Styles
--------------------------------------------------------------*/
        .warning-box {
            background: var(--warning); /* Warning background color */
            border: 2px solid var(--warning-border); /* Warning border color */
            border-radius: 10px;
            padding: 30px;
            position: relative; /* For icon positioning */
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

/*--------------------------------------------------------------
# Special Offer Section Styles
--------------------------------------------------------------*/
        .special-offer {
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); /* Accent gradient background */
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

/*--------------------------------------------------------------
# Gutter Cleaning Cost Estimator Styles
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Signs You Need Gutter Cleaning Section Styles
--------------------------------------------------------------*/
        .signs-section {
            background-color: var(--light); /* Light background for this section */
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

/*--------------------------------------------------------------
# Seasonal Maintenance Calendar Section Styles
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Benefits Section Styles
--------------------------------------------------------------*/
        .benefits-section {
            background-color: var(--light); /* Light background for this section */
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

/*--------------------------------------------------------------
# Bottom Call to Action (CTA) Section Styles
--------------------------------------------------------------*/
        .bottom-cta {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); /* Primary gradient background */
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

/*--------------------------------------------------------------
# General Call to Action (CTA) Section Styles (Services & About pages)
--------------------------------------------------------------*/
        .cta-section {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); /* Primary gradient background */
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

/*--------------------------------------------------------------
# Badge Section Styles (About Page Credentials)
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Serving Since Banner Styles (Example - if used)
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Footer Styles
--------------------------------------------------------------*/
        footer {
            background: #f8f9fa; /* Light background for footer */
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

/*--------------------------------------------------------------
# Services Page Specific Styles
--------------------------------------------------------------*/
        /* Service Detail (Individual service sections on services.html) */
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

/*--------------------------------------------------------------
# FAQ Section Styles (Accordion)
--------------------------------------------------------------*/
        .faq-section {
            background-color: #f8f9fa; /* Light background for FAQ section */
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

/*--------------------------------------------------------------
# Contact Info Card Styles (About Page)
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# Map Section Styles (If a map was used)
--------------------------------------------------------------*/
        .map-container {
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            margin-bottom: 40px;
        }

/*--------------------------------------------------------------
# Back to Top Button Styles
--------------------------------------------------------------*/
        .back-to-top {
            position: fixed; /* Fixed position at bottom right */
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

/*--------------------------------------------------------------
# Page Specific Content Wrappers
--------------------------------------------------------------*/
        .page-content {
            padding-top: 100px; /* Adjusts for fixed header height */
        }

/*--------------------------------------------------------------
# Checkmark List Styles
--------------------------------------------------------------*/
        .checkmark-list {
            list-style: none; /* Removes default list bullets */
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

/*--------------------------------------------------------------
# Animation Classes (AOS Library Helpers)
--------------------------------------------------------------*/
        .fade-up {
            animation: fadeUp 1s ease forwards; /* Reference to keyframe animation */
            opacity: 0; /* Start transparent */
        }

        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(20px); /* Start slightly below */
            }
            to {
                opacity: 1;
                transform: translateY(0); /* Fade to visible and original position */
            }
        }

        .fade-in {
            animation: fadeIn 1s ease forwards; /* Reference to keyframe animation */
            opacity: 0; /* Start transparent */
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1; /* Fade to visible */
            }
        }

/*--------------------------------------------------------------
# Responsive Styles
--------------------------------------------------------------*/
/* Adjustments for various screen sizes */

        /* Extra large devices (large desktops, 1200px and up) */
        /* No specific styles here as 1200px is the max-width of .container */

        /* Large devices (desktops, less than 1200px) */
        @media screen and (max-width: 1199.98px) {
            /* Styles for screens smaller than 1200px */
            .container {
                max-width: 960px; /* Adjust container width for large devices */
            }
        }

        /* Medium devices (tablets, less than 992px) */
        @media screen and (max-width: 991.98px) {
            /* Styles for screens smaller than 992px */
            .container {
                max-width: 720px; /* Adjust container width for medium devices */
            }

            h1 {
                font-size: 2.5rem; /* Adjust h1 font size */
            }

            h2 {
                font-size: 2rem; /* Adjust h2 font size */
            }

            .grid-3 {
                grid-template-columns: repeat(2, 1fr); /* Change 3-column grid to 2-column */
            }

            .grid-4 {
                grid-template-columns: repeat(2, 1fr); /* Change 4-column grid to 2-column */
            }

            .footer-top {
                grid-template-columns: 1fr 1fr; /* Adjust footer layout */
            }

            .lead-form {
                margin-top: -50px; /* Adjust lead form margin for tablets */
            }
        }

        /* Small devices (landscape phones, less than 768px) */
        @media screen and (max-width: 767.98px) {
            /* Styles for screens smaller than 768px */
            .container {
                max-width: 540px; /* Adjust container width for small devices */
            }

            /* Mobile Navigation Styles */
            nav ul {
                position: fixed; /* Full-screen mobile menu */
                top: 0;
                right: -100%; /* Initially off-screen */
                height: 100vh;
                width: 70%; /* Mobile menu width */
                background: white;
                flex-direction: column; /* Stack items vertically */
                justify-content: center;
                align-items: center;
                transition: all 0.5s ease;
                z-index: 1001; /* Above header */
                box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
            }

            nav ul.active {
                right: 0; /* Slide in from the right */
            }

            .menu-toggle {
                display: block; /* Show mobile menu toggle */
            }

            .close-menu {
                position: absolute; /* Position close button within mobile menu */
                top: 20px;
                right: 20px;
                font-size: 24px;
                cursor: pointer;
            }

            /* Adjust grid layouts for smaller screens */
            .grid-2,
            .grid-3,
            .grid-4 {
                grid-template-columns: 1fr; /* Stack grid items in a single column */
            }

            .footer-top {
                grid-template-columns: 1fr; /* Stack footer sections */
            }

            /* Specific adjustments for about section on mobile */
            .about-content {
                flex-direction: column; /* Stack about content vertically */
            }

            .about-image {
                order: -1; /* Move image above text on mobile */
            }

            .about-image::before {
                display: none; /* Hide decorative border on mobile */
            }

            .experience-badge {
                right: 20px;
                top: 20px;
                width: 80px; /* Smaller badge on mobile */
                height: 80px;
            }

            .experience-badge span:first-child {
                font-size: 1.5rem;
            }

            .experience-badge span:last-child {
                font-size: 0.8rem;
            }

            .phone-number {
                font-size: 2rem; /* Adjust phone number font size */
            }

            .hero-btns {
                flex-direction: column; /* Stack hero buttons vertically */
                align-items: center;
            }

            .lead-form {
                margin-top: -30px; /* Adjust lead form margin for small screens */
            }

            .topbar-container {
                flex-direction: column; /* Stack topbar items vertically */
                gap: 5px;
            }
        }

        /* Extra small devices (portrait phones, less than 576px) */
        @media screen and (max-width: 575.98px) {
            /* Styles for screens smaller than 576px */
            h1 {
                font-size: 2.2rem; /* Further reduce h1 font size */
            }

            h2 {
                font-size: 1.8rem; /* Further reduce h2 font size */
            }

            .hero-content h1 {
                font-size: 2.5rem; /* Adjust hero heading for very small screens */
            }

            .hero-content p {
                font-size: 1rem; /* Adjust hero paragraph for very small screens */
            }

            .hero-btns {
                flex-direction: column; /* Ensure hero buttons are stacked */
            }

            .phone-number {
                font-size: 1.8rem; /* Adjust phone number font size */
            }

            .gallery-grid {
                grid-template-columns: 1fr; /* Ensure gallery items are stacked */
            }

            .lead-form {
                padding: 20px 15px; /* Adjust lead form padding */
                margin-top: 0; /* Remove negative margin if needed */
            }
        }
```
