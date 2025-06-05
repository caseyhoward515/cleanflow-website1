## `LICENSE`
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

## `README.md`
```
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

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cleanflow-ohio.git
   cd cleanflow-ohio

2. Modify content

Edit HTML files in the root directory to customize page content.

Adjust CSS in the style.css file.

Update images/assets in the assets/ directory.



3. Deploy to Vercel (Recommended)

Create a free account at Vercel.

Connect your GitHub repository.

Follow the guided setup, leaving default settings as-is.

Your website will automatically deploy when you push changes to GitHub.




🗂 Repository Structure

cleanflow-ohio/
├── script.js              # Main JavaScript file
├── style.css              # Main CSS file
├── index.html             # Homepage
├── services.html          # Services description page
├── about.html             # Company/about page
└── sitemap.xml            # SEO sitemap

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
```

## `about.html`
```
<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About CleanFlow of Ohio | Dayton Gutter Experts</title>
    <meta name="description" content="Learn about CleanFlow of Ohio, your trusted, owner-operated gutter cleaning and maintenance specialist with over 20 years of experience in Dayton and surrounding areas.">
    <meta name="keywords" content="about us, gutter company Dayton, experienced gutter cleaner, local gutter service, CleanFlow of Ohio story">
    <link rel="canonical" href="https://www.cleanflowohio.com/about" /><!-- Google Fonts -->
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
    <!-- Top Contact Bar -->
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
    </div><!-- Header -->
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
            <!-- Theme Toggle Button START --> <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button> <!-- Theme Toggle Button END -->
            <a href="tel:9374780689" class="phone-btn">
                <i class="fas fa-phone-alt"></i>
                <span>937-478-0689</span>
            </a>
        </div>
    </div>
</header>

<!-- About Page Content -->
<div id="about-page-content" class="page-content"> <!-- Changed ID to avoid conflict if script.js uses it -->
    <section id="about-hero">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <h1>About CleanFlow of Ohio</h1>
                <p>Your trusted premium gutter maintenance, cleaning, and protection experts serving Dayton and surrounding communities.</p>
            </div>
        </div>
    </section>

    <section id="about-story">
        <div class="container">
            <div class="about-content" data-aos="fade-up">
                <div class="about-text">

  <h2>Our Story</h2>
  <p>At CleanFlow of Ohio, we provide premium gutter maintenance, cleaning, and protection services throughout Montgomery County and the surrounding area. From routine cleanouts and screen installation to alignment checks, sealing, and full system upkeep, we handle every job with precision and pride.</p>  <p>I’ve been in this industry for over 20 years. CleanFlow is the result of experience, high standards, and a deep commitment to doing the job right. My crew and I are professionals. No temps. Just skilled people I trust to show up early, work clean, and treat every home with respect.</p>  <p>What sets us apart isn’t just the work. It’s how we show up. I genuinely enjoy helping people. Always have. There’s something satisfying about showing up, solving a messy problem, and hearing, “Wow, that was smooth.” That kind of reaction is what keeps us going.</p>  <p>We offer a premium service because that’s what I expect at my own home. I believe in quality over quantity. Details matter. Communication matters. And trust? That’s everything.</p>  <p>Supporting CleanFlow means working with a local business that takes pride in every job, large or small. No corporate scripts. No cut corners. Just real pros who care about doing things right and leaving you with one less thing to worry about.</p>
</div><div class="about-image">
                    <img src="https://nedstevens.com/wp-content/uploads/2020/12/gutter-cleaning-hero-new.jpg" alt="CleanFlow of Ohio - Professional Gutter Service">
                    <div class="experience-badge">
                        <span>20+</span>
                        <span>Years</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

    <!-- Certification Section -->
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

    <!-- CTA Section -->
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
</div>

<!-- Footer -->
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

<!-- Back to Top -->
<div class="back-to-top" id="back-to-top">
    <i class="fas fa-arrow-up"></i>
</div>

<!-- AOS Animation Library -->
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script src="script.js"></script>


```

