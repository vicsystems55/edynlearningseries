# Edyn Learning Hub - Phase 0 Architecture

## Repository boundary

This repository is the initial Edyn monorepo:

```text
edynlearningseries/
|-- website/             Vue public website and prototype UI
|-- admin-mission-control/ Vue platform administration portal
|-- node-js-backend/     Node.js/TypeScript REST API
|-- flutter-mobile-app/  Flutter parent and learner application
`-- docs/                Architecture decisions and contracts
```

Each application has an independent dependency manifest and build output. The GitHub repository stores source code and documentation only; build verification is run locally without paid automation services.

## Runtime boundary

```text
Vue website  -----------|
Admin Mission Control --|----> Node API ----> Supabase PostgreSQL
Flutter app  -----------|          |          Supabase Auth/Storage
                                   `--------> Resend
```

- GitHub stores the complete monorepo without deployment automation.
- The website, administrator portal, API, and Flutter app can be hosted independently when required.
- Supabase owns PostgreSQL, authentication, and object storage.
- Flutter consumes the same versioned REST API as the Vue CMS.

## Architectural decisions

1. **Modular monolith first.** One API deployment, with strict feature modules. Split services only when scale proves it necessary.
2. **REST under `/api/v1`.** Predictable mobile caching and straightforward generated clients. GraphQL is not required for V1.
3. **PostgreSQL is authoritative.** Scores, progress, unlocks, and rewards are committed server-side in transactions.
4. **Content is versioned.** A published game configuration is immutable. Editing creates a new version.
5. **Rewards use ledgers.** XP and coins are append-only transactions with idempotency keys.
6. **Supabase RLS is defence in depth.** The API still checks parent-child ownership on every protected operation.
7. **Flutter widgets and Flame coexist.** The activity registry selects a renderer from the game type, while attempt submission uses one shared contract.

## Game runtime boundary

```text
GameDefinition JSON
       |
       v
GameRendererRegistry
  |-- FIND_IT          Flutter widgets
  |-- MULTIPLE_CHOICE  Flutter widgets
  |-- MATCH_IT         Flutter widgets
  |-- SORT_IT          Flutter widgets
  |-- MEMORY_MATCH     Flutter widgets or Flame
  `-- WORLD_MAP        Flame
       |
       v
AttemptResult DTO --> API scoring --> progress/reward transaction
```

Flame is for continuous rendering, sprites, particles, character movement, and map scenes. Standard Flutter widgets are the default for accessible educational interactions.

## Initial vertical slice

Phase 0 prepares one future playable slice:

1. Parent authenticates through Supabase.
2. Parent creates a Nursery 1 child profile.
3. API returns Alphabet Forest and the Letter A lesson.
4. Flutter resolves a `FIND_IT` configuration through the renderer registry.
5. The child completes the activity.
6. API validates the submitted response and writes attempt, progress, and XP atomically.
7. Parent sees the result after refresh.

## Environment policy

- Real credentials are never committed.
- `DATABASE_URL` uses Supabase transaction pooling for API runtime traffic.
- `DIRECT_URL` uses session pooling for migrations.
- The database password, Supabase service-role key, and Resend API key belong only in ignored local environment files or a future host's secret store.
- Flutter receives only the public Supabase URL and publishable key.

## Phase 0 exit criteria

- API boots and exposes `/health` and `/api/v1/health`.
- Environment validation fails fast when required production variables are missing.
- Initial schema can be generated as a SQL migration.
- A canonical `FIND_IT` game definition validates in API and Flutter-compatible JSON.
- Flutter shell has feature boundaries and a renderer registry.
- Vue production build remains green.
- Mission Control production build remains green.
- API unit tests and TypeScript compilation pass.
