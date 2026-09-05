import { index, integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { activityType, publicationStatus } from './enums.js'

const timestamps = {
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}

export const worlds = pgTable('worlds', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  description: text('description'),
  status: publicationStatus('status').notNull().default('DRAFT'),
  sortOrder: integer('sort_order').notNull().default(0),
  ...timestamps,
}, (table) => [uniqueIndex('worlds_slug_idx').on(table.slug)])

export const subjects = pgTable('subjects', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  ...timestamps,
}, (table) => [uniqueIndex('subjects_slug_idx').on(table.slug)])

export const lessons = pgTable('lessons', {
  id: uuid('id').primaryKey().defaultRandom(),
  worldId: uuid('world_id').notNull().references(() => worlds.id),
  subjectId: uuid('subject_id').notNull().references(() => subjects.id),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  description: text('description'),
  learningObjectives: jsonb('learning_objectives').notNull().default([]),
  estimatedMinutes: integer('estimated_minutes').notNull().default(5),
  status: publicationStatus('status').notNull().default('DRAFT'),
  sortOrder: integer('sort_order').notNull().default(0),
  ...timestamps,
}, (table) => [
  uniqueIndex('lessons_world_slug_idx').on(table.worldId, table.slug),
  index('lessons_subject_idx').on(table.subjectId),
])

export const activities = pgTable('activities', {
  id: uuid('id').primaryKey().defaultRandom(),
  lessonId: uuid('lesson_id').notNull().references(() => lessons.id, { onDelete: 'cascade' }),
  type: activityType('type').notNull(),
  title: text('title').notNull(),
  instructions: jsonb('instructions').notNull().default({}),
  content: jsonb('content').notNull().default({}),
  completionRule: jsonb('completion_rule').notNull().default({}),
  estimatedMinutes: integer('estimated_minutes').notNull().default(5),
  status: publicationStatus('status').notNull().default('DRAFT'),
  sortOrder: integer('sort_order').notNull().default(0),
  ...timestamps,
}, (table) => [index('activities_lesson_idx').on(table.lessonId)])

export const skills = pgTable('skills', {
  id: uuid('id').primaryKey().defaultRandom(),
  subjectId: uuid('subject_id').notNull().references(() => subjects.id),
  code: text('code').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  ...timestamps,
}, (table) => [uniqueIndex('skills_code_idx').on(table.code)])

export const activitySkills = pgTable('activity_skills', {
  activityId: uuid('activity_id').notNull().references(() => activities.id, { onDelete: 'cascade' }),
  skillId: uuid('skill_id').notNull().references(() => skills.id, { onDelete: 'cascade' }),
  weight: integer('weight').notNull().default(100),
}, (table) => [uniqueIndex('activity_skills_unique_idx').on(table.activityId, table.skillId)])
