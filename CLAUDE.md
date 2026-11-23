# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for the Laboratorio de Prototipos of the Universidad Nacional Experimental del Táchira (UNET), Táchira, Venezuela. The page has two jobs: attract funding (partners, sponsors, grants) and sell the lab's services. Bilingual, Spanish first (`/es/`) and English (`/en/`). Deployed to GitHub Pages via GitHub Actions on push to `main` (`.github/workflows/deploy.yml`).

**Status:** under construction. The live page is a placeholder and the content is not approved yet. Do not invent facts about the lab (services, equipment, projects, people, figures): every piece of copy must come from the lab.

## Commands

- `npm run dev` — Vite dev server at `http://localhost:5173/`
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

- Production domain is `labprotounet.com` (registered at Namecheap, DNS on Cloudflare, custom domain set in the repo's Pages settings, `www` redirects to the apex). The DNS records are **not proxied** (grey cloud) so GitHub can issue and renew the certificate; do not turn the proxy on or switch Cloudflare SSL to Flexible. Vite `base` is `/`. The domain lives in three places that must stay in sync: `SITE_URL` in `vite.config.ts`, `SITE_URL` in `src/seo/site.ts` and `public/CNAME`.
- While under construction the site must not be indexed: `INDEXABLE = false` in `src/seo/site.ts` emits `noindex, nofollow` on every page, and `public/robots.txt` disallows everything. Flip both, and add a sitemap, only when the real content is approved.- The CSP lives in `index.html`. If a contact form or analytics endpoint is added, extend `connect-src` (and `script-src` if needed) there.
