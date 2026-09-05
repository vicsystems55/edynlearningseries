import { eq } from 'drizzle-orm'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { db } from '../../database/client.js'
import { profiles } from '../../database/schema/identity.js'
import { supabaseAdmin } from '../../lib/supabase.js'
import type { UserRole } from './auth.types.js'

function bearerToken(request: FastifyRequest) {
  const authorization = request.headers.authorization
  if (!authorization?.startsWith('Bearer ')) return null
  return authorization.slice(7).trim() || null
}

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const token = bearerToken(request)
  if (!token) {
    return reply.code(401).send({ success: false, message: 'Authentication is required.', data: null })
  }
  if (!supabaseAdmin || !db) {
    return reply.code(503).send({ success: false, message: 'Authentication service is not configured.', data: null })
  }

  const { data, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !data.user) {
    return reply.code(401).send({ success: false, message: 'The access token is invalid or expired.', data: null })
  }

  const [profile] = await db
    .select({ id: profiles.id, displayName: profiles.displayName, role: profiles.role })
    .from(profiles)
    .where(eq(profiles.id, data.user.id))
    .limit(1)

  if (!profile) {
    return reply.code(403).send({ success: false, message: 'No Edyn profile is linked to this account.', data: null })
  }

  request.identity = {
    id: profile.id,
    email: data.user.email ?? null,
    displayName: profile.displayName,
    role: profile.role,
  }
}

export function requireRole(...roles: UserRole[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    await authenticate(request, reply)
    if (reply.sent) return
    if (!request.identity || !roles.includes(request.identity.role)) {
      return reply.code(403).send({ success: false, message: 'You do not have permission to perform this action.', data: null })
    }
  }
}
