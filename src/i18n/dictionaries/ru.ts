import type { Dictionary } from "./en";

export const ru: Dictionary = {
  language: {
    label: "Язык",
  },
  theme: {
    toLight: "Включить светлую тему",
    toDark: "Включить тёмную тему",
  },
  common: {
    backToTop: "Наверх",
  },
  nav: {
    home: "Главная",
    portfolio: "Портфолио",
    services: "Услуги",
    resume: "Резюме",
    pricing: "Цены",
    about: "Обо мне",
    contacts: "Контакты",
    hireMe: "Нанять!",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    primary: "Основная навигация",
  },
  hero: {
    eyebrow: "Личное портфолио",
    hello: "Здравствуйте, я",
    age: "Возраст",
    address: "Адрес",
    email: "Эл. почта",
    phone: "Телефон",
    seePortfolio: "Смотреть портфолио",
  },
  profile: {
    role: "Разработчик Software AI",
    location: "Сувон, Южная Корея",
  },
  askAi: {
    status: "Сувон · открыт к full-time и контракту",
    title: "Я создаю production AI-системы — соло, end-to-end.",
    subtitle:
      "AI SaaS, RAG-пайплайны и LLM-оркестрация — для корейских продуктовых команд и удалённых клиентов по всему миру.",
    intro:
      "Не верьте на слово. Спросите чат — он работает на RAG-пайплайне, который я собрал, с multi-provider failover.",
    placeholder: "Спросите что угодно о Kyler...",
    send: "Отправить сообщение",
    suggestions: {
      hardest: "Что самое сложное он построил?",
      speed: "Как быстро он может поставить соло?",
      stack: "Какой у него реальный стек?",
      seoul: "Почему нанять его в Корее?",
    },
    pendingReply:
      "AI пока не подключён. UI чата готов — подключим обученную RAG-модель на следующем шаге.",
  },
  experience: {
    eyebrow: "Карьера",
    title: "Опыт работы",
    present: "наст.",
    items: {
      "exp-1": {
        role: "Software AI Developer",
        company: "Nova AI Labs",
        highlights: [
          "Создаю production RAG-пайплайны, LLM-оркестрацию и AI SaaS-функции для корейских команд и удалённых клиентов.",
          "Спроектировал multi-provider LLM failover и циклы оценки retrieval на LangChain, FastAPI и Python — снизил hallucination-related issues примерно на 30%.",
          "Собрал end-to-end AI-интерфейсы на Next.js со streaming-ответами и grounded citations — повысил релевантность ответов во внутреннем knowledge search.",
          "Веду полный AI delivery loop — data prep, API design, prompt iteration и production monitoring — сократив time-to-feature с недель до дней.",
        ],
      },
      "exp-2": {
        role: "Full Stack Developer (Freelance)",
        company: "PowerProp",
        highlights: [
          "Разработал высокопроизводительные веб-приложения и модульные API на NestJS, Next.js и GraphQL — ускорил загрузку на 35% и усилил масштабируемость архитектуры.",
          "Реализовал custom interceptors, guards и JWT/OAuth 2.0 auth workflow — снизил риск несанкционированного доступа в enterprise-среде на 40%.",
          "Ускорил multi-environment и GCP-деплой на 25% с Docker и Nginx reverse proxy, достигнув uptime 99.9%.",
          "Интегрировал AI/LLM-инструменты в Git/GitHub workflow — сохранил высокое качество кода и ускорил delivery фич на 30%.",
        ],
      },
      "exp-3": {
        role: "Full Stack / Frontend Developer",
        company: "Click Uzbekistan",
        highlights: [
          "Тесно сотрудничал с дизайнерами и backend-инженерами — повысил стабильность data integration и заметно улучшил UX.",
          "Перевёл Figma design system в масштабируемые React-компоненты — улучшил UI-consistency и продуктивность более чем на 25%.",
          "Провёл рефакторинг и оптимизацию в сложном B2B SaaS — повысил читаемость и производительность приложения на 20%.",
          "Вёл Agile-процесс превращения feedback и бизнес-требований в стабильные фичи — ускорил sprint delivery на 15%.",
        ],
      },
    },
  },
  skills: {
    eyebrow: "Компетенции",
    title: "Что я строю",
    subtitle:
      "Production AI-системы, устойчивые бэкенды и product-grade фронтенды — end-to-end под моей ответственностью.",
    categories: {
      ai: {
        title: "AI / LLM Engineering",
        points: [
          "Multi-provider LLM routing с automatic failover — чат на этой странице работает на нём.",
          "RAG-пайплайны над private data: retrieval, prompt design, streaming, cost control.",
          "Speech-to-text продукты: Whisper-пайплайны, превращённые в shipping voice-bookkeeping app.",
          "Оркестрация image-generation через Claude, Gemini и Vertex Imagen за job queues.",
        ],
      },
      backend: {
        title: "Backend Systems",
        points: [
          "NestJS API для production: queues, retries, idempotency, state machines.",
          "Моделирование данных в PostgreSQL и MongoDB, Redis для cache и real-time.",
          "Платежи и billing: Stripe credit metering, привязанный к usage.",
          "Деплой end to end: Docker, NGINX, Linux, AWS, CI/CD.",
        ],
      },
      frontend: {
        title: "Product Frontend",
        points: [
          "Next.js App Router фронтенды с SSR и чистым SEO.",
          "React Native и Expo приложения, выпущенные в оба стора из одного codebase.",
          "Дисциплина design-system: tokens, theming, accessibility — этот сайт как sample.",
          "TypeScript end to end — один язык для web, mobile и API.",
        ],
      },
    },
  },
  projects: {
    eyebrow: "Избранные работы",
    title: "Личные проекты",
    viewCaseStudy: "Смотреть кейс →",
    allProjects: "Все проекты →",
    items: {
      "static-engine": {
        description:
          "AI SaaS для рекламного креатива для US-клиента — три AI-провайдера с failover, Stripe credit billing и интеграции Meta/Shopify, собрано end to end одним инженером.",
      },
      mashaqat: {
        description:
          "Платформа live-образования с подпиской на курсы FullStack, DevOps и AI Engineering — фокус на реальных навыках, а не только на видео.",
      },
      autocare: {
        description:
          "Разработал комплексную автомобильную marketplace-платформу с продвинутой admin-панелью.",
      },
      "nusret-library": {
        description:
          "Профессиональный цифровой репозиторий для сбора и управления книгами.",
      },
      "nusret-admin": {
        description:
          "Построил стабильный и масштабируемый admin-портал для управления пользователями и продуктами.",
      },
      "telegram-quiz-bot": {
        description:
          "Реализовал интерактивного quiz-бота на Node.js и OpenAI API.",
      },
    },
  },
  contact: {
    title: "Связаться",
    address: "Адрес",
    email: "E-mail",
    phone: "Телефон",
    namePlaceholder: "Ваше имя*",
    emailPlaceholder: "Ваш email*",
    messagePlaceholder: "Сообщение",
    submit: "Отправить",
    sending: "Отправка...",
    success: "Сообщение отправлено. Я скоро отвечу.",
    error: "Что-то пошло не так. Попробуйте ещё раз.",
  },
};
