<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Resources', path: '/resources' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path) => route.path === path

const navigateTo = (path) => {
  router.push(path)
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <div class="default-layout">
    <header class="site-header">
      <div class="logo">
        <div class="logo-main">EDYN</div>
        <div class="logo-sub">LEARNING SERIES</div>
      </div>

      <nav class="nav-links">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <div class="nav-actions">
        <button class="search-btn">🔍</button>
        <button class="login-btn">Log In</button>
        <button class="signup-btn">Sign Up</button>
      </div>

      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Open menu">
        <Menu :size="26" />
      </button>
    </header>

    <div class="drawer-overlay" :class="{ active: mobileMenuOpen }" @click="mobileMenuOpen = false"></div>

    <aside class="mobile-drawer" :class="{ active: mobileMenuOpen }">
      <div class="drawer-header">
        <div>
          <div class="logo-main">EDYN</div>
          <div class="logo-sub">LEARNING SERIES</div>
        </div>

        <button class="drawer-close" @click="mobileMenuOpen = false" aria-label="Close menu">
          <X :size="26" />
        </button>
      </div>

      <nav class="drawer-links">
        <a v-for="item in navItems" :key="item.path" @click.prevent="navigateTo(item.path)">{{ item.name }}</a>
      </nav>

      <div class="drawer-actions">
        <button class="login-btn">Log In</button>
        <button class="signup-btn">Sign Up</button>
      </div>
    </aside>

    <main>
      <router-view />
    </main>

    <footer class="edyn-footer">
      <div class="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C120,10 240,110 360,60 C480,10 600,110 720,60 C840,10 960,110 1080,60 C1200,10 1320,110 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <img src="@/assets/images/1.png" class="footer-bag" alt="EDYN school bag" />
      <img src="@/assets/images/books.png" class="footer-books" alt="EDYN books" />
      <img src="@/assets/images/cup.png" class="footer-cup footer-cup-left" alt="Pencil cup" />
      <img src="@/assets/images/2.png" class="footer-cup footer-cup-right" alt="Pencil cup" />

      <div class="footer-main">
        <div class="footer-hero">
          <div>
            <h2>EDYN</h2>
            <p>LEARNING SERIES</p>
          </div>

          <div class="footer-message">
            <span>💛 Learn Today.</span>
            <strong>Lead Tomorrow.</strong>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <div class="footer-icon">🧭</div>
            <h3>Explore</h3>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <a href="#">Programs</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">💛</div>
            <h3>For Parents</h3>
            <a href="#">Parent Guide</a>
            <a href="#">Progress Tracking</a>
            <a href="#">Learning Tips</a>
            <a href="#">Community</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">📘</div>
            <h3>Resources</h3>
            <a href="#">Worksheets</a>
            <a href="#">Learning Videos</a>
            <a href="#">E-Books</a>
            <a href="#">Activities</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">⭐</div>
            <h3>Company</h3>
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">✈️</div>
            <h3>Connect</h3>
            <div class="footer-socials">
              <span>f</span>
              <span>ig</span>
              <span>yt</span>
              <span>tk</span>
            </div>
            <p>Follow us for tips, updates and fun learning ideas!</p>
          </div>
        </div>

        <div class="footer-newsletter">
          <div class="newsletter-info">
            <div class="mail-icon">✉️</div>
            <div>
              <h3>Stay Updated with EDYN</h3>
              <p>Get tips, resources and updates straight to your inbox.</p>
            </div>
          </div>

          <form class="footer-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div class="footer-bottom-new">
          <p>© 2026 EDYN Learning Series. All rights reserved.</p>
          <p>Proudly Nigerian. Globally Inspired. 🇳🇬</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* layout-specific tweaks kept minimal; styles are mostly in src/style.css */
.mobile-drawer {
  position: fixed;
  right: 0;
  top: 0;
  width: 320px;
  height: 100vh;
  background: white;
  transform: translateX(100%);
  transition: transform 0.28s ease;
  z-index: 40;
  padding: 1rem;
}

.mobile-drawer.active {
  transform: translateX(0);
}

.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.36);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 30;
}

.drawer-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

</style>
