<script setup>
import { Home, BookOpen, Gamepad2, PencilLine, Palette, Trophy, Volume2, LockKeyhole } from 'lucide-vue-next'
import BrandLogo from '../components/BrandLogo.vue'
import RoutedView from '../components/RoutedView.vue'
const links=[['Home','home',Home],['Learn','learn',BookOpen],['Play','games',Gamepad2],['Practice','practice',PencilLine],['Create','create',Palette],['Stars','achievements',Trophy]]
</script>
<template><div class="child-layout"><header class="child-header"><BrandLogo compact/><nav><RouterLink v-for="[label,path,icon] in links" :key="path" :to="`/play/tunde/${path}`"><component :is="icon"/><span>{{label}}</span></RouterLink></nav><div class="child-tools"><button aria-label="Read this page"><Volume2/></button><RouterLink to="/app" aria-label="Parent area"><LockKeyhole/></RouterLink><span class="star-count">★ 180</span><span class="avatar big">T</span></div></header><main class="child-main"><RoutedView/></main></div></template>
