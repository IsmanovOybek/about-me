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
};
