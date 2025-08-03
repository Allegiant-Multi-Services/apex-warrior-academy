// =====================
// FLASHCARD FUNCTIONALITY
// =====================
const flashcards = [
    { question: "Troop Leading Procedures", answer: "(1) Receive the Mission. (2) Issues the Warning order. (3) Make a Tentative plan. (4) Initiate movement. (5) Recon the site. (6) Complete the plan. (7) Issue the order. (8) Surpervise and Refine." },
    { question: "OPORD", answer: "(1) Situation. (2) Mission. (3) Execution. (4) Sustainment. (5) Command and signal." },
    { question: "5 Principles of patrolling", answer: "(1) Planning. (2) Recon. (3) Security. (4) Command and control. (5) Common sense." },
    { question: "What are the five major terrain features?", answer: "Hill, Valley, Ridge, Saddle, Depression" },
    { question: "What are the three minor terrain features?", answer: "Draw, Spur, Cliff" },
    { question: "What are the two supplementary terrain features?", answer: "Cut, Fill" },
    { question: "What are the colors of the map and what do they stand for?", answer: "Brown: Terrain/Contour lines, Blue: Water, Black: Man made features, Red: Major roads/build up areas, Green: Vegetation" },
    { question: "What does a GOTWA stand for and what is it?", answer: "Where you are GOING, OTHERS you are taking with you, TIME you will be gone, WHAT you will do if you receive contact, ACTIONS the rest of the element will take if they receive contact" },
    { question: "What are the three types of heat injuries?", answer: "Heat cramps, Heat exhaustion, and Heat stroke" },
    { question: "What are the three types of bleeding? and describe them", answer: "Arterial: Bright red spurtling blood, Venous: Dark red steady flow, Capillary: Blood oozes from wound" },
    { question: "In reference to land navigation, what are the different types of North?", answer: "Grid North, True North, Magnetic North" },
    { question: "What does SLLS stand for?", answer: "Stop, Look, Listen, Smell" },
    { question: "What does LACE stand for?", answer: "Liquid, Ammo, Casualties, Equipment" },
    { question: "What does SALUTE stand for?", answer: "Size, Activity, Location, Unit, Time, Equipment" },
    { question: "What does METT-TC stand for?", answer: "Mission, Enemy, Terrain, Troops available, Time, Civilians on the battlefield" },
    { question: "What are the different types of Command Orders?", answer: "Warning Orders (WARNO), Operations Order(OPORD), Fragmentary Order(FRAGO)" },
    { question: "What are the eight troop leading procedures?", answer: "Receive the mission, Issue the warning order, Make a tentative plan, start necessary movements, Conduct leaders recon, Complete the plan, Issue the Op Order, Supervise and refine" },
    { question: "In reference to an Enemy Prisoner of War, what are the five S's?", answer: "Search, Silence, Segregate, Safeguard, Speed to the rear" },
    { question: "In reference to an IED, what are the five C's?", answer: "Control, Cordon, Check, Confirm, Clear" },
    { question: "What are the different types of Recon Patrols?", answer: "Area, Zone, Route" },
    { question: "What are the differen types of movement?", answer: "Traveling, Traveling over watch, Bounding over watch (successive, alternative)" },
    { question: "What are the eight cycles of function?", answer: "Feeding, Chambering, Locking, Firing, Unlocking, Extracting, Ejecting, Cocking" },
    { question: "What are the eight battle drills?", answer: "(1a) Platoon attack (b) Squad attack. (2) React to contact. (3) Break Contact. (4) React to ambush. (5) Knock out bunkers. (6) Enter building/clear room. (7) Enter/clear trench. (8) Conduct initial breach of mined wire obstacle." },
    { question: "What is a Nine Line Medevac?", answer: "(1) Location of pickup site. (2) Frequency, call sign, suffix. (3) Number of patients by precedence. (4) Special equipment required. (5) Number patients by type. (6) Security at the pickup site. (7) Method of marking at pickup site. (8) Nationality and Status. (9) NBC." },
];

