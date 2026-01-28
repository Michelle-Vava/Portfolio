// ============================================
// APPLICATION CONSTANTS
// ============================================

import rideSplit1 from '../assets/IMG_1828.png';
import rideSplit2 from '../assets/IMG_1829.png';
import rideSplit3 from '../assets/IMG_1830.png';
import rideSplit4 from '../assets/IMG_1831.png';

import demoApp1 from '../assets/demo_app.png';
import demoApp2 from '../assets/demo_app_1.png';

import shareEats1 from '../assets/share_eats_1.png';
import shareEats2 from '../assets/share_eat_2.png';
import shareEats3 from '../assets/share_eat_3.png';

import eatsByMichelle1 from '../assets/eat_michelle_1.png';
import eatsByMichelle2 from '../assets/eat_michelle_2.png';
import eatsByMichelle3 from '../assets/eat_michelle_3.png';

import serviceConnect1 from '../assets/service_connect.png';
import serviceConnect2 from '../assets/service_connect_2.png';
import serviceConnect4 from '../assets/service_connect_4.png';
import serviceConnect5 from '../assets/service_connect_5.png';
import serviceConnect6 from '../assets/service_connect_6.png';

import profilePic from '../assets/me.jfif';

export const PERSONAL_INFO = {
  name: 'Michelle Vava',
  title: 'Software Engineer',
  tagline: 'I build reliable systems that replace complex spreadsheets with software people actually use.',
  description: 'If a system controls money, risk, or operational decisions, “mostly correct” is not good enough. I focus on building software that is accurate, maintainable, and trusted in real-world use.',
  githubUrl: 'https://github.com/Michelle-Vava',
  linkedinUrl: 'https://linkedin.com/in/yourusername',
  email: 'mimivava26@gmail.com',
} as const;

export const NAV_SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'approach', label: 'Approach' },
  { id: 'projects', label: 'Projects' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'contact', label: 'Contact' },
] as const;

export const EXPERIENCE = [
  {
    company: "AXIS Capital Canada",
    role: "Software Developer",
    location: "Halifax, NS",
    period: "June 2023 – Present",
    description: "Modernizing legacy pricing and underwriting workflows into reliable, governed software systems used across multiple lines of business.",
    responsibilities: [
      "Refactored advanced Excel pricing logic into C#/.NET services, preserving nuanced business rules while improving correctness and maintainability.",
      "Led the transformation of complex Excel pricing workbooks into scalable web applications used by underwriting teams across the organization.",
      "Helped design and implement a centralized pricing platform replacing 80+ legacy Excel workbooks.",
      "Contributed to pricing governance and control initiatives, improving version consistency, accuracy, and compliance.",
      "Deployed and optimized applications in Microsoft Azure to support data-intensive workloads with reliability and scalability."
    ],
    tech: ["C# / .NET", "React", "Azure", "SQL"]
  },
  {
    company: "AXIS Capital Canada",
    role: "Software Developer Intern",
    location: "Halifax, NS",
    period: "Jan 2021 – May 2023",
    description: "Worked across frontend, backend, and data workflows while supporting actuarial and legal teams.",
    responsibilities: [
      "Built a claims analysis web application for Ogden Tables, initially implemented in ASP.NET MVC and later refactored to a React frontend.",
      "Improved usability and engagement by approximately 30% after the frontend refactor.",
      "Migrated claims workflows from Excel spreadsheets into centralized applications.",
      "Implemented data visualization and analytical features to support legal and actuarial decision-making."
    ],
    tech: ["ASP.NET MVC", "React", "C#", "SQL"]
  },
  {
    company: "AXIS Capital Canada",
    role: "Data Analyst",
    location: "Halifax, NS",
    period: "Sept 2020 – Dec 2020",
    description: "Supported daily production reporting and data validation.",
    responsibilities: [
      "Built and maintained data mapping and reporting systems.",
      "Validated reports for accuracy and consistency before delivery.",
      "Supported business partners with reliable, timely data for decision-making."
    ],
    tech: ["Excel", "SQL", "Data Reporting"]
  }
];

export const EDUCATION = [
  {
    institution: "St. Francis Xavier University",
    degree: "Bachelor of Science in Computer Science (Co-op)",
    period: "2018 – 2023",
    location: "Antigonish, NS"
  }
];

export const ACTIVITIES = [
  "March Madness Pitch Competition — Top 64 Contender (Saint Mary’s University, 2021)",
  "Varsity Track & Field Athlete — St. Francis Xavier University (2018–2021)",
  "Circular Economy Student Challenge — TECHNATION (2021)"
];

export const ABOUT_CONTENT = {
  title: 'About Me',
  image: profilePic,
  paragraphs: [
    "I’m a full-stack software engineer specializing in modernizing complex, business-critical workflows into reliable web and mobile systems. Much of my work sits at the intersection of legacy tooling, nuanced business logic, and user-facing applications that need to be both correct and usable.",
    "I have extensive experience replacing Excel-driven processes with scalable software, particularly in pricing, underwriting, and operational systems where errors carry real financial and regulatory risk. I care deeply about correctness, system boundaries, and long-term maintainability — not just shipping features.",
    "My approach is pragmatic and product-driven: understand how people actually work, respect existing constraints, and design systems that improve reliability without adding unnecessary complexity."
  ]
};

