import { z } from 'zod'

export const gameTypeSchema = z.enum([
  'FIND_IT',
  'MULTIPLE_CHOICE',
  'MATCH_IT',
  'COUNT_IT',
  'SORT_IT',
  'SEQUENCE',
  'LISTEN_AND_CHOOSE',
  'MEMORY_MATCH',
  'TRACE_IT',
  'WORLD_MAP',
])

const localizedInstructionsSchema = z.object({
  text: z.string().min(1),
  audioUrl: z.url().optional(),
})

const rewardSchema = z.object({
  xp: z.number().int().min(0).max(1000).default(0),
  coins: z.number().int().min(0).max(1000).default(0),
})

export const findItContentSchema = z.object({
  target: z.string().min(1),
  items: z.array(z.object({
    id: z.string().min(1),
    value: z.string().min(1),
    imageUrl: z.url().optional(),
    isTarget: z.boolean(),
  })).min(2),
  selectionMode: z.enum(['SINGLE', 'MULTIPLE']).default('MULTIPLE'),
})

export const gameDefinitionSchema = z.object({
  schemaVersion: z.literal(1),
  gameType: gameTypeSchema,
  learningObjective: z.string().min(1),
  difficulty: z.enum(['BEGINNER', 'EASY', 'MEDIUM', 'HARD']),
  instructions: localizedInstructionsSchema,
  content: z.record(z.string(), z.unknown()),
  rules: z.object({
    maximumAttempts: z.number().int().positive().max(20).default(3),
    passingScore: z.number().min(0).max(100).default(60),
    timeLimitSeconds: z.number().int().positive().optional(),
  }),
  rewards: rewardSchema,
})

export type GameDefinition = z.infer<typeof gameDefinitionSchema>

export function validateGameDefinition(input: unknown): GameDefinition {
  const definition = gameDefinitionSchema.parse(input)
  if (definition.gameType === 'FIND_IT') findItContentSchema.parse(definition.content)
  return definition
}
