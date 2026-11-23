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
      <div class="copy">
        <p class="eyebrow">{{ t.hero.eyebrow }}</p>
        <h1>{{ t.hero.title }}</h1>
        <p class="lead">{{ t.hero.lead }}</p>
        <p class="status"><span class="dot" aria-hidden="true"></span>{{ t.hero.status }}</p>
        <ol class="steps" :aria-label="t.hero.stepsLabel">
          <li v-for="(step, i) in t.hero.steps" :key="step" :class="['step', i === 0 ? 'done' : i === 1 ? 'now' : 'next']">
            <span class="mark" aria-hidden="true"></span>
            <span>{{ step }}</span>
            <span class="sr">{{ i === 0 ? t.hero.stepDone : i === 1 ? t.hero.stepNow : t.hero.stepNext }}</span>
          </li>
        </ol>
      </div>

      <div class="scene" aria-hidden="true">
        <svg viewBox="10 60 470 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#f6c48f" stop-opacity="0.75" />
              <stop offset="60%" stop-color="#f2c9a0" stop-opacity="0.28" />
              <stop offset="100%" stop-color="#f2c9a0" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffe2b3" stop-opacity="0.85" />
              <stop offset="100%" stop-color="#ffe2b3" stop-opacity="0" />
            </linearGradient>
          </defs>

          <circle cx="250" cy="215" r="150" fill="url(#glow)" />
          <ellipse cx="240" cy="326" rx="200" ry="14" fill="#2b2520" opacity="0.08" />
          <rect x="40" y="300" width="400" height="16" rx="8" fill="#9a6b47" />
          <rect x="40" y="300" width="400" height="5" rx="2.5" fill="#b8865e" />

          <g transform="translate(32 0)">
            <path d="M214 160 L300 300 L150 300 Z" fill="url(#beam)" />
            <ellipse cx="96" cy="299" rx="34" ry="7" fill="#2b2520" />
            <path d="M96 296 L130 200 L196 150" fill="none" stroke="#2b2520" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="130" cy="200" r="7" fill="#2b2520" />
            <g transform="rotate(32 205 150)">
              <path d="M184 128 L226 128 L240 168 L170 168 Z" fill="#b5552f" />
              <ellipse cx="205" cy="168" rx="35" ry="6" fill="#8f3f20" />
            </g>
          </g>

          <g class="gear">
            <circle cx="236" cy="266" r="30" fill="none" stroke="#8a9a7b" stroke-width="13" stroke-dasharray="10.5 7" />
            <circle cx="236" cy="266" r="21" fill="#8a9a7b" />
            <circle cx="236" cy="266" r="8" fill="#f7f1e8" />
          </g>

          <g>
            <path d="M282 252 L308 238 L334 252 L308 266 Z" fill="#f0dcc2" />
            <path d="M282 252 L282 286 L308 300 L308 266 Z" fill="#dcbd98" />
            <path d="M334 252 L334 286 L308 300 L308 266 Z" fill="#c9a27d" />
          </g>

          <g class="mug">
            <path class="steam s1" d="M410 254 C402 244 418 236 410 224" fill="none" stroke="#c9b8a6" stroke-width="4" stroke-linecap="round" />
            <path class="steam s2" d="M424 254 C416 244 432 236 424 224" fill="none" stroke="#c9b8a6" stroke-width="4" stroke-linecap="round" />
            <rect x="398" y="262" width="38" height="38" rx="8" fill="#fffaf3" stroke="#2b2520" stroke-width="3.5" />
            <path d="M436 271 C450 271 450 291 436 291" fill="none" stroke="#2b2520" stroke-width="3.5" />
            <rect x="398" y="273" width="38" height="8" fill="#b5552f" opacity="0.85" />
          </g>

          <g class="cat">
            <g class="tail">
              <path d="M350 295 C334 292 329 276 338 262" fill="none" stroke="#e8892f" stroke-width="8" stroke-linecap="round" />
              <path d="M334 272 L340 270" stroke="#c96a1b" stroke-width="3" stroke-linecap="round" />
            </g>
            <path d="M346 300 C343 272 354 254 370 252 C387 252 395 270 394 300 Z" fill="#e8892f" />
            <path d="M352 272 C357 270 361 271 364 274 M350 282 C355 280 359 281 362 284 M352 291 C356 289 360 290 362 293" fill="none" stroke="#c96a1b" stroke-width="3" stroke-linecap="round" />
            <ellipse cx="383" cy="277" rx="8" ry="14" fill="#f6d7b0" />
            <ellipse cx="356" cy="299" rx="10" ry="4" fill="#d97a25" />
            <path d="M362 230 L363 212 L374 224 Z M380 223 L390 211 L392 229 Z" fill="#e8892f" />
            <path d="M364.5 226 L365 216 L371 223 Z M382.5 223 L389 215 L390 226 Z" fill="#eaa08f" />
            <circle cx="376" cy="238" r="17" fill="#e8892f" />
            <path d="M372 222.5 L373 228 M378 221.5 L378 227" stroke="#c96a1b" stroke-width="2.5" stroke-linecap="round" />
            <ellipse cx="382" cy="245" rx="8" ry="5.5" fill="#f6d7b0" />
            <path d="M380 241 L386 241 L383 244 Z" fill="#c9605a" />
            <g class="eyes">
              <ellipse cx="370" cy="236" rx="2" ry="2.8" fill="#2b2520" />
              <ellipse cx="382" cy="235" rx="2" ry="2.8" fill="#2b2520" />
            </g>
            <path d="M389 245 L400 242 M389 247.5 L400 249" stroke="#2b2520" stroke-width="1" stroke-linecap="round" opacity="0.5" />
            <g class="paw">
              <path d="M386 268 C390 278 392 288 392 296" fill="none" stroke="#e8892f" stroke-width="8" stroke-linecap="round" />
              <ellipse cx="393" cy="297" rx="6" ry="4" fill="#f6d7b0" />
            </g>
          </g>

          <g transform="translate(-4 38)">
            <path d="M70 224 C58 196 66 176 82 168 C84 188 82 206 70 224 Z" fill="#8a9a7b" />
            <path d="M70 224 C80 200 98 192 112 194 C104 210 90 220 70 224 Z" fill="#a3b292" />
            <path d="M70 226 C56 214 42 212 34 216 C44 226 56 230 70 226 Z" fill="#a3b292" />
          </g>
          <path d="M50 266 L82 266 L78 300 L54 300 Z" fill="#c4683f" />
          <rect x="47" y="260" width="38" height="9" rx="3" fill="#b5552f" />
        </svg>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: clamp(2.5rem, 8vh, 6rem) 1.25rem;
  background:
    radial-gradient(40rem 28rem at 12% 8%, rgba(242, 201, 160, 0.45), transparent 70%),
    radial-gradient(36rem 26rem at 92% 92%, rgba(138, 154, 123, 0.22), transparent 70%),
    var(--bg);
}

