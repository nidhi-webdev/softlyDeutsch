import { prisma } from '@/lib/db';

const A1_LESSONS = [
  // Lesen (Reading)
  {
    title: 'Grundlegende Grüße',
    description: 'Learn basic German greetings and how to introduce yourself',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Grundlegende Grüße</h2>
<p>In this lesson, you'll learn the most common German greetings:</p>
<ul>
  <li><strong>Guten Morgen</strong> - Good morning</li>
  <li><strong>Guten Tag</strong> - Hello / Good day</li>
  <li><strong>Guten Abend</strong> - Good evening</li>
  <li><strong>Gute Nacht</strong> - Good night</li>
  <li><strong>Auf Wiedersehen</strong> - Goodbye</li>
</ul>
<h3>Introducing yourself:</h3>
<ul>
  <li><strong>Ich heiße...</strong> - My name is...</li>
  <li><strong>Mein Name ist...</strong> - My name is...</li>
  <li><strong>Ich bin...</strong> - I am...</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 10,
    order: 1,
  },
  {
    title: 'Zahlen von 0 bis 20',
    description: 'Learn to count and recognize numbers in German',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Zahlen von 0 bis 20</h2>
<p>Here are the German numbers from 0 to 20:</p>
<table border="1" cellpadding="5">
  <tr><td>0</td><td>null</td></tr>
  <tr><td>1</td><td>eins</td></tr>
  <tr><td>2</td><td>zwei</td></tr>
  <tr><td>3</td><td>drei</td></tr>
  <tr><td>4</td><td>vier</td></tr>
  <tr><td>5</td><td>fünf</td></tr>
  <tr><td>10</td><td>zehn</td></tr>
  <tr><td>15</td><td>fünfzehn</td></tr>
  <tr><td>20</td><td>zwanzig</td></tr>
</table>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 8,
    order: 2,
  },
  {
    title: 'Tage der Woche',
    description: 'Learn the days of the week in German',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Tage der Woche (Days of the Week)</h2>
<ul>
  <li><strong>Montag</strong> - Monday</li>
  <li><strong>Dienstag</strong> - Tuesday</li>
  <li><strong>Mittwoch</strong> - Wednesday</li>
  <li><strong>Donnerstag</strong> - Thursday</li>
  <li><strong>Freitag</strong> - Friday</li>
  <li><strong>Samstag</strong> - Saturday</li>
  <li><strong>Sonntag</strong> - Sunday</li>
</ul>
<p><strong>Welcher Tag ist heute?</strong> - What day is today?</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 7,
    order: 3,
  },

  // Schreiben (Writing)
  {
    title: 'Das Alphabet',
    description: 'Learn to write the German alphabet',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Das Alphabet</h2>
<p>The German alphabet is similar to English, but with some additional letters:</p>
<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
<h3>Special characters:</h3>
<ul>
  <li><strong>ä</strong> - a with umlaut</li>
  <li><strong>ö</strong> - o with umlaut</li>
  <li><strong>ü</strong> - u with umlaut</li>
  <li><strong>ß</strong> - German sharp s (Eszett)</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 8,
    order: 1,
  },
  {
    title: 'Einfache Sätze schreiben',
    description: 'Write simple German sentences',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Einfache Sätze schreiben (Simple Sentences)</h2>
<p>Learn to write basic sentences:</p>
<ul>
  <li><strong>Ich bin [Name].</strong> - I am [Name].</li>
  <li><strong>Das ist ein Apfel.</strong> - This is an apple.</li>
  <li><strong>Ich mag Musik.</strong> - I like music.</li>
  <li><strong>Wie geht es dir?</strong> - How are you?</li>
  <li><strong>Es geht mir gut.</strong> - I'm fine.</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 10,
    order: 2,
  },

  // Hören (Listening)
  {
    title: 'Alltägliche Gespräche',
    description: 'Listen to everyday German conversations',
    skill: 'hören',
    level: 'A1',
    content: `<h2>Alltägliche Gespräche (Everyday Conversations)</h2>
<p>In this lesson, you'll listen to common German dialogues:</p>
<ul>
  <li>Greetings and introductions</li>
  <li>Asking for directions</li>
  <li>Ordering at a café</li>
  <li>Talking about the weather</li>
  <li>Simple small talk</li>
</ul>
<p>Listen carefully to the pronunciation and intonation!</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 1,
  },
  {
    title: 'Zahlen verstehen',
    description: 'Understand spoken German numbers',
    skill: 'hören',
    level: 'A1',
    content: `<h2>Zahlen verstehen (Understanding Numbers)</h2>
<p>In this lesson, you'll practice listening to and understanding German numbers.</p>
<p>Key listening points:</p>
<ul>
  <li>Distinguish between similar sounding numbers (like 15 and 50)</li>
  <li>Understand numbers in phone numbers and addresses</li>
  <li>Recognize numbers in prices and quantities</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 10,
    order: 2,
  },

  // Sprechen (Speaking)
  {
    title: 'Aussprache Grundlagen',
    description: 'Learn correct German pronunciation',
    skill: 'sprechen',
    level: 'A1',
    content: `<h2>Aussprache Grundlagen (Pronunciation Basics)</h2>
<p>Learn the fundamentals of German pronunciation:</p>
<ul>
  <li><strong>Umlauts:</strong> ä, ö, ü - how to pronounce them correctly</li>
  <li><strong>Consonants:</strong> Focus on sounds that differ from English</li>
  <li><strong>Vowels:</strong> Short vs long vowels and their importance</li>
  <li><strong>Word stress:</strong> Where to emphasize syllables</li>
</ul>
<p>Practice saying the words aloud!</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 11,
    order: 1,
  },
  {
    title: 'Sich vorstellen',
    description: 'Introduce yourself in German',
    skill: 'sprechen',
    level: 'A1',
    content: `<h2>Sich vorstellen (Introducing Yourself)</h2>
<p>Learn how to introduce yourself in German:</p>
<ul>
  <li><strong>Guten Tag, ich heiße...</strong> - Hello, my name is...</li>
  <li><strong>Ich komme aus...</strong> - I come from...</li>
  <li><strong>Ich bin [number] Jahre alt.</strong> - I am [number] years old.</li>
  <li><strong>Ich lerne Deutsch.</strong> - I'm learning German.</li>
</ul>
<p>Record yourself and compare with the audio!</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 2,
  },
];

