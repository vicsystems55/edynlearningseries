import 'package:edyn_learning_hub/features/games/domain/game_definition.dart';
import 'package:flutter/widgets.dart';

typedef GameRenderer = Widget Function(GameDefinition definition);

class GameRendererRegistry {
  GameRendererRegistry(Map<GameType, GameRenderer> renderers)
    : _renderers = Map.unmodifiable(renderers);
  final Map<GameType, GameRenderer> _renderers;

  Widget build(GameDefinition definition) {
    final renderer = _renderers[definition.gameType];
    if (renderer == null) {
      throw UnsupportedError(
        'No renderer registered for ${definition.gameType.name}.',
      );
    }
    return renderer(definition);
  }
}
