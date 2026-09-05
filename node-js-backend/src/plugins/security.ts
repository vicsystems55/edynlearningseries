import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import type { FastifyInstance } from 'fastify'
import { env } from '../config/env.js'

export async function registerSecurity(app: FastifyInstance) {
  await app.register(helmet, { contentSecurityPolicy: false })
  await app.register(cors, {
    origin: env.WEB_ORIGIN.split(',').map((origin) => origin.trim()),
    credentials: true,
  })
  await app.register(rateLimit, {
    max: 120,
    timeWindow: '1 minute',
  })
}
