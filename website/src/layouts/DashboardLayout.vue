<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Menu } from 'lucide-vue-next'

const mobileOpen = ref(false)
const router = useRouter()

const toggle = () => (mobileOpen.value = !mobileOpen.value)
</script>

<template>
  <div class="dashboard-layout">
    <header class="dashboard-header">
      <div class="header-content">
        <h1>Dashboard</h1>
        <button class="mobile-menu" @click="toggle"><Menu :size="22"/></button>
      </div>
    </header>

    <main class="dashboard-main">
      <router-view />
    </main>

    <footer class="dashboard-footer">
      <p>© EDYN Learning Series</p>
    </footer>
  </div>
</template>

<style scoped>
.dashboard-header { background:#0d47a1; color:white; padding:1rem }
.dashboard-main { padding:2rem }
.dashboard-footer { background:#0d47a1; color:white; padding:1rem; text-align:center }
</style>
