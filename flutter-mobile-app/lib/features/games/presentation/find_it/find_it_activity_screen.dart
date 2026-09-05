import 'package:edyn_learning_hub/app/theme/edyn_theme.dart';
import 'package:flutter/material.dart';

class FindItActivityScreen extends StatefulWidget {
  const FindItActivityScreen({super.key});

  @override
  State<FindItActivityScreen> createState() => _FindItActivityScreenState();
}

class _FindItActivityScreenState extends State<FindItActivityScreen> {
  final selected = <int>{};
  static const letters = ['A', 'D', 'B', 'A', 'R', 'A'];

  bool get isComplete => selected.length == 3;

  void selectLetter(int index) {
    if (letters[index] != 'A') return;
    setState(() => selected.add(index));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Alphabet Forest')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              const ListTile(
                leading: CircleAvatar(child: Icon(Icons.volume_up_rounded)),
                title: Text(
                  'Find every uppercase A.',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
                subtitle: Text('Tap each one you see.'),
              ),
              const SizedBox(height: 24),
              Expanded(
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 3,
                    mainAxisSpacing: 14,
                    crossAxisSpacing: 14,
                  ),
                  itemCount: letters.length,
                  itemBuilder: (context, index) {
                    final correct = selected.contains(index);
                    return Semantics(
                      button: true,
                      label: 'Letter ${letters[index]}',
                      child: InkWell(
                        borderRadius: BorderRadius.circular(24),
                        onTap: () => selectLetter(index),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 220),
                          decoration: BoxDecoration(
                            color: correct ? EdynColours.green : Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(
                              color: correct
                                  ? EdynColours.green
                                  : const Color(0xFFDCE7D8),
                              width: 3,
                            ),
                          ),
                          child: Center(
                            child: Text(
                              letters[index],
                              style: TextStyle(
                                fontSize: 54,
                                fontWeight: FontWeight.w900,
                                color: correct
                                    ? Colors.white
                                    : EdynColours.green,
                              ),
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              Text(
                isComplete
                    ? 'Wonderful work! You found every A.'
                    : 'Take your time. Look carefully!',
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  color: EdynColours.green,
                  fontWeight: FontWeight.w800,
                ),
              ),
              const SizedBox(height: 16),
              if (isComplete)
                FilledButton.icon(
                  onPressed: () => Navigator.of(context).pop(),
                  icon: const Icon(Icons.star_rounded),
                  label: const Text('Collect 10 XP'),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
