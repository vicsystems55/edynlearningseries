<script setup>
import { LogOut, ShieldCheck, X } from '@lucide/vue'
import { useRouter } from 'vue-router'
import logoUrl from '../assets/logo.png'
import { navigationGroups } from '../data/navigation'
import { useSessionStore } from '../stores/session'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])
const router = useRouter()
const session = useSessionStore()

function logout() {
  session.signOut()
  router.replace('/login')
}
</script>

<template>
  <button v-if="open" class="sidebar-scrim" aria-label="Close navigation" @click="emit('close')" />
  <aside class="admin-sidebar" :class="{ 'is-open': open }">
    <div class="sidebar-brand">
      <img :src="logoUrl" alt="Edyn Learning Series" />
      <div>
        <strong>Mission Control</strong>
        <span>Platform administration</span>
      </div>
      <button class="icon-button sidebar-close" aria-label="Close navigation" @click="emit('close')"><X :size="20" /></button>
    </div>

    <nav class="sidebar-nav" aria-label="Admin navigation">
      <section v-for="group in navigationGroups" :key="group.label">
        <p>{{ group.label }}</p>
        <RouterLink v-for="item in group.items" :key="item.to" :to="item.to" @click="emit('close')">
          <component :is="item.icon" :size="19" />
          <span>{{ item.label }}</span>
        </RouterLink>
      </section>
    </nav>

    <div class="sidebar-footer">
      <div class="security-chip"><ShieldCheck :size="18" /><span>Protected workspace</span></div>
      <button class="sidebar-logout" @click="logout"><LogOut :size="18" /> Sign out</button>
    </div>
  </aside>
</template>
