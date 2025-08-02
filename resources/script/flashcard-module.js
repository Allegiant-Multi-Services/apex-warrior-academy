// =====================
// FLASHCARD MODULE - REUSABLE FLASHCARD FUNCTIONALITY
// =====================

class FlashcardModule {
  constructor(flashcards, options = {}) {
    this.flashcards = flashcards;
    this.currentCard = 0;
    this.options = {
      autoFlip: false,
      showCounter: true,
      ...options
    };
    
    // DOM Elements
    this.flashcard = null;
    this.front = null;
    this.back = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.counter = null;
    
    this.init();
  }

  init() {
    try {
      this.flashcard = document.getElementById("flashcard");
      this.front = document.getElementById("flashcard-front");
      this.back = document.getElementById("flashcard-back");
      this.prevBtn = document.getElementById("flash-prev-btn");
      this.nextBtn = document.getElementById("flash-next-btn");

      if (!this.flashcard || !this.front || !this.back) {
        throw new Error("Required flashcard elements not found");
      }

      this.setupEventListeners();
      this.loadCard(this.currentCard);
      this.updateCounter();
    } catch (error) {
      console.error("Error initializing flashcard:", error);
    }
  }

  setupEventListeners() {
    // Flashcard click to flip
    this.flashcard.addEventListener("click", () => this.toggleFlip());
    
    // Keyboard navigation
    this.flashcard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleFlip();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.previousCard();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.nextCard();
      }
    });

    // Navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.previousCard());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.nextCard());
    }

    // Make flashcard focusable for keyboard navigation
    this.flashcard.setAttribute("tabindex", "0");
    this.flashcard.setAttribute("role", "button");
    this.flashcard.setAttribute("aria-label", "Click to flip flashcard");
  }

  loadCard(index) {
    if (index < 0 || index >= this.flashcards.length) {
      console.warn(`Invalid card index: ${index}`);
      return;
    }

    const card = this.flashcards[index];
    this.front.textContent = card.question;
    this.back.textContent = card.answer;
    this.flashcard.classList.remove("flipped");
    
    // Update ARIA label with current card info
    this.flashcard.setAttribute("aria-label", `Flashcard ${index + 1} of ${this.flashcards.length}. Click to flip.`);
    
    this.updateCounter();
  }

  toggleFlip() {
    this.flashcard.classList.toggle("flipped");
    
    // Update ARIA label based on current state
    const isFlipped = this.flashcard.classList.contains("flipped");
    const card = this.flashcards[this.currentCard];
    const content = isFlipped ? card.answer : card.question;
    
    this.flashcard.setAttribute("aria-label", `Flashcard ${this.currentCard + 1} of ${this.flashcards.length}. ${isFlipped ? 'Answer' : 'Question'}: ${content}. Click to flip.`);
  }

  previousCard() {
    this.currentCard = (this.currentCard - 1 + this.flashcards.length) % this.flashcards.length;
    this.loadCard(this.currentCard);
  }

  nextCard() {
    this.currentCard = (this.currentCard + 1) % this.flashcards.length;
    this.loadCard(this.currentCard);
  }

  updateCounter() {
    if (this.options.showCounter) {
      // Create counter element if it doesn't exist
      if (!this.counter) {
        this.counter = document.createElement("div");
        this.counter.className = "flashcard-counter";
        this.counter.style.cssText = `
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        `;
        this.flashcard.parentNode.appendChild(this.counter);
      }
      
      this.counter.textContent = `${this.currentCard + 1} of ${this.flashcards.length}`;
    }
  }

  // Public methods for external control
  goToCard(index) {
    if (index >= 0 && index < this.flashcards.length) {
      this.currentCard = index;
      this.loadCard(this.currentCard);
    }
  }

  getCurrentCard() {
    return this.currentCard;
  }

  getTotalCards() {
    return this.flashcards.length;
  }

  isFlipped() {
    return this.flashcard.classList.contains("flipped");
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FlashcardModule;
} 