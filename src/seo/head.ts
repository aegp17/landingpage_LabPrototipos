import { useHead } from '@unhead/vue'
import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'
import type { Locale } from '../i18n'
import { INDEXABLE, SITE_NAME, absoluteUrl, altLocale, ogLocale } from './site'

export interface RouteHeadInput {
  locale: Locale
  path: string
  altPath: string
  title: string
  description: string
}

export function useRouteHead(input: MaybeRefOrGetter<RouteHeadInput>) {
  const data = computed(() => toValue(input))

  useHead(() => {
    const d = data.value
    const canonical = absoluteUrl(d.path)
    const alternate = absoluteUrl(d.altPath)
    const esUrl = d.locale === 'es' ? canonical : alternate
    const enUrl = d.locale === 'en' ? canonical : alternate

    return {
      htmlAttrs: { lang: d.locale },
      title: d.title,
      link: [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'es', href: esUrl },
        { rel: 'alternate', hreflang: 'en', href: enUrl },
        { rel: 'alternate', hreflang: 'x-default', href: esUrl },
      ],
      meta: [
        { name: 'description', content: d.description },
        { name: 'robots', content: INDEXABLE ? 'index, follow' : 'noindex, nofollow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: d.title },
        { property: 'og:description', content: d.description },
        { property: 'og:url', content: canonical },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:locale', content: ogLocale(d.locale) },
        { property: 'og:locale:alternate', content: ogLocale(altLocale(d.locale)) },
      ],
    }
  })
}
