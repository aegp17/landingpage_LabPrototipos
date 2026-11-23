# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for the Laboratorio de Prototipos of the Universidad Nacional Experimental del Táchira (UNET), Táchira, Venezuela. The page has two jobs: attract funding (partners, sponsors, grants) and sell the lab's services. Bilingual, Spanish first (`/es/`) and English (`/en/`). Deployed to GitHub Pages via GitHub Actions on push to `main` (`.github/workflows/deploy.yml`).

**Status:** under construction. The live page is a placeholder and the content is not approved yet. Do not invent facts about the lab (services, equipment, projects, people, figures): every piece of copy must come from the lab.

## Commands

- `npm run dev` — Vite dev server at `http://localhost:5173/landingpage_LabPrototipos/`
- `npm run build` — type-check with `vue-tsc -b`, then prerender every route with `vite-ssg build` into `dist/`
- `npm run preview` — serve `dist/` locally

Node 20 (matches CI). No test runner or linter is configured.

## Branches and commits

Work lands on `develop` and reaches `main` through a pull request; a push to `main` deploys. Commit messages are in English.

## Architecture

**Stack:** Vue 3 + TypeScript + Vite, `<script setup>` SFCs, vue-router, `@unhead/vue` for head tags, `vite-ssg` to prerender one static HTML file per route. `beasties` inlines the critical CSS during the SSG build.

- `src/router/routes.ts` — `/es/` and `/en/` render `pages/Home.vue`; `/`, `/es` and `/en` redirect; everything else renders `pages/NotFound.vue`.
- `vite.config.ts` — `includedRoutes` lists the prerendered paths. `onFinished` patches `dist/index.html` with a meta refresh and canonical pointing at `/es/`, because vite-ssg leaves the root as an empty SPA shell.
- `src/components/layout/` — `AppHeader` (brand + language switch) and `AppFooter`.
- `src/i18n/` — `useI18n()` derives the locale from the route path (`/en/…` is English, anything else Spanish). `es.ts` defines the `Dictionary` type and `en.ts` must satisfy it, so both dictionaries keep the same keys. All user-facing copy comes from the dictionaries; do not hardcode strings in components.
- `src/seo/` — `site.ts` holds `SITE_URL`, `INDEXABLE` and path helpers; `head.ts` exposes `useRouteHead()`, which sets title, description, canonical, hreflang (`es`, `en`, `x-default` → `es`), Open Graph and the robots meta for a page.

## Deployment notes

- The site is served from the project subpath `https://aegp17.github.io/landingpage_LabPrototipos/`, so Vite `base` is `/landingpage_LabPrototipos/`. The URL lives in two places that must stay in sync: `SITE_URL`/`BASE` in `vite.config.ts` and `SITE_URL` in `src/seo/site.ts`. Moving to a custom domain means `BASE = '/'`, updating both `SITE_URL`s and adding `public/CNAME`.
- While under construction the site must not be indexed. `INDEXABLE = false` in `src/seo/site.ts` emits `noindex, nofollow` on every page; that is the control that works. `public/robots.txt` disallows everything but only takes effect on a custom domain (crawlers read `robots.txt` from the host root, not from a project subpath). Flip both, and add a sitemap, only when the real content is approved.
- The CSP lives in `index.html`. If a contact form or analytics endpoint is added, extend `connect-src` (and `script-src` if needed) there.
