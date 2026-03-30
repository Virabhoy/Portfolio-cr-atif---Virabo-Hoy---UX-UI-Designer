# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run test         # Run Playwright tests (auto-starts dev server)
npm run test:ui      # Run tests with UI mode
npm run test:headed  # Run tests in headed browser
npx playwright test tests/home.spec.ts              # Run a single test file
npx playwright test --project=chromium               # Run tests in one browser only
```

## Architecture

This is a **Next.js 16 portfolio site** with React 19 and TypeScript, featuring a custom admin panel for content management. Styling uses **Tailwind CSS v4** (config via CSS, not `tailwind.config.js`).

### Directory Structure

- `/app` - Next.js App Router (all pages are `"use client"`)
  - `/api/auth/*` - Authentication (login/logout with session cookies)
  - `/api/admin/*` - Protected CRUD routes for projects, about, skills, image upload
  - `/api/public/*` - Public data endpoints (projects, about, skills)
  - `/admin/*` - Admin dashboard pages (projects, about, skills, settings)
  - `/projects/*` - Public project detail pages
  - `/cours-ux/*` - UX course pages (listing + individual chapters)
- `/components`
  - `/sections` - Page sections (Hero, About, Projects, Skills, Contact)
  - `/ui` - UI components including physics-based gravity animation
  - `/layout` - Header/Footer
  - `/course` - Reusable course components + per-course illustration folders
- `/lib`
  - `blob-storage.ts` - Vercel Blob API helpers (getData, saveData, uploadImage, deleteImage)
  - `language-context.tsx` - FR/EN i18n context and translations
  - `projects-data.ts` - Project data structure
  - `courses/` - Course content data files (typed FR/EN)
- `/tests` - Playwright e2e tests (runs against all 3 browsers: chromium, firefox, webkit)

### Key Patterns

**Data Storage**: Uses Vercel Blob for JSON data and images. Files stored under `data/` and `images/` prefixes. Admin API routes read/write via `@/lib/blob-storage.ts`. Data files: `projects.json`, `about.json`, `skills.json`.

**Authentication**: Session-based with base64-encoded HTTP-only cookies (`admin_session`), 24-hour expiration. Middleware in `middleware.ts` protects `/admin/*` and `/api/admin/*` routes. Login page at `/admin/login` is excluded from protection.

**Internationalization**: Client-side FR/EN toggle via React Context. All translations are co-located in `language-context.tsx` as a single `translations` object keyed by `fr`/`en`. Use the `t("key.name")` helper from `useLanguage()` hook.

**Physics Animation**: Hero section uses Matter.js for gravity simulation with floating skill badges. Component at `/components/ui/gravity.tsx`.

**UI Components**: Uses shadcn/ui pattern with Radix primitives, `class-variance-authority`, and `tailwind-merge` via `cn()` utility in `lib/utils.ts`.

### Cours UX (Course Pages)

Educational UX course pages at `/cours-ux/[slug]` to demonstrate expertise to recruiters.

- `/app/cours-ux/page.tsx` - Course listing page
- `/app/cours-ux/loi-de-fitts/` - First course chapter (Fitts' Law)
- `/components/course/` - Reusable course components (ReadingProgress, CourseHero, CourseSection, CourseTableOfContents, CourseSourcesList, CourseNavFooter)
- `/components/course/fitts/` - Fitts-specific SVG illustrations and interactive demo
- `/lib/courses/fitts-data.ts` - Course content as typed FR/EN data (not in Vercel Blob — editorial content, not user-editable)

**Design System**: Bricolage Grotesque for titles (`font-bricolage`), Montserrat for body (`font-montserrat`). Blue (#0099FF) hero sections, alternating white/muted section backgrounds.

**Adding a new course**: Create `lib/courses/[slug]-data.ts`, create illustration components in `components/course/[slug]/`, assemble in `app/cours-ux/[slug]/page.tsx` with a layout.tsx for SEO metadata.

### Path Alias

`@/*` maps to project root (e.g., `@/lib/utils`, `@/components/ui/button`)

### Environment Variables

Required for admin functionality:
- `ADMIN_USERNAME` / `ADMIN_PASSWORD` - Admin credentials
- `SESSION_SECRET` - Token encoding secret
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob access
