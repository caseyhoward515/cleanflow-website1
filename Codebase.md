### File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleanFlow of Ohio | Professional Gutter Cleaning & Protection</title>
    <meta name="description" content="CleanFlow of Ohio provides professional gutter cleaning, maintenance, and protection services in Dayton and surrounding areas. Protect your home from water damage with our expert gutter services.">
    <meta name="keywords" content="gutter cleaning, gutter protection, gutter maintenance, gutter repairs, gutter guards, Dayton gutter cleaning, Montgomery County gutter services, Greene County gutter services, professional gutter cleaning, seamless gutters">
    <link rel="canonical" href="https://www.cleanflowohio.com/index.html" />

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
                    <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button>
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

    <!-- Home Page -->
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
                        <span class="price-highlight">A routine cleaning today prevents a $2,000+ repair tomorrow.</span>
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
        <section id="services-overview" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Services</h2>
                    <p>Professional gutter cleaning and protection services to keep your home safe and dry.</p>
                </div>

                <div class="grid grid-3" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-card">
                        <div class="service-image">
                            <img src="https://images.pexels.com/photos/113730/pexels-photo-113730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Professional Gutter Cleaning Service showing clean gutters">
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
                            <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Close-up of a worker repairing a home gutter system">
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
                            <img src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gutter guard system installed on a residential home">
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
                                <input type="number" id="linearFeet" placeholder="Approx. house perimeter" min="50" max="500">
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
                                    <option value="light">Light (Few trees)</option>
                                    <option value="medium" selected>Medium (Some trees)</option>
                                    <option value="heavy">Heavy (Many trees)</option>
                                </select>
                            </div>
                        </div>

                        <div class="result-box" id="resultBox">
                            <div class="result-title">Estimated Cost</div>
                            <div class="result-price" id="estimatedPrice">$200 - $300</div>
                            <p class="result-note">This is a rough estimate. For an accurate quote, please call us at <a href="tel:9374780689" style="color: var(--c-primary);">937-478-0689</a> or send us a photo of your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Signs You Need Gutter Cleaning -->
        <section id="signs" class="signs-section section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Signs You Need Gutter Cleaning</h2>
                    <p>Click on each sign to learn more</p>
                </div>

                <div class="signs-grid" data-aos="fade-up">
                    <div class="sign-card">
                        <i class="fas fa-tint"></i>
                        <h3>Overflowing Gutters</h3>
                        <div class="sign-content">
                            <p>If you notice water spilling over the sides of your gutters during rainfall, it's a clear indication they're clogged and need immediate cleaning.</p>
                        </div>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-seedling"></i>
                        <h3>Plants Growing</h3>
                        <div class="sign-content">
                            <p>Seeds carried by wind or birds can settle in debris-filled gutters and start growing. If you see greenery sprouting, it's definitely time for a cleaning.</p>
                        </div>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-water"></i>
                        <h3>Water Stains</h3>
                        <div class="sign-content">
                            <p>Stains on your home's siding or foundation are indicators that water isn't being properly channeled away, often due to clogged gutters.</p>
                        </div>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-weight-hanging"></i>
                        <h3>Sagging Gutters</h3>
                        <div class="sign-content">
                            <p>Gutters sagging or pulling away from the roofline means they're weighed down with debris. This can cause them to detach completely.</p>
                        </div>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-bug"></i>
                        <h3>Pest Infestations</h3>
                        <div class="sign-content">
                            <p>Standing water in gutters creates a breeding ground for mosquitoes, carpenter ants, rodents, and other pests you don't want near your home.</p>
                        </div>
                    </div>

                    <div class="sign-card">
                        <i class="fas fa-icicles"></i>
                        <h3>Ice Dams</h3>
                        <div class="sign-content">
                            <p>In winter, clogged gutters can cause ice dams, preventing snow from draining and leading to water backing up under your shingles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seasonal Maintenance Calendar -->
        <section id="calendar" class="calendar-section section-pad">
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
                            <h3 class="season-title">Spring Maintenance</h3>
                        </div>
                        <p>Spring is critical for cleaning as trees shed flowers and seeds that can clog your system before heavy rains.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Remove winter debris and accumulated leaves</li>
                            <li>Check for and repair any winter damage</li>
                            <li>Ensure downspouts are clear and directing water away</li>
                            <li>Inspect gutters for proper pitch and alignment</li>
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
                            <h3 class="season-title">Summer Maintenance</h3>
                        </div>
                        <p>Summer is the perfect time to inspect your gutters and make necessary repairs while weather is favorable.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Check for nests from birds, wasps, or other pests</li>
                            <li>Inspect for sagging sections that need reinforcement</li>
                            <li>Clear any debris from summer storms</li>
                            <li>Look for signs of rust or corrosion on metal gutters</li>
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
                            <h3 class="season-title">Fall Maintenance</h3>
                        </div>
                        <p>Fall is the most important season for maintenance as falling leaves can quickly overwhelm your gutter system.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Clean gutters after most leaves have fallen</li>
                            <li>Consider a second cleaning if you have many trees</li>
                            <li>Check downspouts for clogs and proper drainage</li>
                            <li>Inspect for loose sections before winter</li>
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
                            <h3 class="season-title">Winter Maintenance</h3>
                        </div>
                        <p>Winter presents unique challenges, including ice dams and damage from snow and ice weight.</p>
                        <ul class="checkmark-list mt-3">
                            <li>Monitor for ice dam formation during freeze/thaw cycles</li>
                            <li>Check gutters after heavy snow or ice storms</li>
                            <li>Look for gutters pulling away due to ice weight</li>
                            <li>Ensure downspouts are clear for melting snow</li>
                        </ul>
                        <div class="mt-3">
                            <a href="tel:9374780689" class="btn btn-accent">Schedule Winter Inspection</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section id="benefits" class="benefits-section section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Benefits of Professional Gutter Cleaning</h2>
                    <p>Why proper gutter maintenance is essential for your home</p>
                </div>

                <div class="benefits-grid" data-aos="fade-up">
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-home"></i></div>
                        <h3 class="benefit-title">Protect Foundation</h3>
                        <p>Properly functioning gutters direct water away from your home's foundation, preventing cracks, leaks, and costly structural damage.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-paint-brush"></i></div>
                        <h3 class="benefit-title">Preserve Exterior</h3>
                        <p>Clean gutters prevent water overflow that can damage siding, fascia boards, and painted surfaces on your home's exterior.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-seedling"></i></div>
                        <h3 class="benefit-title">Protect Landscaping</h3>
                        <p>Properly diverted rainwater protects your garden beds, plants and prevents soil erosion around your property.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-bug-slash"></i></div>
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
                    <p>We provide comprehensive gutter services with attention to detail and customer satisfaction.</p>
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
                    <p>Professional gutter cleaning and protection services in Dayton and surrounding areas. With over 20 years of experience, we provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689">937-478-0689</a></p>
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
</body>
</html>
```

### File: about.html
```html
<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About CleanFlow of Ohio | Dayton Gutter Experts</title>
    <meta name="description" content="Learn about CleanFlow of Ohio, your trusted, owner-operated gutter cleaning and maintenance specialist with over 20 years of experience in Dayton and surrounding areas.">
    <meta name="keywords" content="about us, gutter company Dayton, experienced gutter cleaner, local gutter service, CleanFlow of Ohio story">
    <link rel="canonical" href="https://www.cleanflowohio.com/about.html" />
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
                <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button>
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