let currentCard = 0;
const flashcard = document.getElementById("flashcard");
const front = document.getElementById("flashcard-front");
const back = document.getElementById("flashcard-back");

function loadCard(index) {
    front.textContent = flashcards[index].question;
    back.textContent = flashcards[index].answer;
    flashcard.classList.remove("flipped");
}

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

document.getElementById("flash-prev-btn").addEventListener("click", () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    loadCard(currentCard);
});

document.getElementById("flash-next-btn").addEventListener("click", () => {
    currentCard = (currentCard + 1) % flashcards.length;
    loadCard(currentCard);
});

// Initialize
loadCard(currentCard);

// =====================
// PRACTICE TEST FUNCTIONALITY
// =====================
const questions = [
    {
        question: "What are the Army Leadership Requirements Model attributes?",
        multiple: false,
        answers: [
            { text: "Character, Presence, Intellect", correct: true },
            { text: "Discipline, Loyalty, Motivation", correct: false },
            { text: "Respect, Integrity, Duty", correct: false },
            { text: "Planning, Communication, Strength", correct: false }
        ]
    },
    {
        question: "What are the Army Leadership Requirements Model competencies?",
        multiple: false,
        answers: [
            { text: "Lead, Develop, Achieve", correct: true },
            { text: "Command, Control, Coordinate", correct: false },
            { text: "Plan, Prepare, Execute", correct: false },
            { text: "Assess, Analyze, Act", correct: false }
        ]
    },
    {
        question: "What is the purpose of the NCO Creed?",
        multiple: false,
        answers: [
            { text: "To outline soldier responsibilities", correct: false },
            { text: "To establish officer authority", correct: true },
            { text: "To instill pride and reinforce the responsibilities of NCOs", correct: false },
            { text: "To provides PT guidance", correct: false }
        ]
    },
    {
        question: "Which form is used for initial counseling?",
        multiple: false,
        answers: [
            { text: "DA Form 4187", correct: false },
            { text: "DA Form 4856", correct: true },
            { text: "DA Form 2166-9-1", correct: false },
            { text: "DA Form 5500", correct: false }
        ]
    },
    {
        question: "Which army regulation covers Army Leadership?",
        multiple: false,
        answers: [
            { text: "AR 600-20", correct: false },
            { text: "FM 6-22", correct: true },
            { text: "AR 670-1", correct: false },
            { text: "TC 7-22.7", correct: false }
        ]
    },
    {
        question: "What are the three major categories of developmental counseling?",
        multiple: false,
        answers: [
            { text: "Performance, Event-oriented, Professional Growth", correct: true },
            { text: "Initial, Quaterly, Final", correct: false },
            { text: "Disciplinary, Command Directed, Voluntary", correct: false },
            { text: "Career, Peer, Self", correct: false }
        ]
    },
    {
        question: "Which form is used for an NCOER?",
        multiple: false,
        answers: [
            { text: "DA Form 2166-9-1", correct: true },
            { text: "DA Form 1059", correct: false },
            { text: "DA Form 4856", correct: false },
            { text: "DA Form 638", correct: false }
        ]
    },
    {
        question: "What is the DA Form 1059 used for?",
        multiple: false,
        answers: [
            { text: "Enlisted evaluation report", correct: false },
            { text: "Formal school academic evaluation", correct: true },
            { text: "Leave form", correct: false },
            { text: "Awards recommendation", correct: false }
        ]
    },
    {
        question: "What are the three levels of leadership?",
        multiple: false,
        answers: [
            { text: "Direct, Organizational, Strategic", correct: true },
            { text: "Tactical, Operational, Strategic", correct: false },
            { text: "Junior, Senior, Executive", correct: false },
            { text: "Command, Staff, Civilian", correct: false }
        ]
    },
    {
        question: "What regulation governs Army command policy?",
        multiple: false,
        answers: [
            { text: "AR 600-20", correct: true },
            { text: "FM 6-22", correct: false },
            { text: "AR 350-1", correct: false },
            { text: "AR 623-3", correct: false }
        ]
    }
];

