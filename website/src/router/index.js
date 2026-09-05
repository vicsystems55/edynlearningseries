import { createRouter, createWebHistory } from 'vue-router'

const publicPage = (name) => () => import(`../views/public/${name}.vue`)

const routes = [
  { path: '/', name: 'home', component: publicPage('HomePage'), meta: { layout: 'public' } },
  { path: '/about', name: 'about', component: publicPage('AboutPage'), meta: { layout: 'public' } },
  { path: '/learn', redirect: '/programs' },
  { path: '/programs', name: 'programs', component: publicPage('ProgramsPage'), meta: { layout: 'public' } },
  { path: '/courses', redirect: '/programs' },
  { path: '/courses/:slug', name: 'course-detail', component: publicPage('CourseDetailPage'), meta: { layout: 'public' } },
  { path: '/games', name: 'games', component: publicPage('GamesPage'), meta: { layout: 'public' } },
  { path: '/resources', name: 'resources', component: publicPage('ResourcesPage'), meta: { layout: 'public' } },
  { path: '/resources/:slug', name: 'resource-detail', component: publicPage('ResourceDetailPage'), meta: { layout: 'public' } },
  { path: '/pricing', name: 'pricing', component: publicPage('PricingPage'), meta: { layout: 'public' } },
  { path: '/blog', name: 'blog', component: publicPage('BlogPage'), meta: { layout: 'public' } },
  { path: '/contact', name: 'contact', component: publicPage('ContactPage'), meta: { layout: 'public' } },
  { path: '/login', name: 'login', component: () => import('../views/auth/AuthPage.vue'), meta: { layout: 'auth', mode: 'login' } },
  { path: '/register', name: 'register', component: () => import('../views/auth/AuthPage.vue'), meta: { layout: 'auth', mode: 'register' } },
  { path: '/app', name: 'dashboard', component: () => import('../views/parent/ParentDashboard.vue'), meta: { layout: 'parent' } },
  { path: '/app/children', name: 'children', component: () => import('../views/parent/ChildrenPage.vue'), meta: { layout: 'parent' } },
  { path: '/app/children/:id', redirect: (to) => `/app/children/${to.params.id}/learning` },
  { path: '/app/children/:id/learning', name: 'child-learning', component: () => import('../views/parent/LearningPage.vue'), meta: { layout: 'parent' } },
  { path: '/app/children/:id/progress', name: 'progress', component: () => import('../views/parent/ProgressPage.vue'), meta: { layout: 'parent' } },
  { path: '/app/children/:id/achievements', name: 'parent-achievements', component: () => import('../views/parent/ProgressPage.vue'), meta: { layout: 'parent' } },
  { path: '/app/resources', redirect: '/resources' },
  { path: '/app/purchases', name: 'purchases', component: () => import('../views/parent/AccountPage.vue'), meta: { layout: 'parent', section: 'Purchases' } },
  { path: '/app/subscription', name: 'subscription', component: () => import('../views/parent/AccountPage.vue'), meta: { layout: 'parent', section: 'Subscription' } },
  { path: '/app/profile', name: 'profile', component: () => import('../views/parent/AccountPage.vue'), meta: { layout: 'parent', section: 'Profile' } },
  { path: '/app/settings', name: 'settings', component: () => import('../views/parent/AccountPage.vue'), meta: { layout: 'parent', section: 'Settings' } },
  { path: '/play/:childId', redirect: (to) => `/play/${to.params.childId}/home` },
  { path: '/play/:childId/home', name: 'play-home', component: () => import('../views/child/ChildHome.vue'), meta: { layout: 'child' } },
  { path: '/play/:childId/learn', name: 'play-learn', component: () => import('../views/child/ChildExplore.vue'), meta: { layout: 'child', section: 'Learn' } },
  { path: '/play/:childId/games', name: 'play-games', component: () => import('../views/child/ChildExplore.vue'), meta: { layout: 'child', section: 'Games' } },
  { path: '/play/:childId/practice', name: 'play-practice', component: () => import('../views/child/ChildExplore.vue'), meta: { layout: 'child', section: 'Practice' } },
  { path: '/play/:childId/create', name: 'play-create', component: () => import('../views/child/ChildExplore.vue'), meta: { layout: 'child', section: 'Create' } },
  { path: '/play/:childId/achievements', name: 'play-achievements', component: () => import('../views/child/ChildExplore.vue'), meta: { layout: 'child', section: 'Achievements' } },
  { path: '/play/:childId/activity/:slug', name: 'activity', component: () => import('../views/child/ActivityPlayer.vue'), meta: { layout: 'child' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFound.vue'), meta: { layout: 'public' } },
]

const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0, behavior: 'smooth' }) })
export default router
