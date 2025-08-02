// =====================
// QUIZ MODULE - REUSABLE QUIZ FUNCTIONALITY
// =====================

class QuizModule {
  constructor(questions, options = {}) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.selectedAnswers = new Set();
    this.score = 0;
    this.options = {
      showProgress: true,
      allowRetake: true,
      ...options
    };
    
    // DOM Elements
    this.questionElement = null;
    this.answerButtons = null;
    this.quizNextBtn = null;
    this.quizPrevBtn = null;
    this.progressBar = null;
    this.retakeBtn = null;
    
    this.init();
  }

  init() {
    try {
      this.questionElement = document.getElementById("question");
      this.answerButtons = document.getElementById("answer-buttons");
      this.quizNextBtn = document.getElementById("quiz-next-btn");
      this.quizPrevBtn = document.getElementById("quiz-prev-btn");
      this.progressBar = document.getElementById("quiz-bar");
      this.retakeBtn = document.getElementById("retake-btn");

      if (!this.questionElement || !this.answerButtons) {
        throw new Error("Required quiz elements not found");
      }

      this.setupEventListeners();
      this.startQuiz();
    } catch (error) {
      console.error("Error initializing quiz:", error);
    }
  }

  setupEventListeners() {
    if (this.quizNextBtn) {
      this.quizNextBtn.addEventListener("click", () => this.handleNext());
    }
    
    if (this.quizPrevBtn) {
      this.quizPrevBtn.addEventListener("click", () => this.handlePrev());
    }
    
    if (this.retakeBtn) {
      this.retakeBtn.addEventListener("click", () => this.retakeQuiz());
    }
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = new Set();
    this.showQuestion();
  }

  showQuestion() {
    this.resetState();
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const questionNo = this.currentQuestionIndex + 1;
    
    this.questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;
    this.selectedAnswers.clear();

    currentQuestion.answers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.innerText = answer.text;
      li.classList.add("quiz-option");
      li.dataset.correct = answer.correct;
      li.dataset.index = index;
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");
      li.addEventListener("click", (e) => this.toggleAnswerHandler(e));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleAnswerHandler(e);
        }
      });
      this.answerButtons.appendChild(li);
    });

    this.updateProgress();
    this.updateNavigationButtons();
  }

  resetState() {
    this.answerButtons.innerHTML = "";
  }

  toggleAnswerHandler(event) {
    const button = event.currentTarget;
    const index = button.dataset.index;
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (currentQuestion.multiple) {
      // Allow multiple selections
      if (this.selectedAnswers.has(index)) {
        this.selectedAnswers.delete(index);
        button.classList.remove("selected");
      } else {
        this.selectedAnswers.add(index);
        button.classList.add("selected");
      }
    } else {
      // Single selection logic
      this.selectedAnswers.clear();
      [...this.answerButtons.children].forEach(btn => btn.classList.remove("selected"));
      this.selectedAnswers.add(index);
      button.classList.add("selected");
    }
  }

  evaluateAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const correctIndexes = currentQuestion.answers
      .map((a, i) => (a.correct ? i.toString() : null))
      .filter(i => i !== null);

    const isCorrect =
      this.selectedAnswers.size === correctIndexes.length &&
      [...this.selectedAnswers].every(index => correctIndexes.includes(index));

    if (isCorrect) this.score++;

    const options = Array.from(this.answerButtons.children);
    options.forEach((btn) => {
      const isCorrect = btn.dataset.correct === "true";
      if (isCorrect) {
        btn.classList.add("correct");
      } else if (btn.classList.contains("selected")) {
        btn.classList.add("incorrect");
      }
      btn.classList.remove("selected");
      btn.removeEventListener("click", this.toggleAnswerHandler);
      btn.removeEventListener("keydown", this.handleKeydown);
    });

    return isCorrect;
  }

  updateProgress() {
    if (this.progressBar && this.options.showProgress) {
      const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
      this.progressBar.style.width = `${progress}%`;
    }
  }

  updateNavigationButtons() {
    if (this.quizPrevBtn) {
      this.quizPrevBtn.style.display = this.currentQuestionIndex === 0 ? "none" : "inline-block";
    }
  }

  handleNext() {
    this.evaluateAnswer();
    setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.showQuestion();
      } else {
        this.showScore();
      }
    }, 500);
  }

  handlePrev() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showQuestion();
    }
  }

  showScore() {
    this.resetState();
    this.questionElement.innerText = `Quiz Complete! 🎉`;
    this.answerButtons.innerHTML = `
      <p style="font-size: 1.2rem; margin-top: 10px;">
        You got <strong>${this.score}</strong> out of <strong>${this.questions.length}</strong> questions correct.
      </p>
    `;
    
    if (this.quizNextBtn) this.quizNextBtn.style.display = "none";
    if (this.quizPrevBtn) this.quizPrevBtn.style.display = "none";
    if (this.retakeBtn && this.options.allowRetake) this.retakeBtn.style.display = "inline-block";
  }

  retakeQuiz() {
    if (this.retakeBtn) this.retakeBtn.style.display = "none";
    if (this.quizNextBtn) this.quizNextBtn.style.display = "inline-block";
    if (this.quizPrevBtn) this.quizPrevBtn.style.display = "inline-block";
    this.startQuiz();
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizModule;
} 