export const APPROACH_CONTENT = {
  title: 'How I Approach Problems',
  paragraphs: [
    "I start by understanding the **real source of complexity** — usually hidden in spreadsheets, undocumented rules, or manual processes. Before writing code, I map business logic, edge cases, and failure modes so the system design reflects reality rather than assumptions.",
  ],
  priorities: [
    "Clear domain boundaries",
    "Explicit business rules",
    "Predictable data flows",
    "Systems that fail safely and visibly"
  ],
  conclusion: "I’m comfortable working in legacy environments, migrating incrementally, and balancing speed with correctness when systems are already in production."
};

export const PROJECTS = [
  {
    id: 'eats-by-michelle',
    title: 'Eats by Michelle',
    subtitle: 'Production Web Application — Product, UX, Frontend, Deployment',
    images: [eatsByMichelle1, eatsByMichelle2, eatsByMichelle3],
    links: {
      live: 'https://www.eatsbymichelle.com',
      github: 'https://github.com/Michelle-Vava/eatsbymichelle'
    },
    overview: 'Eats by Michelle is a production website for a personal chef and meal-prep business. The site acts as a real business interface, responsible for communicating services clearly, establishing trust, and supporting future growth beyond manual bookings.',
    problem: 'Before the site existed, services were explained manually, pricing was inconsistent, and there was no centralized online presence.',
    outcome: 'Live, production-ready website with clear service presentation, strong brand identity, and a solid foundation for future booking/payment features.',
    tech: ['Next.js', 'TypeScript', 'Vercel']
  },
  {
    id: 'service-connect',
    title: 'ServiceConnect',
    subtitle: 'Full-Stack System (Proof of Concept)',
    images: [serviceConnect1, serviceConnect2, serviceConnect4, serviceConnect5, serviceConnect6],
    links: {
      github: 'https://github.com/Michelle-Vava/testing'
    },
    overview: 'A full-stack platform designed to support a multi-role service marketplace with complex workflows. Demonstrates deep system design, backend architecture, and testing strategy.',
    problem: 'Service marketplaces involve multiple user roles, complex workflows, state transitions, and trust requirements. Most demos oversimplify these; this project models them.',
    outcome: 'Fully modeled multi-role system POC with realistic backend architecture demonstrating senior-level system thinking.',
    tech: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker']
  },
  {
    id: 'share-eats',
    title: 'ShareEats',
    subtitle: 'Backend-Heavy Django Application',
    images: [shareEats1, shareEats2, shareEats3],
    links: {
      github: 'https://github.com/Michelle-Vava/ShareEats'
    },
    overview: 'Django-based web application supporting a community marketplace for buying/selling food items. Focuses on backend development, deployment strategy, and infrastructure.',
    problem: 'Local food selling was fragmented with no centralized platform or structure.',
    outcome: 'Functional backend platform, deployed and containerized, demonstrating strong backend and infra fundamentals.',
    tech: ['Django', 'PostgreSQL', 'Docker', 'Heroku']
  },
  {
    id: 'ridesplit',
    title: 'RideSplit',
    subtitle: 'Mobile Car-Sharing Platform (Working Beta)',
    images: [rideSplit1, rideSplit2, rideSplit3, rideSplit4],
    links: {
      live: 'https://expo.dev/preview/update?message=beta+version+with+few+bugs&updateRuntimeVersion=1.0.0&createdAt=2025-10-18T10%3A32%3A48.860Z&slug=exp&projectId=0dc68925-8d91-4285-8564-5c6901d04c62&group=ae0d6730-82be-48e5-b842-f14adf34c17e',
      pdf: '/RideSplit.pdf',
      github: 'https://github.com/Michelle-Vava/rideapp'
    },
    overview: 'RideSplit is a mobile application designed to organize informal car-sharing between students and local commuters. It turns a common real-world behavior — people coordinating rides through group chats and DMs — into a structured, role-based system with clear flows, state, and accountability.',
    problem: 'Ride coordination previously happened in scattered group chats with unclear seat availability and no single source of truth. Drivers manually tracked passengers, and there was no visibility once a request was sent.',
    outcome: 'A fully functional beta with complete passenger/driver flows, role-based UI, and map discovery. Demonstrates ability to build complete, role-based applications end-to-end (from idea to working beta) and navigate real technical constraints.',
    tech: ['React Native', 'Expo', 'Zustand', 'NativeWind', 'TypeScript']
  },
  {
    id: 'the-link',
    title: 'The Link',
    subtitle: 'Mobile Social Sports Platform (Working Prototype)',
    images: [demoApp1, demoApp2],
    links: {
      live: 'https://expo.dev/preview/update?message=updates+to+the+mini+link+mvp&updateRuntimeVersion=1.0.0&createdAt=2025-10-11T05%3A27%3A37.641Z&slug=exp&projectId=ae0d4a9e-b769-480e-9ff5-3fcc81498286&group=7bb58c48-c069-4137-a30f-40efad5bd742',
      github: 'https://github.com/Michelle-Vava/demo-app'
    },
    overview: 'The Link is a mobile application designed to help people discover, create, and join local pickup sports games. It focuses on lowering the friction between wanting to play and actually playing by making games visible, accessible, and easy to join.',
    problem: 'Pickup sports are usually organized in private chats or closed groups, making discovery difficult for new players. There is no consistent way to see what games are happening nearby.',
    outcome: 'A functional prototype with core flows for game discovery, creation, and joining. Validated UX decisions like sport chip filtering and map-based previews.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'NativeWind', 'React Native Maps']
  }
];

