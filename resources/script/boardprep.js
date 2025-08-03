// =====================
// BOARD PREP FLASHCARDS
// =====================

// Board Preparation Flashcard Data
const boardPrepFlashcards = [
    // Army Values and Leadership
    { question: "What are the seven Army Values?", answer: "LDRSHIP - Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, Personal Courage" },
    { question: "What is the Army's mission?", answer: "To deploy, fight, and win our nation's wars by providing ready, prompt, and sustained land dominance across the full spectrum of conflict as part of the joint force." },
    { question: "What are the three types of counseling?", answer: "Event counseling, Performance counseling, and Professional Growth counseling." },
    { question: "What is the purpose of an NCOER?", answer: "To provide a fair, accurate, and complete evaluation of a Soldier's performance and potential." },
    { question: "What are the Army Leadership Requirements Model attributes?", answer: "Character, Presence, and Intellect." },
    { question: "What are the Army Leadership Requirements Model competencies?", answer: "Lead, Develop, and Achieve." },
    { question: "What are the 8 Task Troop Leading Procedures", answer: "Receive the mission, Issue the WARNO, Make a Tentative Plan, Initiate Movement, Conduct RECON, Complete the Plan, Issue the OPORD, Supervise and Refine." },
    { question: "What is the 8 Step Training Module?", answer: "Plan the training event, Certify the trainers, Conduct RECON, issue the OPORD, Rehearse, Execute, Conduct AAR, and Retrain." },
    { question: "What is the LRM", answer: "Leadership Requirement Model; identifies core attributes and competencies of a leader; BE, KNOW, DO." },
    { question: "", answer: "" },
    
    // Army Regulations and Policies
    { question: "What regulation covers the Army Body Composition Program?", answer: "AR 600-9 (Army Body Composition Program)" },
    { question: "What regulation covers the Wear and Appearance of Army Uniforms?", answer: "AR 670-1 (Wear and Appearance of Army Uniforms and Insignia)" },
    { question: "What regulation covers the Evaluation Reporting System?", answer: "AR 623-3 (Evaluation Reporting System)" },
    { question: "What is the current Army fitness test?", answer: "The Army Fitness Test (AFT)" },
    { question: "What are the three types of Army training?", answer: "Individual training, Collective training, and Leader Development training." },
    { question: "What is the Army's Ready Force?", answer: "Combat-ready forces capable of responding to any threat worldwide." },
    
    // Military Knowledge
    { question: "What is the Army's current uniform?", answer: "The Army Combat Uniform (ACU) in Operational Camouflage Pattern (OCP)." },
    { question: "What does METT-TC stand for?", answer: "Mission, Enemy, Terrain, Troops available, Time, and Civilians on the battlefield." },
    { question: "What does SALUTE stand for?", answer: "Size, Activity, Location, Unit, Time, and Equipment." },
    { question: "What does LACE stand for?", answer: "Liquid, Ammo, Casualties, and Equipment." },
    { question: "What are the five major terrain features?", answer: "Hill, Valley, Ridge, Saddle, and Depression." },
    { question: "What are the three minor terrain features?", answer: "Draw, Spur, and Cliff." },
    
    // Board-Specific Knowledge
    { question: "What documents should you bring to a promotion board?", answer: "DA Form 2A, recent NCOERs, military/civilian education certificates, awards documentation, medical/dental records, security clearance, and recent AFT scorecards." },
    { question: "What is the proper way to address a board member?", answer: "Address them by their rank and last name, or 'Sir'/'Ma'am' if you don't know their name." },
    { question: "What should you do if you don't know the answer to a board question?", answer: "Be honest and say 'I don't know, but I will find out' rather than guessing or making up an answer." },
    { question: "What is the purpose of a promotion board?", answer: "To evaluate a Soldier's potential for promotion and assess their leadership abilities, knowledge, and readiness for increased responsibility." },
    { question: "What should you wear to a promotion board?", answer: "Your best-fitting, properly pressed Class A or Class B uniform with all awards and decorations properly displayed." },
    { question: "How should you enter and exit a board room?", answer: "Knock, enter when told, march to the center, render proper salute, state your purpose, and maintain military bearing throughout." },
    
    // Leadership and Management
    { question: "What are the three leadership styles?", answer: "Directing, Participating, and Delegating." },
    { question: "What is the purpose of counseling?", answer: "To help Soldiers understand their performance, set goals, and develop professionally." },
    { question: "What are the steps in the counseling process?", answer: "Open the session, Discuss the issue, Develop a plan of action, Record and close the session, and Follow up." },
    { question: "What is the Army's definition of leadership?", answer: "The process of influencing people by providing purpose, direction, and motivation to accomplish the mission and improve the organization." },
    { question: "What are the four types of Army discipline?", answer: "Self-discipline, Unit discipline, Imposed discipline, and Situational discipline." },
    { question: "What is the purpose of an after-action review (AAR)?", answer: "To identify what happened, why it happened, and how to sustain strengths and improve on weaknesses." },
    { question: "Which Army Training Circular (TC) covers the NCO Guide?", answer: "TC 7.22-7" },
    { question:"", answer:""},
    { question:"", answer:""},
    
    // Current Events and Army Knowledge
    { question: "What is the Army's current focus on modernization?", answer: "The Army is focused on modernization through six priorities: Long-Range Precision Fires, Next-Generation Combat Vehicle, Future Vertical Lift, Army Network, Air and Missile Defense, and Soldier Lethality." },
    { question: "What is the Army's current recruiting slogan?", answer: "Be All You Can Be" },
    { question: "What is the purpose of the Army's Total Force Policy?", answer: "To ensure the Army maintains the right mix of Active, Reserve, and National Guard forces to meet national security requirements." },
    { question: "What is the Army's current deployment cycle?", answer: "The Army aims for a 1:3 deployment-to-dwell ratio, meaning one year deployed for every three years at home station." },
    { question: "What is the Army's current focus on readiness?", answer: "The Army focuses on maintaining combat-ready forces through realistic training, proper equipment, and well-trained leaders." },
    { question: "What is the purpose of the Army's Professional Military Education (PME)?", answer: "To develop leaders who are competent, confident, and committed to the Army profession and the nation." }
];

// Initialize flashcards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the flashcard module with board prep content
    if (typeof FlashcardModule !== 'undefined') {
        new FlashcardModule(boardPrepFlashcards, {
            autoFlip: false,
            showCounter: true
        });
    } else {
        // Fallback to basic flashcard functionality if module not available
        initializeBasicFlashcards();
    }
});

// Basic flashcard functionality (fallback)
function initializeBasicFlashcards() {
    let currentCard = 0;
    const flashcard = document.getElementById("flashcard");
    const front = document.getElementById("flashcard-front");
    const back = document.getElementById("flashcard-back");
    const prevBtn = document.getElementById("flash-prev-btn");
    const nextBtn = document.getElementById("flash-next-btn");

    function loadCard(index) {
        if (index >= 0 && index < boardPrepFlashcards.length) {
            front.textContent = boardPrepFlashcards[index].question;
            back.textContent = boardPrepFlashcards[index].answer;
            flashcard.classList.remove("flipped");
        }
    }

    // Flashcard click to flip
    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentCard = (currentCard - 1 + boardPrepFlashcards.length) % boardPrepFlashcards.length;
            loadCard(currentCard);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentCard = (currentCard + 1) % boardPrepFlashcards.length;
            loadCard(currentCard);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Enter' || e.key === ' ') {
            flashcard.click();
        }
    });

    // Initialize with first card
    loadCard(currentCard);
} 