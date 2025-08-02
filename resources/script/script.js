// =====================
// APEX WARRIOR ACADEMY - MAIN SCRIPT
// =====================

// Global initialization function
function initializeApexWarriorAcademy() {
  console.log("Apex Warrior Academy loaded successfully.");
  
  try {
    initializeNavigation();
    initializeHamburger();
    initializeDropdowns();
    setActiveNavigationState();
  } catch (error) {
    console.error("Error initializing Apex Warrior Academy:", error);
  }
}

// =====================
// NAVIGATION FUNCTIONALITY
// =====================
function initializeNavigation() {
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
// DROPDOWN MENU FUNCTIONALITY
// =====================
function initializeDropdowns() {
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

    // Toggle dropdown on click
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      const isActive = dropdown.classList.contains('active');
      
      // Close all other dropdowns
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
      toggle.setAttribute('aria-expanded', !isActive);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle keyboard navigation
    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle.click();
      } else if (event.key === 'Escape') {
        dropdown.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle dropdown menu item clicks and keyboard navigation
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
      // Close dropdown when menu item is clicked
      item.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        dropdown.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });

      // Handle keyboard navigation
      item.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          const nextItem = menuItems[index + 1] || menuItems[0];
          nextItem.focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          const prevItem = menuItems[index - 1] || menuItems[menuItems.length - 1];
          prevItem.focus();
        } else if (event.key === 'Escape') {
          dropdown.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    });
  });
}

// =====================
// NAVIGATION STATE MANAGEMENT
// =====================
function setActiveNavigationState() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  // Remove all active classes first
  navLinks.forEach(link => link.classList.remove('active'));
  dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  
  // Set active state based on current page
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });
  
  // Special handling for index.html
  if (currentPath.endsWith('/') || currentPath.endsWith('/index.html')) {
    const homeLink = document.querySelector('.nav-links a[href="index.html"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
  
  // Ensure dropdowns are closed on page load
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
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
