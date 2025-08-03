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
    { question: "Define Leadership", answer: "Influencing others by providing direction and motivation to accomplish the mission and improve the organization." },
    { question: "DA form for Counseling", answer: "DA Form 4856"},
    { question: "TASP", answer: "Total Army Sponsorship program: Used to help Soldiers and their families transition to a new duty station; DA5434."},
    { question: "NCOPD", answer: "Non-Commissioned Officer Professional Development"},
    { question: "What are some steps to take when preparing a monthly counseling?", answer: "Assess the need, Fill our admin information, Fill out background data, Review the previous month's counseling."},

    // Army Regulations and Policies
    { question: "What regulation covers the Army Body Composition Program?", answer: "AR 600-9 (Army Body Composition Program)" },
    { question: "What regulation covers the Wear and Appearance of Army Uniforms?", answer: "AR 670-1 (Wear and Appearance of Army Uniforms and Insignia)" },
    { question: "What regulation covers the Evaluation Reporting System?", answer: "AR 623-3 (Evaluation Reporting System)" },
    { question: "What is the current Army fitness test?", answer: "The Army Fitness Test (AFT)" },
    { question: "What are the three types of Army training?", answer: "Individual training, Collective training, and Leader Development training." },
    { question: "What is the Army's Ready Force?", answer: "Combat-ready forces capable of responding to any threat worldwide." },
    { question: "What the DA Form for Body Fat Percentage, and Taping for both Male and Female?", answer: "Male: DA5500, Female: DA5501"},
    { question: "What is the satisfactory amount of pounds for soldiers to lose per month?", answer: "Between 3-8 lbs per month, which is about a 1% body fat reduction."},
    { question: "5 Domains for H2F", answer: "Sleep, Nutrition, Mental, Physical, Spiritual"},
    { question: "Regulation covering H2F", answer: "FM 7-22"},
    { question: "Protected categories under equal opportunity", answer: "Race, Color, National Origin, Gender Identity, Sexual Orientation, Religion, Age"},
    { question: "Regulation that covers E.O?", answer: "AR 600-20 Chapter 6"},
    { question: "AR 600-52", answer: "Sexual Harassment Assault Response and Prevention Program"},
    { question: "Types of reporting for SHARP", answer: "Assualt: Restricted and Unrestricted; Harassment: Formal and Informal."},
    { question: "Define Sexual Assault", answer: "Intentional sexual conduct by use of force, threat, abuse of authority when the victim does not or cannot consent."},
    { question: "Ways to handle sexual harassment", answer: "Direct, Indirect, Third-party, Chain of Command, or Formal Complaint."},
    { question: "Reporting sexual assualt", answer: "Restricted: SARC, VA, Health Care Professional, Chaplain; Unrestricted: SARC, VA, Health Care Professional, Chain of Command, Military Police/Law Enforcement"},
    { question: "Types of NCOERs", answer: "Annual, Extended Annual, Complete the Record, Change of Rater, Relief of Cause, 60-day option, 60-day senior rater option"},
    { question: "Regulation for Army Leadership", answer: "ADP 6-22"},
    { question: "Ineligibility for Re-enlistment", answer: "They get barred from re-enlistment."},
    { question: "AR 350-1", answer: "Covers Army Training and Leader Development"},
    { question: "Training Circular (TC) for Drill and Ceremony", answer: "TC 3-25.1"},
    { question: "Army Regulations (AR) for Enlisted Promotions and Reductions", answer: "AR 600-8-19"},
    { question: "Command Policy Regulation", answer: "The regulation that prescribes the responsibilities and policies of Command; AR 600-20."},
    { question: "Leave and pass regulation", answer: "AR 600-8-10 and DA 31"},
    { question: "DA Form to separate from the Army", answer: "DA 214 Certificate of Release or Discharge from Active Duty"},
    { question: "Tattoos prejudicial to good order and discipline in the Army", answer: "Sexist, Racist, Indecent, or Extremist"},
    { question: "Shortest length that a female hairstyle is authorized", answer: "1/4 of an inch"},
    { question: "Authorized length of nails for males and females in the Army", answer: "Female: 1/4 of an inch, Male: Not to exceed the fingertips"},
    { question: "Proper wear of the beret", answer: "Straight across the forehead, 1 inch above the eyebrow, flash over left eye, excess no lower than the middle of the right ear."},
    { question: "When is the Army uniform prohibited?", answer: "Off-duty"},
    { question: "Exceptions for having beards in the Army", answer: "Medical Exemption or Religious Accommodation"},
    
    // Military Knowledge
    { question: "What is the Army's current uniform?", answer: "The Army Combat Uniform (ACU) in Operational Camouflage Pattern (OCP)." },
    { question: "What does METT-TC stand for?", answer: "Mission, Enemy, Terrain, Troops available, Time, and Civilians on the battlefield." },
    { question: "What does SALUTE stand for?", answer: "Size, Activity, Location, Unit, Time, and Equipment." },
    { question: "What does LACE stand for?", answer: "Liquid, Ammo, Casualties, and Equipment." },
    { question: "What are the five major terrain features?", answer: "Hill, Valley, Ridge, Saddle, and Depression." },
    { question: "What are the three minor terrain features?", answer: "Draw, Spur, and Cliff." },
    { question: "Why does the ARMY train?", answer: "The Army trains to defend our Nation's Constitution and win our Nation's wars both foreign and domestic."},
    { question: "Your weapon jams in the field, what are the steps you take to fix the issue?", answer: "(SPORTS)Slap the magazine, Pull the charging handle, Observe the chamber, Release the charging handle, Tap the forward assist, Shoot."},
    { question: "What is your first general order?", answer: "I will guard everything within the limits of my post and quit my post only when properly relieved."},
    { question: "What is your second general order?", answer: "I will obey my special orders and perform all of my duties in a military manner."},
    { question: "What is your third general order?", answer: "I will report violations of my special orders, emergencies, and anything not covered in my instructions to the Commander of Relief."},
    { question: "Open Rank Inspection Steps", answer: "1st Rank 2 steps forward, 2nd Rank 1 step forward, 3rd Rank stays fast, 4th Rank 2 half-steps to the rear."},
    { question: "Where is the legend found on a map?", answer: "In the lower left margin"},
    { question: "Ways to orient a map", answer: "Using a compass or terrain association."},
    { question: "Training Circular for Land Navigation", answer: "TC 3-25.26"},
    { question: "What is a map?", answer: "A graphic representation of a portion of the earth's surface as seen from above."},
    { question: "Distance for a 6, 8, and a 10 digit grid", answer: "6 digit = 100m, 8 digit = 10m, 10 digit = 1m"},
    { question: "Azimuth and Back Azimuth", answer: "An azimuth is the degree of direction to your target/destination; back azimuth is an about face from your azimuth."},
    { question: "TCCC and its Steps", answer: "Tactical Combat Casualy Care; Care under fire, Tactical field care, Tactical evacuation care."},
    { question: "CASEVAC", answer: "Casualty Evacuation"},
    { question: "Biggest threat to a casualty's life in combat", answer: "Massive Hemorrhaging"},
    { question: "APVU", answer: "Alert, Pain, Verbal, Unresponsiveness"},
    { question: "JLIST", answer: "Joint Service Lightweight Integrated Suit Technology"},
    { question: "Four types of burns", answer: "Chemical, Thermal, Electrical, and Radiological"},
    { question: "FM that covers First-Aid", answer: "FM 4-25.11"},
    { question: "Determining if a uniform is serviceable", answer: "New, Used, or Repaired"},
    
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
    { question: "What are different approaches to counseling?", answer: "Directive, Non-Directive, Combined"},
    { question: "Why do units train?", answer: "Units train to ensure that our soldiers can accomplish the mission"},
    { question: "What is ACS", answer: "Army Community Service"},
    { question: "What are the programs covered under Army Community Service?", answer: "SHARP (Sexual Harassment/Assault response and Prevention), FAP (Family Advocacy Program), AER (Army Emergency Relief), EFMP (Exceptional Family Member Program), SFRG (Soldier and Family Readiness Group)"},
    { question: "What are the three levels leadership?", answer: "Direct, Organization, and Strategic"},
    { question: "ACE", answer: "Ask, Care, Escort"},
    { question: "Three ways a leader could develop their soldiers", answer: "Training, Mentoring, and Counseling"},
    { question: "Only Commanders can issue punishment but what can an NCO do?", answer: "Recommend punishment to the Commander."},
    { question: "What do you do if your soldier fails a diagnostic AFT?", answer: "Review their performance, Identify their weak areas, and develop a targeted training program."},
    
    // Current Events and Army Knowledge
    { question: "What is the Army's current focus on modernization?", answer: "The Army is focused on modernization through six priorities: Long-Range Precision Fires, Next-Generation Combat Vehicle, Future Vertical Lift, Army Network, Air and Missile Defense, and Soldier Lethality." },
    { question: "What is the Army's current recruiting slogan?", answer: "Be All You Can Be" },
    { question: "What is the purpose of the Army's Total Force Policy?", answer: "To ensure the Army maintains the right mix of Active, Reserve, and National Guard forces to meet national security requirements." },
    { question: "What is the Army's current deployment cycle?", answer: "The Army aims for a 1:3 deployment-to-dwell ratio, meaning one year deployed for every three years at home station." },
    { question: "What is the Army's current focus on readiness?", answer: "The Army focuses on maintaining combat-ready forces through realistic training, proper equipment, and well-trained leaders." },
    { question: "What is the purpose of the Army's Professional Military Education (PME)?", answer: "To develop leaders who are competent, confident, and committed to the Army profession and the nation." },
    { question: "Who is the Secretary of Defense", answer: "Honorable Pete Hegseth"},
    { question: "Name a current event", answer: "Voting SAVE Act, Chinese Tariffs"},
    { question: "What is a recent change that has occured in the Army?", answer: "Updated Army Command Policy and updated SHARP regulations."},
    { question: "Blue book creator", answer: "Friedrich Wilhelm von Steuben"},
    { question: "Year Blue book was created", answer: "1779"},
    { question: "Purpose of Drill and Ceremony", answer: "To instill discipline and move formations from one place to another in a military manner."},
    { question: "NCO Creed author", answer: "SFC Earle Brigham"},
    { question: "Why was Fort Liberty changed back to Fort Bragg?", answer: "In honor of WW2 paratrooper and Silver Star recipient PFC Roland L. Bragg."},
    { question: "When was the Army founded?", answer: "June 14th, 1775"},
    { question: "Oldest component of the Army", answer: "The Army National Guard"},
    { question: "Deadliest war in United States history", answer: "The Civil War"}
];

