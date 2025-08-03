// =====================
// APEX WARRIOR ACADEMY - PERFORMANCE MODULE
// =====================

// Extend the namespace
window.ApexWarriorAcademy = window.ApexWarriorAcademy || {};

ApexWarriorAcademy.Performance = {
  // Initialize performance optimizations
  init: function() {
    this.setupLazyLoading();
    this.setupIntersectionObserver();
    this.monitorPerformance();
    this.optimizeImages();
  },

  // Setup lazy loading for images
  setupLazyLoading: function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      console.log('Native lazy loading supported');
    } else {
      // Fallback for older browsers
      this.setupLazyLoadingFallback(images);
    }
  },

  // Fallback lazy loading for older browsers
  setupLazyLoadingFallback: function(images) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  },

  // Setup intersection observer for performance monitoring
  setupIntersectionObserver: function() {
    const sections = document.querySelectorAll('section, .content-section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Track section visibility for analytics
          this.trackSectionView(entry.target.id || entry.target.className);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  },

  // Monitor page performance
  monitorPerformance: function() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            this.logPerformanceMetrics(perfData);
          }
        }, 0);
      });
    }
  },

  // Log performance metrics
  logPerformanceMetrics: function(perfData) {
    const metrics = {
      pageLoadTime: perfData.loadEventEnd - perfData.loadEventStart,
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      firstPaint: this.getFirstPaint(),
      totalLoadTime: perfData.loadEventEnd - perfData.fetchStart
    };

    console.log('Performance Metrics:', metrics);
    
    // Send to analytics if available
    if (window.ApexWarriorAcademy.Analytics) {
      window.ApexWarriorAcademy.Analytics.trackPerformance(metrics);
    }
  },

  // Get first paint time
  getFirstPaint: function() {
    if ('performance' in window) {
      const paintEntries = performance.getEntriesByType('paint');
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      return firstPaint ? firstPaint.startTime : null;
    }
    return null;
  },

  // Optimize images
  optimizeImages: function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
        console.warn('Image failed to load:', img.src);
      });

      // Add loading animation
      if (img.loading === 'lazy') {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
        
        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
      }
    });
  },

  // Track section views
  trackSectionView: function(sectionName) {
    if (window.ApexWarriorAcademy.Analytics) {
      window.ApexWarriorAcademy.Analytics.trackEvent('section_view', {
        section: sectionName,
        timestamp: Date.now()
      });
    }
  },





  // Debounce function for performance
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for performance
  throttle: function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Initialize performance optimizations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ApexWarriorAcademy.Performance.init();
  });
} else {
  ApexWarriorAcademy.Performance.init();
} 