export const CASE_STUDIES = [
  {
    title: "The Link",
    subtitle: "Mobile Social Sports Platform (Working Prototype)",
    architecture: {
      frontend: ["React Native + Expo", "TypeScript", "Zustand (Global State)", "NativeWind", "React Native Maps"],
      backend: ["Expo Router", "Moti (Animations)"],
      infrastructure: ["EAS Build", "Expo Go"]
    },
    sections: [
      {
        title: "The Problem",
        content: "In most cities, pickup sports already exist, but discovery and coordination are broken. Games are hidden in private chats, hosts manually track players, and last-minute changes are hard to communicate. New players struggle to find games they are welcome to join."
      },
      {
        title: "Core Concept",
        content: "At its core, The Link answers one question: 'What games are happening near me that I can actually join?' It centralizes game info into a location-aware, sport-filtered feed, giving casual interactions a structured home without losing their social nature."
      },
      {
        title: "UX Decisions",
        content: "Several choices support fast interactions: Sport chips instead of dropdowns for faster scanning, map previews to reduce location ambiguity, and confirmation modals to prevent accidental joins. The 'feed-first' experience prioritizes discovery over setup."
      },
      {
        title: "Current State",
        content: "Core flows (Create, Join, Discover) are implemented and functional. The UI and state architecture are validated using Zustand for lightweight updates. The project is ready for backend persistence and authentication integration."
      }
    ]
  },
  {
    title: "RideSplit",
    subtitle: "Mobile Car-Sharing Platform (Working Beta)",
    architecture: {
      frontend: ["React Native + Expo", "TypeScript", "Zustand (State)", "NativeWind", "React Native Maps"],
      backend: ["Expo Router", "Moti + Reanimated"],
      infrastructure: ["EAS Build", "Expo Go"]
    },
    sections: [
      {
        title: "The Problem",
        content: "Ride coordination previously happened in scattered group chats with unclear seat availability and no single source of truth. Drivers manually tracked passengers, and there was no visibility once a request was sent."
      },
      {
        title: "Core Concepts",
        content: "The system is built around two distinct roles using a single app. Passengers browse rides (by map or list) and request seats. Drivers manage route creation, pricing, and approvals. The UI dynamically adapts layout and options based on the active user role."
      },
      {
        title: "Why This Exists",
        content: "RideSplit was built to demonstrate complex mobile UX patterns that go beyond simple CRUD. It handles multi-step forms with validation, real-time-like state updates using Zustand, and complex conditional rendering without over-engineering."
      },
      {
        title: "Current State",
        content: "This is a functional beta. All major flows (Passenger requesting, Driver accepting) are operational. It deliberately focuses on 'shared trips' and human coordination rather than algorithmic dispatch."
      }
    ]
  },
  {
    title: "ServiceConnect",
    subtitle: "Full-Stack System (Proof of Concept)",
    architecture: {
      frontend: ["React 18 + Vite", "TanStack Router & Query", "Zustand for client state", "Tailwind + shadcn/ui", "Clerk for authentication"],
      backend: ["NestJS", "Prisma ORM", "PostgreSQL", "Socket.IO for real-time updates", "Stripe for payments", "Redis for caching"],
      infrastructure: ["Docker", "GitHub Actions", "AWS S3 (or compatible)"]
    },
    sections: [
      {
        title: "The Problem",
        content: "Service marketplaces involve multiple user roles, complex workflows, state transitions, and trust requirements. Most demos oversimplify these constraints. This POC intentionally models them including role-based access control (RBAC), real-time status updates, and secure payment flows."
      },
      {
        title: "Backend Architecture",
        content: "The system is built on NestJS using domain-driven module separation (auth, users, vehicles, jobs, payments). It uses Prisma for type-safe database access and implements a repository pattern for testability. Real-time features like job status updates rely on a websocket gateway."
      },
      {
        title: "Performance Strategy",
        content: "API responses are optimized using selective field return and pagination. High-read data is cached using Redis. The frontend employs aggressive caching with TanStack Query and optimistic UI updates to ensure the application feels instant even on slower connections."
      },
      {
        title: "Testing Culture",
        content: "The project enforces a strict testing pyramid: Unit tests for business logic (Jest), Integration tests for API endpoints (Supertest), and E2E tests for critical user flows (Playwright). CI/CD pipelines block merges if coverage drops or tests fail."
      }
    ]
  }
];

export const ANIMATION_DEFAULTS = {
  duration: 0.6,
  staggerDelay: 0.1,
  viewportMargin: '-100px',
} as const;
