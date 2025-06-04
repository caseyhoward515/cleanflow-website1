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
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Accordion Toggle
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains('active');

    // Close all accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionHeaders.forEach(header => header.classList.remove('active'));
    accordionContents.forEach(cont => {
        cont.classList.remove('active');
        cont.style.maxHeight = null;
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
    const targetPage = document.getElementById(`${page}-page`);
    const targetLink = document.getElementById(`${page}-link`);
    if (targetPage) {
        targetPage.style.display = 'block';
    }
    if (targetLink) {
        targetLink.classList.add('active');
    }

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
        const activeContent = document.getElementById(`${season}-content`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});

// Gutter Cleaning Calculator
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
    const estimatedPriceEl = document.getElementById('estimatedPrice');
    const resultBoxEl = document.getElementById('resultBox');
    if (estimatedPriceEl && resultBoxEl) {
        estimatedPriceEl.textContent = '$' + price.toFixed(2);
        resultBoxEl.classList.add('active');
    }
}

// Form submission: only attach if the element actually exists
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameField = document.getElementById('name');
        const phoneField = document.getElementById('phone');
        const serviceField = document.getElementById('service');

        const name = nameField ? nameField.value : '';
        const phone = phoneField ? phoneField.value : '';
        const service = serviceField ? serviceField.value : '';

        const subject = "New Quote Request from " + name;
        const body = "Name: " + encodeURIComponent(name) +
                     "%0D%0APhone: " + encodeURIComponent(phone) +
                     "%0D%0AService: " + encodeURIComponent(service);

        // Open the default mail client with pre-filled subject and body
        window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" +
                              encodeURIComponent(subject) + "&body=" + body;

        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.innerHTML = "Thank you! Your quote request has been sent. We'll contact you shortly.";

            // Reset the form so it’s blank for next time
            quoteForm.reset();

            // Hide the success message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    });
} else {
    console.warn("⚠️ Could not find #quoteForm – form listener not attached.");
}