import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ViteSSGOptions } from 'vite-ssg'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://aegp17.github.io/landingpage_LabPrototipos'
const BASE = '/landingpage_LabPrototipos/'
const DEFAULT_LOCALE = 'es'
const LOCALES = ['es', 'en'] as const

const root = fileURLToPath(new URL('.', import.meta.url))

function buildRoutes(): string[] {
  return LOCALES.map((locale) => `/${locale}/`)
}

function redirectRootToDefaultLocale(): void {
  const rootIndex = join(root, 'dist', 'index.html')
  if (!existsSync(rootIndex)) return
  const html = readFileSync(rootIndex, 'utf8')
  if (html.includes('http-equiv="refresh"')) return
  const inject =
    `    <link rel="canonical" href="${SITE_URL}/${DEFAULT_LOCALE}/" />\n` +
    `    <meta http-equiv="refresh" content="0; url=${BASE}${DEFAULT_LOCALE}/" />\n`
  writeFileSync(rootIndex, html.replace('</head>', `${inject}  </head>`), 'utf8')
}

const ssgOptions: ViteSSGOptions = {
  script: 'async',
  formatting: 'minify',
  beastiesOptions: { publicPath: BASE },
  includedRoutes: () => buildRoutes(),
  onFinished: () => redirectRootToDefaultLocale(),
}

export default defineConfig({
  plugins: [vue()],
  base: BASE,
  ssgOptions,
} as UserConfig)