<!-- About Page Content -->
<div id="about-page-content" class="page-content">
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
                    <p>My name is Casey Michael, and at CleanFlow of Ohio, we provide premium gutter maintenance, cleaning, and protection services throughout Montgomery County and the surrounding area. From routine cleanouts and screen installation to alignment checks, sealing, and full system upkeep, we handle every job with precision and pride.</p>
                    <p>I’ve been in this industry for over 20 years. CleanFlow is the result of experience, high standards, and a deep commitment to doing the job right. Our crew is made up of professionals—no temps, just skilled people I trust to show up early, work clean, and treat every home with respect.</p>
                    <p>What sets us apart isn’t just the work. It’s how we show up. I genuinely enjoy helping people. There’s something satisfying about solving a messy problem and hearing, “Wow, that was smooth.” That kind of reaction is what keeps us going.</p>
                    <p>We offer a premium service because that’s what I expect at my own home. We believe in quality over quantity. Details matter. Communication matters. And trust? That’s everything.</p>
                    <p>Supporting CleanFlow means working with a local business that takes pride in every job, large or small. No corporate scripts. No cut corners. Just real pros who care about doing things right and leaving you with one less thing to worry about.</p>
                </div>
                <div class="about-image">
                    <img src="https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A professional worker in uniform smiling, representing CleanFlow of Ohio">
                    <div class="experience-badge">
                        <span>20+</span>
                        <span>Years</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="why-choose" class="bg-light section-pad">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <h2 style="margin-left:auto;margin-right:auto;">Why Choose CleanFlow of Ohio</h2>
                <p>We're committed to providing the highest quality gutter services in the Dayton area.</p>
            </div>

            <div class="grid grid-3 mt-4" data-aos="fade-up" data-aos-delay="100">
                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-medal" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Quality Workmanship</h3>
                        <p>Every job is completed to the highest standards with attention to detail and thorough inspection to ensure proper water flow.</p>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-dollar-sign" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Fair & Competitive Pricing</h3>
                        <p>We provide honest, upfront pricing with no hidden fees or surprise charges. You'll always know the cost before work begins.</p>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-bolt" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Fast Service</h3>
                        <p>We respect your time and work efficiently, often providing same-day service when you need it most.</p>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-check-double" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Satisfaction Guaranteed</h3>
                        <p>We stand behind our work with a satisfaction guarantee. If you're not happy with the service, we'll make it right.</p>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-handshake" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Honest & Reliable</h3>
                        <p>We provide straightforward advice and never recommend services you don't need. Your trust is our top priority.</p>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-content text-center">
                        <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: var(--c-accent); margin-bottom: 20px;"></i>
                        <h3>Locally Owned & Operated</h3>
                        <p>As a local business, we take pride in serving our community with integrity and building lasting relationships.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certification Section -->
    <section class="badge-section section-pad">
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
                    <div class="badge-title">Locally Owned</div>
                </div>
            </div>
        </div>
    </section>

    <section id="service-area" class="section-pad">
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
                    <p class="mt-4">Don't see your location? Give us a call to check if we service your area!</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact-info" class="bg-light section-pad">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <h2 style="margin-left:auto;margin-right:auto;">Contact Information</h2>
                <p>Reach out to us for all your gutter cleaning and maintenance needs.</p>
            </div>

            <div class="grid grid-3 mt-4" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                    <h3>Phone</h3>
                    <a href="tel:9374780689">937-478-0689</a>
                    <p>Call or text for a free estimate</p>
                </div>
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="fas fa-clock"></i></div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 8am - 3pm</p>
                    <p>Sunday: Closed</p>
                </div>
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
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
                <p>Contact us today to schedule your professional gutter service with Dayton's most trusted gutter specialist.</p>
                <a href="tel:9374780689" class="phone-number">
                    <i class="fas fa-phone-alt"></i> 937-478-0689
                </a>
                <div class="text-option">Text us a photo of your gutters for a quick estimate – we respond within hours!</div>
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
                <p>Professional gutter cleaning and protection services in Dayton and surrounding areas. With over 20 years of experience, we provide quality workmanship and exceptional customer service.</p>
                <div class="footer-contact">
                    <div class="footer-contact-item">
                        <i class="fas fa-phone-alt"></i>
                        <p><a href="tel:9374780689">937-478-0689</a></p>
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

