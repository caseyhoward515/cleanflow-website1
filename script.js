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

        // Page Navigation
        function showPage(page) {
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('nav ul li a');

            // Hide all pages
            pages.forEach(p => p.style.display = 'none');

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Show selected page and set active link
            document.getElementById(`${page}-page`).style.display = 'block';
            document.getElementById(`${page}-link`).classList.add('active');

            // Close mobile menu if open
            navMenu.classList.remove('active');

            // Scroll to top
            window.scrollTo(0, 0);
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
            const body = "Name: " + name + "%0D%0APhone: " + phone + "%0D%0AService: " + service;

            window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;

            const messageDiv = document.getElementById('formMessage');
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.innerHTML = "Thank you! Your quote request has been sent. We'll contact you shortly.";

            // Reset form
            document.getElementById('quoteForm').reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 5000);
        });
