import 'package:flutter/material.dart';

abstract final class EdynColours {
  static const green = Color(0xFF08783F);
  static const darkGreen = Color(0xFF045B31);
  static const cream = Color(0xFFFFFAF0);
  static const sunshine = Color(0xFFF6B91A);
  static const orange = Color(0xFFF47B20);
  static const pink = Color(0xFFED426E);
  static const ink = Color(0xFF1C2822);
}

ThemeData buildEdynTheme() {
  final scheme = ColorScheme.fromSeed(
    seedColor: EdynColours.green,
    primary: EdynColours.green,
    secondary: EdynColours.sunshine,
    surface: EdynColours.cream,
  );
  return ThemeData(
    colorScheme: scheme,
    scaffoldBackgroundColor: EdynColours.cream,
    useMaterial3: true,
    cardTheme: const CardThemeData(
      elevation: 0,
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(24)),
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        minimumSize: const Size(0, 52),
        shape: const StadiumBorder(),
        textStyle: const TextStyle(fontWeight: FontWeight.w700),
      ),
    ),
  );
}