// Initialize flashcards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Debug: Log the number of flashcards
    console.log('Total flashcards loaded:', boardPrepFlashcards.length);
    
    // Check for any invalid flashcards and remove duplicates
    const validFlashcards = boardPrepFlashcards.filter(card => {
        if (!card.question || !card.answer) {
            console.warn('Invalid flashcard found:', card);
            return false;
        }
        return true;
    });
    
    // Remove duplicate questions
    const uniqueFlashcards = [];
    const seenQuestions = new Set();
    
    validFlashcards.forEach(card => {
        const questionKey = card.question.toLowerCase().trim();
        if (!seenQuestions.has(questionKey)) {
            seenQuestions.add(questionKey);
            uniqueFlashcards.push(card);
        } else {
            console.warn('Duplicate question found:', card.question);
        }
    });
    
    console.log('Unique flashcards after removing duplicates:', uniqueFlashcards.length);
    
    console.log('Valid flashcards:', validFlashcards.length);
    console.log('Unique flashcards:', uniqueFlashcards.length);
    console.log('Flashcards:', uniqueFlashcards);
    
    // Initialize the flashcard module with board prep content
    if (typeof FlashcardModule !== 'undefined') {
        console.log('Using FlashcardModule');
        new FlashcardModule(uniqueFlashcards, {
            autoFlip: false,
            showCounter: true
        });
    } else {
        console.log('Using fallback flashcard system');
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