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
