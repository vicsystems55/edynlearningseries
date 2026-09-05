import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '../config/env.js'
import * as schema from './schema/index.js'

const connectionString = env.DATABASE_URL

export const queryClient = connectionString
  ? postgres(connectionString, { prepare: false, max: 10 })
  : null

export const db = queryClient ? drizzle(queryClient, { schema }) : null
