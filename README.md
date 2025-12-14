# AI Career Coach 

AI Career Coach is an AI-driven career guidance platform built with Next.js (TypeScript) and Prisma. It provides personalized recommendations, learning roadmaps, and AI-assisted content (resume/cover letters) through a simple web UI and API surface.

Short, repo-aligned info:
- Frontend: Next.js (app/ + components/, TypeScript)
- Data: Prisma (prisma/), configured to use PostgreSQL / Supabase
- Backend: backend/ (API or worker code if present)
- Tooling: Dockerfile, GitHub Actions (actions/), ESLint/Prettier
- Primary languages: TypeScript / JavaScript

Quick start
1. Clone
   git clone https://github.com/Jenni006/Ai-Career-Coach.git
   cd Ai-Career-Coach

2. Install
   npm install

3. Environment (example vars)
   - DATABASE_URL="postgresql://user:pass@localhost:5432/ai_career_coach"
   - NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - GOOGLE_API_KEY (Gemini) or other AI provider keys
   - NEXTAUTH_URL, NEXTAUTH_SECRET

   Create .env.local with the needed values.

4. Database
   npx prisma generate
   npx prisma migrate dev   # or `npx prisma db push` for schema sync

5. Run
   npm run dev
   Open http://localhost:3000

Project structure (high level)
- app/ — Next.js routes and pages
- components/ — UI components
- lib/ — helper utilities
- prisma/ — schema and migrations
- backend/ — server-side/worker logic
- public/ — static assets
- actions/ — CI workflows
- dockerfile — container build

Notes
- Inspect package.json for scripts (dev, build, start, prisma).
- Use environment variables for secrets and API keys; do not commit them.
- If using Supabase, ensure service role key for server-side operations only.
- For AI integrations (Gemini/OpenAI), add API keys and follow provider limits and privacy considerations.

Contributing
- Fork → branch → PR
- Keep changes small and add tests or minimal documentation updates
- Follow existing TypeScript + ESLint conventions

License
MIT (see LICENSE)
</div>
