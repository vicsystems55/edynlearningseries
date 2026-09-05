<script setup>
import { ref } from 'vue'
import { ArrowRight, Eye, LockKeyhole, Mail, ShieldCheck } from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import logoUrl from '../assets/logo.png'
import { useSessionStore } from '../stores/session'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const route = useRoute()
const router = useRouter()
const session = useSessionStore()
const isDevelopment = import.meta.env.DEV

async function submit() {
  loading.value = true
  error.value = ''
  try {
    await session.signIn({ email: email.value, password: password.value })
    await router.replace(route.query.redirect || '/dashboard')
  } catch (cause) {
    error.value = cause.message || 'Unable to sign in.'
  } finally {
    loading.value = false
  }
}

async function preview() {
  session.enterDevelopmentPreview()
  await router.replace('/dashboard')
}
</script>

<template>
  <main class="login-page">
    <section class="login-story">
      <div class="login-brand"><img :src="logoUrl" alt="Edyn Learning Series" /><span>Mission Control</span></div>
      <div class="story-copy"><span class="story-icon"><ShieldCheck /></span><h1>One secure place to guide the entire Edyn learning experience.</h1><p>Manage learners, curriculum, games, progress, subscriptions and platform operations.</p></div>
      <small>Authorised Edyn personnel only</small>
    </section>
    <section class="login-form-wrap">
      <form class="login-card" @submit.prevent="submit">
        <div><span class="eyebrow">Secure administration</span><h2>Welcome back</h2><p>Sign in with your administrator account.</p></div>
        <label><span>Email address</span><div><Mail :size="18" /><input v-model="email" required type="email" autocomplete="username" placeholder="admin@edynlearning.com" /></div></label>
        <label><span>Password</span><div><LockKeyhole :size="18" /><input v-model="password" required type="password" autocomplete="current-password" placeholder="Enter your password" /><Eye :size="17" /></div></label>
        <div class="login-options"><label><input type="checkbox" /> Remember this device</label><a href="#">Forgot password?</a></div>
        <p v-if="error" class="form-error">{{ error }}</p>
        <button class="primary-button login-submit" :disabled="loading">{{ loading ? 'Signing in…' : 'Sign in securely' }} <ArrowRight :size="18" /></button>
        <button v-if="isDevelopment" class="preview-button" type="button" @click="preview">Open development preview</button>
        <small>Authentication will be completed through the Edyn API and Supabase Auth.</small>
      </form>
    </section>
  </main>
</template>
