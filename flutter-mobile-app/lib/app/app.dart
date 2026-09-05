import 'package:edyn_learning_hub/app/router/app_router.dart';
import 'package:edyn_learning_hub/app/theme/edyn_theme.dart';
import 'package:flutter/material.dart';

class EdynApp extends StatelessWidget {
  const EdynApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Edyn Learning Hub',
      debugShowCheckedModeBanner: false,
      theme: buildEdynTheme(),
      routerConfig: appRouter,
    );
  }
}
