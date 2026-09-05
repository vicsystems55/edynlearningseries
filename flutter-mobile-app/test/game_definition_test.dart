import 'package:edyn_learning_hub/features/games/domain/game_definition.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('parses the shared Find It game contract', () {
    final definition = GameDefinition.fromJson({
      'schemaVersion': 1,
      'gameType': 'FIND_IT',
      'learningObjective': 'Recognise uppercase A',
      'instructions': {'text': 'Find every uppercase A.'},
      'content': {'target': 'A', 'items': []},
    });
    expect(definition.gameType, GameType.findIt);
    expect(definition.learningObjective, 'Recognise uppercase A');
  });
}