</body>
</html>
```

### File: services.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Services | CleanFlow of Ohio</title>
    <meta name="description" content="Explore the professional gutter cleaning, repair, and protection services offered by CleanFlow of Ohio. Serving Dayton and surrounding areas.">
    <meta name="keywords" content="gutter cleaning services, gutter repair, gutter guard installation, gutter maintenance, Dayton Ohio gutter company">
    <link rel="canonical" href="https://www.cleanflowohio.com/services.html" />

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
                    <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme"> <i class="fas fa-sun"></i> <span class="toggle-text">Light</span> </button>
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

    <!-- Services Page Content -->
    <div id="services-page-content" class="page-content">
        <section id="services-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p>Comprehensive gutter cleaning and protection services to keep your home safe from water damage.</p>
                </div>
            </div>
        </section>

        <section id="gutter-cleaning-service" class="section-pad">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon"><i class="fas fa-brush"></i></div>
                        <h2>Gutter Cleaning</h2>
                    </div>
                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-content">
                            <p>Regular gutter cleaning is essential to prevent water damage. At CleanFlow of Ohio, we provide thorough professional gutter cleaning services to ensure your gutters function properly year-round.</p>
                            <p>Our comprehensive gutter cleaning service includes:</p>
                            <div class="service-features">
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Complete removal of all debris from gutters and roof valleys</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Thorough flushing of all downspouts to ensure proper flow</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Flow testing to verify proper drainage</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Inspection for potential issues or damage</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Before and after photos so you can see the results</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Cleanup of all debris removed from your gutters</p></div>
                            </div>
                            <p><strong>Pricing:</strong> Our gutter cleaning services are competitively priced based on the size of your home and condition of your gutters. For most homes, service starts around $150-$200.</p>
                            <p>Don't wait until it's too late! Regular gutter cleaning can save you thousands in potential water damage repairs.</p>
                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent"><i class="fas fa-phone-alt"></i> Schedule Gutter Cleaning</a>
                            </div>
                        </div>
                        <div class="service-detail-image">
                            <img src="https://images.pexels.com/photos/113730/pexels-photo-113730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Professional Gutter Cleaning Service showing clean gutters">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="gutter-repairs-service" class="bg-light section-pad">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon"><i class="fas fa-tools"></i></div>
                        <h2>Gutter Repairs</h2>
                    </div>
                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-image">
                            <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gutter repair service in action">
                        </div>
                        <div class="service-detail-content">
                            <p>Even the best gutters can develop issues over time. Weather, age, and improper installation can all lead to gutter problems that require professional repairs.</p>
                            <p>Our gutter repair services include:</p>
                            <div class="service-features">
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Re-sealing leaking gutter joints and corners</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Re-securing loose gutters and downspouts</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Fixing improper gutter slope that causes standing water</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Replacing damaged sections while preserving existing gutters</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Repairing or replacing damaged fascia boards</p></div>
                            </div>
                            <p><strong>Pricing:</strong> Minor repairs are often included in our standard gutter cleaning service. For more extensive repairs, we provide fair and transparent pricing.</p>
                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent"><i class="fas fa-phone-alt"></i> Get a Repair Estimate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="gutter-protection-service" class="section-pad">
            <div class="container">
                <div class="service-detail" data-aos="fade-up">
                    <div class="service-detail-header">
                        <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
                        <h2>Gutter Protection</h2>
                    </div>
                    <div class="grid grid-2 gap-2">
                        <div class="service-detail-content">
                            <p>Tired of cleaning your gutters multiple times a year? Our gutter guard protection systems can significantly reduce gutter maintenance while ensuring proper water flow.</p>
                            <p>Benefits of our gutter protection systems:</p>
                            <div class="service-features">
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Prevents leaves, pine needles, and debris from clogging gutters</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Reduces maintenance and extends gutter lifespan</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Prevents pest nesting and breeding in your gutters</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Helps prevent ice dams during winter months</p></div>
                                <div class="service-feature"><i class="fas fa-check-circle"></i><p>Backed by our 3-year performance guarantee</p></div>
                            </div>
                            <p><strong>Pricing:</strong> Our gutter protection systems are competitively priced based on the length of your gutters and the specific system chosen. We offer options for every budget.</p>
                            <div class="mt-4">
                                <a href="tel:9374780689" class="btn btn-accent"><i class="fas fa-phone-alt"></i> Get a Protection Quote</a>
                            </div>
                        </div>
                        <div class="service-detail-image">
                            <img src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gutter Guard Protection Systems installed">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-gallery" class="bg-light section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Our Work</h2>
                    <p>See the difference professional gutter service makes</p>
                </div>
                <div class="gallery" data-aos="fade-up" data-aos-delay="100">
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Before and after view of a cleaned gutter">
                            <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Professional worker on a roof performing gutter maintenance">
                            <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://images.pexels.com/photos/221902/pexels-photo-221902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Clean gutter system with newly installed gutter guards">
                            <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="service-faq" class="section-pad">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h2 style="margin-left:auto;margin-right:auto;">Frequently Asked Questions</h2>
                    <p>Get answers to common questions about our gutter services</p>
                </div>
                <div class="accordion" data-aos="fade-up" data-aos-delay="100">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h3>How often should gutters be cleaned?</h3><i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Most homes should have gutters cleaned at least twice a year - once in the spring and once in the fall. If you have many trees, especially pine trees, more frequent cleanings may be necessary. We can recommend a schedule based on your property.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h3>What are the signs of needing gutter repairs?</h3><i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Common signs include visible sagging, water marks on siding, water pooling around your foundation, visible rust or cracks, and leaking from joints or corners during rainfall. If you notice any of these, it's best to have them professionally inspected.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h3>Do gutter guards really work?</h3><i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>Yes, quality gutter guards are very effective when properly installed. They allow water to flow freely while keeping out leaves, pine needles, and other debris. While no system completely eliminates maintenance, they drastically reduce how often your gutters need service.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h3>What areas do you serve?</h3><i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>CleanFlow of Ohio proudly serves Dayton and surrounding areas including Oakwood, Kettering, Centerville, Beavercreek, and throughout Montgomery and Greene counties. If you're unsure if we service your area, please give us a call!</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h3>How long does a typical gutter cleaning take?</h3><i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="accordion-content">
                            <p>For most average-sized homes, a thorough cleaning takes about 1-2 hours. Homes with multiple stories or heavily clogged gutters may take longer. We pride ourselves on being thorough rather than rushing the job.</p>
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
                    <p>Don't let clogged or damaged gutters put your home at risk. Contact us today for professional gutter cleaning, repairs, or protection!</p>
                    <a href="tel:9374780689" class="phone-number">
                        <i class="fas fa-phone-alt"></i> 937-478-0689
                    </a>
                    <div class="text-option">Text us a photo of your gutters for a quick estimate – we respond within hours!</div>
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
                    <p>Professional gutter cleaning and protection services in Dayton and surrounding areas. With over 20 years of experience, we provide quality workmanship and exceptional customer service.</p>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <p><a href="tel:9374780689">937-478-0689</a></p>
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
</body>
</html>
```

