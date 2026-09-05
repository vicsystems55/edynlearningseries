<script setup>
defineProps({ label: String, value: String, change: String, tone: String, icon: Object })
</script>

<template>
  <article class="metric-card" :class="`tone-${tone}`">
    <div class="metric-icon"><component :is="icon" :size="22" /></div>
    <div class="metric-copy"><span>{{ label }}</span><strong>{{ value }}</strong><small>{{ change }}</small></div>
  </article>
</template>
