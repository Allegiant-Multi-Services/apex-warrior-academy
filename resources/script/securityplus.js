// =====================
// SECURITY+ PAGE FUNCTIONALITY
// =====================

// Flashcard data
const securityFlashcards = [
    { question: "What is the primary responsibility of the hypervisor?", answer: "The primary responsibility of the hypervisor is enforcing isolation between virtual machines. This means that the hypervisor must present each virtual machine with the illusion of a completely separate physical environment dedicated for use by that virtual machine." },
    { question: "What does CIA triad stand for?", answer: "Confidentiality, Integrity, Availability." },
    { question: "What is a DDoS attack?", answer: "Distributed Denial of Service - overwhelming a system with traffic." },
    { question: "Describe the process of quantitative risk analysis.", answer: "Determine the asset value (AV) of the asset affected by the risk. Determine the likelihood that the risk will occur. Determine the amount of damage that will occur to the asset if the risk materializes. Calculate the single loss expectancy. Calculate the annualized loss expectancy." },
    { question: "What is frquency analysis?", answer: "Frequency analysis involves looking at the blocks of an encrypted message to determine if any common patterns exist." },
    { question: "What does blind SQL injection (SQLi) mean and what are two forms of blind SQL injection?", answer: "Attackers use a technique called blind SQL injection to conduct an attack even when they don't have the ability to view the results directly. Two forms of blind SQL injection are content-based and timing-based." },
    { question: "List the order of volatility.", answer: "From most volatile to least volatile: (1) CPU cache and register. (2) Ephemeral data such as the process table. (3) The system's ARP cache, and similar information. (4) The content of RAM. (5) Swap and pagefile information. (6) Files and data on a disk. (7) The operating system [Windows Registry] (8) Data on devices such as smartphones, tables, IoT devices, and embedded or specialized systems. (9) Firmware. (10) Snapshots from VMs. (11) Network traffic and logs. (12) Artifacts like devices, printouts, media, and other items. " },
    { question: "What is business email compromise?", answer: "Business email compromise (BEC) relies on using apparently legitimate email addresses to conduct scams and other attcks." },
    { question: "Name seven elements in the security information and event management system.", answer: "SIEM dashboard, sensors, sensitivity and threshold, trends, alerts and alarms, correlation and analysis, rules." },
    { question: "What are threats, vulnerabilities, and risks?", answer: "Threats are any possible events that might have an adverse impact on the confidentiality, integrity, and/or availability of our information and information systems. Vulnerabilities are weaknesses in our systems or controls that could be exploited by a threat. Risks occur at the intersection of a vulnerability and a threat that might exploit that vulnerability. A threat without a corresponding vulnerability does not pose a risk, nor does a vulnerability without a corresponding threat." },
    { question: "What are some examples of physical controls?", answer: "Fences, perimeter lighting, locks, fire suppression systems, and burglar alarms." },
    { question: "What is organized crime?", answer: "Organized crime appears in any case where there is money to be made." },
    { question: "What is a data controller?", answer: "The entity who determins the reasons for processing personal information and directs the methods of processing that data." },
    { question: "What is the formula to calculate the severity of a risk?", answer: "Risk Severity = Likelihood * Impact" },
    { question: "What are infrared sensors?", answer: "They rely on infrared light, or heat radiation. They look for changes in infrared radiation in a room or space and alert when that change occurs." },
    { question: "What is DLP and what can it do?", answer: "DLP is data loss prevention. DLP systems help organizations enforce information handling policies and procedures to prevent data loss and theft." },
    { question: "What type of attacker acts without proper authorization, but they do so with the intent of informing their targets of any security vulnerabilities?", answer: "A semi-authorized attacker." },
    { question: "List all steps in site restoration.", answer: "Restore network connectivity and a bastion or shell host; restore network security devices (firewalls, IPS); restore storage and database services; restore critical operational servers; restore logging and monitoring service; and resotre other services as soon as possible." },
    { question: "What is a VPN?", answer: "A virtual private network (VPN) is a way to create a virtual link across a public network that allows the endpoints to act as though they are on the same network." },
    { question: "What kinds of issues should security analysts be aware of when dealing with IoT devices?", answer: "Poor security practices including weak default settings, lack of network security (firewalls), exposed or vulnerable services, lack of encryption for data transfer, weak authentication, use of embedded credentials and insecure data storage; Short support lifespans; Vendor data handling practice issues." },
    { question: "What are two types of Bluetooth attacks and what are their differences?", answer: "Bluejacking sends unsolicited messages to Bluetooth-enabled devices. Bluesnarfing is unauthorized access to a Bluetooth device, typically aimed at gathering information like contact lists or other details the device contains." }
];

