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
};
