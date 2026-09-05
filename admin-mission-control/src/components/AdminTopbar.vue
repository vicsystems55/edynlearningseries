<script setup>
import { Bell, Menu, Search } from '@lucide/vue'

defineEmits(['open-menu'])
</script>

<template>
  <header class="admin-topbar">
    <button class="icon-button mobile-menu" aria-label="Open navigation" @click="$emit('open-menu')"><Menu /></button>
    <label class="topbar-search">
      <Search :size="18" />
      <input type="search" placeholder="Search learners, content, games..." />
      <kbd>Ctrl K</kbd>
    </label>
    <div class="topbar-actions">
      <button class="icon-button notification-button" aria-label="Notifications"><Bell :size="20" /><span>3</span></button>
      <div class="admin-profile">
        <div class="profile-avatar">EA</div>
        <div><strong>Edyn Admin</strong><span>Platform owner</span></div>
      </div>
    </div>
  </header>
</template>