// Quiz questions data
const securityQuestions = [
    {
        question: "Which port does HTTPS use?",
        multiple: false,
        answers: [
            { text: "80", correct: false },
            { text: "21", correct: false },
            { text: "443", correct: true },
            { text: "23", correct: false }
        ]
    },
    {
        question: "What does CIA stand for in cybersecurity?",
        multiple: false,
        answers: [
            { text: "Central Intelligence Agency", correct: false },
            { text: "Confidentiality, Integrity, Availability", correct: true },
            { text: "Cybersecurity Intelligence Agency", correct: false },
            { text: "Control, Inspect, Analyze", correct: false }
        ]
    },
    {
        question: "What is the main purpose of a firewall?",
        multiple: false,
        answers: [
            { text: "To clean computer viruses", correct: false },
            { text: "To protect against phishing", correct: false },
            { text: "To block unauthorized access", correct: true },
            { text: "To increase download speed", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of social engineering attack?",
        multiple: false,
        answers: [
            { text: "Phishing", correct: true },
            { text: "Port Scanning", correct: false },
            { text: "Brute Force", correct: false },
            { text: "Ping Flood", correct: false }
        ]
    },
    {
        question: "Which device is used to segment a network?",
        multiple: false,
        answers: [
            { text: "Router", correct: false },
            { text: "Switch", correct: true },
            { text: "Firewall", correct: false },
            { text: "Modem", correct: false }
        ]
    },
    {
        question: "Felicia wants to deploy an encryption solution that will protect files in motion as they are copied between file shares as well as at rest, and also needs it to support granular, per-user security. What type of solution should she select?",
        multiple: false,
        answers: [
            { text: "Partition encryption", correct: false },
            { text: "File encryption", correct: true },
            { text: "Full-disk encryption", correct: false },
            { text: "Record-level encryption", correct: false }
        ]
    },
    {
        question: "Valerie wants to use a certificate to handle multiple subdomains for her website, including the sales.example.com and support.example.com subdomains. What type of certificate should she use?",
        multiple: false,
        answers: [
            { text: "A self-signed certificate", correct: false },
            { text: "A root of trust ceritificate", correct: false },
            { text: "A CRL certificate", correct: false },
            { text: "A wildcard certificate", correct: true }
        ]
    },
    {
        question: "What information is analyzed during a gap analysis?",
        multiple: false,
        answers: [
            { text: "Control objectives and controls intended to meet the objectives", correct: true },
            { text: "Physically separate networks and their potential connection points", correct: false },
            { text: "Compensating controls and the controls they are replacing", correct: false },
            { text: "Security procedures and the polocies they are designed to support", correct: false }
        ]
    },
    {
        question: "Susan's team has recommended an application restart for a production, customer-facing application as part of an urgent patch due to a security update. What technical implication is the most common concern when conducting an application restart?",
        multiple: false,
        answers: [
            { text: "Application configuration changes caused by the restart", correct: false },
            { text: "Whether the patch will properly apply", correct: false },
            { text: "Lack of security controls during the restart", correct: false },
            { text: "the downtime during the restart", correct: true }
        ]
    },
    {
        question: "Using a tool like git is most frequently associated with what critical change management process?",
        multiple: false,
        answers: [
            { text: "Having a backout plan", correct: false },
            { text: "Stakeholder analysis", correct: false },
            { text: "Version control", correct: true },
            { text: "Standard operating procedures (SOP)", correct: false }
        ]
    },
    {
        question: "Jacob is concerned that the password used for one of his organization's services is weak, and he wants to make it harder ro crack by making it harder to test possible keys during a brute-force attack. What is this technique called?",
        multiple: false,
        answers: [
            { text: "Master Keying", correct: false },
            { text: "Key stretching", correct: true },
            { text: "Key rotation", correct: false },
            { text: "Passphrase armoring", correct: false }
        ]
    },
    {
        question: "Log monitoring is an example of what control category?",
        multiple: false,
        answers: [
            { text: "Technical", correct: false },
            { text: "Managerial", correct: false },
            { text: "Operational", correct: true },
            { text: "Physical", correct: false }
        ]
    },
    {
        question: "Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
        multiple: false,
        answers: [
            { text: "Use of a salt", correct: false },
            { text: "Use of a pepper", correct: false },
            { text: "Use of a purpose-built password hashing algorithm", correct: false },
            { text: "Encryption password plain text using symmetric encryption", correct: true }
        ]
    },
    {
        question: "Diffie-Hellman and RSA are both examples of what important encryption-related solution?",
        multiple: false,
        answers: [
            { text: "Rekeying", correct: false },
            { text: "Certificate revocation protocols", correct: false },
            { text: "Key exchange algorithms", correct: true },
            { text: "Key generation algorithms", correct: false }
        ]
    },
    {
        question: "Sally wants to ensure that her change management process includes a procedure for what to do if the change fails. What should she create to handle this possibility?",
        multiple: false,
        answers: [
            { text: "An impact amalysis", correct: false },
            { text: "Abackout plan", correct: true },
            { text: "A regression test", correct: false },
            { text: "A maintenance window", correct: false }
        ]
    },
    {
        question: "Theresa is concerned that her scheduled maintenance window may extend beyong the allocated time due to an unexpected issue. What element from the CIA triad is she concerned about?",
        multiple: false,
        answers: [
            { text: "Criticality", correct: false },
            { text: "Accessibility", correct: false },
            { text: "Integrity", correct: false },
            { text: "Availability", correct: true }
        ]
    },
    {
        question: "Alaina is concerned about vehicles that might impact her organization's backup generator. What should she install to prevent both inadvertent and purposeful vehicle impacts on a generator installed outside her building near a parking lot? ",
        multiple: false,
        answers: [
            { text: "A speed bump", correct: false },
            { text: "An access control vestible", correct: false },
            { text: "Bollards", correct: true },
            { text: "A chain-link fence", correct: false }
        ]
    },
    {
        question: "Ben has deployed a data loss prevention (DLP) tool that inspects data and flags specific data types for review before emails containing it are sent outside the organiztion. What control type best describes this type of solution?",
        multiple: false,
        answers: [
            { text: "Managerial", correct: false },
            { text: "Detective", correct: false },
            { text: "Corrective", correct: false },
            { text: "Preventive", correct: true }
        ]
    },
    {
        question: "What type of control is a policy or procedure?",
        multiple: false,
        answers: [
            { text: "Directive", correct: true },
            { text: "Corrective", correct: false },
            { text: "Detective", correct: false },
            { text: "Preventive", correct: false }
        ]
    },
    {
        question: "Murali has deployed a file integrity monitoring tool and has configured alerts to notify him if files are modified. What control type best describes this solution?",
        multiple: false,
        answers: [
            { text: "Preventive", correct: false },
            { text: "Deterrent", correct: false },
            { text: "Directive", correct: false },
            { text: "Detective", correct: true }
        ]
    },
    {
        question: "Brent's organization is profiling threat actors that may target their infrastructure and systems. Which of the following is most likely a motivation for a nation-state actor?",
        multiple: false,
        answers: [
            { text: "Financial gain", correct: false },
            { text: "Blackmail", correct: false },
            { text: "Espionage", correct: true },
            { text: "Blackmail", correct: false }
        ]
    },
    {
        question: "Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a majorinsurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
        multiple: false,
        answers: [
            { text: "Phishing", correct: false },
            { text: "Social Engineering", correct: false },
            { text: "Spear phishing", correct: true },
            { text: "Trojan horse", correct: false }
        ]
    },
    {
        question: "You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting files if a specific employee is terminated. What best describes this?",
        multiple: false,
        answers: [
            { text: "Worm", correct: false },
            { text: "Logic bomb", correct: true },
            { text: "Trojan horse", correct: false },
            { text: "Rootkit", correct: false }
        ]
    },
    {
        question: "The company that Yarif works for uses a third-party IT support company to manage their cloud-hosted web application infrastructure. How can Yarif best address concerns about potential threat vectors via the managed service provider (MSP)?",
        multiple: false,
        answers: [
            { text: "Conduct regular vulnerability scans", correct: false },
            { text: "Use shared incident response exercises to prepare", correct: false },
            { text: "Ensure appropriate contractual coverage for issues", correct: true },
            { text: "Require the MSP to have an annual pentest", correct: false }
        ]
    },
    {
        question: "Jill's organization has received an advisory about a flaw that could allow software running on a virtual machine to execute code on the system that is running the VM hypervisor. What type of vulnerability is this?",
        multiple: false,
        answers: [
            { text: "A resource reuse issue", correct: false },
            { text: "A VM escape issue", correct: true },
            { text: "A jailbreaking issue", correct: false },
            { text: "A sideloading issue", correct: false }
        ]
    },
    {
        question: "Helen is concerned about ransomware attacks against workstations she is responsible for. Which of the following hardening options is best suited to protecting her organization from ransomware?",
        multiple: false,
        answers: [
            { text: "Installing host-based firewalls", correct: false },
            { text: "Installing endpoint protection software", correct: true },
            { text: "Installing a host-based IPS software", correct: false },
            { text: "Removing unnecessary software", correct: false }
        ]
    },
    {
        question: "The company that gary works for has deployed a wireless network. Which of the following network options is the most secure?",
        multiple: false,
        answers: [
            { text: "WPA-2 Personal", correct: false },
            { text: "WPA-3", correct: true },
            { text: "WPA-2 Enterprise", correct: false },
            { text: "WPA-4", correct: false }
        ]
    },
    {
        question: "What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
        multiple: false,
        answers: [
            { text: "SQL injection", correct: false },
            { text: "Clickjacking", correct: false },
            { text: "Cross-site scripting", correct: true },
            { text: "Bluejacking", correct: false }
        ]
    },
    {
        question: "Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
        multiple: false,
        answers: [
            { text: "Predictive analysis", correct: false },
            { text: "OSINT", correct: false },
            { text: "Indicators of compromise", correct: true },
            { text: "Threat maps", correct: false }
        ]
    },
    {
        question: "Julie wants to conduct a replay attack. What type of attack is most commonly associated with successful replay attacks?",
        multiple: false,
        answers: [
            { text: "SQL injection", correct: false },
            { text: "An on-path attack", correct: true },
            { text: "Brute force", correct: false },
            { text: "A DDoS", correct: false }
        ]
    },
    {
        question: "Nancy wants to adopt a backup strategy that will meet her organization's desires about the amount of data that could be lost in a scenario where a restoration from backup was required and also wants to establish guidelines for how long a restoration from a backup was required and also wants to establish guidelines for how long a restoration should take. What two key objectives should she set?",
        multiple: false,
        answers: [
            { text: "An RPO and an RTO", correct: true },
            { text: "An RFBT and an RPO", correct: false },
            { text: "An RPO and an MTBF", correct: false },
            { text: "An MTBF and an RFBT", correct: false }
        ]
    },
    {
        question: "John is running an IDS on his network. User sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
        multiple: false,
        answers: [
            { text: "False positive", correct: true },
            { text: "False negative", correct: false },
            { text: "False trigger", correct: false },
            { text: "False flag", correct: false }
        ]
    },
    {
        question: "Enrigue is concerned about backup data being infected by malware. The company backs up key servers to digital storage on a backup server. Which of the following would be most effective in preventing the backup data being infected by malware?",
        multiple: false,
        answers: [
            { text: "Place the backup server on a separate VLAN", correct: false },
            { text: "Air gap the backup server", correct: true },
            { text: "Place the backup server on a different network segment", correct: false },
            { text: "Use a honeynet", correct: false }
        ]
    },
    {
        question: "What type of system is used to control and monitor power plant power generation systems?",
        multiple: false,
        answers: [
            { text: "IPG", correct: false },
            { text: "SEED", correct: false },
            { text: "SCADA", correct: true },
            { text: "ICD", correct: false }
        ]
    },
    {
        question: "Geoff wants to establish a contract with a company to have datacenter space that is equipped and ready to go so that he can bring his data to the location in the event of a disaster. What type of disaster recovery site is he looking for?",
        multiple: false,
        answers: [
            { text: "A hot site", correct: false },
            { text: "A cold site", correct: false },
            { text: "A warm site", correct: true },
            { text: "An RTO site", correct: false }
        ]
    },
    {
        question: "Olivia needs to ensure an IoT device does not have its operating system modified by third parties after it is sold. What solution should she implement to ensure that this does not occur?",
        multiple: false,
        answers: [
            { text: "Set a default password", correct: false },
            { text: "Require signed and encrypted firmware", correct: true },
            { text: "Check the MD5sum for new firmware versions", correct: false },
            { text: "Patch regularly", correct: false }
        ]
    },
    {
        question: "Maria is a security engineer with a manufacturing company. During a recent investigation, she discovered that an engineer's compromised workstation was being used to connect to SCADA systems while the engineer was not logged in. The engineer is responsible for adminstering the SCADA systems and cannot be blocked from connecting to them. What should Maria do to mitigate this threat?",
        multiple: false,
        answers: [
            { text: "Install host-based antivirus/antimalware software on the engineer's system", correct: false },
            { text: "Implement account usage auditing on the SCADA system", correct: true },
            { text: "Implement an NIPS on the SCADA system", correct: false },
            { text: "Use FDE on the engineer's system", correct: false }
        ]
    },
    {
        question: "Mike is a security analyst and has just removed malware from a virtual server. What feature of virtualization would he use to return the virtual server to a last known good state?",
        multiple: false,
        answers: [
            { text: "Sandboxing", correct: false },
            { text: "Hypervisor", correct: false },
            { text: "Snapshot", correct: true },
            { text: "Elasticity", correct: false }
        ]
    },
    {
        question: "Which of the following is not an advantage of a serverless architecture?",
        multiple: false,
        answers: [
            { text: "It does not require a system adminstrator", correct: false },
            { text: "It can scale as function call frequency increases", correct: false },
            { text: "It can scale as function call frequency decreases", correct: false },
            { text: "It is ideal for complex applications", correct: true }
        ]
    },
    {
        question: "Which of the following is the most important benefit from implementing SDN?",
        multiple: false,
        answers: [
            { text: "it will stop malware", correct: false },
            { text: "It provides scalability", correct: true },
            { text: "It will detect intrusions", correct: false },
            { text: "It will prevent session hijacking", correct: false }
        ]
    }
];

// Initialize modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Initialize flashcard module
    const flashcardModule = new FlashcardModule(securityFlashcards, {
      showCounter: true,
      autoFlip: false
    });

    // Initialize quiz module
    const quizModule = new QuizModule(securityQuestions, {
      showProgress: true,
      allowRetake: true
    });

    console.log('Security+ page modules initialized successfully');
  } catch (error) {
    console.error('Error initializing Security+ page modules:', error);
  }
});