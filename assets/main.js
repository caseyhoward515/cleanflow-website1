//--------------------------------------------------------------
// Initialize AOS (Animate On Scroll) Library
//--------------------------------------------------------------
// Initializes the AOS library with custom settings for scroll animations.
AOS.init({
    duration: 800, // Animation duration in milliseconds
    easing: 'ease-in-out', // Type of easing for animations
    once: true, // Whether animation should happen only once - while scrolling down
    mirror: false // Whether elements should animate out while scrolling past them
});
        
//--------------------------------------------------------------
// Navigation Menu Toggle
//--------------------------------------------------------------
// Handles the opening and closing of the mobile navigation menu.
const menuToggle = document.getElementById('menu-toggle'); // The hamburger icon
const navMenu = document.getElementById('nav-menu'); // The navigation menu UL
const closeMenu = document.getElementById('close-menu'); // The close icon within the menu

if (menuToggle && navMenu && closeMenu) {
    menuToggle.addEventListener('click', () => {
        // Show the navigation menu when toggle is clicked
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        // Hide the navigation menu when close icon is clicked
        navMenu.classList.remove('active');
    });
}
        
//--------------------------------------------------------------
// Sticky Header & Back to Top Button Visibility
//--------------------------------------------------------------
// Manages the header becoming sticky on scroll and the visibility of the Back to Top button.
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    if (header && backToTop) {
        if (window.scrollY > 100) {
            // When scrolled more than 100 pixels
            header.classList.add('sticky'); // Make header sticky
            backToTop.classList.add('active'); // Show Back to Top button
        } else {
            // When scrolled less than 100 pixels
            header.classList.remove('sticky'); // Remove sticky class from header
            backToTop.classList.remove('active'); // Hide Back to Top button
        }
    }
});
        
//--------------------------------------------------------------
// Back to Top Button Click Handler
//--------------------------------------------------------------
// Smoothly scrolls the page to the top when the Back to Top button is clicked.
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
}
        
//--------------------------------------------------------------
// Scroll Down Button (Hero Section) Click Handler
//--------------------------------------------------------------
// Smoothly scrolls to the 'warning' section when the scroll-down arrow is clicked.
const scrollDownButton = document.getElementById('scroll-down');
if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
        const nextSection = document.getElementById('warning'); // Target section
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
        }
    });
}
        
//--------------------------------------------------------------
// Accordion Toggle Functionality
//--------------------------------------------------------------
/**
 * Toggles the display of an accordion item's content.
 * Closes other open accordion items to ensure only one is open at a time.
 * @param {HTMLElement} element - The header element of the accordion item that was clicked.
 */
function toggleAccordion(element) {
    const content = element.nextElementSibling; // The content div following the header
    const isActive = element.classList.contains('active'); // Check if the clicked accordion is already active

    // Get all accordion headers and contents
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    // Close all other accordion items
    accordionHeaders.forEach(header => {
        if (header !== element) { // Don't remove active from the clicked one yet
            header.classList.remove('active');
        }
    });
    accordionContents.forEach(cont => {
        if (cont !== content) { // Don't hide the clicked one's content yet
            cont.classList.remove('active');
            cont.style.maxHeight = null; // Collapse the content
        }
    });

    // Open or close the clicked accordion item
    if (!isActive) {
        // If it wasn't active, open it
        element.classList.add('active');
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to full content height
    } else {
        // If it was active, close it (by removing classes, already handled by the loop above for other items)
        element.classList.remove('active');
        content.classList.remove('active');
        content.style.maxHeight = null;
    }
}
        
//--------------------------------------------------------------
// Toggle Signs Content Functionality
//--------------------------------------------------------------
/**
 * Toggles the 'active' class on a "sign" card element.
 * Used to show or hide additional content within the sign card.
 * @param {HTMLElement} element - The sign card element that was clicked.
 */
function toggleSign(element) {
    // Simply toggle the active class to show/hide content via CSS
    element.classList.toggle('active');
}

//--------------------------------------------------------------
// Season Tabs Functionality
//--------------------------------------------------------------
// Handles switching between different seasonal content sections.
const seasonTabs = document.querySelectorAll('.season-tab');
if (seasonTabs.length > 0) {
    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            seasonTabs.forEach(t => t.classList.remove('active'));
            
            // Add 'active' class to the clicked tab
            tab.classList.add('active');
            
            // Hide all season content sections
            document.querySelectorAll('.season-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the content section corresponding to the clicked tab
            const season = tab.dataset.season; // Get season from data attribute
            const activeSeasonContent = document.getElementById(`${season}-content`);
            if (activeSeasonContent) {
                activeSeasonContent.classList.add('active');
            }
        });
    });
}

//--------------------------------------------------------------
// Gutter Cleaning Cost Calculator
//--------------------------------------------------------------
// Attaches event listeners to calculator inputs and button.
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
        
/**
 * Calculates the estimated gutter cleaning price based on user inputs.
 * Updates the displayed price on the page.
 */
function calculatePrice() {
    // Get input values, providing defaults if parsing fails
    const linearFeet = parseFloat(linearFeetInput.value) || 0;
    const stories = storiesSelect.value;
    const debris = debrisSelect.value;

    let ratePerFoot = 0;
    // Determine rate based on debris level
    switch (debris) {
        case 'light':
            ratePerFoot = 0.75;
            break;
        case 'medium':
            ratePerFoot = 0.85; // Default rate
            break;
        case 'heavy':
            ratePerFoot = 0.95;
            break;
        default:
            ratePerFoot = 0.85; // Fallback rate
    }

    // Calculate the initial price
    let price = linearFeet * ratePerFoot;

    // Apply a minimum charge if applicable
    if (price < 135) {
        price = 135; // Minimum service charge
    }

    // Add extra cost for two-story homes
    if (stories === '2') {
        price += 50; // Additional charge for second story
    }

    // Display the calculated price
    const estimatedPriceEl = document.getElementById('estimatedPrice');
    const resultBoxEl = document.getElementById('resultBox');
    if (estimatedPriceEl && resultBoxEl) {
        estimatedPriceEl.textContent = '$' + price.toFixed(2); // Format to two decimal places
        resultBoxEl.classList.add('active'); // Show the result box
    }
}

//--------------------------------------------------------------
// Quote Form Submission
//--------------------------------------------------------------
// Handles the submission of the quote request form by opening a mailto link.
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        // Construct mailto link components
        const subject = "New Quote Request from " + name;
        // Encode each part of the body for the mailto link
        const encodedName = encodeURIComponent(name);
        const encodedPhone = encodeURIComponent(phone);
        const encodedService = encodeURIComponent(service);
        const body = "Name: " + encodedName + "%0D%0APhone: " + encodedPhone + "%0D%0AService: " + encodedService;

        // Open the mail client with pre-filled information
        window.location.href = "mailto:cleanflowofohio@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;

        // Display success message
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.classList.add('success');
            messageDiv.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";
            
            // Reset the form after submission
            quoteForm.reset();
            
            // Hide the success message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = 'none';
                messageDiv.classList.remove('success'); // Clean up class
            }, 5000);
        }
    });
}
