// Initialize AOS Animation (Guarded to prevent crashes)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

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

    // --- NEW PRICING LOGIC (2026 Market Rates) ---
    let baseRate = 0;
    
    // Increased base rates to account for insurance/labor
    switch (debris) {
        case 'light': baseRate = 1.15; break;
        case 'medium': baseRate = 1.35; break;
        case 'heavy': baseRate = 1.85; break;
        default: baseRate = 1.35;
    }

    // 2-Story Surcharge: Now adds $0.40/ft instead of flat $50
    if (stories === '2') {
        baseRate += 0.40; 
    }

    let estimatedTotal = linearFeet * baseRate;

    // Minimum Service Charge
    if (estimatedTotal < 150) {
        estimatedTotal = 150;
    }

    // Calculate Range (Low = Calc Price, High = Calc Price + 25%)
    let highEnd = estimatedTotal * 1.25;

    // Update the display text to show a range
    estimatedPriceEl.textContent = '$' + Math.ceil(estimatedTotal) + ' - $' + Math.ceil(highEnd);
    
    // Add a disclaimer if not already there (Dynamically adding text)
    let disclaimer = resultBoxEl.querySelector('.dynamic-disclaimer');
    if (!disclaimer) {
        disclaimer = document.createElement('p');
        disclaimer.className = 'result-note dynamic-disclaimer';
        disclaimer.style.marginTop = '5px';
        disclaimer.style.fontStyle = 'italic';
        disclaimer.innerHTML = 'Range allows for factors like steep roofs or gutter guards.';
        resultBoxEl.appendChild(disclaimer);
    }

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
            messageDiv.textContent = "Thank you! Your quote request has been sent. I will reach out shortly.";
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}
