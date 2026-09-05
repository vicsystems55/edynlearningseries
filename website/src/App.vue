<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import PublicLayout from './layouts/PublicLayout.vue'
import ParentLayout from './layouts/ParentLayout.vue'
import ChildLayout from './layouts/ChildLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import AppPreloader from './components/AppPreloader.vue'
const route = useRoute()
const loading = ref(true)
const layouts = { public: PublicLayout, parent: ParentLayout, child: ChildLayout, auth: AuthLayout }
const layout = computed(() => layouts[route.meta.layout] || PublicLayout)
</script>
<template>
  <AppPreloader v-if="loading" @complete="loading = false" />
  <Transition name="layout-fade" mode="out-in">
    <component :is="layout" :key="route.meta.layout" />
  </Transition>
</template>