## `index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
    <!-- Top Contact Bar -->
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

    <!-- Header -->
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
                <!-- Theme Toggle Button START --> <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button> <!-- Theme Toggle Button END -->
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Home Page -->
    <div id="home-page" class="page">
        <!-- Hero Section -->
        <section id="hero">
            <div class="container">
                <div class="hero-content" data-aos="fade-up">
                    <h1>Professional Gutter Cleaning & Protection</h1>
                    <p>Prevent costly water damage with expert gutter maintenance from the most trusted service in Dayton and surrounding areas.</p>
                    <div class="hero-btns">
            <!-- 1) Close the phone link immediately: -->
            <a href="tel:9374780689" class="btn btn-accent btn-lg">
              <i class="fas fa-phone-alt"></i> Call Now: 937-478-0689
            </a>

            <!-- 2) Update the second link to point at #calculator (instead of #quote) -->
            <a href="#calculator" class="btn btn-accent btn-lg">
              <i class="fas fa-calculator"></i> Click for Free Estimate
            </a>
          </div>
                </div>
            </div>
        </section>

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

        <!-- Warning Box -->
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

        <!-- Process Section -->
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

        <!-- Services Overview -->
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

        <!-- Gutter Cleaning Calculator -->
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

        <!-- Signs You Need Gutter Cleaning -->
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

        <!-- Seasonal Maintenance Calendar -->
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

        <!-- Benefits Section -->
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

        <!-- What You Get Section -->
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

        <!-- Special Offer -->
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

        <!-- Bottom CTA -->
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
    </div>

    <!-- Footer -->
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
                            <p><a href="https://CleanFlowOhio.com" target="_blank">CleanFlowOhio.com</a></p>
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

    <!-- Back to Top -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <!-- AOS Animation Library -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script src="script.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Seasonal Tabs Functionality
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    seasonTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove 'active' from all tabs and content
        seasonTabs.forEach(t => t.classList.remove('active'));
        seasonContents.forEach(c => c.classList.remove('active'));

        // Add 'active' to the clicked tab and its content
        tab.classList.add('active');
        const seasonName = tab.getAttribute('data-season');
        document.getElementById(seasonName + '-content').classList.add('active');
      });
    });
  });
</script>
</body>
</html>

```

## `script.js`
```
// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navigation Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

if (menuToggle && navMenu && closeMenu) { // Check if all nav elements exist
    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Sticky Header & Back to Top Button Visibility
const header = document.getElementById('header'); // Define header once
const backToTop = document.getElementById('back-to-top'); // Define backToTop once

if (header && backToTop) { // Check if header and backToTop exist
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('sticky');
            backToTop.classList.remove('active');
        }
    });

    // Back to Top Click Handler
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
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
        if (content) { // Check if content exists
             content.classList.add('active');
             content.style.maxHeight = content.scrollHeight + "px";
        }
    } else {
        element.classList.remove('active');
        if (content) { // Check if content exists
            content.classList.remove('active');
            content.style.maxHeight = null;
        }
    }
}

// Page Navigation (This function was not in the original assets/main.js)
// Ensure this is intended and correctly implemented if you've moved to a single-page app style.
function showPage(page) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Hide all pages
    pages.forEach(p => p.style.display = 'none');

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected page and set active link
    const pageElement = document.getElementById(`${page}-page`);
    const linkElement = document.getElementById(`${page}-link`);

    if (pageElement) pageElement.style.display = 'block';
    if (linkElement) linkElement.classList.add('active');

    // Close mobile menu if open
    if (navMenu) navMenu.classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
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
const estimatedPriceEl = document.getElementById('estimatedPrice'); // Define once
const resultBoxEl = document.getElementById('resultBox'); // Define once

