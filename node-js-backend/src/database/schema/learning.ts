import { index, integer, jsonb, numeric, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { children } from './identity.js'
import { activities, lessons, skills } from './curriculum.js'
import { gameVersions } from './games.js'
import { attemptStatus, masteryLevel } from './enums.js'

export const gameAttempts = pgTable('game_attempts', {
  id: uuid('id').primaryKey().defaultRandom(),
  childId: uuid('child_id').notNull().references(() => children.id, { onDelete: 'cascade' }),
  activityId: uuid('activity_id').notNull().references(() => activities.id),
  gameVersionId: uuid('game_version_id').notNull().references(() => gameVersions.id),
  status: attemptStatus('status').notNull().default('STARTED'),
  score: integer('score'),
  maximumScore: integer('maximum_score'),
  accuracyPercentage: numeric('accuracy_percentage', { precision: 5, scale: 2 }),
  response: jsonb('response').notNull().default({}),
  startedAt: timestamp('started_at', { withTimezone: true }).notNull().defaultNow(),
  completedAt: timestamp('completed_at', { withTimezone: true }),
}, (table) => [
  index('game_attempts_child_idx').on(table.childId, table.startedAt),
  index('game_attempts_activity_idx').on(table.activityId),
])

export const activityProgress = pgTable('activity_progress', {
  id: uuid('id').primaryKey().defaultRandom(),
  childId: uuid('child_id').notNull().references(() => children.id, { onDelete: 'cascade' }),
  activityId: uuid('activity_id').notNull().references(() => activities.id, { onDelete: 'cascade' }),
  status: text('status').notNull().default('NOT_STARTED'),
  bestScore: integer('best_score').notNull().default(0),
  attemptCount: integer('attempt_count').notNull().default(0),
  timeSpentSeconds: integer('time_spent_seconds').notNull().default(0),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex('activity_progress_unique_idx').on(table.childId, table.activityId)])

export const lessonProgress = pgTable('lesson_progress', {
  id: uuid('id').primaryKey().defaultRandom(),
  childId: uuid('child_id').notNull().references(() => children.id, { onDelete: 'cascade' }),
  lessonId: uuid('lesson_id').notNull().references(() => lessons.id, { onDelete: 'cascade' }),
  progressPercentage: numeric('progress_percentage', { precision: 5, scale: 2 }).notNull().default('0'),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex('lesson_progress_unique_idx').on(table.childId, table.lessonId)])

export const childSkillMastery = pgTable('child_skill_mastery', {
  id: uuid('id').primaryKey().defaultRandom(),
  childId: uuid('child_id').notNull().references(() => children.id, { onDelete: 'cascade' }),
  skillId: uuid('skill_id').notNull().references(() => skills.id, { onDelete: 'cascade' }),
  masteryLevel: masteryLevel('mastery_level').notNull().default('NOT_STARTED'),
  masteryScore: numeric('mastery_score', { precision: 5, scale: 2 }).notNull().default('0'),
  attempts: integer('attempts').notNull().default(0),
  lastPractisedAt: timestamp('last_practised_at', { withTimezone: true }),
  masteredAt: timestamp('mastered_at', { withTimezone: true }),
}, (table) => [uniqueIndex('child_skill_mastery_unique_idx').on(table.childId, table.skillId)])
