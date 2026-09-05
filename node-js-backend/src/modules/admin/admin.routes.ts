import type { FastifyPluginAsync } from 'fastify'
import { requireRole } from '../../shared/auth/auth.guard.js'
import { success } from '../../shared/http/api-response.js'

export const adminRoutes: FastifyPluginAsync = async (app) => {
  app.get('/overview', { preHandler: requireRole('ADMIN') }, async (request) => success({
    administrator: request.identity,
    modules: ['accounts', 'learners', 'curriculum', 'games', 'content', 'analytics', 'rewards', 'subscriptions', 'support', 'audit'],
  }, 'Mission Control access confirmed.'))
}
