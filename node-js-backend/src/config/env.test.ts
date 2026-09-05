import { describe, expect, it } from 'vitest'
import { parseEnvironment } from './env.js'

describe('environment configuration', () => {
  it('treats blank optional legacy values as unset', () => {
    const result = parseEnvironment({ SUPABASE_ANON_KEY: '' })
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.SUPABASE_ANON_KEY).toBeUndefined()
  })
})
