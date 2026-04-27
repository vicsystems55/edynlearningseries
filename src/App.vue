<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  const map = {
    default: DefaultLayout,
    dashboard: DashboardLayout
  }
  return map[route.meta.layout] || DefaultLayout
})
</script>

<template>
  <component :is="layoutComponent" />
</template>