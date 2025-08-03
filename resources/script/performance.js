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
    this.setupServiceWorker();
    this.optimizeFonts();
    this.preloadCriticalResources();
    this.setupResourceHints();
    this.optimizeThirdPartyScripts();
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

  // Preload critical resources
  preloadCriticalResources: function() {
    const criticalResources = [
      'resources/design/style.css',
      'resources/images/apex_warrior_academy_transparent.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });
  },

  // Optimize fonts loading
  optimizeFonts: function() {
    // Add font-display: swap to Google Fonts
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    if (fontLink) {
      fontLink.href += '&display=swap';
    }
    
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hqQug7w2KvZz8.woff2';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  },

  // Setup service worker for caching
  setupServiceWorker: function() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  },

  // Setup resource hints for better performance
  setupResourceHints: function() {
    // DNS prefetch for external domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);

    const dnsPrefetch2 = document.createElement('link');
    dnsPrefetch2.rel = 'dns-prefetch';
    dnsPrefetch2.href = 'https://fonts.gstatic.com';
    document.head.appendChild(dnsPrefetch2);

    // Preconnect to critical domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);
  },

  // Optimize third-party scripts
  optimizeThirdPartyScripts: function() {
    // Defer non-critical third-party scripts
    const thirdPartyScripts = document.querySelectorAll('script[src*="youtube"], script[src*="analytics"]');
    thirdPartyScripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
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