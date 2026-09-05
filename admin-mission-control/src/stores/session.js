import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { apiRequest } from '../config/api'

export const useSessionStore = defineStore('session', () => {
  const token = ref(sessionStorage.getItem('edyn_admin_access_token'))
  const admin = ref(null)
  const isAuthenticated = computed(() => Boolean(token.value))

  async function signIn(credentials) {
    const session = await apiRequest('/auth/admin/session', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
    token.value = session.accessToken
    admin.value = session.admin
    sessionStorage.setItem('edyn_admin_access_token', token.value)
  }

  function enterDevelopmentPreview() {
    if (!import.meta.env.DEV) return
    token.value = 'development-preview-only'
    admin.value = { name: 'Edyn Administrator', role: 'Platform owner' }
    sessionStorage.setItem('edyn_admin_access_token', token.value)
  }

  function signOut() {
    token.value = null
    admin.value = null
    sessionStorage.removeItem('edyn_admin_access_token')
  }

  return { admin, isAuthenticated, signIn, signOut, enterDevelopmentPreview }
})
