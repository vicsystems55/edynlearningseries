# Edyn Learning Hub Mobile

Flutter application for the Edyn parent and child experiences.

Feature-first folders live under `lib/features`. Simple educational activities use Flutter widgets. Flame is reserved for the learning-world map and scenes that need a game loop, sprites, particles or continuous animation.

Run with public client configuration only:

```powershell
flutter run --dart-define=API_BASE_URL=http://10.0.2.2:3000/api/v1 --dart-define=SUPABASE_URL=https://otvdyjjzcalyydvuuyfi.supabase.co --dart-define=SUPABASE_PUBLISHABLE_KEY=your-public-key
```

Never pass the Supabase service-role key to Flutter.
