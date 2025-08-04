// =====================
// FLASHCARD FUNCTIONALITY
// =====================
const networkFlashcards = [
    { question: "What is the default administrative distance of RIP?", answer: "120." },
    { question: "True or False: Unshielded twisted-pair (UTP) is commonly used in twisted-pair Ethernet (10BaseT, 100BaseTX, 1000BaseT, and so on).", answer: "True" },
    { question: "True/False: A cache is a collection of data duplicating some original data", answer: "True" },
    { question: "How does the TCP protocol support sequencing and acknowledgment of segments?", answer: "Sliding windows" },
    { question: "What device do you need to route packets over a wireless network", answer: "A wireless access point. Don't get confused by the word route." },
    { question: "True/False: A bit is one digit, either a 1 or a 0.", answer: "True" },
    { question: "Which type of cable is used to connect a hub to a switch?", answer: "Crossover" },
    { question: "What is the broadcast address of 192.168.192.10/29?", answer: "A /29 is 255.255.255.248, which is a block size of 8 in the fourth octet. The subnet is 192.168.192.8. Therefore, the broadcast address is 192.168.192.15." },
    { question: "What is the default administrative distance of RIPv2?", answer: "120" },
    { question: "What is the version or name of the EIGRP that is used with IPv6?", answer: "EIGRPv6" },
    { question: "How do applications bind to the transport layer?", answer: "With TCP and UDP port numbers." },
    { question: "What type of security threat allows an attacker to learn your password through the use of an email or phone call?", answer: "Social engineering or phishing" },
    { question: "When an application creates an outbound connection, what is the value of the source port number?", answer: "Dynamically allocated over 1024" },
    { question: "What is the protocol data unit (PDU) for data at the application layer?", answer: "User datagrams" },
    { question: "What type of switch port removes the VLAN information before forwarding the frame?", answer: "Untagging port, sometimes called an Access Port." },
    { question: "When should you use plenum-rated cable?", answer: "When installing cable in ceilings or other spaces used for air circulation." },
    { question: "What is the destination MAC address for broadcasts?", answer: "The destination MAC address is always FF:FF:FF:FF:FF:FF for broadcast frames." },
    { question: "What layer of the OSI is synonymous with dialog control?", answer: "Session layer (Layer 5)." },
    { question: "What transport layer is connectionless and provides faster transport of datagrams?", answer: "User Datagram Protocol (UDP)." },
    { question: "What layer 2 contention method does Ethernet use to manage collisions?", answer: "Carrier Sense Multiple Access/Collision Detection (CSMA/CD)." },
    { question: "True/False: A straight-through cables uses only pins 1 tp 3 and pins 2 to 6.", answer: "False. A straight-through cable should always be made using all four pairs of wires." },
    { question: "True/False: The Class C private address range is 172.16.0.0 through 172.31.255.255.", answer: "False. That is the Class B range." },
    { question: "Which switching technology reduces the size of a broadcast domain?", answer: "VLAN" },
    { question: "What is the default administrative distance of EIGRP?", answer: "90" },
    { question: "You have no money in your budget, but your boss wants smaller broadcast domains used with your switches. What do you do?", answer: "Create VLANs." },
    { question: "True/False: Eight wires are used in straight-through cable to connect 10/100/1000 Ethernet devices.", answer: "False" },
    { question: "Is BGP considered link state or distance vector?", answer: "Distance vector" },
    { question: "You notice that a user is sending usernames and passwords in clear text. What network monitoring utility was used?", answer: "Packet sniffer" },
    { question: "What bit in the MAC address indicates the MAC address has been statically set?", answer: "When the Global/Local (GL) bit is set to 1, it is locally governed (statically set)." },
    { question: "True/False: The Class C private address range is 192.168.0.0 through 192.168.255.255.", answer: "True" },
    { question: "What is the IEEE trunking protocol used for trunking switches?", answer: "802.1Q trunking protocol" },
    { question: "What protocol is used for logical addressing of the network?", answer: "Internet protocol (IP)" },
    { question: "Which type of cable should be used to connect to the console port on a router?", answer: "Rolled (console)" },
    { question: "Truw/False: Bridges and switches learn MAC addresses by examining the sources address of each frame received.", answer: "True" },
    { question: "What layer 2 contention methods does 802.11 wireless use to allow clients to communicate?", answer: "Carrier Sense Multiple Access/Collision Avoidance (CSMA/CA)." },
    { question: "True/False: Crossover cable is used to connect switches together.", answer: "True" },
    { question: "Which layer of the OSI model chooses and determines the availability of communicating partners along with the resources necessary to make the connection?", answer: "Application" },
    { question: "Which UTP wiring uses four twisted wire pairs (eight wires) and is rated for 250 MHz?", answer: "Category 6 (CAT6)" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
    // { question: "", answer: "" },
];

// Initialize flashcard module when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Initialize flashcard module with keyboard functionality
    const flashcardModule = new FlashcardModule(networkFlashcards, {
      showCounter: true,
      autoFlip: false
    });

    console.log('Network+ flashcard module initialized successfully');
  } catch (error) {
    console.error('Error initializing Network+ flashcard module:', error);
  }
});