.hero {
  width: 100%;
  max-width: 68rem;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(1.5rem, 5vw, 4rem);
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

h1 {
  margin-top: 0.9rem;
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(2.6rem, 6.5vw, 4.6rem);
  letter-spacing: -0.02em;
  line-height: 1.02;
}

.lead {
  margin-top: 1.2rem;
  max-width: 32rem;
  font-size: 1.15rem;
  color: var(--muted);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.8rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 6px 18px -12px rgba(43, 37, 32, 0.45);
  font-weight: 500;
}

.dot {
  position: relative;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: var(--accent);
}

.dot::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  opacity: 0;
  animation: pulse 2.4s ease-out infinite;
}

.steps {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.4rem;
  margin-top: 1.6rem;
  font-size: 0.92rem;
  color: var(--muted);
}

.step {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.step .mark {
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 50%;
  border: 2px solid var(--sage);
  display: inline-grid;
  place-items: center;
}

.step.done .mark {
  background: var(--sage);
}

.step.done .mark::after {
  content: '';
  width: 0.28rem;
  height: 0.5rem;
  margin-top: -0.12rem;
  border: solid var(--surface);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.step.now {
  color: var(--ink);
  font-weight: 600;
}

.step.now .mark {
  border-color: var(--accent);
  background: radial-gradient(circle, var(--accent) 0 35%, transparent 40%);
}

.step.next .mark {
  border-style: dashed;
  border-color: #c9b8a6;
}

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.scene svg {
  width: 100%;
  height: auto;
  max-width: 34rem;
  margin-inline: auto;
  display: block;
}

.gear {
  transform-box: fill-box;
  transform-origin: center;
  animation: spin 24s linear infinite;
}

.steam {
  animation: rise 3.2s ease-in-out infinite;
  opacity: 0;
}

.steam.s2 {
  animation-delay: 1.2s;
}

.mug,
.paw,
.tail,
.eyes {
  transform-box: fill-box;
}

.mug {
  transform-origin: 100% 100%;
  animation: knock 14s ease-in infinite;
}

.paw {
  transform-origin: 0% 0%;
  animation: swipe 14s ease-in-out infinite;
}

.tail {
  transform-origin: 100% 100%;
  animation: wag 3.6s ease-in-out infinite alternate;
}

.eyes {
  transform-origin: center;
  animation: blink 14s linear infinite;
}

@keyframes knock {
  0%,
  74% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  78% {
    transform: translate(8px, 0) rotate(0deg);
    opacity: 1;
  }
  82% {
    transform: translate(18px, 2px) rotate(35deg);
    opacity: 1;
  }
  90% {
    transform: translate(34px, 90px) rotate(120deg);
    opacity: 1;
  }
  92% {
    transform: translate(36px, 110px) rotate(140deg);
    opacity: 0;
  }
  97% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes swipe {
  0%,
  66% {
    transform: translate(0, 0) rotate(0deg);
  }
  70% {
    transform: translate(-3px, -8px) rotate(-12deg);
  }
  74% {
    transform: translate(6px, -2px) rotate(0deg);
  }
  78% {
    transform: translate(10px, 0) rotate(0deg);
  }
  84%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes wag {
  from {
    transform: rotate(-8deg);
  }
  to {
    transform: rotate(10deg);
  }
}

@keyframes blink {
  0%,
  28%,
  32%,
  56%,
  60%,
  100% {
    transform: scaleY(1);
  }
  30%,
  58% {
    transform: scaleY(0.1);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rise {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  35% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
    transform: scale(0.6);
  }
  100% {
    opacity: 0;
    transform: scale(1.6);
  }
}

@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .lead {
    margin-inline: auto;
  }

  .steps {
    justify-content: center;
  }

  .scene {
    order: -1;
  }

  .scene svg {
    max-width: 22rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gear,
  .steam,
  .dot::after,
  .mug,
  .paw,
  .tail,
  .eyes {
    animation: none;
  }

  .steam {
    opacity: 0.7;
  }
}
</style>
