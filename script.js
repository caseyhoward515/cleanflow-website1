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

// Sticky Header, Back to Top & Floating CTA Visibility
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');
const floatingCta = document.getElementById('floating-cta');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            if (backToTop) backToTop.classList.add('active');
            if (floatingCta) floatingCta.classList.add('active');
        } else {
            header.classList.remove('sticky');
            if (backToTop) backToTop.classList.remove('active');
            if (floatingCta) floatingCta.classList.remove('active');
        }
    });

    // Back to Top Click Handler
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
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
const estimatedPriceEl = document.getElementById('estimatedPrice');
const resultBoxEl = document.getElementById('resultBox');

function calculatePrice() {
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
    // Check if returning from successful submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}
