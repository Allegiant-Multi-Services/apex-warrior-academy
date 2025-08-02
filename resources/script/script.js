// =====================
// APEX WARRIOR ACADEMY - MAIN SCRIPT
// =====================

// Global initialization function
function initializeApexWarriorAcademy() {
  console.log("Apex Warrior Academy loaded successfully.");
  
  try {
    initializeNavigation();
    initializeHamburger();
  } catch (error) {
    console.error("Error initializing Apex Warrior Academy:", error);
  }
}

// =====================
// NAVIGATION FUNCTIONALITY
// =====================
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  if (!navLinks.length) {
    console.warn("No navigation links found");
    return;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Remove 'active' from all links
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Add 'active' to the clicked link
      this.classList.add('active');
    });
  });
}

// =====================
// HAMBURGER MENU FUNCTIONALITY
// =====================
function initializeHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (!hamburger || !navLinks) {
    console.warn("Hamburger menu elements not found");
    return;
  }

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu visibility
    navLinks.classList.toggle('show');
    
    // Update ARIA attributes for accessibility
    hamburger.setAttribute('aria-expanded', !isExpanded);
    
    // Update hamburger icon for better UX
    hamburger.textContent = isExpanded ? '☰' : '✕';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  });
}

// =====================
// UTILITY FUNCTIONS
// =====================

// Safe element selector with error handling
function safeQuerySelector(selector, context = document) {
  try {
    const element = context.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
    }
    return element;
  } catch (error) {
    console.error(`Error selecting element ${selector}:`, error);
    return null;
  }
}

// Safe element selector for multiple elements
function safeQuerySelectorAll(selector, context = document) {
  try {
    const elements = context.querySelectorAll(selector);
    if (!elements.length) {
      console.warn(`No elements found: ${selector}`);
    }
    return elements;
  } catch (error) {
    console.error(`Error selecting elements ${selector}:`, error);
    return [];
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApexWarriorAcademy);
} else {
  // DOM is already loaded
  initializeApexWarriorAcademy();
}
