# Phase 0 Local Runbook

This repository stores the Edyn applications and their supporting documentation without GitHub Actions or paid deployment automation. Keep all secrets in ignored local environment files.

## 1. Configure Supabase

Create `node-js-backend/.env` from `.env.example` and set:

- `DATABASE_URL`: transaction-mode pooler on port 6543.
- `DIRECT_URL`: session-mode pooler on port 5432.
- `SUPABASE_URL`: project URL.
- `SUPABASE_PUBLISHABLE_KEY`: public project key.
- `SUPABASE_SERVICE_ROLE_KEY`: backend-only service key.

Apply reviewed migrations from a trusted operator machine:

```powershell
cd node-js-backend
npm run db:migrate
```

The Phase 0 migrations have been applied. Future schema changes must be added as new migrations.

## 2. Bootstrap the first administrator

1. Create the administrator through Supabase Authentication.
2. Confirm that the auth trigger created a matching `profiles` row.
3. From the Supabase SQL editor, elevate that one verified account:

```sql
update public.profiles
set role = 'ADMIN', updated_at = now()
where id = '<verified-auth-user-id>';
```

Do not expose generic administrator registration.

## 3. Run the applications

Open separate terminals from the repository root:

```powershell
cd website
npm run dev
```

```powershell
cd admin-mission-control
npm run dev
```

```powershell
cd node-js-backend
npm run dev
```

```powershell
cd flutter-mobile-app
flutter run --dart-define=API_BASE_URL=http://10.0.2.2:3000/api/v1 --dart-define=SUPABASE_URL=<url> --dart-define=SUPABASE_PUBLISHABLE_KEY=<key>
```

## 4. Verify before every push

```powershell
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

Then confirm:

1. `GET /api/v1/health` returns HTTP 200.
2. `GET /api/v1/health/ready` returns HTTP 200.
3. `/api/v1/admin/overview` returns HTTP 401 without a token.
4. A parent account cannot sign into Mission Control.
5. An administrator can sign in and load `/dashboard`.

## Repository safety

- Never commit `.env` files, database passwords, service-role keys, or API keys.
- Do not rewrite or delete applied database migrations.
- Correct database issues with a new reviewed migration rather than deleting production data.
- Use pull requests or reviewed local commits when the team grows.
