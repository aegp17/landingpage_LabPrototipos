<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from '../i18n'
import { homePath } from '../seo/site'

const { locale, t } = useI18n()

useHead(
  computed(() => ({
    title: t.value.meta.notFoundTitle,
    meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  })),
)
</script>

<template>
  <main class="not-found">
    <h1>{{ t.notFound.title }}</h1>
    <p>{{ t.notFound.lead }}</p>
    <router-link :to="homePath(locale)" class="back">{{ t.notFound.back }}</router-link>
  </main>
</template>

<style scoped>
.not-found {
  display: grid;
  place-content: center;
  gap: 0.75rem;
  padding: 6rem 1.25rem;
  text-align: center;
}

h1 {
  font-size: clamp(1.8rem, 5vw, 2.6rem);
}

p {
  color: var(--muted);
}

.back {
  justify-self: center;
  margin-top: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  background: var(--ink);
  color: var(--surface);
  font-weight: 600;
}
</style>
