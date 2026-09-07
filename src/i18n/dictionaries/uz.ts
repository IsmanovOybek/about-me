import type { Dictionary } from "./en";

export const uz: Dictionary = {
  language: {
    label: "Til",
  },
  theme: {
    toLight: "Yorug‘ rejimga o‘tish",
    toDark: "Qorong‘u rejimga o‘tish",
  },
  common: {
    backToTop: "Yuqoriga",
  },
  nav: {
    home: "Bosh sahifa",
    portfolio: "Portfolio",
    services: "Xizmatlar",
    resume: "Rezyume",
    pricing: "Narxlar",
    about: "Men haqimda",
    contacts: "Aloqa",
    hireMe: "Band qiling!",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    primary: "Asosiy navigatsiya",
  },
  hero: {
    eyebrow: "Shaxsiy portfolio",
    hello: "Salom, men",
    age: "Yosh",
    address: "Manzil",
    email: "Email",
    phone: "Telefon",
    seePortfolio: "Portfolioni ko‘rish",
  },
  profile: {
    role: "Software AI dasturchi",
    location: "Suwon, Janubiy Koreya",
  },
  askAi: {
    status: "Suwon · full-time va contract uchun ochiq",
    title: "Production AI tizimlarni yakka o‘zim — end-to-end yetkazaman.",
    subtitle:
      "AI SaaS, RAG pipeline va LLM orchestration — Koreya product jamoalari va dunyo bo‘ylab remote mijozlar uchun.",
    intro:
      "Faqat so‘zimga ishonmang. Chatdan so‘rang — u men qurgan RAG pipeline va multi-provider failover bilan ishlaydi.",
    placeholder: "Kyler haqida istalgan savol bering...",
    send: "Xabar yuborish",
    suggestions: {
      hardest: "U qurgan eng qiyin narsa nima?",
      speed: "Yakka o‘zi qanchalik tez ship qiladi?",
      stack: "Haqiqiy tech stacki qanday?",
      seoul: "Nega Koreyada uni yollash kerak?",
    },
    pendingReply:
      "AI hali ulanmagan. Chat UI tayyor — keyingi bosqichda train qilingan RAG modelni ulaymiz.",
  },
  experience: {
    eyebrow: "Karyera",
    title: "Ish tajribasi",
    present: "Hozir",
    items: {
      "exp-1": {
        role: "Software AI Developer",
        company: "Nova AI Labs",
        highlights: [
          "Koreya product jamoalari va remote mijozlar uchun production RAG pipeline, LLM orchestration va AI SaaS funksiyalarni quraman.",
          "LangChain, FastAPI va Python bilan multi-provider LLM failover va retrieval evaluation loop’larini loyihalab, hallucination bilan bog‘liq issue’larni ~30% kamaytirdim.",
          "Next.js’da streaming javob va grounded citation’li AI product UI’ni end-to-end ship qilib, ichki knowledge search javob relevancy’sini yaxshiladim.",
          "Data prep’dan API design, prompt iteration va production monitoring’gacha to‘liq AI delivery loop’ni olib bordim — feature turnaround’ni haftalardan kunlarga qisqartirdim.",
        ],
      },
      "exp-2": {
        role: "Full Stack Developer (Freelance)",
        company: "PowerProp",
        highlights: [
          "NestJS, Next.js va GraphQL bilan yuqori unumli web app va modular API ishlab chiqib, yuklanish tezligini 35% oshirdim va arxitektura scalability’ni ta’minladim.",
          "Custom interceptor, guard va JWT/OAuth 2.0 auth workflow joriy qilib, enterprise muhitida unauthorized access riskini 40% kamaytirdim.",
          "Docker va Nginx reverse proxy orqali multi-environment va GCP deploy tezligini 25% oshirdim, server uptime 99.9% ga yetkazdim.",
          "Git/GitHub workflow’ga AI/LLM development tool’larni integratsiya qilib, kod sifatini saqlagan holda feature delivery tezligini 30% oshirdim.",
        ],
      },
      "exp-3": {
        role: "Full Stack / Frontend Developer",
        company: "Click Uzbekistan",
        highlights: [
          "Designer va backend engineerlar bilan yaqin hamkorlikda data integration barqarorligini oshirdim va UX’ni sezilarli yaxshiladim.",
          "Figma design system’ni scalable React componentlarga aylantirib, UI consistency saqladim va productivity’ni 25%+ oshirdim.",
          "Murakkab B2B SaaS muhitida continuous refactoring va performance optimization qilib, o‘qilish va app performance’ni 20% yaxshiladim.",
          "User feedback va business talablarni barqaror product feature’larga aylantiruvchi Agile jarayonni yetakladim — sprint delivery’ni 15% tezlashtirdim.",
        ],
      },
    },
  },
  skills: {
    eyebrow: "Imkoniyatlar",
    title: "Nimalarni quraman",
    subtitle:
      "Production AI tizimlar, mustahkam backend va product-grade frontend — hammasini end-to-end o‘zim olib boraman.",
    categories: {
      ai: {
        title: "AI / LLM Engineering",
        points: [
          "Avtomatik failover’li multi-provider LLM routing — shu sahifadagi chat shu ustida ishlaydi.",
          "Private data ustida RAG pipeline: retrieval, prompt design, streaming, cost control.",
          "Speech-to-text mahsulotlar: Whisper pipeline’lardan shipping voice-bookkeeping app.",
          "Claude, Gemini va Vertex Imagen orqali job queue’lar orqasidagi image-generation orchestration.",
        ],
      },
      backend: {
        title: "Backend Systems",
        points: [
          "Production’da chidaydigan NestJS API: queues, retries, idempotency, state machines.",
          "PostgreSQL va MongoDB’da data modeling, Redis bilan cache va real-time.",
          "To‘lov va billing: usage’ga ulangan Stripe credit metering.",
          "Deploy end to end: Docker, NGINX, Linux, AWS, CI/CD.",
        ],
      },
      frontend: {
        title: "Product Frontend",
        points: [
          "Server rendering va toza SEO’li Next.js App Router frontendlar.",
          "Bitta codebase’dan ikkala store’ga chiqqan React Native va Expo app’lar.",
          "Design-system intizomi: tokens, theming, accessibility — bu sayt sample.",
          "TypeScript end to end — web, mobile va API uchun bitta til.",
        ],
      },
    },
  },
};
