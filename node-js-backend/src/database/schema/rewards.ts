import { index, integer, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { children } from './identity.js'
import { rewardType } from './enums.js'

export const rewardTransactions = pgTable('reward_transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  childId: uuid('child_id').notNull().references(() => children.id, { onDelete: 'cascade' }),
  type: rewardType('type').notNull(),
  amount: integer('amount').notNull(),
  reason: text('reason').notNull(),
  sourceType: text('source_type').notNull(),
  sourceId: uuid('source_id'),
  idempotencyKey: text('idempotency_key').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  uniqueIndex('reward_transactions_idempotency_idx').on(table.idempotencyKey),
  index('reward_transactions_child_idx').on(table.childId, table.createdAt),
])
