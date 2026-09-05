import { createClient } from '@supabase/supabase-js'
import { env } from '../config/env.js'

const authOptions = {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
}

const publicKey = env.SUPABASE_PUBLISHABLE_KEY ?? env.SUPABASE_ANON_KEY

export const supabasePublic = env.SUPABASE_URL && publicKey
  ? createClient(env.SUPABASE_URL, publicKey, authOptions)
  : null

export const supabaseAdmin = env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, authOptions)
  : null