### File: style.css
```css
:root {
    /* New Brand Color Palette */
    --c-primary: #064420;
    --c-primary-dark: #042f17;
    --c-primary-light: #085929;
    --c-accent: #6FDF5C;
    --c-accent-dark: #58b24a;
    --c-neutral-light: #F7F7F7;
    --c-neutral-dark: #1F1F1F;
    --c-gray: #666666;
    --c-warning: #fff3cd;
    --c-warning-border: #ffc107;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--c-neutral-dark);
    overflow-x: hidden;
    background-color: var(--c-neutral-light);
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section, .section-pad {
    padding: 80px 0;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--c-primary);
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
    background: var(--c-accent);
}

h3 {
    font-size: 1.8rem;
}

p {
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1.05rem;
    color: var(--c-gray);
}

a {
    text-decoration: none;
    color: var(--c-primary);
    transition: all 0.3s ease;
}

a:hover {
    color: var(--c-accent);
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
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
    color: white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--c-primary-light) 0%, var(--c-primary) 100%);
    color: white;
    transform: translateY(-3px);
}

.btn-accent {
    background: var(--c-accent);
    color: var(--c-primary-dark);
    font-weight: 700;
}

.btn-accent:hover {
    background: var(--c-accent-dark);
    color: var(--c-primary-dark);
    transform: translateY(-3px);
}

.btn-lg {
    padding: 15px 35px;
    font-size: 16px;
}

.text-center {
    text-align: center;
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

.gap-2 {
    gap: 2rem;
}

/* Top Bar Styles */
.topbar {
    background-color: var(--c-primary-dark);
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
    color: var(--c-accent);
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
    margin-top: 40px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header.sticky {
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
    color: var(--c-primary);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo span {
    color: var(--c-accent);
    margin-left: 5px;
}

header nav {
    display: flex;
    align-items: center;
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
    color: var(--c-neutral-dark);
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
}

nav ul li a:hover {
    color: var(--c-accent);
}

nav ul li a.active {
    color: var(--c-primary);
    font-weight: 600;
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--c-accent);
    bottom: -5px;
    left: 0;
    transition: all 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a.active::after {
    width: 100%;
}

.menu-toggle, .close-menu {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--c-neutral-dark);
}

.phone-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--c-primary);
    color: var(--c-accent);
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.phone-btn:hover {
    background-color: var(--c-primary-dark);
    color: var(--c-accent);
    transform: translateY(-3px);
}

.phone-btn i {
    font-size: 18px;
    color: var(--c-accent);
}

/* Hero Section */
#hero {
    height: 100vh;
    background: linear-gradient(rgba(6, 68, 32, 0.8), rgba(6, 68, 32, 0.8)), url('https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover;
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
    color: white;
}

.hero-btns {
    display: flex;
    justify-content: center;
    gap: 20px;
}

/* Theme Toggle Button Styles */
.theme-toggle-btn {
    background-color: transparent;
    border: 1px solid var(--c-gray);
    color: var(--c-neutral-dark);
    padding: 6px 10px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
    align-self: center;
    margin-left: 20px;
    margin-right: 15px;
}

.theme-toggle-btn:hover {
    border-color: var(--c-primary);
    background-color: var(--c-primary-light);
    color: white;
}

.theme-toggle-btn .fas {
    font-size: 14px;
    line-height: 1;
}

/* Dark Mode Styles */
body.dark-mode {
    --c-primary: #6FDF5C; /* Accent becomes primary */
    --c-primary-dark: #58b24a;
    --c-primary-light: #86e574;
    --c-accent: #F7F7F7; /* Light neutral becomes accent */
    --c-accent-dark: #cccccc;
    --c-neutral-light: #1F1F1F; /* Card/section background */
    --c-neutral-dark: #F7F7F7; /* Main text color */
    --c-gray: #a0a0a0;
    --page-bg: #121212; /* Darkest page background */
    --header-bg: #1F1F1F;
    --footer-bg: #1F1F1F;
    --topbar-bg: #121212;
    --border-color: #333;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: var(--page-bg);
}
body.dark-mode p {
    color: var(--c-gray);
}
body.dark-mode .lead-form, body.dark-mode .service-card, body.dark-mode .calculator-card, body.dark-mode .sign-card, body.dark-mode .season-card, body.dark-mode .benefit-card, body.dark-mode .contact-info-card, body.dark-mode .accordion-header, body.dark-mode .badge-item, body.dark-mode .warning-box, body.dark-mode .service-detail-content {
    background-color: var(--c-neutral-light);
    box-shadow: var(--box-shadow);
}
body.dark-mode .accordion-content {
    background-color: var(--c-neutral-light);
}
body.dark-mode .accordion-header.active {
    background-color: var(--c-primary);
    color: #1F1F1F;
}
body.dark-mode .accordion-header.active h3, body.dark-mode .accordion-header.active i {
    color: #1F1F1F;
}
body.dark-mode .form-group input, body.dark-mode .form-group select {
    background-color: #33383D;
    color: var(--c-neutral-dark);
    border: 1px solid var(--border-color);
}
body.dark-mode .form-group input::placeholder {
    color: var(--c-gray);
}
body.dark-mode .form-group label {
    color: var(--c-neutral-dark);
}
body.dark-mode .result-box {
    background-color: var(--page-bg);
    border: 1px solid var(--border-color);
}
body.dark-mode .topbar {
    background-color: var(--topbar-bg);
}
body.dark-mode .topbar a {
    color: var(--c-primary);
}
body.dark-mode header {
    background-color: rgba(31, 31, 31, 0.95); /* Semi-transparent dark bg */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
body.dark-mode .logo {
    color: var(--c-primary);
}
body.dark-mode .logo span {
    color: var(--c-neutral-dark);
}
body.dark-mode nav ul li a {
    color: var(--c-neutral-dark);
}
body.dark-mode nav ul li a:hover, body.dark-mode nav ul li a.active {
    color: var(--c-primary);
}
body.dark-mode nav ul li a.active::after, body.dark-mode nav ul li a:hover::after {
    background: var(--c-primary);
}
body.dark-mode .menu-toggle, body.dark-mode .close-menu {
    color: var(--c-neutral-dark);
}
body.dark-mode .phone-btn {
    background-color: var(--c-primary);
    color: var(--c-neutral-light);
}
body.dark-mode .phone-btn:hover {
    background-color: var(--c-primary-dark);
}
body.dark-mode .phone-btn i {
    color: var(--c-neutral-light);
}
body.dark-mode .btn-primary {
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
    color: #1F1F1F;
}
body.dark-mode .btn-primary:hover {
    background: linear-gradient(135deg, var(--c-primary-light) 0%, var(--c-primary) 100%);
}
body.dark-mode .btn-accent {
    background: var(--c-neutral-light);
    color: var(--c-neutral-dark);
}
body.dark-mode .btn-accent:hover {
    background: #333;
}
body.dark-mode footer {
    background: var(--footer-bg);
    border-top: 1px solid var(--border-color);
}
body.dark-mode .footer-contact-item i {
    color: var(--c-primary);
}
body.dark-mode .back-to-top {
    background: var(--c-primary);
    color: #1F1F1F;
}
body.dark-mode .back-to-top:hover {
    background: var(--c-primary-dark);
}
body.dark-mode .theme-toggle-btn {
    border-color: var(--c-gray);
    color: var(--c-neutral-dark);
}
body.dark-mode .theme-toggle-btn:hover {
    border-color: var(--c-primary);
    background-color: var(--c-primary);
    color: #1F1F1F;
}
body.dark-mode .section-pad, body.dark-mode #services-overview, body.dark-mode .benefits-section {
    background: var(--page-bg) !important;
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
}

.form-group input, .form-group select {
    width: 100%;
    padding: 12px 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    transition: all 0.3s ease;
}

.form-group input:focus, .form-group select:focus {
    border-color: var(--c-primary);
    box-shadow: 0 0 0 2px rgba(6, 68, 32, 0.2);
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

.about-image {
    flex: 1;
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background-color: var(--c-primary);
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
    color: var(--c-accent);
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

.service-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.service-btn:hover {
    gap: 15px;
}

/* Warning Box */
.warning-box {
    background: var(--c-warning);
    border: 2px solid var(--c-warning-border);
    border-radius: 10px;
    padding: 30px;
    position: relative;
    margin: 40px 0;
}

.warning-box::before {
    content: '\f071';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    font-size: 24px;
    position: absolute;
    top: 20px;
    left: 20px;
    color: var(--c-warning-border);
}

.warning-content {
    margin-left: 40px;
    font-size: 1.1rem;
    color: var(--c-neutral-dark);
}

.price-highlight {
    font-weight: bold;
    color: #856404; /* Darker yellow for text */
    font-size: 1.2rem;
    margin-top: 15px;
    display: block;
}

/* Calculator Styles */
.calculator-card {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
}

.calculator-form .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.result-box {
    background-color: var(--c-neutral-light);
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

.result-price {
    font-size: 28px;
    font-weight: 700;
    color: var(--c-primary);
    margin: 10px 0;
}

/* Signs Section */
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
    display: flex;
    flex-direction: column;
}

.sign-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.sign-card i {
    font-size: 40px;
    color: var(--c-accent);
    margin-bottom: 20px;
}

.sign-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.sign-card.active .sign-content {
    max-height: 200px;
}

/* Seasonal Calendar */
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

.season-tab.active {
    background-color: var(--c-primary);
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
    color: var(--c-accent);
}

.season-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}

/* Benefits Section */
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
    background: var(--c-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 30px;
    transition: all 0.3s ease;
}

.benefit-card:hover .benefit-icon {
    background: var(--c-accent);
    color: var(--c-primary-dark);
    transform: rotateY(180deg);
}

/* Bottom CTA */
.bottom-cta, .cta-section {
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
    color: white;
    text-align: center;
    padding: 60px 0;
}

.bottom-cta h2, .cta-content h2 {
    color: white;
    margin-bottom: 20px;
}

.bottom-cta h2:after, .cta-content h2:after {
    content: none;
}

.bottom-cta p, .cta-content p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
    color: white;
}

.phone-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 20px 0;
    display: inline-block;
    transition: all 0.3s ease;
    color: var(--c-accent);
}

.phone-number:hover {
    transform: scale(1.05);
    color: var(--c-accent);
}

.phone-number i {
    color: var(--c-accent);
}

.text-option {
    font-size: 1.1rem;
    margin-top: 15px;
    font-style: italic;
}

/* Badge Section */
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
    color: var(--c-primary);
    margin-bottom: 10px;
}

/* Footer */
footer {
    background: #fff;
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

.footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;
}

.footer-contact-item i {
    color: var(--c-primary);
    font-size: 18px;
    margin-top: 5px;
}

.footer-links h4 {
    font-size: 18px;
    margin-bottom: 20px;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin-bottom: 12px;
}

.footer-links ul li a {
    color: var(--c-gray);
    transition: all 0.3s ease;
    position: relative;
    padding-left: 15px;
}

.footer-links ul li a:before {
    content: '\f105';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--c-accent);
}

.footer-links ul li a:hover {
    color: var(--c-primary);
    padding-left: 20px;
}

.footer-bottom {
    text-align: center;
    font-size: 14px;
}

/* Services Page */
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
    background: var(--c-primary);
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
    color: var(--c-accent);
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
    background: linear-gradient(rgba(6, 68, 32, 0.8), rgba(6, 68, 32, 0.8));
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
    color: var(--c-primary);
    transition: all 0.3s ease;
}

.accordion-header.active {
    background-color: var(--c-primary);
    color: white;
}

.accordion-header.active h3, .accordion-header.active i {
    color: white;
}

.accordion-header.active i {
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
    background: var(--c-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    margin: 0 auto 20px;
}

.contact-info-card a {
    color: var(--c-accent);
}

/* Back to Top */
.back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--c-primary);
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
    background: var(--c-primary-dark);
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
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 0;
    color: var(--c-accent);
}

/* Animation Classes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Responsive Styles */
@media screen and (max-width: 991.98px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
    .footer-top { grid-template-columns: 1fr 1fr; }
    .lead-form { margin-top: -50px; }
}

@media screen and (max-width: 767.98px) {
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
    body.dark-mode nav ul {
        background-color: var(--page-bg);
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
    }
    nav ul.active { right: 0; }
    .menu-toggle, .close-menu { display: block; }
    .close-menu { position: absolute; top: 20px; right: 20px; }
    .grid-2, .grid-3, .grid-4, .footer-top { grid-template-columns: 1fr; }
    .about-content { flex-direction: column; }
    .about-image { order: -1; }
    .experience-badge { right: 20px; top: 20px; width: 80px; height: 80px; }
    .experience-badge span:first-child { font-size: 1.5rem; }
    .experience-badge span:last-child { font-size: 0.8rem; }
    .phone-number { font-size: 2rem; }
    .hero-btns { flex-direction: column; align-items: center; }
    .lead-form { margin-top: -30px; }
    .topbar-container { flex-direction: column; gap: 5px; }
}

@media screen and (max-width: 575.98px) {
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }
    .hero-content h1 { font-size: 2.5rem; }
    .hero-content p { font-size: 1rem; }
    .phone-number { font-size: 1.8rem; }
    .gallery-grid { grid-template-columns: 1fr; }
    .lead-form { padding: 20px 15px; margin-top: 0; }
}
```

