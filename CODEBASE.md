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
