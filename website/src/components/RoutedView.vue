<script setup>
import { nextTick, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let animationContext
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const preparePage = (element) => {
  animationContext?.revert()
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger && element?.contains(trigger.trigger)) trigger.kill()
  })

  if (reduceMotion()) return

  animationContext = gsap.context(() => {
    const heroItems = element.querySelectorAll(
      '.hero-copy > *, .page-hero h1, .page-hero p, .page-hero .eyebrow, .about-hero h1, .about-hero p, .pricing-intro > *, .contact-copy > *, .detail-grid > div:first-child > *, .app-page-title > *, .child-welcome > div:first-child > *',
    )

    if (heroItems.length) {
      gsap.from(heroItems, {
        y: 28,
        opacity: 0,
        stagger: 0.075,
        duration: 0.65,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      })
    }

    const revealGroups = element.querySelectorAll(
      '.section-heading, .split-heading, .promise-strip, .culture, .pricing-note, .shop-assurance, .course-resource, .reward-banner',
    )
    revealGroups.forEach((item) => {
      gsap.from(item, {
        y: 34,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: item, start: 'top 88%', once: true },
      })
    })

    const cardGroups = element.querySelectorAll(
      '.program-grid, .resource-row, .games-grid, .shop-grid, .post-grid, .connect-grid, .value-grid, .five-grid, .metrics, .dashboard-programs, .enrolled-grid, .kid-game-grid, .explore-grid, .badges-showcase',
    )
    cardGroups.forEach((group) => {
      gsap.from(group.children, {
        y: 30,
        opacity: 0,
        stagger: 0.07,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: group, start: 'top 87%', once: true },
      })
    })

    const art = element.querySelectorAll('.hero-art, .page-hero-grid > img, .object-art, .store-objects, .detail-image')
    art.forEach((item) => {
      gsap.from(item, {
        x: 45,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      })
    })
  }, element)

  nextTick(() => ScrollTrigger.refresh())
}

const onEnter = (element, done) => {
  if (reduceMotion()) {
    preparePage(element)
    done()
    return
  }
  gsap.fromTo(
    element,
    { opacity: 0, y: 14 },
    {
      opacity: 1,
      y: 0,
      duration: 0.42,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      onComplete: () => {
        preparePage(element)
        done()
      },
    },
  )
}

const onLeave = (element, done) => {
  animationContext?.revert()
  if (reduceMotion()) return done()
  gsap.to(element, { opacity: 0, y: -10, duration: 0.22, ease: 'power2.in', onComplete: done })
}

onBeforeUnmount(() => {
  animationContext?.revert()
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :css="false" mode="out-in" @enter="onEnter" @leave="onLeave">
      <div :key="route.fullPath" class="route-view">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
</template>
