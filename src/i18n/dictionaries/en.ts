export interface Dictionary {
  language: {
    label: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  common: {
    backToTop: string;
  };
  nav: {
    home: string;
    portfolio: string;
    services: string;
    resume: string;
    contacts: string;
    hireMe: string;
    openMenu: string;
    closeMenu: string;
    primary: string;
  };
  hero: {
    eyebrow: string;
    hello: string;
    age: string;
    address: string;
    email: string;
    phone: string;
    seePortfolio: string;
  };
  profile: {
    role: string;
    location: string;
  };
  askAi: {
    status: string;
    title: string;
    subtitle: string;
    intro: string;
    placeholder: string;
    send: string;
    suggestions: {
      hardest: string;
      speed: string;
      stack: string;
      seoul: string;
    };
    pendingReply: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    present: string;
    items: Record<
      string,
      {
        role: string;
        company: string;
        highlights: string[];
      }
    >;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: Record<
      string,
      {
        title: string;
        points: string[];
      }
    >;
  };
  projects: {
    eyebrow: string;
    title: string;
    viewCaseStudy: string;
    allProjects: string;
    items: Record<
      string,
      {
        description: string;
      }
    >;
  };
  contact: {
    title: string;
    address: string;
    email: string;
    phone: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const en: Dictionary = {
  language: {
    label: "Language",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  common: {
    backToTop: "Back to top",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    services: "Services",
    resume: "Resume",
    contacts: "Contacts",
    hireMe: "Hire Me!",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
  },
  hero: {
    eyebrow: "Personal Portfolio",
    hello: "Hello, I Am",
    age: "Age",
    address: "Address",
    email: "E-mail",
    phone: "Phone",
    seePortfolio: "See My Portfolio",
  },
  profile: {
    role: "Software AI Developer",
    location: "Suwon, South Korea",
  },
  askAi: {
    status: "In Suwon · open to full-time and contract",
    title: "I ship production AI systems — solo, end-to-end.",
    subtitle:
      "AI SaaS platforms, RAG pipelines and LLM orchestration — for Korean product teams and remote clients worldwide.",
    intro:
      "Ask about Kyler — profile, experience, tech stack, and projects. Answers run through the portfolio RAG API when connected.",
    placeholder: "Ask anything about Kyler...",
    send: "Send message",
    suggestions: {
      hardest: "What's the hardest thing he's built?",
      speed: "How fast can he ship alone?",
      stack: "What's his real tech stack?",
      seoul: "Why hire him in Korea?",
    },
    pendingReply:
      "I couldn't answer that right now. Try asking about his projects, experience, or stack.",
  },
  experience: {
    eyebrow: "Career path",
    title: "Work Experience",
    present: "Present",
    items: {
      "exp-1": {
        role: "Software AI Developer",
        company: "Nova AI Labs",
        highlights: [
          "Building production RAG pipelines, LLM orchestration, and AI SaaS features for Korean product teams and remote clients.",
          "Designed multi-provider LLM failover and retrieval evaluation loops with LangChain, FastAPI, and Python — cutting hallucination-related support issues by ~30%.",
          "Shipped end-to-end AI product surfaces in Next.js with streaming responses and grounded citations, improving answer relevance for internal knowledge search.",
          "Owned the full AI delivery loop — data prep, API design, prompt iteration, and production monitoring — reducing feature turnaround from weeks to days.",
        ],
      },
      "exp-2": {
        role: "Full Stack Developer (Freelance)",
        company: "PowerProp",
        highlights: [
          "Built high-performance web apps and modular APIs with NestJS, Next.js, and GraphQL — improving load speed by 35% and strengthening architecture scalability.",
          "Implemented custom interceptors, guards, and JWT/OAuth 2.0 auth workflows — reducing unauthorized access risk in enterprise environments by 40%.",
          "Accelerated multi-environment and GCP deployments by 25% with Docker and Nginx reverse proxy, reaching 99.9% server uptime.",
          "Integrated AI/LLM developer tools into Git/GitHub workflows — keeping code quality high while improving feature delivery speed by 30%.",
        ],
      },
      "exp-3": {
        role: "Full Stack / Frontend Developer",
        company: "Click Uzbekistan",
        highlights: [
          "Collaborated closely with designers and backend engineers to improve data integration stability and significantly enhance UX.",
          "Converted Figma design systems into scalable reusable React components — improving UI consistency and productivity by over 25%.",
          "Refactored and optimized complex B2B SaaS codebases — improving readability and application performance by 20%.",
          "Led Agile delivery of user feedback and business requirements into stable product features — accelerating sprint delivery by 15%.",
        ],
      },
    },
  },
  skills: {
    eyebrow: "Capabilities",
    title: "What I build",
    subtitle:
      "Production AI systems, resilient backends, and product-grade frontends — owned end to end.",
    categories: {
      ai: {
        title: "AI / LLM Engineering",
        points: [
          "Multi-provider LLM routing with automatic failover — the chat on this page runs on it.",
          "RAG pipelines over private data: retrieval, prompt design, streaming, cost control.",
          "Speech-to-text products: Whisper pipelines turned into a shipping voice-bookkeeping app.",
          "Image-generation orchestration across Claude, Gemini and Vertex Imagen behind job queues.",
        ],
      },
      backend: {
        title: "Backend Systems",
        points: [
          "NestJS APIs that survive production: queues, retries, idempotency, state machines.",
          "Data modeling in PostgreSQL and MongoDB, with Redis for cache and real-time.",
          "Payments and billing: Stripe credit metering wired to usage.",
          "Deployment owned end to end: Docker, NGINX, Linux, AWS, CI/CD.",
        ],
      },
      frontend: {
        title: "Product Frontend",
        points: [
          "Next.js App Router frontends with server rendering and clean SEO.",
          "React Native and Expo apps shipped to both stores from one codebase.",
          "Design-system discipline: tokens, theming, accessibility — this site is the sample.",
          "TypeScript end to end — one language across web, mobile and API.",
        ],
      },
    },
  },
  projects: {
    eyebrow: "Selected work",
    title: "Personal Projects",
    viewCaseStudy: "View case study →",
    allProjects: "All projects →",
    items: {
      "static-engine": {
        description:
          "An AI ad-creative SaaS for a US client — three AI providers behind automatic failover, Stripe credit billing, and Meta/Shopify integrations, built end to end by one engineer.",
      },
      mashaqat: {
        description:
          "A live education platform with subscription courses in FullStack, DevOps, and AI Engineering — designed for learners who ship real skills, not just watch videos.",
      },
      autocare: {
        description:
          "Built a full automobile marketplace platform with an advanced admin panel for listings, users, and operations.",
      },
      "nusret-library": {
        description:
          "A professional digital repository for collecting and managing books with a clean, modern storefront experience.",
      },
      "nusret-admin": {
        description:
          "Built a stable, scalable admin portal for user and product management across the Nusret ecosystem.",
      },
      "telegram-quiz-bot": {
        description:
          "An interactive Telegram quiz bot powered by Node.js and the OpenAI API — quizzes, scoring, and conversational flow.",
      },
    },
  },
  contact: {
    title: "Contact Me",
    address: "Address",
    email: "E-mail",
    phone: "Phone",
    namePlaceholder: "Your Name*",
    emailPlaceholder: "Your Email*",
    messagePlaceholder: "Message",
    submit: "Submit Message",
    sending: "Sending...",
    success: "Message sent. I’ll get back to you soon.",
    error: "Something went wrong. Please try again.",
  },
};
