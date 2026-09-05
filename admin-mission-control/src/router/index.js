import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { public: true, title: 'Sign in' },
  },
  {
    path: '/',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', name: 'dashboard', component: () => import('../views/DashboardView.vue'), meta: { title: 'Command overview' } },
      { path: 'users', name: 'users', component: () => import('../views/ModuleView.vue'), meta: { title: 'Parents & accounts', module: 'users' } },
      { path: 'learners', name: 'learners', component: () => import('../views/ModuleView.vue'), meta: { title: 'Learners', module: 'learners' } },
      { path: 'curriculum', name: 'curriculum', component: () => import('../views/ModuleView.vue'), meta: { title: 'Curriculum', module: 'curriculum' } },
      { path: 'games', name: 'games', component: () => import('../views/ModuleView.vue'), meta: { title: 'Game library', module: 'games' } },
      { path: 'content', name: 'content', component: () => import('../views/ModuleView.vue'), meta: { title: 'Content studio', module: 'content' } },
      { path: 'progress', name: 'progress', component: () => import('../views/ModuleView.vue'), meta: { title: 'Learning analytics', module: 'progress' } },
      { path: 'rewards', name: 'rewards', component: () => import('../views/ModuleView.vue'), meta: { title: 'Rewards & economy', module: 'rewards' } },
      { path: 'subscriptions', name: 'subscriptions', component: () => import('../views/ModuleView.vue'), meta: { title: 'Plans & subscriptions', module: 'subscriptions' } },
      { path: 'support', name: 'support', component: () => import('../views/ModuleView.vue'), meta: { title: 'Support centre', module: 'support' } },
      { path: 'audit-logs', name: 'audit-logs', component: () => import('../views/ModuleView.vue'), meta: { title: 'Audit logs', module: 'audit' } },
      { path: 'settings', name: 'settings', component: () => import('../views/ModuleView.vue'), meta: { title: 'System settings', module: 'settings' } },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to) => {
  document.title = `${to.meta.title || 'Mission Control'} | Edyn`
  const hasSession = Boolean(sessionStorage.getItem('edyn_admin_access_token'))
  if (!to.meta.public && !hasSession) return { name: 'login', query: { redirect: to.fullPath } }
  if (to.name === 'login' && hasSession) return { name: 'dashboard' }
})

export default router
