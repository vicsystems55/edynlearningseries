import { eq } from 'drizzle-orm'
import type { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import { db } from '../../database/client.js'
import { profiles } from '../../database/schema/identity.js'
import { supabasePublic } from '../../lib/supabase.js'
import { authenticate } from '../../shared/auth/auth.guard.js'
import { success } from '../../shared/http/api-response.js'

const credentialsSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

export const authRoutes: FastifyPluginAsync = async (app) => {
  app.post('/admin/session', {
    config: { rateLimit: { max: 8, timeWindow: '10 minutes' } },
  }, async (request, reply) => {
    const parsed = credentialsSchema.safeParse(request.body)
    if (!parsed.success) {
      return reply.code(400).send({ success: false, message: 'Enter a valid email address and password.', data: null })
    }
    if (!supabasePublic || !db) {
      return reply.code(503).send({ success: false, message: 'Authentication service is not configured.', data: null })
    }

    const { data, error } = await supabasePublic.auth.signInWithPassword(parsed.data)
    if (error || !data.session || !data.user) {
      return reply.code(401).send({ success: false, message: 'The email address or password is incorrect.', data: null })
    }

    const [profile] = await db
      .select({ id: profiles.id, displayName: profiles.displayName, role: profiles.role })
      .from(profiles)
      .where(eq(profiles.id, data.user.id))
      .limit(1)

    if (!profile || profile.role !== 'ADMIN') {
      await supabasePublic.auth.signOut()
      return reply.code(403).send({ success: false, message: 'This account does not have administrator access.', data: null })
    }

    return success({
      accessToken: data.session.access_token,
      expiresAt: data.session.expires_at ?? null,
      admin: {
        id: profile.id,
        email: data.user.email ?? null,
        name: profile.displayName,
        role: profile.role,
      },
    }, 'Administrator signed in.')
  })

  app.get('/me', { preHandler: authenticate }, async (request) =>
    success(request.identity, 'Authenticated profile loaded.'))
}