function calculatePrice() {
    // Ensure elements exist before trying to use them
    if (!linearFeetInput || !storiesSelect || !debrisSelect || !estimatedPriceEl || !resultBoxEl) {
        console.error("Calculator elements not found.");
        return;
    }

    const linearFeet = parseFloat(linearFeetInput.value) || 0;
    const stories = storiesSelect.value;
    const debris = debrisSelect.value;

    let ratePerFoot = 0;
    switch (debris) {
        case 'light': ratePerFoot = 0.75; break;
        case 'medium': ratePerFoot = 0.85; break;
        case 'heavy': ratePerFoot = 0.95; break;
        default: ratePerFoot = 0.85;
    }

    let price = linearFeet * ratePerFoot;
    if (price < 135) {
        price = 135;
    }
    if (stories === '2') {
        price += 50;
    }

    estimatedPriceEl.textContent = '$' + price.toFixed(2);
    resultBoxEl.classList.add('active');
}

if (calculateBtn) calculateBtn.addEventListener('click', calculatePrice);
if (linearFeetInput) linearFeetInput.addEventListener('input', calculatePrice);
if (storiesSelect) storiesSelect.addEventListener('change', calculatePrice);
if (debrisSelect) debrisSelect.addEventListener('change', calculatePrice);


// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const serviceSelect = document.getElementById('service');
        const messageDiv = document.getElementById('formMessage'); // Define once

        // Ensure form elements exist
        if (!nameInput || !phoneInput || !serviceSelect || !messageDiv) {
            console.error("Quote form elements not found.");
            return;
        }

        const name = nameInput.value;
        const phone = phoneInput.value;
        const service = serviceSelect.value;

        const subject = "New Quote Request from " + name;
        const body = "Name: " + encodeURIComponent(name) + "%0D%0APhone: " + encodeURIComponent(phone) + "%0D%0AService: " + encodeURIComponent(service);

        window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;

        messageDiv.style.display = 'block';
        messageDiv.classList.add('success');
        messageDiv.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";

        quoteForm.reset();

        setTimeout(function() {
            messageDiv.style.display = 'none';
            messageDiv.classList.remove('success');
        }, 5000);
    });
}

// Dark Mode Toggle Functionality document.addEventListener('DOMContentLoaded', function() { const themeToggleBtn = document.getElementById('theme-toggle-btn'); const body = document.body; // Gracefully handle if the button isn't found on a page if (!themeToggleBtn) { // console.log("Theme toggle button not found on this page."); return; } const toggleTextEl = themeToggleBtn.querySelector('.toggle-text'); const toggleIconEl = themeToggleBtn.querySelector('i.fas'); if (!toggleTextEl || !toggleIconEl) { // console.error("Theme toggle button is missing internal text or icon elements."); return; } const applyTheme = (theme) => { if (theme === 'dark') { body.classList.add('dark-mode'); if (toggleIconEl) { toggleIconEl.classList.remove('fa-sun'); toggleIconEl.classList.add('fa-moon'); } if (toggleTextEl) toggleTextEl.textContent = 'Dark'; themeToggleBtn.setAttribute('aria-label', 'Switch to light mode'); } else { body.classList.remove('dark-mode'); if (toggleIconEl) { toggleIconEl.classList.remove('fa-moon'); toggleIconEl.classList.add('fa-sun'); } if (toggleTextEl) toggleTextEl.textContent = 'Light'; themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode'); } }; themeToggleBtn.addEventListener('click', () => { const currentThemeIsDark = body.classList.contains('dark-mode'); const newTheme = currentThemeIsDark ? 'light' : 'dark'; localStorage.setItem('theme', newTheme); applyTheme(newTheme); }); // Load saved theme or detect system preference const savedTheme = localStorage.getItem('theme'); const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; if (savedTheme) { applyTheme(savedTheme); } else if (prefersDark) { applyTheme('dark'); } else { applyTheme('dark'); // Default to dark } // Optional: Listen for OS theme changes if no user override has been set if (window.matchMedia) { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => { if (!localStorage.getItem('theme')) { // Only if user hasn't manually set a preference applyTheme(e.matches ? 'dark' : 'light'); } }); } });
```

## `services.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
    <!-- Top Contact Bar -->
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

    <!-- Header -->
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
                <!-- Theme Toggle Button START --> <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button> <!-- Theme Toggle Button END -->
                <a href="tel:9374780689" class="phone-btn">
                    <i class="fas fa-phone-alt"></i>
                    <span>937-478-0689</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Services Page Content -->
    <div id="services-page-content" class="page-content"> <!-- Changed ID to avoid conflict if script.js uses it -->
        <section id="services-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p>Comprehensive gutter cleaning and protection services to keep your home safe from water damage.</p>
                </div>
            </div>
        </section>

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

        <!-- CTA Section -->
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
    </div>

    <!-- Footer -->
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

    <!-- Back to Top -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <!-- AOS Animation Library -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

