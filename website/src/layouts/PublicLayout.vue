<script setup>
import { ref } from 'vue'
import { Menu, X, Search, ShoppingBag } from 'lucide-vue-next'
import BrandLogo from '../components/BrandLogo.vue'
import SiteFooter from '../components/SiteFooter.vue'
import RoutedView from '../components/RoutedView.vue'
const open = ref(false)
const links = [['Home','/'],['About','/about'],['Programs','/programs'],['Games','/games'],['Resources','/resources'],['Pricing','/pricing'],['Journal','/blog'],['Contact','/contact']]
</script>
<template><div class="public-layout"><header class="site-header"><div class="shell header-inner"><BrandLogo/><nav :class="['main-nav',{open}]"><RouterLink v-for="item in links" :key="item[1]" :to="item[1]" @click="open=false">{{item[0]}}</RouterLink><div class="mobile-auth"><RouterLink to="/login">Log in</RouterLink><RouterLink class="button" to="/register">Start free</RouterLink></div></nav><div class="header-actions"><button class="icon-button" aria-label="Search"><Search :size="19"/></button><RouterLink class="icon-button cart" to="/resources" aria-label="Cart"><ShoppingBag :size="19"/><b>2</b></RouterLink><RouterLink class="text-link" to="/login">Log in</RouterLink><RouterLink class="button small" to="/register">Start free</RouterLink><button class="menu-button" @click="open=!open" :aria-expanded="open"><X v-if="open"/><Menu v-else/></button></div></div></header><main><RoutedView/></main><SiteFooter/></div></template>
