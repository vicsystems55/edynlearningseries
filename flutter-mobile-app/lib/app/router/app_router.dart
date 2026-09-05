import 'package:edyn_learning_hub/features/games/presentation/find_it/find_it_activity_screen.dart';
import 'package:edyn_learning_hub/features/home/presentation/home_screen.dart';
import 'package:edyn_learning_hub/features/world_map/presentation/alphabet_forest_screen.dart';
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (context, state) => const HomeScreen()),
    GoRoute(
      path: '/worlds/alphabet-forest',
      builder: (context, state) => const AlphabetForestScreen(),
    ),
    GoRoute(
      path: '/activities/find-letter-a',
      builder: (context, state) => const FindItActivityScreen(),
    ),
  ],
);
