enum GameType {
  findIt,
  multipleChoice,
  matchIt,
  countIt,
  sortIt,
  sequence,
  listenAndChoose,
  memoryMatch,
  traceIt,
  worldMap,
}

class GameDefinition {
  const GameDefinition({
    required this.schemaVersion,
    required this.gameType,
    required this.learningObjective,
    required this.instructions,
    required this.content,
  });

  factory GameDefinition.fromJson(Map<String, dynamic> json) {
    if (json['schemaVersion'] != 1) {
      throw const FormatException('Unsupported game schema version.');
    }
    return GameDefinition(
      schemaVersion: json['schemaVersion'] as int,
      gameType: _parseGameType(json['gameType'] as String),
      learningObjective: json['learningObjective'] as String,
      instructions: Map<String, dynamic>.from(json['instructions'] as Map),
      content: Map<String, dynamic>.from(json['content'] as Map),
    );
  }

  final int schemaVersion;
  final GameType gameType;
  final String learningObjective;
  final Map<String, dynamic> instructions;
  final Map<String, dynamic> content;

  static GameType _parseGameType(String value) => switch (value) {
    'FIND_IT' => GameType.findIt,
    'MULTIPLE_CHOICE' => GameType.multipleChoice,
    'MATCH_IT' => GameType.matchIt,
    'COUNT_IT' => GameType.countIt,
    'SORT_IT' => GameType.sortIt,
    'SEQUENCE' => GameType.sequence,
    'LISTEN_AND_CHOOSE' => GameType.listenAndChoose,
    'MEMORY_MATCH' => GameType.memoryMatch,
    'TRACE_IT' => GameType.traceIt,
    'WORLD_MAP' => GameType.worldMap,
    _ => throw FormatException('Unknown game type: $value'),
  };
}
