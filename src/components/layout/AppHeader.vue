<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../i18n'
import { altLocale, homePath } from '../../seo/site'

const { locale, t } = useI18n()

const other = computed(() => altLocale(locale.value))
</script>

<template>
  <header class="header">
    <router-link :to="homePath(locale)" class="brand">
      <span class="mark" aria-hidden="true">LP</span>
      <span>{{ t.header.brand }}</span>
    </router-link>
    <router-link :to="homePath(other)" :hreflang="other" :aria-label="t.header.switchLabel" class="lang">
      {{ t.header.switchTo }}
    </router-link>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem clamp(1.25rem, 4vw, 3rem);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
}

.mark {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9px;
  background: var(--accent);
  color: var(--surface);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.lang {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
}

.lang:hover,
.lang:focus-visible {
  color: var(--ink);
}
</style>
