export interface Dictionary {
  language: {
    label: string;
  };
  nav: {
    home: string;
    portfolio: string;
    services: string;
    resume: string;
    pricing: string;
    about: string;
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
}

export const en: Dictionary = {
  language: {
    label: "Language",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    services: "Services",
    resume: "Resume",
    pricing: "Pricing",
    about: "About Me",
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
      "Don't take my word for it. Ask the chat — it runs on a RAG pipeline I built, with multi-provider failover.",
    placeholder: "Ask anything about Kyler...",
    send: "Send message",
    suggestions: {
      hardest: "What's the hardest thing he's built?",
      speed: "How fast can he ship alone?",
      stack: "What's his real tech stack?",
      seoul: "Why hire him in Korea?",
    },
    pendingReply:
      "AI is not connected yet. The chat UI is ready — we will plug in the trained RAG model next.",
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
};
