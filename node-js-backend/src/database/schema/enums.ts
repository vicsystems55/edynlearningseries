import { pgEnum } from 'drizzle-orm/pg-core'

export const userRole = pgEnum('user_role', ['PARENT', 'ADMIN'])
export const publicationStatus = pgEnum('publication_status', ['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'])
export const activityType = pgEnum('activity_type', ['VIDEO', 'AUDIO', 'TEXT', 'GAME', 'QUIZ', 'WORKSHEET', 'PRACTICE'])
export const attemptStatus = pgEnum('attempt_status', ['STARTED', 'COMPLETED', 'ABANDONED'])
export const masteryLevel = pgEnum('mastery_level', ['NOT_STARTED', 'INTRODUCED', 'PRACTISING', 'DEVELOPING', 'MASTERED'])
export const rewardType = pgEnum('reward_type', ['XP', 'COIN'])
