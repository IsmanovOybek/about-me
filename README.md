# Bek — Portfolio

Personal portfolio (Next.js App Router): experience, skills, projects, contact form, and Ask AI.

## Stack

- Next.js 16 + React 19 (SSR + `/api/contact`)
- SCSS Modules + Framer Motion
- i18n: English, Korean, Russian, Uzbek
- Contact: Gmail SMTP with FormSubmit fallback
- Ask AI: optional FastAPI RAG, else local knowledge

## Local setup

```bash
npm install
cp .env.example .env.local
# fill CONTACT_TO_EMAIL / GMAIL_* for contact form
npm run dev
```

```bash
npm run lint
npm run build
npm start
```

## Deploy on Hostinger (Node.js Web App)

Contact form needs a **Node.js** app (SSR). Do **not** use static export / `out` — that breaks `/api/contact`.

### Requirements

- Hostinger plan with **Node.js / Web Apps** (Business or Cloud)
- GitHub repo: `IsmanovOybek/about-me`
- Node.js **20** or newer

### Steps

1. Push latest code to GitHub (`main`).
2. hPanel → **Websites** → **Add Website** → **Node.js Apps**.
3. **Import Git Repository** → connect GitHub → select `about-me`.
4. Use these settings (Hostinger often auto-fills Next.js):

| Field | Value |
|---|---|
| Application type | `next` (Next.js) |
| Node.js version | `20` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Start command | `npm run start -- -p $PORT` |
| Entry file | leave empty (Hostinger runs `next start`) |

5. Add **Environment Variables** in the Hostinger app settings:

| Variable | Required | Notes |
|---|---|---|
| `CONTACT_TO_EMAIL` | Yes | Your inbox |
| `GMAIL_USER` | Recommended | Gmail for SMTP |
| `GMAIL_APP_PASSWORD` | Recommended | Google App Password |
| `NEXT_PUBLIC_API_URL` | No | Leave empty unless RAG API has a public HTTPS URL |

6. Deploy. Then check:
   - Site opens on your domain
   - Contact form emails you
   - Ask AI answers (local knowledge if RAG URL is empty)

### After env changes

Restart / redeploy the Web App so new variables apply.

## Notes

- `.env.local` is gitignored — never commit secrets.
- Production ignores `localhost` RAG URLs so Ask AI still works without a separate backend.
- Official Hostinger Next.js guide: [docs.hostinger.com](https://docs.hostinger.com/node.js/overview-1/next)
