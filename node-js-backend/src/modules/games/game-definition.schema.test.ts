import { describe, expect, it } from 'vitest'
import { validateGameDefinition } from './game-definition.schema.js'

const validFindItGame = {
  schemaVersion: 1,
  gameType: 'FIND_IT',
  learningObjective: 'Recognise uppercase A',
  difficulty: 'BEGINNER',
  instructions: { text: 'Find every uppercase A.' },
  content: {
    target: 'A',
    selectionMode: 'MULTIPLE',
    items: [
      { id: '1', value: 'A', isTarget: true },
      { id: '2', value: 'D', isTarget: false },
      { id: '3', value: 'A', isTarget: true },
    ],
  },
  rules: { maximumAttempts: 3, passingScore: 60 },
  rewards: { xp: 10, coins: 2 },
}

describe('gameDefinitionSchema', () => {
  it('accepts a valid Find It configuration', () => {
    expect(validateGameDefinition(validFindItGame).gameType).toBe('FIND_IT')
  })

  it('rejects an empty Find It item collection', () => {
    expect(() => validateGameDefinition({
      ...validFindItGame,
      content: { target: 'A', selectionMode: 'MULTIPLE', items: [] },
    })).toThrow()
  })
})
