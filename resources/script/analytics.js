// =====================
// SIMPLE ANALYTICS TRACKING
// =====================

class SimpleAnalytics {
  constructor() {
    this.events = [];
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    
    this.init();
  }

  init() {
    // Track page views
    this.trackPageView();
    
    // Track user interactions
    this.trackUserInteractions();
    
    // Track quiz interactions
    this.trackQuizInteractions();
    
    // Track flashcard interactions
    this.trackFlashcardInteractions();
    
    // Send data when user leaves
    window.addEventListener('beforeunload', () => {
      this.sendAnalytics();
    });
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  trackPageView() {
    this.track('page_view', {
      page: window.location.pathname,
      title: document.title,
      referrer: document.referrer
    });
  }

  trackUserInteractions() {
    // Track navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.nav-links a')) {
        this.track('navigation_click', {
          link: e.target.href,
          text: e.target.textContent
        });
      }
    });

    // Track external link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="http"]') && !e.target.href.includes(window.location.hostname)) {
        this.track('external_link_click', {
          url: e.target.href,
          text: e.target.textContent
        });
      }
    });
  }

  trackQuizInteractions() {
    // Track quiz starts
    document.addEventListener('click', (e) => {
      if (e.target.matches('#retake-btn')) {
        this.track('quiz_retake', {
          page: window.location.pathname
        });
      }
    });

    // Track quiz completions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.textContent.includes('Quiz Complete')) {
              this.track('quiz_complete', {
                page: window.location.pathname
              });
            }
          });
        }
      });
    });

    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
      observer.observe(quizContainer, { childList: true, subtree: true });
    }
  }

  trackFlashcardInteractions() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.flashcard')) {
        this.track('flashcard_flip', {
          page: window.location.pathname
        });
      }
    });
  }

  track(eventName, data = {}) {
    const event = {
      event: eventName,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      ...data
    };

    this.events.push(event);
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Analytics Event:', event);
    }
  }

  sendAnalytics() {
    if (this.events.length === 0) return;

    const analyticsData = {
      sessionId: this.sessionId,
      sessionDuration: Date.now() - this.startTime,
      events: this.events,
      timestamp: Date.now()
    };

    // In a real implementation, you would send this to your analytics server
    // For now, we'll just store it in localStorage for demonstration
    try {
      const existingData = JSON.parse(localStorage.getItem('apex_analytics') || '[]');
      existingData.push(analyticsData);
      localStorage.setItem('apex_analytics', JSON.stringify(existingData));
    } catch (error) {
      console.error('Error saving analytics data:', error);
    }

    // Clear events after sending
    this.events = [];
  }

  // Public method to manually track events
  trackEvent(eventName, data = {}) {
    this.track(eventName, data);
  }
}

// Initialize analytics when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.apexAnalytics = new SimpleAnalytics();
  });
} else {
  window.apexAnalytics = new SimpleAnalytics();
} 