const A1_EXERCISES = [
  // Exercises for Grundlegende Grüße
  {
    lessonId: 0, // Will be replaced with actual lesson ID
    type: 'multiple-choice',
    question: 'What does "Guten Morgen" mean?',
    options: [
      { id: '1', text: 'Good morning', isCorrect: true },
      { id: '2', text: 'Good afternoon', isCorrect: false },
      { id: '3', text: 'Good evening', isCorrect: false },
      { id: '4', text: 'Good night', isCorrect: false },
    ],
    correctAnswer: '1',
    explanation: '"Guten Morgen" literally means "good morning" and is used until around 11 AM.',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 0,
    type: 'fill-blank',
    question: 'Fill in the blank: "Ich _____ Max."',
    content: 'Use the verb "heiße" (to be called/named)',
    correctAnswer: 'heiße',
    explanation: 'The correct form is "Ich heiße Max" which means "My name is Max".',
    isPremium: false,
    order: 2,
  },
  // Exercises for Zahlen von 0 bis 20
  {
    lessonId: 1,
    type: 'matching',
    question: 'Match German numbers with their English equivalents',
    options: [
      { id: '1', text: '5', isCorrect: false },
      { id: '2', text: '10', isCorrect: false },
      { id: '3', text: '15', isCorrect: false },
      { id: '4', text: '20', isCorrect: false },
    ],
    correctAnswer: '2', // zehn (10)
    explanation: 'This is a matching exercise. Pay attention to number pronunciation!',
    isPremium: false,
    order: 1,
  },
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seed...');

    // Check if data already exists
    const existingLessons = await prisma.lesson.count();
    if (existingLessons > 0) {
      console.log('✅ Database already seeded. Skipping...');
      return;
    }

    // Create A1 lessons
    console.log('📚 Creating A1 lessons...');
    const createdLessons = await Promise.all(
      A1_LESSONS.map((lesson) =>
        prisma.lesson.create({
          data: lesson,
        })
      )
    );

    console.log(`✅ Created ${createdLessons.length} lessons`);

    // Create exercises
    console.log('📝 Creating exercises...');
    // Update lesson IDs in exercises
    const exercisesWithLessonIds = A1_EXERCISES.map((exercise) => ({
      ...exercise,
      lessonId: createdLessons[exercise.lessonId].id,
    }));

    const createdExercises = await Promise.all(
      exercisesWithLessonIds.map((exercise) =>
        prisma.exercise.create({
          data: {
            ...exercise,
            options: JSON.stringify(exercise.options),
          } as any,
        })
      )
    );

    console.log(`✅ Created ${createdExercises.length} exercises`);

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
