<script setup>
import { ArrowRight, Instagram, Facebook, Youtube, Mail } from 'lucide-vue-next'
import BrandLogo from './BrandLogo.vue'
import WaveDivider from './WaveDivider.vue'
</script>

<template>
  <footer class="site-footer">
    <WaveDivider position="bottom" color="#045b31" :height="92" flip />
    <div class="footer-cta shell">
      <div>
        <span class="eyebrow light">Start their learning journey</span>
        <h2>Small steps today.<br><em>Bright futures tomorrow.</em></h2>
      </div>
      <RouterLink class="button button-sun" to="/register">
        Get started free <ArrowRight :size="18" />
      </RouterLink>
    </div>
    <div class="footer-grid shell">
      <div>
        <BrandLogo light />
        <p>Joyful, guided learning designed for curious young minds and the grown-ups cheering them on.</p>
        <div class="socials"><a href="#"><Instagram /></a><a href="#"><Facebook /></a><a href="#"><Youtube /></a></div>
      </div>
      <div><h4>Discover</h4><RouterLink to="/programs">Programs</RouterLink><RouterLink to="/games">Game hub</RouterLink><RouterLink to="/resources">Resources</RouterLink><RouterLink to="/pricing">Pricing</RouterLink></div>
      <div><h4>Company</h4><RouterLink to="/about">About Edyn</RouterLink><RouterLink to="/blog">Parent journal</RouterLink><RouterLink to="/contact">Contact</RouterLink><a href="#">Privacy</a></div>
      <div>
        <h4>Keep growing</h4><p>Weekly play ideas and practical learning tips.</p>
        <form class="footer-form" @submit.prevent><input aria-label="Email address" placeholder="Your email address"><button aria-label="Subscribe"><Mail :size="18" /></button></form>
      </div>
    </div>
    <div class="footer-bottom shell"><span>© 2026 Edyn Learning Series</span><span>Proudly Nigerian. Made for every bright beginning.</span></div>
  </footer>
</template>