### File: script.js
```javascript
document.addEventListener('DOMContentLoaded', function() {
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

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Sticky Header & Back to Top Button
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    if (header && backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('sticky');
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Accordion Toggle
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });

    // Signs Card Toggle
    const signCards = document.querySelectorAll('.sign-card');
    signCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Seasonal Tabs Functionality
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    if (seasonTabs.length > 0 && seasonContents.length > 0) {
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                seasonTabs.forEach(t => t.classList.remove('active'));
                seasonContents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                const seasonName = tab.getAttribute('data-season');
                const activeContent = document.getElementById(seasonName + '-content');
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
    }

    // Gutter Cleaning Cost Calculator
    const linearFeetInput = document.getElementById('linearFeet');
    const storiesSelect = document.getElementById('stories');
    const debrisSelect = document.getElementById('debris');
    const estimatedPriceEl = document.getElementById('estimatedPrice');
    const resultBoxEl = document.getElementById('resultBox');
    const calculatorForm = document.querySelector('.calculator-form');

    function calculatePrice() {
        if (!linearFeetInput || !storiesSelect || !debrisSelect || !estimatedPriceEl || !resultBoxEl) return;

        const linearFeet = parseFloat(linearFeetInput.value) || 0;
        const stories = storiesSelect.value;
        const debris = debrisSelect.value;
        let ratePerFoot = 0.85; // Default to medium

        switch (debris) {
            case 'light': ratePerFoot = 0.75; break;
            case 'heavy': ratePerFoot = 1.00; break;
        }

        let price = linearFeet * ratePerFoot;
        if (price < 150) { // Set a minimum price
            price = 150;
        }
        if (stories === '2') {
            price += 50;
        }

        estimatedPriceEl.textContent = '$' + price.toFixed(2);
        
        if (linearFeet > 0) {
            resultBoxEl.classList.add('active');
        } else {
             resultBoxEl.classList.remove('active');
        }
    }

    if (calculatorForm) {
        calculatorForm.addEventListener('input', calculatePrice);
        // Initial calculation on page load if values exist
        if (linearFeetInput.value) calculatePrice();
    }


    // Quote Form Submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const serviceSelect = document.getElementById('service');
            const messageDiv = document.getElementById('formMessage');

            if (!nameInput || !phoneInput || !serviceSelect || !messageDiv) return;

            const name = nameInput.value;
            const phone = phoneInput.value;
            const service = serviceSelect.value;

            const subject = "New Quote Request from " + name;
            const body = `Name: ${name}\nPhone: ${phone}\nService: ${service}`;

            window.location.href = `mailto:cleanflowofohio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been prepared for sending.";
            quoteForm.reset();

            setTimeout(() => {
                messageDiv.style.display = 'none';
                messageDiv.classList.remove('success');
            }, 5000);
        });
    }

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        const body = document.body;
        const toggleTextEl = themeToggleBtn.querySelector('.toggle-text');
        const toggleIconEl = themeToggleBtn.querySelector('i.fas');

        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                if (toggleIconEl) { toggleIconEl.classList.remove('fa-sun'); toggleIconEl.classList.add('fa-moon'); }
                if (toggleTextEl) toggleTextEl.textContent = 'Dark';
                themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
            } else {
                body.classList.remove('dark-mode');
                if (toggleIconEl) { toggleIconEl.classList.remove('fa-moon'); toggleIconEl.classList.add('fa-sun'); }
                if (toggleTextEl) toggleTextEl.textContent = 'Light';
                themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
            }
        };

        themeToggleBtn.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(prefersDark ? 'dark' : 'light'); // Default to system preference
        }
    }
});