// =====================
// QUIZ STATE
// =====================
let currentQuestionIndex = 0;
let selectedAnswers = new Set();
let score = 0;

// =====================
// DOM ELEMENTS
// =====================
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const quizNextBtn = document.getElementById("quiz-next-btn");
const quizPrevBtn = document.getElementById("quiz-prev-btn");
const progressBar = document.getElementById("quiz-bar");
const retakeBtn = document.getElementById("retake-btn");

// =====================
// START QUIZ
// =====================
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = new Set();
    showQuestion();
}

// =====================
// SHOW QUESTION
// =====================
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;
    selectedAnswers.clear();

    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.innerText = answer.text;
        li.classList.add("quiz-option");
        li.dataset.correct = answer.correct;
        li.dataset.index = index;
        li.addEventListener("click", toggleAnswerHandler);
        answerButtons.appendChild(li);
    });

    updateProgress();
}

// =====================
// RESET STATE
// =====================
function resetState() {
    answerButtons.innerHTML = "";
}

// =====================
// TOGGLE ANSWER (WITH SINGLE/MULTIPLE LOGIC)
// =====================
function toggleAnswerHandler(event) {
    const button = event.currentTarget;
    const index = button.dataset.index;
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.multiple) {
        // Allow multiple selections
        if (selectedAnswers.has(index)) {
            selectedAnswers.delete(index);
            button.classList.remove("selected");
        } else {
            selectedAnswers.add(index);
            button.classList.add("selected");
        }
    } else {
        // Single selection logic
        selectedAnswers.clear();
        [...answerButtons.children].forEach(btn => btn.classList.remove("selected"));
        selectedAnswers.add(index);
        button.classList.add("selected");
    }
}

// =====================
// EVALUATE ANSWER
// =====================
function evaluateAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndexes = currentQuestion.answers
        .map((a, i) => (a.correct ? i.toString() : null))
        .filter(i => i !== null);

    const isCorrect =
        selectedAnswers.size === correctIndexes.length &&
        [...selectedAnswers].every(index => correctIndexes.includes(index));

    if (isCorrect) score++;

    const options = Array.from(answerButtons.children);
    options.forEach((btn) => {
        const isCorrect = btn.dataset.correct === "true";
        if (isCorrect) {
            btn.classList.add("correct");
        } else if (btn.classList.contains("selected")) {
            btn.classList.add("incorrect");
        }
        btn.classList.remove("selected");
        btn.removeEventListener("click", toggleAnswerHandler); // Correct use of named handler
    });

    return isCorrect;
}

// =====================
// PROGRESS BAR
// =====================
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    // Optional text update: document.getElementById("quiz-progress-text").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// =====================
// NEXT / PREV NAVIGATION
// =====================
quizNextBtn.addEventListener("click", () => {
    evaluateAnswer();
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showScore();
        }
    }, 500);
});

quizPrevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// =====================
// SHOW SCORE
// =====================
function showScore() {
    resetState();
    questionElement.innerText = `Quiz Complete! 🎉`;
    answerButtons.innerHTML = `
        <p style="font-size: 1.2rem; margin-top: 10px;">
            You got <strong>${score}</strong> out of <strong>${questions.length}</strong> questions correct.
        </p>
    `;
    quizNextBtn.style.display = "none";
    quizPrevBtn.style.display = "none";
    retakeBtn.style.display = "inline-block";
}

// =====================
// RETAKE QUIZ
// =====================
retakeBtn.addEventListener("click", () => {
    retakeBtn.style.display = "none";
    quizNextBtn.style.display = "inline-block";
    quizPrevBtn.style.display = "inline-block";
    startQuiz();
});

// =====================
// INITIALIZE
// =====================
startQuiz();