// =====================
// PRACTICE TEST FUNCTIONALITY
// =====================
const questions = [
    {
        question: "Which network architecture defines a strict access method for various hosts?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Peer-to-peer", correct: false },
            { text: "Client-server", correct: true },
            { text: "LAN", correct: false },
            { text: "Hybrid topology", correct: false }
        ]
    },
    {
        question: "You need to select a topology to connect two office locations, and you do not expect to add locations in the future. Which topology should you select?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Point-to-point", correct: true },
            { text: "Point-to-multipoint", correct: false },
            { text: "Ring", correct: false },
            { text: "Bus", correct: false }
        ]
    },
    {
        question: "Which protocol data unit (PDU) is used to describe the type of data being transmitted at the Presentation layer?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Bits", correct: false },
            { text: "User datagrams", correct: true },
            { text: "Frames", correct: false },
            { text: "Segments", correct: false }
        ]
    },
    {
        question: "Which layer is responsible for encryption and decryption?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Application Layer", correct: false },
            { text: "Physical Layer", correct: false },
            { text: "Session Layer", correct: false },
            { text: "Presentation Layer", correct: true }
        ]
    },
    {
        question: "You need to run a UTP cable for 10 Gbps speeds with a distance of 40 meters. Which minimum cable category rating should you use?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Category 5", correct: false },
            { text: "Category 5e", correct: false },
            { text: "Category 6", correct: true },
            { text: "Category 3", correct: false }
        ]
    },
    {
        question: "Which term describes the path of signaling on a network cable?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Attenuation", correct: false },
            { text: "Duplex", correct: true },
            { text: "Demarcation", correct: false },
            { text: "EMI", correct: false }
        ]
    },
    {
        question: "You are working with a contractor as they are pulling and terminating fiber-optic lines. The fiber-optic lines will be located in the center of your production line. Which cable end should you recommend that will reduce the chances of cables becoming loose from vibration on the production floor?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "SC connectors", correct: false },
            { text: "ST connectors", correct: true },
            { text: "LC connectors", correct: false },
            { text: "MTRJ connectors", correct: false }
        ]
    },
    {
        question: "Which is NOT a common cause for LAN congestion?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Broadcasts", correct: false },
            { text: "Multicasts", correct: false },
            { text: "Adding switches for connectivity", correct: true },
            { text: "Multiple hubs for connectivity", correct: false }
        ]
    },
    {
        question: "The receiving computer checked the checksum of a frame. It had been damaged during transfer, so it is discarded. At which layer of the OSI did this occur?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: true },
            { text: "Network", correct: false },
            { text: "Session", correct: false }
        ]
    },
    {
        question: "What is the reason a network administrator would segment a network with a switch?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Create more broadcast domains", correct: false },
            { text: "Create isolation of ARP messages", correct: false },
            { text: "Create fewer collision domains", correct: false },
            { text: "Isolate traffic between segments", correct: true }
        ]
    },
    {
        question: "According to best practices, what is the proper placement of a firewall?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Only between the internal network and the internet", correct: false },
            { text: "At key security boundaries", correct: true },
            { text: "In the DMZ", correct: false },
            { text: "Only between the DMZ and the Internet", correct: false }
        ]
    },
    {
        question: "Which is the contention method 802.11 wireless uses?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "CSMA/CA", correct: true },
            { text: "CSMA/CD", correct: false },
            { text: "DSSS", correct: false },
            { text: "OFDM", correct: false }
        ]
    },
    {
        question: "What form of communication does a DHCP client use to initially acquire an IP address?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Layer 3 broadcast", correct: true },
            { text: "Layer 3 multicast", correct: false },
            { text: "Layer 3 802.1Q", correct: false },
            { text: "Layer 3 unicast", correct: false }
        ]
    },
    {
        question: "Which management access method should be configured on network devices for encryption of a session?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "RADIUS", correct: false },
            { text: "HTTP", correct: false },
            { text: "SSH", correct: true },
            { text: "SFTP", correct: false }
        ]
    },
    {
        question: "Which Microsoft remote access protocol allows for local drives to be presented to the remote system?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "VNC", correct: false },
            { text: "RDP", correct: true },
            { text: "SSH", correct: false },
            { text: "Telnet", correct: false }
        ]
    },
    {
        question: "At which of the following layers of the Open Systems Interconnection (OSI) model do the protocols on a typical local area network (LAN) use media access control (MAC) addresses to identify other computers on the network?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: true },
            { text: "Network", correct: false },
            { text: "Transport", correct: false }
        ]
    },
    {
        question: "Which of the following organizations developed the Open Systems Interconnection (OSI) model?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "International Telecommunication union (ITU-T)", correct: false },
            { text: "Comite Consultatif International Telegraphique et Telephonique (CCITT)", correct: false },
            { text: "American National Standard Institute (ANSI)", correct: false },
            { text: "Institute of of Electrical and Electronics Engineers (IEEE)", correct: false },
            { text: "International Organization for Standardization (ISO)", correct: true }
        ]
    },
    {
        question: "Which layer of the Open Systems Interconnection (OSI) model is responsible for the logical addressing of end systems and the routing of datagrams on a network?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: false },
            { text: "Network", correct: true },
            { text: "Transport", correct: false },
            { text: "Session", correct: false },
            { text: "Presentation", correct: false },
            { text: "Application", correct: false }
        ]
    },
    {
        question: "On a TCP/IP network, which layers of the Open Systems Interconnection (OSI) model contain protocols that are responsible for encapsulating the data generated by the application, creating the payload for a packet that will be transmitted over a network? (Choose all that apply.)",
        multiple: true, // <-- Added to indicate multiple answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: true },
            { text: "Network", correct: true },
            { text: "Transport", correct: true },
            { text: "Session", correct: false },
            { text: "Presentation", correct: false },
            { text: "Application", correct: false }
        ]
    },
    {
        question: "Which layer of the Open Systems Interconnection (OSI) model is responsible for translating and formatting information?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: false },
            { text: "Network", correct: false },
            { text: "Transport", correct: false },
            { text: "Session", correct: false },
            { text: "Presentation", correct: true },
            { text: "Application", correct: false }
        ]
    },
    {
        question: "Which of the following devices typically operates at the Network layer of the Open Systems Interconnection (OSI) model?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Proxy server", correct: false },
            { text: "Network interface adapter", correct: false },
            { text: "Hub", correct: false },
            { text: "Router", correct: true }
        ]
    },
    {
        question: "Which layer of the Open Systems Interconnection (OSI) model provides an entrance point to the protocol stack of applications?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: false },
            { text: "Network", correct: false },
            { text: "Transport", correct: false },
            { text: "Session", correct: false },
            { text: "Presentation", correct: false },
            { text: "Application", correct: true }
        ]
    },
    {
        question: "Which layer of the Open Systems Interconnection (OSI) model is responsible for dialogue control between two communicating end systems?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: false },
            { text: "Network", correct: false },
            { text: "Transport", correct: false },
            { text: "Session", correct: true },
            { text: "Presentation", correct: false },
            { text: "Application", correct: false }
        ]
    },
    {
        question: "Some switches can perform functions associated with two layers of the Open Systems Interconnection (OSI) model. Which two of the following layers are often associated with network switching? (Choose all that apply.)",
        multiple: true, // <-- Added to indicate multiple answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: true },
            { text: "Network", correct: true },
            { text: "Transport", correct: false },
            { text: "Session", correct: false },
            { text: "Presentation", correct: false },
            { text: "Application", correct: false }
        ]
    },
    {
        question: "At which layer of the Open Systems Interconnection (OSI) model are there TCP/IP protocols that can provide either connectionless or connection-oriented services to applications?",
        multiple: false, // <-- Added to indicate single answer
        answers: [
            { text: "Physical", correct: false },
            { text: "Data Link", correct: false },
            { text: "Network", correct: false },
            { text: "Transport", correct: true },
            { text: "Session", correct: false },
            { text: "Presentation", correct: false },
            { text: "Application", correct: false }
        ]
    },
];

// =====================
// NETWORK+ QUIZ INITIALIZATION
// =====================
document.addEventListener('DOMContentLoaded', () => {
    try {
        const networkQuiz = new QuizModule(questions, {
            showProgress: true,
            allowRetake: true
        });
        console.log('Network+ quiz module initialized successfully');
    } catch (error) {
        console.error('Error initializing Network+ quiz module:', error);
    }
});

