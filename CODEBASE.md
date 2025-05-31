## `index.html`

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
    <script src="assets/main.js"></script>
</body>
</html>

```

## `services.html`

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
    <script src="assets/main.js"></script>
</body>
</html>

```

## `about.html`

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

    <!-- About Page Content -->
    <div id="about-page-content" class="page-content"> <!-- Changed ID to avoid conflict if script.js uses it -->
        <section id="about-hero">
            <div class="container">
                <div class="section-header text-center" data-aos="fade-up">
                    <h1>About CleanFlow of Ohio</h1>
                    <p>Your trusted gutter cleaning specialist in Dayton and surrounding areas.</p>
                </div>
            </div>
        </section>

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
    <script src="assets/main.js"></script>
</body>
</html>

```

## `style.css`

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

## `assets/main.js`

```javascript
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

        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('back-to-top');

            if (window.scrollY > 100) {
                header.classList.add('sticky');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('sticky');
                backToTop.classList.remove('active');
            }
        });

        // Back to Top
        document.getElementById('back-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll Down
        document.getElementById('scroll-down').addEventListener('click', () => {
            const nextSection = document.getElementById('warning');
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Accordion Toggle
        function toggleAccordion(element) {
            const content = element.nextElementSibling;
            const isActive = element.classList.contains('active');

            // Close all accordions
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            const accordionContents = document.querySelectorAll('.accordion-content');

            accordionHeaders.forEach(header => header.classList.remove('active'));
            accordionContents.forEach(content => {
                content.classList.remove('active');
                content.style.maxHeight = null;
            });

            // Open clicked accordion if it wasn't already open
            if (!isActive) {
                element.classList.add('active');
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }

        // Toggle Signs Content
        function toggleSign(element) {
            element.classList.toggle('active');
        }

        // Season Tabs
        const seasonTabs = document.querySelectorAll('.season-tab');
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                seasonTabs.forEach(t => t.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Hide all season contents
                document.querySelectorAll('.season-content').forEach(content => {
                    content.classList.remove('active');
                });

                // Show selected season content
                const season = tab.dataset.season;
                document.getElementById(`${season}-content`).classList.add('active');
            });
        });

        // Gutter Cleaning Calculator
        document.getElementById('calculateBtn').addEventListener('click', calculatePrice);
        document.getElementById('linearFeet').addEventListener('input', calculatePrice);
        document.getElementById('stories').addEventListener('change', calculatePrice);
        document.getElementById('debris').addEventListener('change', calculatePrice);

        function calculatePrice() {
            // Get input values
            const linearFeet = parseFloat(document.getElementById('linearFeet').value) || 0;
            const stories = document.getElementById('stories').value;
            const debris = document.getElementById('debris').value;

            // Set rate based on debris level
            let ratePerFoot = 0;
            switch (debris) {
                case 'light':
                    ratePerFoot = 0.75;
                    break;
                case 'medium':
                    ratePerFoot = 0.85;
                    break;
                case 'heavy':
                    ratePerFoot = 0.95;
                    break;
                default:
                    ratePerFoot = 0.85;
            }

            // Calculate base price
            let price = linearFeet * ratePerFoot;

            // Apply minimum charge of $135
            if (price < 135) {
                price = 135;
            }

            // Add $50 for two-story homes
            if (stories === '2') {
                price += 50;
            }

            // Display the price
            document.getElementById('estimatedPrice').textContent = '$' + price.toFixed(2);
            document.getElementById('resultBox').classList.add('active');
        }

        // Form submission
        document.getElementById('quoteForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            const subject = "New Quote Request from " + name;
            // Encode each part of the body separately
            const encodedName = encodeURIComponent(name);
            const encodedPhone = encodeURIComponent(phone);
            const encodedService = encodeURIComponent(service);
            const body = "Name: " + encodedName + "%0D%0APhone: " + encodedPhone + "%0D%0AService: " + encodedService;

            window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;

            const messageDiv = document.getElementById('formMessage');
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";

            // Reset form
            document.getElementById('quoteForm').reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 5000);
        });

```

## `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.cleanflowohio.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.cleanflowohio.com/services.html</loc></url>
  <url><loc>https://www.cleanflowohio.com/about.html</loc></url>
</urlset>

```

## `robots.txt`

```text
User-agent: *
Disallow:

```
