import type { Dictionary } from "./en";

export const ko: Dictionary = {
  language: {
    label: "언어",
  },
  theme: {
    toLight: "라이트 모드로 전환",
    toDark: "다크 모드로 전환",
  },
  common: {
    backToTop: "맨 위로",
  },
  nav: {
    home: "홈",
    portfolio: "포트폴리오",
    services: "서비스",
    resume: "이력서",
    pricing: "가격",
    about: "소개",
    contacts: "연락처",
    hireMe: "채용하기!",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    primary: "주요 메뉴",
  },
  hero: {
    eyebrow: "퍼스널 포트폴리오",
    hello: "안녕하세요, 저는",
    age: "나이",
    address: "주소",
    email: "이메일",
    phone: "전화",
    seePortfolio: "포트폴리오 보기",
  },
  profile: {
    role: "소프트웨어 AI 개발자",
    location: "대한민국 수원",
  },
  askAi: {
    status: "수원 · 풀타임 및 계약 가능",
    title: "프로덕션 AI 시스템을 단독으로 end-to-end 구축합니다.",
    subtitle:
      "AI SaaS, RAG 파이프라인, LLM 오케스트레이션 — 한국 제품팀과 전 세계 원격 클라이언트를 위해.",
    intro:
      "말만 믿지 마세요. 채팅에게 물어보세요 — 제가 만든 RAG 파이프라인과 multi-provider failover로 동작합니다.",
    placeholder: "Kyler에 대해 무엇이든 물어보세요...",
    send: "메시지 보내기",
    suggestions: {
      hardest: "그가 만든 가장 어려운 것은?",
      speed: "혼자 얼마나 빠르게 출시하나요?",
      stack: "실제 기술 스택은 무엇인가요?",
      seoul: "왜 한국에서 그를 채용해야 하나요?",
    },
    pendingReply:
      "AI는 아직 연결되지 않았습니다. 채팅 UI는 준비되어 있고, 학습된 RAG 모델을 다음에 연결합니다.",
  },
  experience: {
    eyebrow: "커리어",
    title: "경력",
    present: "현재",
    items: {
      "exp-1": {
        role: "소프트웨어 AI 개발자",
        company: "Nova AI Labs",
        highlights: [
          "한국 제품팀과 원격 클라이언트를 위한 프로덕션 RAG 파이프라인, LLM 오케스트레이션, AI SaaS 기능을 구축합니다.",
          "LangChain, FastAPI, Python 기반 멀티 프로바이더 LLM 페일오버와 검색 품질 평가 루프를 설계하여, 할루시네이션 관련 이슈를 약 30% 감소시켰습니다.",
          "Next.js로 스트리밍 응답과 근거(citation)가 포함된 AI 제품 UI를 end-to-end로 구현하여, 사내 지식검색의 답변 관련성을 향상시켰습니다.",
          "데이터 준비부터 API 설계, 프롬프트 개선, 프로덕션 모니터링까지 AI 딜리버리 전 과정을 담당하며 기능 출시 주기를 주 단위에서 일 단위로 단축했습니다.",
        ],
      },
      "exp-2": {
        role: "Full Stack Developer (Freelance)",
        company: "PowerProp",
        highlights: [
          "NestJS, Next.js, GraphQL을 활용한 고성능 웹 애플리케이션 및 모듈형 API 개발을 통해 애플리케이션 로딩 속도를 35% 향상시키고 시스템 아키텍처 확장성을 확보하였습니다.",
          "커스텀 인터셉터(Interceptor), 가드(Guard) 및 견고한 JWT/OAuth 2.0 인증 워크플로우를 구현하여 엔터프라이즈 환경에서의 권한 없는 접근 리스크를 40% 감소시켰습니다.",
          "Docker 컨테이너화 및 Nginx 리버스 프록시 설정을 통해 다중 환경 및 GCP 배포 속도를 25% 가속화하고, 서버 업타임(Uptime) 99.9%를 달성하였습니다.",
          "Git/GitHub 워크플로우에 AI 기반 LLM 개발 도구를 통합하여 높은 코드 품질을 유지하는 동시에, 기능 개발 및 인도(Delivery) 속도를 30% 향상시켰습니다.",
        ],
      },
      "exp-3": {
        role: "Full Stack / Frontend Developer",
        company: "Click Uzbekistan",
        highlights: [
          "디자이너 및 백엔드 엔지니어와의 긴밀한 협업을 통해 웹 애플리케이션의 데이터 연동 안정성을 높이고 사용자 경험(UX)을 크게 향상시켰습니다.",
          "Figma 디자인 시스템을 확장 가능한 재사용성 React 컴포넌트로 변환하여 UI 일관성을 유지하고, 개발 생산성을 25% 이상 향상시켰습니다.",
          "복잡한 B2B SaaS 환경에서 지속적인 코드 리팩토링과 성능 최적화를 진행하여, 시스템 가독성을 높이고 애플리케이션 성능을 20% 개선했습니다.",
          "사용자 피드백과 비즈니스 요구사항을 안정적인 제품 기능으로 전환하는 애자일 프로세스를 주도하여, 스프린트 기능 인도 속도를 15% 가속화했습니다.",
        ],
      },
    },
  },
  skills: {
    eyebrow: "역량",
    title: "내가 만드는 것",
    subtitle:
      "프로덕션 AI 시스템, 견고한 백엔드, 제품급 프론트엔드 — end-to-end로 직접 책임집니다.",
    categories: {
      ai: {
        title: "AI / LLM Engineering",
        points: [
          "자동 페일오버가 있는 멀티 프로바이더 LLM 라우팅 — 이 페이지의 채팅이 그 위에서 동작합니다.",
          "프라이빗 데이터 기반 RAG 파이프라인: 검색, 프롬프트 설계, 스트리밍, 비용 제어.",
          "음성-텍스트 제품: Whisper 파이프라인을 실제 출시된 보이스 장부 앱으로 구현.",
          "Claude, Gemini, Vertex Imagen을 잡 큐 뒤에서 오케스트레이션하는 이미지 생성 파이프라인.",
        ],
      },
      backend: {
        title: "Backend Systems",
        points: [
          "프로덕션을 견디는 NestJS API: 큐, 재시도, 멱등성, 상태 머신.",
          "PostgreSQL·MongoDB 데이터 모델링, Redis로 캐시와 실시간 처리.",
          "결제/빌링: 사용량에 연결된 Stripe credit metering.",
          "배포까지 end-to-end: Docker, NGINX, Linux, AWS, CI/CD.",
        ],
      },
      frontend: {
        title: "Product Frontend",
        points: [
          "서버 렌더링과 깔끔한 SEO를 갖춘 Next.js App Router 프론트엔드.",
          "하나의 코드베이스로 양대 스토어에 출시한 React Native / Expo 앱.",
          "디자인 시스템 규율: 토큰, 테마, 접근성 — 이 사이트가 샘플입니다.",
          "TypeScript end-to-end — 웹, 모바일, API를 하나의 언어로.",
        ],
      },
    },
  },
};
