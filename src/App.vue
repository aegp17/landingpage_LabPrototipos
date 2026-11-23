<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { localeFromPath } from './i18n'

const route = useRoute()

if (typeof document !== 'undefined') {
  watch(
    () => route.path,
    (path) => {
      document.documentElement.lang = localeFromPath(path)
    },
    { immediate: true },
  )
}
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
