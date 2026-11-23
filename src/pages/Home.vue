<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'
import { useRouteHead } from '../seo/head'
import { altLocale, homePath } from '../seo/site'

const { locale, t } = useI18n()

useRouteHead(
  computed(() => ({
    locale: locale.value,
    path: homePath(locale.value),
    altPath: homePath(altLocale(locale.value)),
    title: t.value.meta.title,
    description: t.value.meta.description,
  })),
)
</script>

<template>
  <main class="home">
    <section class="hero">
      <p class="eyebrow">{{ t.hero.eyebrow }}</p>
      <h1>{{ t.hero.title }}</h1>
      <p class="lead">{{ t.hero.lead }}</p>
      <p class="status"><span class="dot" aria-hidden="true"></span>{{ t.hero.status }}</p>
    </section>
  </main>
</template>

<style scoped>
.home {
  display: grid;
  place-items: center;
  padding: clamp(3rem, 10vh, 7rem) 1.25rem;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 48px 48px;
  background-position: center;
}

.hero {
  max-width: 46rem;
  text-align: center;
  background: var(--bg);
  padding: 2.5rem 2rem;
  border-radius: 20px;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

h1 {
  margin-top: 0.75rem;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.lead {
  margin-top: 1rem;
  font-size: 1.15rem;
  color: var(--muted);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.9rem;
  font-weight: 500;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--live);
}
</style>
