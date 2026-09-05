<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminTopbar from '../components/AdminTopbar.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="admin-shell">
    <AdminSidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <div class="admin-workspace">
      <AdminTopbar @open-menu="sidebarOpen = true" />
      <main class="admin-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>
