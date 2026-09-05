import type { FastifyPluginAsync } from 'fastify'
import { queryClient } from '../../database/client.js'
import { success } from '../../shared/http/api-response.js'

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', async () => success({
    service: 'edyn-api',
    status: 'ok',
    timestamp: new Date().toISOString(),
  }, 'Edyn API is healthy.'))

  app.get('/ready', async (_request, reply) => {
    if (!queryClient) {
      return reply.code(503).send({ success: false, message: 'Database is not configured.', data: null })
    }
    try {
      await queryClient`select 1 as ready`
      return success({ service: 'edyn-api', status: 'ready' }, 'Edyn API is ready.')
    } catch {
      return reply.code(503).send({ success: false, message: 'Database is unavailable.', data: null })
    }
  })
}
