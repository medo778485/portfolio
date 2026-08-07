export const personalData = {
  name: "Mohammed Mokhtar Qadri",
  title: "Software Engineering Student | Backend Developer | Laravel Developer",
  shortRole: "Backend Developer & Systems Infrastructure Specialist",
  location: "Sana'a, Yemen",
  email: "qadry4688@gmail.com",
  github: "https://github.com/medo778485",
  githubUsername: "medo778485",
  linkedin: "https://linkedin.com", // Will link to user's profile
  resumeUrl: "/Mohammed_Mokhtar_Qadri_CV.pdf",
  heroDescription: "Software Engineering Student specializing in Backend Development, System Infrastructure, scalable API architectures, and enterprise database solutions.",
  aboutBio: `I am a final-year Software Engineering student at Saba University with a deep passion for backend development, scalable systems, RESTful APIs, relational databases, and modern software architecture.

Beyond standard web backend engineering, I bring hands-on expertise in system infrastructure and enterprise tools, including virtualized server environments (VMware ESXi, Hyper-V) and ERPNext deployment and administration. I take pride in designing robust databases, implementing clean architecture, and building reliable end-to-end software solutions.`,
  stats: [
    { label: "Class Rank", value: "Top 3rd", sub: "3rd in Class at Saba University" },
    { label: "Projects Completed", value: "6+", sub: "Web, Desktop, Mobile & AI" },
    { label: "Core Backend Stack", value: "Laravel / C# / Python", sub: "REST APIs & Databases" },
    { label: "Infrastructure Tech", value: "ESXi / Hyper-V / ERPNext", sub: "Server & ERP Management" },
  ]
};

export const skillCategories = [
  {
    name: "Programming Languages",
    id: "languages",
    skills: [
      { name: "PHP", level: "Advanced", icon: "Code2" },
      { name: "C#", level: "Advanced", icon: "Terminal" },
      { name: "Python", level: "Intermediate/Advanced", icon: "FileCode" },
      { name: "Dart", level: "Intermediate", icon: "Smartphone" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    id: "frameworks",
    skills: [
      { name: "Laravel", level: "Expert Focus", icon: "Layers" },
      { name: "Flutter", level: "Intermediate", icon: "Layout" },
      { name: "REST APIs", level: "Advanced", icon: "Webhook" }
    ]
  },
  {
    name: "Databases & Storage",
    id: "databases",
    skills: [
      { name: "SQL Server", level: "Advanced", icon: "Database" },
      { name: "SQLite", level: "Advanced", icon: "HardDrive" },
      { name: "Database Design", level: "Advanced", icon: "GitMerge" },
      { name: "Normalization", level: "Advanced", icon: "CheckCircle2" }
    ]
  },
  {
    name: "Developer Tools",
    id: "tools",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "VS Code", level: "Advanced", icon: "Cpu" },
      { name: "Visual Studio", level: "Advanced", icon: "Monitor" }
    ]
  },
  {
    name: "Concepts & Architecture",
    id: "concepts",
    skills: [
      { name: "OOP", level: "Advanced", icon: "Box" },
      { name: "MVC Architecture", level: "Advanced", icon: "LayoutGrid" },
      { name: "Entity Framework Core", level: "Advanced", icon: "Cpu" },
      { name: "API Integration", level: "Advanced", icon: "Zap" },
      { name: "Clean Architecture", level: "Advanced", icon: "Shield" },
      { name: "Design Patterns", level: "Advanced", icon: "Component" }
    ]
  },
  {
    name: "Infrastructure & Enterprise",
    id: "infrastructure",
    skills: [
      { name: "VMware ESXi", level: "Hands-on Experience", icon: "Server" },
      { name: "Hyper-V", level: "Hands-on Experience", icon: "Cloud" },
      { name: "ERPNext", level: "Installation & Mgmt", icon: "Briefcase" }
    ]
  }
];

