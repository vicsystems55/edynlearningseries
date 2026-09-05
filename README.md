# Edyn Learning Series

Edyn is a learning platform for children, parents, and educators. This repository is the Phase 0 monorepo for the public website, the Node.js API, and the Flutter learning/game application.

## Repository map

```text
.
|-- website             Vue 3 public website and web portals
|-- admin-mission-control  Vue 3 platform administration portal
|-- node-js-backend     Fastify + TypeScript + Drizzle API
|-- flutter-mobile-app  Flutter app with selective Flame game scenes
`-- docs                Architecture and delivery notes
```

## Local development

### Website

```bash
cd website
npm install
npm run dev
```

### API

```bash
cd node-js-backend
copy .env.example .env
npm install
npm run dev
```

Replace every placeholder in `node-js-backend/.env` locally. Never commit database passwords, service-role keys, or provider API keys.

### Admin Mission Control

```bash
cd admin-mission-control
copy .env.example .env
npm install
npm run dev
```

The admin application runs on port `5174` and connects to the versioned Node API.

### Flutter app

```bash
cd flutter-mobile-app
flutter pub get
flutter run --dart-define=SUPABASE_URL=... --dart-define=SUPABASE_PUBLISHABLE_KEY=...
```

The initial learner slice is available at `/learn/alphabet-forest` and demonstrates a Flutter UI activity plus a Flame-powered world map.

## Verification

```bash
cd website
npm run build

cd ../admin-mission-control
npm run build

cd ../node-js-backend
npm run typecheck
npm test
npm run build

cd ../flutter-mobile-app
flutter analyze
flutter test
flutter build web
```

See [Phase 0 architecture](docs/phase-0-architecture.md) for system boundaries and [the release runbook](docs/phase-0-runbook.md) for migration, administrator bootstrap, deployment, and smoke testing.