// Reusable functions
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== element) h.classList.remove('active');
    });
    document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
            c.classList.remove('active');
            c.style.maxHeight = null;
        }
    });
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
```

### File: README.md```markdown
# CleanFlow Ohio Static Marketing Website

A mobile-first, responsive HTML/CSS/JS marketing site designed for a professional gutter cleaning service. This site is simple, modern, SEO-friendly, and easy to customize.

## 📦 Features

- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.
- **SEO-Ready:** Includes a `sitemap.xml` and utilizes a clean, semantic HTML structure with canonical URLs.
- **Three Core Pages:**
  - Home (`index.html`)
  - Services (`services.html`)
  - About (`about.html`)
- **Modern Features:** Includes a dark mode toggle, an interactive cost estimator, and smooth animations.
- **Easy to Customize:** Built with simple file structure, clear CSS variables, and minimal JavaScript.

## 🚀 Quick Start

1. **Clone or Download the Repository**
    To get a local copy up and running, clone the repository:
    ```bash
    git clone https://github.com/yourusername/cleanflow-ohio.git
    cd cleanflow-ohio
    ```

2. **Customize Content**
    * **Text & Info:** Edit the `.html` files (`index.html`, `about.html`, `services.html`) to change text, contact information, and service details.
    * **Styling:** Adjust colors, fonts, and layout in `style.css`. Key brand colors are located in the `:root` section for easy updates.
    * **Functionality:** Modify interactive elements in `script.js`.

