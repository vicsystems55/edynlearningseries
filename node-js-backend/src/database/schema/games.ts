import { index, integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { publicationStatus } from './enums.js'
import { activities, skills } from './curriculum.js'

export const gameDefinitions = pgTable('game_definitions', {
  id: uuid('id').primaryKey().defaultRandom(),
  key: text('key').notNull(),
  title: text('title').notNull(),
  gameType: text('game_type').notNull(),
  status: publicationStatus('status').notNull().default('DRAFT'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex('game_definitions_key_idx').on(table.key)])

export const gameVersions = pgTable('game_versions', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameDefinitionId: uuid('game_definition_id').notNull().references(() => gameDefinitions.id, { onDelete: 'cascade' }),
  version: integer('version').notNull(),
  configuration: jsonb('configuration').notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex('game_versions_unique_idx').on(table.gameDefinitionId, table.version)])

export const activityGames = pgTable('activity_games', {
  activityId: uuid('activity_id').primaryKey().references(() => activities.id, { onDelete: 'cascade' }),
  gameVersionId: uuid('game_version_id').notNull().references(() => gameVersions.id),
})

export const gameVersionSkills = pgTable('game_version_skills', {
  gameVersionId: uuid('game_version_id').notNull().references(() => gameVersions.id, { onDelete: 'cascade' }),
  skillId: uuid('skill_id').notNull().references(() => skills.id, { onDelete: 'cascade' }),
  weight: integer('weight').notNull().default(100),
}, (table) => [index('game_version_skills_game_idx').on(table.gameVersionId)])
