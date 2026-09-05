<script setup>
import logo from '../assets/images/logo.png'

defineProps({ compact: Boolean, light: Boolean })
</script>

<template>
  <RouterLink to="/" class="brand" :class="{ compact, light }" aria-label="Edyn Learning Series home">
    <img class="brand-logo-image" :src="logo" alt="Edyn Learning Series">
  </RouterLink>
</template>
