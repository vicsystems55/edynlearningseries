import type { userRole } from '../../database/schema/enums.js'

export type UserRole = (typeof userRole.enumValues)[number]

export type RequestIdentity = {
  id: string
  email: string | null
  displayName: string
  role: UserRole
}

declare module 'fastify' {
  interface FastifyRequest {
    identity: RequestIdentity | null
  }
}
