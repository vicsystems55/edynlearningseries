<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import BrandLogo from './BrandLogo.vue'

const emit = defineEmits(['complete'])
const root = ref(null)
let timeline

onMounted(() => {
  document.body.classList.add('is-loading')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    setTimeout(() => emit('complete'), 250)
    return
  }

  const ctx = gsap.context(() => {
    timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => emit('complete'),
    })
    timeline
      .from('.preloader-logo', { y: 24, opacity: 0, scale: 0.9, duration: 0.55 })
      .from('.preloader-star', { scale: 0, rotate: -90, stagger: 0.08, duration: 0.35 }, '-=.25')
      .to('.preloader-progress i', { width: '100%', duration: 0.75, ease: 'power2.inOut' }, '-=.25')
      .to('.preloader-content', { y: -16, opacity: 0, duration: 0.35, delay: 0.08 })
      .to(root.value, { yPercent: -100, duration: 0.75, ease: 'power4.inOut' })
  }, root.value)
})

onBeforeUnmount(() => {
  timeline?.kill()
  document.body.classList.remove('is-loading')
})
</script>

<template>
  <div ref="root" class="app-preloader" aria-live="polite" aria-label="Edyn is loading">
    <div class="preloader-doodle preloader-star one">★</div>
    <div class="preloader-doodle preloader-star two">✦</div>
    <div class="preloader-doodle preloader-star three">★</div>
    <div class="preloader-content">
      <div class="preloader-logo"><BrandLogo light /></div>
      <p>Preparing a bright learning adventure…</p>
      <div class="preloader-progress"><i></i></div>
    </div>
  </div>
</template>