## `sitemap.xml`
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.cleanflowohio.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.cleanflowohio.com/services.html</loc></url>
  <url><loc>https://www.cleanflowohio.com/about.html</loc></url>
</urlset>
```

## `style.css`
```
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

/* Dark Mode Styles */ body.dark-mode { --primary-dark: #4A7BC8; --primary: #5887D1; --primary-light: #6B9EEA; --accent: #f39c12; /* Kept same for visibility, can be adjusted later */ --accent-dark: #e67e22; /* Kept same */ --light: #1E2125; /* Dark page background */ --dark: #F0F0F0; /* Light default text */ --gray: #A0A0A0; /* Lighter gray for dark mode */ /* Specific variables for dark mode elements */ --card-bg-dm: #2B2F33; --input-bg-dm: #33383D; --border-color-dm: #40454A; --header-bg-dm: rgba(27, 30, 33, 0.95); --footer-bg-dm: #111315; --topbar-bg-dm: #111315; --box-shadow-dm: 0 5px 15px rgba(255, 255, 255, 0.03); /* Softer, lighter shadow */ --box-shadow-stronger-dm: 0 8px 25px rgba(255, 255, 255, 0.05); background-color: var(--light); color: var(--dark); } body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4, body.dark-mode h5, body.dark-mode h6 { color: var(--primary); /* Headers use the adjusted primary color */ } body.dark-mode a { /* General links */ color: var(--accent); } body.dark-mode a:hover { color: var(--primary-light); } /* Elements that had light backgrounds */ body.dark-mode .lead-form, body.dark-mode .service-card, body.dark-mode .calculator-card, body.dark-mode .sign-card, body.dark-mode .season-card, body.dark-mode .benefit-card, body.dark-mode .contact-info-card, body.dark-mode .accordion-header, body.dark-mode .badge-item, body.dark-mode .warning-box { /* Assuming warning box needs dark mode adjustment */ background-color: var(--card-bg-dm); box-shadow: var(--box-shadow-dm); color: var(--dark); /* Ensure text inside is light */ } body.dark-mode .accordion-content { /* Accordion content often has white background */ background-color: var(--card-bg-dm); color: var(--dark); } body.dark-mode .accordion-header.active { background-color: var(--primary); color: #FFFFFF; /* Ensure text is white on active primary bg */ } body.dark-mode .accordion-header.active h3, body.dark-mode .accordion-header.active i { color: #FFFFFF; } body.dark-mode .lead-form input, body.dark-mode .lead-form select, body.dark-mode .calculator-form input, body.dark-mode .calculator-form select { background-color: var(--input-bg-dm); color: var(--dark); border: 1px solid var(--border-color-dm); } body.dark-mode .lead-form input::placeholder, body.dark-mode .calculator-form input::placeholder { color: var(--gray); } body.dark-mode .form-group label { color: var(--dark); } body.dark-mode .result-box { background-color: var(--card-bg-dm); border: 1px solid var(--border-color-dm); } body.dark-mode .result-title { color: var(--primary); } body.dark-mode .topbar { background-color: var(--topbar-bg-dm); color: var(--gray); } body.dark-mode .topbar a { color: var(--accent); } body.dark-mode .topbar a:hover { color: #ffffff; } body.dark-mode header { background-color: var(--header-bg-dm); box-shadow: var(--box-shadow-stronger-dm); } body.dark-mode .logo { color: var(--primary); } body.dark-mode .logo span { color: var(--accent); } body.dark-mode nav ul li a { color: var(--gray); } body.dark-mode nav ul li a:hover, body.dark-mode nav ul li a.active { color: var(--accent); } body.dark-mode nav ul li a.active::after, body.dark-mode nav ul li a:hover::after { background: var(--accent); } body.dark-mode .menu-toggle i, body.dark-mode .close-menu i { /* Ensure mobile menu icons are visible */ color: var(--dark); } body.dark-mode .phone-btn { /* Main CTA phone button in header */ background-color: var(--accent); color: #1E2125; /* Dark text on bright accent */ } body.dark-mode .phone-btn:hover { background-color: var(--accent-dark); } body.dark-mode .phone-btn i { color: #1E2125; } /* Button styling for dark mode */ body.dark-mode .btn-primary { background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); color: #1E2125; /* Dark text on bright accent */ } body.dark-mode .btn-primary:hover { background: linear-gradient(135deg, var(--accent-dark) 0%, #c56e1f 100%); transform: translateY(-3px); } body.dark-mode .btn-accent { background: var(--primary); color: var(--dark); /* Light text on primary */ } body.dark-mode .btn-accent:hover { background: var(--primary-dark); transform: translateY(-3px); } body.dark-mode footer { background: var(--footer-bg-dm); border-top: 1px solid var(--border-color-dm); } body.dark-mode .footer-about p, body.dark-mode .footer-contact-item p, body.dark-mode .footer-links ul li a, body.dark-mode .footer-bottom p { color: var(--gray); } body.dark-mode .footer-logo { color: var(--primary); } body.dark-mode .footer-logo span { color: var(--accent); } body.dark-mode .footer-links h4 { color: var(--dark); } body.dark-mode .footer-links ul li a:hover { color: var(--accent); } body.dark-mode .footer-contact-item i { color: var(--primary); } body.dark-mode .footer-contact-item a { color: var(--accent); } body.dark-mode .back-to-top { background: var(--accent); color: #1E2125; /* Dark text on accent */ } body.dark-mode .back-to-top:hover { background: var(--accent-dark); } /* Theme Toggle Button Styles */ .theme-toggle-btn { background-color: transparent; border: 1px solid var(--gray); /* Default light mode border */ color: var(--dark); /* Default light mode text */ padding: 6px 10px; border-radius: 20px; cursor: pointer; font-size: 13px; display: inline-flex; /* Changed to inline-flex */ align-items: center; gap: 6px; transition: all 0.3s ease; /* margin-left: 15px; /* Remove specific margin, will be placed in HTML structure */ } .theme-toggle-btn:hover { border-color: var(--primary); background-color: var(--primary-light); color: white; } .theme-toggle-btn .fas { /* Target Font Awesome icons specifically */ font-size: 14px; line-height: 1; /* Ensure icon aligns well with text */ } /* Dark mode specific toggle button styles */ body.dark-mode .theme-toggle-btn { border-color: var(--gray); color: var(--dark); } body.dark-mode .theme-toggle-btn:hover { border-color: var(--accent); background-color: var(--accent); color: #1E2125; /* Dark text on accent button */ }

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
            }

            .close-menu {
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 24px;
                cursor: pointer;
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

            .topbar-container {
                flex-direction: column;
                gap: 5px;
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
        }
```
