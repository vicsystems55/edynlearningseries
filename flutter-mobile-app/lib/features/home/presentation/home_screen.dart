import 'package:edyn_learning_hub/app/theme/edyn_theme.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text(
          'EDYN',
          style: TextStyle(fontWeight: FontWeight.w900),
        ),
        actions: const [
          Padding(
            padding: EdgeInsets.only(right: 20),
            child: Chip(label: Text('★ 0 XP')),
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            Container(
              padding: const EdgeInsets.all(28),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [EdynColours.green, EdynColours.darkGreen],
                ),
                borderRadius: BorderRadius.all(Radius.circular(28)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'PHASE 0 FOUNDATION',
                    style: TextStyle(color: EdynColours.sunshine),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Welcome to your first learning world.',
                    style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                  const SizedBox(height: 10),
                  const Text(
                    'The world map uses Flame. The learning activity uses accessible Flutter widgets.',
                    style: TextStyle(color: Color(0xFFD5E7DA)),
                  ),
                  const SizedBox(height: 22),
                  FilledButton.icon(
                    style: FilledButton.styleFrom(
                      backgroundColor: EdynColours.sunshine,
                      foregroundColor: EdynColours.ink,
                    ),
                    onPressed: () => context.go('/worlds/alphabet-forest'),
                    icon: const Icon(Icons.map_rounded),
                    label: const Text('Enter Alphabet Forest'),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            Card(
              child: ListTile(
                contentPadding: const EdgeInsets.all(20),
                leading: const CircleAvatar(
                  backgroundColor: Color(0xFFEAF5DF),
                  child: Text(
                    'A',
                    style: TextStyle(
                      color: EdynColours.green,
                      fontWeight: FontWeight.w900,
                    ),
                  ),
                ),
                title: const Text(
                  'Find the Letter A',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
                subtitle: const Text('Our first configuration-driven activity'),
                trailing: const Icon(Icons.arrow_forward_rounded),
                onTap: () => context.go('/activities/find-letter-a'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