3. **Deploy**
    This static site can be deployed on any static web host. [Vercel](https://vercel.com/) and [Netlify](https://www.netlify.com/) are excellent free options that integrate directly with GitHub for automatic deployments.

## 🗂 Repository Structure

```
cleanflow-ohio/
├── index.html # Homepage
├── about.html # About Us page
├── services.html # Services description page
├── style.css # Main CSS file for all styling
├── script.js # Main JavaScript file for interactivity
├── sitemap.xml # SEO sitemap
├── README.md # You are here
└── LICENSE # Project license
```

## 🛠 Technologies Used

* **HTML5 & CSS3:** Semantic structure and modern, responsive styling with Flexbox and Grid.
* **Vanilla JavaScript:** Simple, lightweight interactions with no heavy libraries.
* **AOS (Animate On Scroll) Library:** For smooth, subtle scroll animations.
* **Font Awesome:** For icons used throughout the site.

## 🔐 Security

This is a completely static frontend website. It contains no backend logic or database, making it inherently secure from common server-side vulnerabilities.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
```

### File: LICENSE
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

### File: sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.cleanflowohio.com/index.html</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/services.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cleanflowohio.com/about.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```
Google Search Suggestions
Display of Search Suggestions is required when using Grounding with Google Search. Learn more
royalty free professional gutter cleaning on roof
royalty free clean suburban house roofline gutters
royalty free friendly gutter service technician
unbranded gutter repair service photo
stock photo man cleaning gutters
