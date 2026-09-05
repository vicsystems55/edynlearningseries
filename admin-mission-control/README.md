# Edyn Admin Mission Control

Independent Vue 3 administration application for platform operators.

## Scope

- Parent, administrator, and learner management
- Curriculum, lessons, activities, and reusable game definitions
- Content review and publishing workflow
- Progress, mastery, and engagement analytics
- Rewards, subscriptions, support, audit logs, and system settings

## Local development

```powershell
Copy-Item .env.example .env
npm install
npm run dev
```

The app runs at `http://localhost:5174`. In development only, the login page exposes a preview button. Production sign-in uses `/api/v1/auth/admin/session`; the Node API verifies the Supabase account and requires an `ADMIN` profile.

Never place the Supabase service-role key in this application. It belongs exclusively in the backend environment.
