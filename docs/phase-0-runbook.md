# Phase 0 Release Runbook

This runbook turns the verified repository scaffold into a live Phase 0 environment. Keep all secrets in local or provider environment stores; never commit them.

## 1. Configure Supabase

Create `node-js-backend/.env` from `.env.example` and set:

- `DATABASE_URL`: transaction-mode pooler on port 6543.
- `DIRECT_URL`: session-mode pooler on port 5432.
- `SUPABASE_URL`: project URL.
- `SUPABASE_PUBLISHABLE_KEY`: public project key.
- `SUPABASE_SERVICE_ROLE_KEY`: backend-only service key.

Apply migrations once from a trusted operator machine:

```powershell
cd node-js-backend
npm run db:migrate
```

The migrations create the Phase 0 tables, connect profiles to `auth.users`, provision parent profiles for new users, and enable RLS.

## 2. Bootstrap the first administrator

1. Create the administrator through Supabase Authentication.
2. Confirm that the auth trigger created a matching `profiles` row.
3. From the Supabase SQL editor, elevate that one known account:

```sql
update public.profiles
set role = 'ADMIN', updated_at = now()
where id = '<verified-auth-user-id>';
```

Do not expose generic admin-registration functionality.

## 3. Configure Render

Create the API from the root `render.yaml` blueprint and set every `sync: false` variable. Set `WEB_ORIGIN` to the comma-separated production website and Mission Control origins. The readiness endpoint is `/api/v1/health/ready`.

## 4. Configure Netlify

Create two Netlify sites from the same repository:

- Public website: base directory `website`.
- Mission Control: base directory `admin-mission-control` and `VITE_API_BASE_URL=https://<render-api>/api/v1`.

Both apps include SPA redirects.

## 5. Verify production

1. `GET /api/v1/health` returns HTTP 200.
2. `GET /api/v1/health/ready` returns HTTP 200.
3. A request to `/api/v1/admin/overview` without a token returns HTTP 401.
4. A parent account cannot sign into Mission Control.
5. The administrator can sign in and load `/dashboard`.
6. A parent can read only their children and related learning records.
7. The website, Mission Control, API, and Flutter CI jobs pass.

## Rollback

- Roll back application code through the previous Render or Netlify deployment.
- Database migrations are forward-only. Correct database issues with a new reviewed migration rather than deleting production data.
