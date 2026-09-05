# Edyn API

Modular TypeScript API for Edyn Learning Hub.

## Local setup

1. Copy `.env.example` to `.env`.
2. Replace placeholder secrets locally.
3. Run `npm install`.
4. Review the SQL files in `drizzle/`.
5. Run `npm run db:migrate` when `DIRECT_URL` is configured.
6. Run `npm run dev`.

Never commit `.env` or Supabase service-role credentials.

## Module boundaries

```text
src/
|-- config/       validated environment configuration
|-- database/     Drizzle connection and PostgreSQL schema
|-- lib/          configured third-party clients
|-- modules/      feature modules and HTTP routes
|-- plugins/      security and platform plugins
`-- shared/       stable cross-module contracts
```

## Security boundary

- `POST /api/v1/auth/admin/session` signs in through Supabase and rejects non-admin profiles.
- `GET /api/v1/auth/me` verifies a bearer token and returns its Edyn profile.
- `GET /api/v1/admin/overview` requires the `ADMIN` role.
- `GET /api/v1/health/ready` checks database readiness for application health monitoring.
- `drizzle/0001_security_rls.sql` provisions profiles and applies Supabase RLS policies.
