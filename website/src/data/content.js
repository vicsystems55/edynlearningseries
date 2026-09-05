import child1 from '../assets/images/1.png'
import child2 from '../assets/images/2.png'
import child3 from '../assets/images/3.png'
import child4 from '../assets/images/4.png'
import child5 from '../assets/images/5.png'
import child6 from '../assets/images/6.png'

export const programs = [
  { slug: 'alphabet-foundations', title: 'Alphabet Foundations', age: 'Ages 3–4', subject: 'Literacy', description: 'Meet, recognise, trace and sound out letters A–Z through playful lessons.', image: child1, color: 'green', lessons: 26, progress: 72 },
  { slug: 'numbers-and-counting', title: 'Numbers & Counting', age: 'Ages 3–4', subject: 'Mathematics', description: 'Build number sense with counting, matching and simple sequences from 1–10.', image: child2, color: 'orange', lessons: 18, progress: 48 },
  { slug: 'shapes-and-colours', title: 'Shapes & Colours', age: 'Ages 3–5', subject: 'Discovery', description: 'Spot patterns, sort colours and find familiar shapes in the world around us.', image: child3, color: 'purple', lessons: 16, progress: 30 },
  { slug: 'handwriting-starters', title: 'Handwriting Starters', age: 'Ages 3–5', subject: 'Writing', description: 'Develop pencil control and confidence through guided lines, curves and tracing.', image: child4, color: 'blue', lessons: 20, progress: 15 },
  { slug: 'creative-thinking', title: 'Creative Thinking', age: 'Ages 3–6', subject: 'Creativity', description: 'Imagine, build and express big ideas through stories, art and open-ended play.', image: child5, color: 'pink', lessons: 12, progress: 0 },
  { slug: 'little-life-skills', title: 'Little Life Skills', age: 'Ages 3–6', subject: 'Life Skills', description: 'Grow confidence, kindness, healthy habits and everyday independence.', image: child6, color: 'yellow', lessons: 14, progress: 0 },
]
export const resources = [
  { slug: 'alphabet-tracing-pack', title: 'Alphabet Tracing Pack', type: 'Worksheet', age: 'Ages 3–5', price: 2500, color: 'green', letter: 'Aa', description: '26 guided uppercase and lowercase tracing sheets.' },
  { slug: 'numbers-1-10-workbook', title: 'Numbers 1–10 Workbook', type: 'Workbook', age: 'Ages 3–4', price: 3000, color: 'orange', letter: '123', description: 'Count, trace and match quantities with confidence.' },
  { slug: 'shape-hunt-cards', title: 'Shape Hunt Cards', type: 'Flashcards', age: 'Ages 3–5', price: 1800, color: 'purple', letter: '△○', description: 'A playful set of 30 shape and object matching cards.' },
  { slug: 'colour-and-create', title: 'Colour & Create', type: 'Activity Pack', age: 'Ages 3–6', price: 2200, color: 'pink', letter: '✎', description: 'Printable colouring and creative prompt pages.' },
  { slug: 'letter-sounds-a-f', title: 'Letter Sounds A–F', type: 'Mini Book', age: 'Ages 3–4', price: 1500, color: 'blue', letter: 'ABC', description: 'Six little stories that introduce early letter sounds.' },
  { slug: 'my-first-reward-chart', title: 'My First Reward Chart', type: 'Printable', age: 'All ages', price: 1000, color: 'yellow', letter: '★', description: 'Celebrate routines, effort and learning streaks.' },
]
export const games = [
  { slug: 'find-letter-a', title: 'Find the Letter', category: 'Alphabet', instruction: 'Find all the letter A’s', icon: 'A', color: 'green', level: 'Easy', minutes: 5 },
  { slug: 'count-the-stars', title: 'Count It', category: 'Numbers', instruction: 'Count the stars and choose', icon: '5', color: 'orange', level: 'Easy', minutes: 4 },
  { slug: 'match-the-shapes', title: 'Match It', category: 'Shapes', instruction: 'Match each shape to its pair', icon: '△', color: 'purple', level: 'Easy', minutes: 6 },
  { slug: 'trace-letter-d', title: 'Trace It', category: 'Handwriting', instruction: 'Follow the line to trace D', icon: 'D', color: 'blue', level: 'Practice', minutes: 5 },
  { slug: 'colour-sort', title: 'Sort It', category: 'Colours', instruction: 'Put each colour in its group', icon: '●', color: 'pink', level: 'Easy', minutes: 5 },
  { slug: 'memory-animals', title: 'Memory Match', category: 'Memory', instruction: 'Find all the matching animals', icon: '☺', color: 'yellow', level: 'Medium', minutes: 7 },
]
export const posts = [
  { title: 'Five playful ways to practise letters at home', tag: 'Learning at home', date: '12 Aug 2026', color: 'green' },
  { title: 'Why small wins build confident learners', tag: 'Parent guide', date: '05 Aug 2026', color: 'orange' },
  { title: 'Screen time that supports real learning', tag: 'Digital wellbeing', date: '29 Jul 2026', color: 'purple' },
]
export const naira = (value) => `₦${value.toLocaleString('en-NG')}`
