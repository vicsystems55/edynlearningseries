import { afterAll, describe, expect, it } from 'vitest'
import { buildApp } from './app.js'
import { queryClient } from './database/client.js'

const app = await buildApp()

afterAll(async () => app.close())

describe('health routes', () => {
  it('reports API health', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/v1/health' })
    expect(response.statusCode).toBe(200)
    expect(response.json()).toMatchObject({ success: true, data: { service: 'edyn-api', status: 'ok' } })
  })

  it('reports database readiness for the current environment', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/v1/health/ready' })
    if (queryClient) {
      expect(response.statusCode).toBe(200)
      expect(response.json()).toMatchObject({ success: true, data: { status: 'ready' } })
    } else {
      expect(response.statusCode).toBe(503)
      expect(response.json()).toMatchObject({ success: false, message: 'Database is not configured.' })
    }
  })
})

describe('protected routes', () => {
  it('rejects unauthenticated Mission Control access', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/v1/admin/overview' })
    expect(response.statusCode).toBe(401)
    expect(response.json()).toMatchObject({ success: false, message: 'Authentication is required.' })
  })

  it('validates admin login input before contacting Supabase', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/auth/admin/session',
      payload: { email: 'not-an-email', password: 'short' },
    })
    expect(response.statusCode).toBe(400)
  })
})
