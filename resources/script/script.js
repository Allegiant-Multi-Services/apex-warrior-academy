// =====================
// APEX WARRIOR ACADEMY - MAIN SCRIPT
// =====================

// Create namespace to prevent conflicts
window.ApexWarriorAcademy = window.ApexWarriorAcademy || {};

// Global initialization function
function initializeApexWarriorAcademy() {
  console.log("Apex Warrior Academy loaded successfully.");
  
  try {
    ApexWarriorAcademy.Navigation.init();
    ApexWarriorAcademy.Hamburger.init();
    ApexWarriorAcademy.Dropdowns.init();
    ApexWarriorAcademy.Navigation.setActiveState();
  } catch (error) {
    console.error("Error initializing Apex Warrior Academy:", error);
  }
}

// =====================
// NAVIGATION MODULE
// =====================
ApexWarriorAcademy.Navigation = {
  init: function() {
    const navLinks = document.querySelectorAll('.nav-links a:not(.dropdown-toggle)');
    
    if (!navLinks.length) {
      console.warn("No navigation links found");
      return;
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        // Skip dropdown toggle links
        if (this.classList.contains('dropdown-toggle')) {
          return;
        }
        
        // Remove 'active' from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' to the clicked link
        this.classList.add('active');
      });
    });
  },

  setActiveState: function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
        
        // Handle dropdown active state
        const dropdown = link.closest('.dropdown');
        if (dropdown) {
          dropdown.classList.add('active');
        }
      }
    });
  }
};

// =====================
// HAMBURGER MENU MODULE
// =====================
ApexWarriorAcademy.Hamburger = {
  init: function() {
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
};

// =====================
// DROPDOWN MENU MODULE
// =====================
ApexWarriorAcademy.Dropdowns = {
  init: function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (!dropdowns.length) {
      console.warn("No dropdown menus found");
      return;
    }

    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      
      if (!toggle || !menu) {
        console.warn("Dropdown elements not found");
        return;
      }

      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Close other dropdowns
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
            const otherToggle = otherDropdown.querySelector('.dropdown-toggle');
            if (otherToggle) {
              otherToggle.setAttribute('aria-expanded', 'false');
            }
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle('active');
        const isExpanded = dropdown.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);
      });

      // Close dropdown when clicking on submenu items
      const submenuLinks = dropdown.querySelectorAll('.dropdown-menu a');
      submenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
          // Close the dropdown after a short delay to allow the link to work
          setTimeout(() => {
            dropdown.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
          }, 100);
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Close dropdown on escape key
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dropdown.classList.contains('active')) {
          dropdown.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
};

// =====================
// UTILITY FUNCTIONS
// =====================
ApexWarriorAcademy.Utils = {
  // Safe element selector with error handling
  safeQuerySelector: function(selector, context = document) {
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
  },

  // Safe element selector all with error handling
  safeQuerySelectorAll: function(selector, context = document) {
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
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApexWarriorAcademy);
} else {
  initializeApexWarriorAcademy();
}
