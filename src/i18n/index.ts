import { computed } from 'vue'
import { useRoute } from 'vue-router'
import es from './es'
import en from './en'

export type Locale = 'es' | 'en'

const dictionaries = { es, en } as const

export function localeFromPath(path: string | undefined | null): Locale {
  if (path && (path === '/en' || path.startsWith('/en/'))) return 'en'
  return 'es'
}

export function useI18n() {
  const route = useRoute()
  const locale = computed<Locale>(() => localeFromPath(route?.path))
  const t = computed(() => dictionaries[locale.value])
  return { locale, t }
}
