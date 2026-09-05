import Fastify from 'fastify'
import { env } from './config/env.js'
import { adminRoutes } from './modules/admin/admin.routes.js'
import { authRoutes } from './modules/auth/auth.routes.js'
import { healthRoutes } from './modules/health/health.routes.js'
import { registerIdentity } from './plugins/identity.js'
import { registerSecurity } from './plugins/security.js'

export async function buildApp() {
  const app = Fastify({
    logger: { level: env.LOG_LEVEL },
    requestIdHeader: 'x-request-id',
  })

  await registerSecurity(app)
  await registerIdentity(app)
  await app.register(healthRoutes, { prefix: '/health' })
  await app.register(healthRoutes, { prefix: '/api/v1/health' })
  await app.register(authRoutes, { prefix: '/api/v1/auth' })
  await app.register(adminRoutes, { prefix: '/api/v1/admin' })

  app.setNotFoundHandler(async (_request, reply) => {
    return reply.code(404).send({ success: false, message: 'Route not found.', data: null })
  })

  app.setErrorHandler(async (error, request, reply) => {
    request.log.error(error)
    const candidateStatus = typeof error === 'object'
      && error !== null
      && 'statusCode' in error
      && typeof error.statusCode === 'number'
      ? error.statusCode
      : 500
    const statusCode = candidateStatus < 500 ? candidateStatus : 500
    return reply.code(statusCode).send({
      success: false,
      message: statusCode === 500
        ? 'An unexpected error occurred.'
        : error instanceof Error ? error.message : 'Request failed.',
      data: null,
    })
  })

  return app
}
