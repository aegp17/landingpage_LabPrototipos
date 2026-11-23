import type { Locale } from '../i18n'

export const SITE_URL = 'https://labprotounet.com'

export const INDEXABLE = false

export const SITE_NAME = 'Laboratorio de Prototipos · UNET'

export function homePath(locale: Locale): string {
  return `/${locale}/`
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`
}

export function altLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es'
}

export function ogLocale(locale: Locale): string {
  return locale === 'es' ? 'es_VE' : 'en_US'
}
