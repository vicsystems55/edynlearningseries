import { date, index, integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { userRole } from './enums.js'

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  displayName: text('display_name').notNull(),
  role: userRole('role').notNull().default('PARENT'),
  timezone: text('timezone').notNull().default('Africa/Lagos'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const children = pgTable('children', {
  id: uuid('id').primaryKey().defaultRandom(),
  parentId: uuid('parent_id').notNull().references(() => profiles.id, { onDelete: 'cascade' }),
  firstName: text('first_name').notNull(),
  dateOfBirth: date('date_of_birth'),
  classLevel: text('class_level'),
  avatarKey: text('avatar_key'),
  preferredLanguage: text('preferred_language').notNull().default('en'),
  learningPreferences: jsonb('learning_preferences').notNull().default({}),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index('children_parent_idx').on(table.parentId),
  uniqueIndex('children_parent_name_idx').on(table.parentId, table.firstName),
])
