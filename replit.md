# GAHSO — Global Alliance for a Healthy Society

A nonprofit website for GAHSO (Global Alliance for a Healthy Society), a youth-led Public Benefit Organization operating in Kenya and the UK, empowering marginalized communities through evidence-based, community-driven programs.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, at `/api`)
- `pnpm --filter @workspace/gahso run dev` — run the frontend (Vite dev server, port 23164)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env: `DATABASE_URL` — Postgres connection string (for future use)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v3, react-router-dom
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (provisioned but not yet used)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/gahso/` — React + Vite frontend (full GAHSO website)
- `artifacts/api-server/` — Express API server
- `artifacts/api-server/src/routes/contact.ts` — Contact form submission endpoint (`POST /api/submit-contact`)
- `lib/db/` — Drizzle ORM schema (empty, ready for future use)
- `lib/api-spec/openapi.yaml` — OpenAPI spec (health check only for now)

## Architecture decisions

- Migrated from Lovable.dev / Supabase to Replit monorepo stack.
- Supabase edge function `submit-contact` replaced with Express route at `POST /api/submit-contact`.
- `@supabase/supabase-js` removed from frontend; a thin shim in `src/integrations/supabase/client.ts` maintains API compatibility with the existing `useContactForm` hook.
- Tailwind CSS v3 (postcss plugin) used instead of `@tailwindcss/vite` (Tailwind v4) — the imported app used v3.
- Uses `react-router-dom` (BrowserRouter) — not wouter — as that's what the original app shipped with.

## Product

Multi-page nonprofit website with:
- Home, About, Programs (with sub-pages: Tatua Farms, MloFlow, Tatua Salon, Youth Voice, Digital Inclusion, Restorers Project, InnovHubs), Impact, Get Involved, Donate, Contact pages
- Contact form that submits to the Express backend (`/api/submit-contact`)
- Responsive design with warm coral/orange + teal nonprofit branding

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Do NOT use `@tailwindcss/vite` — the app uses Tailwind v3 with postcss. Keep the `css.postcss.plugins` config in `vite.config.ts`.
- `BrowserRouter` base path handling: the Vite `BASE_URL` is set to `/` so react-router-dom routes work at the root. If the preview path ever changes, update the router base.

## Vercel Deployment

The project is Vercel-ready. Key files:

- `vercel.json` — build config, output dir, and rewrite rules
- `api/index.ts` — Vercel serverless function entry (re-exports the Express app)

**How it works on Vercel:**
- Build: `pnpm --filter @workspace/gahso run build` → output at `artifacts/gahso/dist`
- `/api/*` requests → serverless function (`api/index.ts` → Express)
- Everything else → SPA static files served from the CDN

**Required env vars in Vercel dashboard:**
- `DATABASE_URL` — PostgreSQL connection string (contact form submissions)
- `SESSION_SECRET` — session signing secret

**To deploy:** connect the GitHub repo in the Vercel dashboard; it will pick up `vercel.json` automatically. No framework preset needed (set to "Other").

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
