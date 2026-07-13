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