export const projects = [
  {
    id: "smart-club-pro",
    title: "Smart Club Pro",
    category: "Web & Backend",
    badge: "Featured Backend Project",
    tech: ["Laravel", "PHP", "REST API", "MySQL", "Tailwind"],
    description: "A complete gym management system supporting authentication, member management, trainers, subscriptions, attendance tracking, booking system, payments, analytical reports, POS, and administrative dashboards.",
    detailedFeatures: [
      "Role-based authentication & authorization (Admin, Trainer, Member)",
      "Automated subscription tracking with expiration alerts and renewal logs",
      "Attendance tracking via barcode/QR code integration",
      "Class and personal trainer booking scheduling engine",
      "Integrated Point-of-Sale (POS) for supplement & item sales",
      "Comprehensive revenue, active members, and attendance analytics dashboard"
    ],
    github: "https://github.com/medo778485/smart-club-pro",
    demo: "#",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    category: "Desktop Suite",
    badge: "Desktop Application",
    tech: ["C#", "SQL Server", "EF Core", "WinForms"],
    description: "A comprehensive hospital management desktop application designed for managing patients, doctors, appointment scheduling, and detailed medical records with relational database integration.",
    detailedFeatures: [
      "Patient admission, medical history, and discharge tracking",
      "Doctor schedule management & appointment booking system",
      "Prescription and laboratory test result management",
      "SQL Server database normalization ensuring strict data integrity",
      "Role-based access control for medical staff and receptionists"
    ],
    github: "https://github.com/medo778485/hospital-management",
    demo: "#",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "analytical-ai-system",
    title: "Analytical AI System",
    category: "AI & Analytics",
    badge: "Data Dashboard",
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    description: "Interactive data analysis and visualization dashboard enabling users to upload datasets, generate exploratory statistics, perform predictive analytical modeling, and visualize data trends dynamically.",
    detailedFeatures: [
      "Automated CSV/Excel dataset processing and data cleaning",
      "Interactive data charts, heatmaps, and distribution plots",
      "Descriptive statistics summary generation",
      "Machine learning models for trend prediction and classification"
    ],
    github: "https://github.com/medo778485/analytical-ai-dashboard",
    demo: "#",
    featured: true,
    accentColor: "from-violet-500 to-fuchsia-600"
  },
  {
    id: "human-resources-system",
    title: "Human Resources System",
    category: "Web & Backend",
    badge: "Enterprise Tool",
    tech: ["Python", "SQLite", "Database Design"],
    description: "A robust HR and payroll management system engineered for automated employee record management, salary calculation, leave tracking, and department organizational structures.",
    detailedFeatures: [
      "Employee lifecycle tracking (Hiring, Onboarding, Roles, Salary)",
      "Automated payroll generator with tax and bonus calculations",
      "Leave request workflows and attendance logs",
      "Modular backend architecture with clean data abstraction"
    ],
    github: "https://github.com/medo778485/hr-system",
    demo: "#",
    featured: false,
    accentColor: "from-blue-500 to-teal-500"
  },
  {
    id: "bank-wallet-system",
    title: "Bank Wallet System",
    category: "Desktop Suite",
    badge: "Financial App",
    tech: ["C#", "SQL Server", "OOP", "Design Patterns"],
    description: "A secure desktop banking application supporting account management, deposits, withdrawals, fund transfers between wallets, and detailed financial transaction logs.",
    detailedFeatures: [
      "Multi-account management (Savings, Checking, Digital Wallet)",
      "Transaction concurrency safety and debit/credit ledger validation",
      "Detailed receipt generation and exportable transaction logs",
      "Implementation of OOP patterns (Factory, Repository pattern)"
    ],
    github: "https://github.com/medo778485/bank-wallet-system",
    demo: "#",
    featured: false,
    accentColor: "from-emerald-500 to-cyan-600"
  },
  {
    id: "travel-application",
    title: "Travel Application",
    category: "Mobile",
    badge: "Cross-Platform Mobile",
    tech: ["Flutter", "Dart", "REST API", "State Management"],
    description: "A sleek cross-platform mobile application for exploring travel destinations, booking trips, managing travel itineraries, and interacting with location-based services.",
    detailedFeatures: [
      "Destination discovery with filterable categories and search",
      "Trip booking workflow with seat selection and ticket generation",
      "Interactive map integration and itinerary timeline",
      "Smooth modern animations and offline caching"
    ],
    github: "https://github.com/medo778485/travel-app-flutter",
    demo: "#",
    featured: false,
    accentColor: "from-pink-500 to-purple-600"
  }
];

export const experienceData = {
  infrastructure: [
    {
      title: "Virtualization & Hypervisors",
      tools: "VMware ESXi, Hyper-V",
      desc: "Deployed and configured hypervisors to manage virtual machines, allocate hardware resources efficiently, and isolate server environments for maximum uptime and security."
    },
    {
      title: "ERPNext Deployment & Administration",
      tools: "ERPNext, Python, Linux, MariaDB",
      desc: "Installed, configured, and maintained ERPNext instances for enterprise business workflows, customizing server setups and database optimization."
    },
    {
      title: "Server Deployment & System Optimization",
      tools: "Linux Server, Web Servers, System Monitoring",
      desc: "Managed application deployment, server environment setup, networking configurations, and system resource optimization."
    }
  ],
  workAndVolunteer: [
    {
      role: "Assistant English Teacher",
      type: "Teaching Experience",
      period: "Academic Experience",
      desc: "Assisted in teaching English language courses, preparing educational modules, facilitating conversation groups, and mentoring students in communication skills."
    },
    {
      role: "Customer Service Volunteer",
      type: "Volunteer Experience",
      period: "Community Service",
      desc: "Provided user support, resolved client inquiries, and delivered high-quality customer service in volunteer community projects."
    }
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Saba University",
      status: "Final Year Student",
      note: "Specializing in Backend Systems, Database Architecture, and System Infrastructure.",
      highlight: "Ranked 3rd in class academic performance."
    },
    {
      degree: "Advanced English Diploma",
      institution: "Language Institute",
      status: "Completed",
      note: "Advanced fluency in professional technical writing and spoken English communication."
    }
  ],
  achievements: [
    {
      title: "Ranked 3rd in Class",
      issuer: "Saba University - Software Engineering Department",
      desc: "Achieved top academic distinction, placing 3rd across the department for academic excellence and project performance."
    },
    {
      title: "Certificate of Appreciation",
      issuer: "Academic & Community Recognition",
      desc: "Awarded certificate of appreciation for outstanding dedication, technical leadership, and volunteer contributions."
    }
  ]
};
