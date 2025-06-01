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
