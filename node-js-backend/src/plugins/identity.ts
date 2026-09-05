import type { FastifyInstance } from 'fastify'

export async function registerIdentity(app: FastifyInstance) {
  app.decorateRequest('identity', null)
}
