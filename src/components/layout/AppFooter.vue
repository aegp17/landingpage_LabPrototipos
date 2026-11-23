<script setup lang="ts">
import { useI18n } from '../../i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>© {{ year }} {{ t.header.brand }} · {{ t.footer.university }} · {{ t.footer.place }}</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);
  border-top: 1px solid var(--line);
  background: var(--surface);
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}
</style>
