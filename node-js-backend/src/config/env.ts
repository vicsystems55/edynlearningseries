import 'dotenv/config'
import { z } from 'zod'

const optionalString = z.preprocess(
  (value) => value === '' ? undefined : value,
  z.string().min(1).optional(),
)

const optionalUrl = z.preprocess(
  (value) => value === '' ? undefined : value,
  z.url().optional(),
)

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  HOST: z.string().default('0.0.0.0'),
  PORT: z.coerce.number().int().positive().default(3000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
  WEB_ORIGIN: z.string().default('http://localhost:5173,http://localhost:5174'),
  DATABASE_URL: optionalString,
  DIRECT_URL: optionalString,
  SUPABASE_URL: optionalUrl,
  SUPABASE_PUBLISHABLE_KEY: optionalString,
  SUPABASE_ANON_KEY: optionalString,
  SUPABASE_SERVICE_ROLE_KEY: optionalString,
  RESEND_API_KEY: optionalString,
})

export const parseEnvironment = (input: NodeJS.ProcessEnv) => environmentSchema.safeParse(input)

const result = parseEnvironment(process.env)

if (!result.success) {
  console.error('Invalid environment configuration', z.treeifyError(result.error))
  process.exit(1)
}

if (result.data.NODE_ENV === 'production') {
  const required = ['DATABASE_URL', 'SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'] as const
  const missing = required.filter((key) => !result.data[key])
  if (missing.length) throw new Error(`Missing production environment variables: ${missing.join(', ')}`)
}

export const env = result.data
