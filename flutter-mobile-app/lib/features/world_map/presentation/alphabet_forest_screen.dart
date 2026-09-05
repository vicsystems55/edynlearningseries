import 'package:edyn_learning_hub/app/theme/edyn_theme.dart';
import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AlphabetForestScreen extends StatefulWidget {
  const AlphabetForestScreen({super.key});

  @override
  State<AlphabetForestScreen> createState() => _AlphabetForestScreenState();
}

class _AlphabetForestScreenState extends State<AlphabetForestScreen> {
  late final AlphabetForestGame game = AlphabetForestGame();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GameWidget<AlphabetForestGame>(
        game: game,
        overlayBuilderMap: {
          'hud': (context, game) => SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  IconButton.filledTonal(
                    onPressed: () => context.go('/'),
                    icon: const Icon(Icons.arrow_back_rounded),
                  ),
                  const Spacer(),
                  FilledButton.icon(
                    onPressed: () => context.go('/activities/find-letter-a'),
                    icon: const Icon(Icons.play_arrow_rounded),
                    label: const Text('Play Letter A'),
                  ),
                ],
              ),
            ),
          ),
        },
        initialActiveOverlays: const ['hud'],
      ),
    );
  }
}

class AlphabetForestGame extends FlameGame {
  @override
  Color backgroundColor() => const Color(0xFFEAF5DF);

  @override
  Future<void> onLoad() async {
    await super.onLoad();
    addAll([
      TextComponent(
        text: 'Alphabet Forest',
        position: Vector2(size.x / 2, 110),
        anchor: Anchor.center,
        textRenderer: TextPaint(
          style: const TextStyle(
            color: EdynColours.darkGreen,
            fontSize: 34,
            fontWeight: FontWeight.w900,
          ),
        ),
      ),
      _LearningNode(
        letter: 'A',
        position: Vector2(size.x * .25, size.y * .55),
        unlocked: true,
      ),
      _LearningNode(letter: 'B', position: Vector2(size.x * .5, size.y * .4)),
      _LearningNode(letter: 'C', position: Vector2(size.x * .75, size.y * .6)),
    ]);
  }
}

class _LearningNode extends CircleComponent {
  _LearningNode({
    required this.letter,
    required super.position,
    this.unlocked = false,
  }) : super(
         radius: 42,
         anchor: Anchor.center,
         paint: Paint()
           ..color = unlocked ? EdynColours.sunshine : const Color(0xFFB8C8B8),
       );

  final String letter;
  final bool unlocked;

  @override
  Future<void> onLoad() async {
    await super.onLoad();
    add(
      TextComponent(
        text: unlocked ? letter : '🔒',
        anchor: Anchor.center,
        position: size / 2,
        textRenderer: TextPaint(
          style: TextStyle(
            color: unlocked ? EdynColours.darkGreen : Colors.white,
            fontSize: 34,
            fontWeight: FontWeight.w900,
          ),
        ),
      ),
    );
  }
}
