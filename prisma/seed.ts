import { prisma } from '@/lib/db';

const A1_LESSONS = [
  // ========== NOUNS - DIE/DER/DAS SECTION ==========
  {
    title: 'Nominativ: Der, Die, Das - Grundlagen',
    description: 'Master German noun genders with Der (masculine), Die (feminine), Das (neuter)',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Nominativ: Der, Die, Das</h2>
<p>German nouns have three genders. Learning the article with the noun is essential!</p>
<h3>Die drei Artikel (The three articles):</h3>
<table border="1" cellpadding="8">
  <tr><th>Gender</th><th>Article</th><th>Example</th><th>Meaning</th></tr>
  <tr><td><strong>Masculine</strong></td><td>der</td><td>der Mann</td><td>the man</td></tr>
  <tr><td><strong>Feminine</strong></td><td>die</td><td>die Frau</td><td>the woman</td></tr>
  <tr><td><strong>Neuter</strong></td><td>das</td><td>das Kind</td><td>the child</td></tr>
</table>
<h3>Plural (all genders):</h3>
<p><strong>die</strong> (plural) - die Männer, die Frauen, die Kinder</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 15,
    order: 1,
  },
  {
    title: 'Common Masculine Nouns (der)',
    description: 'Learn frequently used masculine nouns with DER',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Häufige Maskulina (Common Masculine Nouns)</h2>
<p><strong>Remember: der Mann, der Junge, der Tisch...</strong></p>
<ul>
  <li><strong>der Mann</strong> - the man</li>
  <li><strong>der Junge</strong> - the boy</li>
  <li><strong>der Tisch</strong> - the table</li>
  <li><strong>der Stuhl</strong> - the chair</li>
  <li><strong>der Hut</strong> - the hat</li>
  <li><strong>der Bleistift</strong> - the pencil</li>
  <li><strong>der Kaffee</strong> - the coffee</li>
  <li><strong>der Wagen</strong> - the car</li>
</ul>
<p><em>Tip: Many masculine nouns end in -er, -el, -en, but there are exceptions!</em></p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 2,
  },
  {
    title: 'Common Feminine Nouns (die)',
    description: 'Learn frequently used feminine nouns with DIE',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Häufige Feminina (Common Feminine Nouns)</h2>
<p><strong>Remember: die Frau, die Tür, die Schule...</strong></p>
<ul>
  <li><strong>die Frau</strong> - the woman</li>
  <li><strong>die Mädchen</strong> - the girl</li>
  <li><strong>die Tür</strong> - the door</li>
  <li><strong>die Fenster</strong> - the window</li>
  <li><strong>die Schule</strong> - the school</li>
  <li><strong>die Farbe</strong> - the color</li>
  <li><strong>die Hand</strong> - the hand</li>
  <li><strong>die Nacht</strong> - the night</li>
</ul>
<p><em>Tip: Most feminine nouns end in -e, -in, -tion, -heit, but there are exceptions!</em></p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 3,
  },
  {
    title: 'Common Neuter Nouns (das)',
    description: 'Learn frequently used neuter nouns with DAS',
    skill: 'lesen',
    level: 'A1',
    content: `<h2>Häufige Neutra (Common Neuter Nouns)</h2>
<p><strong>Remember: das Kind, das Haus, das Buch...</strong></p>
<ul>
  <li><strong>das Kind</strong> - the child</li>
  <li><strong>das Haus</strong> - the house</li>
  <li><strong>das Buch</strong> - the book</li>
  <li><strong>das Auge</strong> - the eye</li>
  <li><strong>das Ohr</strong> - the ear</li>
  <li><strong>das Wasser</strong> - the water</li>
  <li><strong>das Papier</strong> - the paper</li>
  <li><strong>das Zimmer</strong> - the room</li>
</ul>
<p><em>Tip: Many neuter nouns start with Ge-, end in -chen, -lein, but exceptions exist!</em></p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 4,
  },

  // ========== GRAMMAR A1 SECTION ==========
  {
    title: 'Verb Conjugation: Sein (To Be)',
    description: 'Learn how to conjugate the essential verb SEIN in present tense',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Das Verb "Sein" (To Be) - Präsens</h2>
<table border="1" cellpadding="8">
  <tr><th>Person</th><th>Pronoun</th><th>Conjugation</th><th>Example</th></tr>
  <tr><td>1st Singular</td><td>ich</td><td>bin</td><td>Ich bin Anna.</td></tr>
  <tr><td>2nd Singular</td><td>du</td><td>bist</td><td>Du bist student.</td></tr>
  <tr><td>3rd Singular</td><td>er/sie/es</td><td>ist</td><td>Er ist Lehrer.</td></tr>
  <tr><td>1st Plural</td><td>wir</td><td>sind</td><td>Wir sind Freunde.</td></tr>
  <tr><td>2nd Plural</td><td>ihr</td><td>seid</td><td>Ihr seid jung.</td></tr>
  <tr><td>3rd Plural</td><td>sie/Sie</td><td>sind</td><td>Sie sind alt.</td></tr>
</table>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 13,
    order: 1,
  },
  {
    title: 'Verb Conjugation: Haben (To Have)',
    description: 'Learn how to conjugate HABEN in present tense',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Das Verb "Haben" (To Have) - Präsens</h2>
<table border="1" cellpadding="8">
  <tr><th>Person</th><th>Pronoun</th><th>Conjugation</th><th>Example</th></tr>
  <tr><td>1st Singular</td><td>ich</td><td>habe</td><td>Ich habe ein Buch.</td></tr>
  <tr><td>2nd Singular</td><td>du</td><td>hast</td><td>Du hast eine Katze.</td></tr>
  <tr><td>3rd Singular</td><td>er/sie/es</td><td>hat</td><td>Er hat einen Hund.</td></tr>
  <tr><td>1st Plural</td><td>wir</td><td>haben</td><td>Wir haben Zeit.</td></tr>
  <tr><td>2nd Plural</td><td>ihr</td><td>habt</td><td>Ihr habt Glück.</td></tr>
  <tr><td>3rd Plural</td><td>sie/Sie</td><td>haben</td><td>Sie haben Fragen.</td></tr>
</table>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 13,
    order: 2,
  },
  {
    title: 'Regular Verbs: Machen, Spielen, Lernen',
    description: 'Master regular verb conjugation patterns',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Regelmäßige Verben (Regular Verbs)</h2>
<p>Most regular verbs follow the same pattern. Here are common ones:</p>
<table border="1" cellpadding="8">
  <tr><th>Pronoun</th><th>machen</th><th>spielen</th><th>lernen</th></tr>
  <tr><td>ich</td><td>mache</td><td>spiele</td><td>lerne</td></tr>
  <tr><td>du</td><td>machst</td><td>spielst</td><td>lernst</td></tr>
  <tr><td>er/sie/es</td><td>macht</td><td>spielt</td><td>lernt</td></tr>
  <tr><td>wir</td><td>machen</td><td>spielen</td><td>lernen</td></tr>
  <tr><td>ihr</td><td>macht</td><td>spielt</td><td>lernt</td></tr>
  <tr><td>sie/Sie</td><td>machen</td><td>spielen</td><td>lernen</td></tr>
</table>
<p><strong>Pattern:</strong> Stem + ending (-e, -st, -t, -en, -t, -en)</p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 14,
    order: 3,
  },
  {
    title: 'Personal Pronouns & Cases',
    description: 'Learn pronouns in Nominative case',
    skill: 'schreiben',
    level: 'A1',
    content: `<h2>Personalpronomen im Nominativ</h2>
<table border="1" cellpadding="8">
  <tr><th>English</th><th>German</th><th>Example</th></tr>
  <tr><td>I</td><td>ich</td><td>Ich bin müde.</td></tr>
  <tr><td>You (singular)</td><td>du</td><td>Du bist nett.</td></tr>
  <tr><td>He</td><td>er</td><td>Er ist gross.</td></tr>
  <tr><td>She</td><td>sie</td><td>Sie ist klein.</td></tr>
  <tr><td>It</td><td>es</td><td>Es ist schön.</td></tr>
  <tr><td>We</td><td>wir</td><td>Wir sind Studenten.</td></tr>
  <tr><td>You (plural)</td><td>ihr</td><td>Ihr seid jung.</td></tr>
  <tr><td>They</td><td>sie</td><td>Sie sind alt.</td></tr>
  <tr><td>You (formal)</td><td>Sie</td><td>Sie sind willkommen.</td></tr>
</table>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 11,
    order: 4,
  },

  // ========== VOCABULARY A1 SECTION ==========
  {
    title: 'Everyday Vocabulary: Family',
    description: 'Learn family member names in German',
    skill: 'hören',
    level: 'A1',
    content: `<h2>Familie (Family)</h2>
<ul>
  <li><strong>der Vater</strong> - the father</li>
  <li><strong>die Mutter</strong> - the mother</li>
  <li><strong>der Sohn</strong> - the son</li>
  <li><strong>die Tochter</strong> - the daughter</li>
  <li><strong>der Bruder</strong> - the brother</li>
  <li><strong>die Schwester</strong> - the sister</li>
  <li><strong>die Großmutter</strong> - the grandmother</li>
  <li><strong>der Großvater</strong> - the grandfather</li>
  <li><strong>der Onkel</strong> - the uncle</li>
  <li><strong>die Tante</strong> - the aunt</li>
  <li><strong>der Cousin</strong> - the cousin (male)</li>
  <li><strong>die Cousine</strong> - the cousin (female)</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 10,
    order: 1,
  },
  {
    title: 'Everyday Vocabulary: Numbers & Time',
    description: 'Learn numbers, days, and time expressions',
    skill: 'hören',
    level: 'A1',
    content: `<h2>Zahlen und Zeit (Numbers & Time)</h2>
<h3>Zahlen 0-20:</h3>
<p>null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig</p>
<h3>Tage der Woche:</h3>
<p>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</p>
<h3>Zeit:</h3>
<ul>
  <li><strong>die Stunde</strong> - the hour</li>
  <li><strong>die Minute</strong> - the minute</li>
  <li><strong>Wie spät ist es?</strong> - What time is it?</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 12,
    order: 2,
  },
  {
    title: 'Everyday Vocabulary: Colors & Adjectives',
    description: 'Learn basic colors and common adjectives',
    skill: 'hören',
    level: 'A1',
    content: `<h2>Farben und Adjektive (Colors & Adjectives)</h2>
<h3>Farben (Colors):</h3>
<ul>
  <li><strong>rot</strong> - red</li>
  <li><strong>blau</strong> - blue</li>
  <li><strong>grün</strong> - green</li>
  <li><strong>gelb</strong> - yellow</li>
  <li><strong>schwarz</strong> - black</li>
  <li><strong>weiß</strong> - white</li>
  <li><strong>grau</strong> - gray</li>
  <li><strong>orange</strong> - orange</li>
  <li><strong>rosa</strong> - pink</li>
  <li><strong>braun</strong> - brown</li>
</ul>
<h3>Common Adjectives:</h3>
<ul>
  <li>groß - big | klein - small</li>
  <li>neu - new | alt - old</li>
  <li>heiß - hot | kalt - cold</li>
  <li>schnell - fast | langsam - slow</li>
  <li>jung - young | alt - old</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 11,
    order: 3,
  },

  // ========== SPEAKING SECTION ==========
  {
    title: 'Sprechen: Greetings & Introductions',
    description: 'Practice greeting phrases and introducing yourself',
    skill: 'sprechen',
    level: 'A1',
    content: `<h2>Grüße und Vorstellungen (Greetings & Introductions)</h2>
<h3>Basisgrüße:</h3>
<ul>
  <li><strong>Guten Morgen!</strong> - Good morning!</li>
  <li><strong>Guten Tag!</strong> - Hello!</li>
  <li><strong>Guten Abend!</strong> - Good evening!</li>
  <li><strong>Auf Wiedersehen!</strong> - Goodbye!</li>
</ul>
<h3>Sich vorstellen:</h3>
<ul>
  <li><strong>Ich heiße...</strong> - My name is...</li>
  <li><strong>Ich bin aus...</strong> - I'm from...</li>
  <li><strong>Wie geht es dir?</strong> - How are you?</li>
  <li><strong>Es geht mir gut.</strong> - I'm fine.</li>
</ul>
<p><em>Practice these phrases out loud with proper intonation!</em></p>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 13,
    order: 1,
  },
  {
    title: 'Sprechen: Common Phrases & Questions',
    description: 'Learn and practice common A1 speaking phrases',
    skill: 'sprechen',
    level: 'A1',
    content: `<h2>Häufige Phrasen und Fragen</h2>
<h3>Fragen stellen:</h3>
<ul>
  <li><strong>Wie heißt du?</strong> - What is your name?</li>
  <li><strong>Woher kommst du?</strong> - Where are you from?</li>
  <li><strong>Was machst du?</strong> - What do you do?</li>
  <li><strong>Wie geht es dir?</strong> - How are you?</li>
  <li><strong>Hast du eine Familie?</strong> - Do you have a family?</li>
</ul>
<h3>Statements:</h3>
<ul>
  <li><strong>Ich bin Schüler/Schülerin.</strong> - I am a student.</li>
  <li><strong>Ich arbeite als...</strong> - I work as...</li>
  <li><strong>Ich wohne in...</strong> - I live in...</li>
  <li><strong>Meine Hobbys sind...</strong> - My hobbies are...</li>
</ul>`,
    audioUrl: null,
    imageUrl: null,
    isPremium: false,
    estimatedDuration: 14,
    order: 2,
  },
];

const A1_EXERCISES = [
  // ========== NOUN EXERCISES ==========
  // Nominativ: Der, Die, Das - Grundlagen
  {
    lessonId: 0,
    type: 'multiple-choice',
    question: 'Which article is used for masculine nouns?',
    options: [
      { id: '1', text: 'der', isCorrect: true },
      { id: '2', text: 'die', isCorrect: false },
      { id: '3', text: 'das', isCorrect: false },
      { id: '4', text: 'du', isCorrect: false },
    ],
    correctAnswer: '1',
    explanation: 'Der is the masculine article in the nominative case.',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 0,
    type: 'fill-blank',
    question: 'Fill in: "___ Kind ist klein." (The child is small)',
    content: 'Use the correct neuter article',
    correctAnswer: 'Das',
    explanation: 'Das is the neuter article. "Das Kind" = the child (neuter).',
    isPremium: false,
    order: 2,
  },

  // Common Masculine Nouns
  {
    lessonId: 1,
    type: 'matching',
    question: 'Match the noun with the correct meaning',
    options: [
      { id: '1', text: 'der Mann', isCorrect: true },
      { id: '2', text: 'der Stuhl', isCorrect: true },
      { id: '3', text: 'die Frau', isCorrect: false },
      { id: '4', text: 'das Buch', isCorrect: false },
    ],
    correctAnswer: '1',
    explanation: 'der Mann = the man, der Stuhl = the chair (both masculine)',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 1,
    type: 'fill-blank',
    question: 'Complete: "Der _____ ist weiß." (The _____ is white)',
    content: 'Choose: Stuhl (chair) - ends with articles der (masculine)',
    correctAnswer: 'Stuhl',
    explanation: 'Der Stuhl = the chair (masculine noun)',
    isPremium: false,
    order: 2,
  },

  // Common Feminine Nouns
  {
    lessonId: 2,
    type: 'multiple-choice',
    question: 'Which noun is feminine?',
    options: [
      { id: '1', text: 'der Mann', isCorrect: false },
      { id: '2', text: 'die Frau', isCorrect: true },
      { id: '3', text: 'das Kind', isCorrect: false },
      { id: '4', text: 'der Stuhl', isCorrect: false },
    ],
    correctAnswer: '2',
    explanation: 'Die Frau (the woman) is feminine.',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 2,
    type: 'fill-blank',
    question: 'Complete: "Die _____ ist groß." (The door is big)',
    content: 'Feminine noun ending: Tür',
    correctAnswer: 'Tür',
    explanation: 'Die Tür = the door (feminine noun)',
    isPremium: false,
    order: 2,
  },

  // Common Neuter Nouns
  {
    lessonId: 3,
    type: 'multiple-choice',
    question: 'Which noun is neuter?',
    options: [
      { id: '1', text: 'der Hund', isCorrect: false },
      { id: '2', text: 'die Blume', isCorrect: false },
      { id: '3', text: 'das Haus', isCorrect: true },
      { id: '4', text: 'die Nacht', isCorrect: false },
    ],
    correctAnswer: '3',
    explanation: 'Das Haus (the house) is neuter.',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 3,
    type: 'fill-blank',
    question: 'Complete: "Das _____ ist interessant." (The book is interesting)',
    content: 'Neuter noun: Buch',
    correctAnswer: 'Buch',
    explanation: 'Das Buch = the book (neuter noun)',
    isPremium: false,
    order: 2,
  },

  // ========== GRAMMAR EXERCISES ==========
  // Verb Conjugation: Sein
  {
    lessonId: 4,
    type: 'fill-blank',
    question: 'Conjugate: "Ich ___ Anna." (I am Anna)',
    content: 'Use the correct form of "sein"',
    correctAnswer: 'bin',
    explanation: 'Ich bin = I am (correct conjugation of "sein")',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 4,
    type: 'multiple-choice',
    question: 'Which is the correct form for "you are" (du)?',
    options: [
      { id: '1', text: 'bin', isCorrect: false },
      { id: '2', text: 'bist', isCorrect: true },
      { id: '3', text: 'ist', isCorrect: false },
      { id: '4', text: 'sind', isCorrect: false },
    ],
    correctAnswer: '2',
    explanation: 'Du bist = You are (informal singular)',
    isPremium: false,
    order: 2,
  },

  // Verb Conjugation: Haben
  {
    lessonId: 5,
    type: 'fill-blank',
    question: 'Conjugate: "Du _____ eine Katze." (You have a cat)',
    content: 'Use the correct form of "haben"',
    correctAnswer: 'hast',
    explanation: 'Du hast = You have (correct conjugation of "haben")',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 5,
    type: 'multiple-choice',
    question: 'Which is the correct form for "they have" (sie)?',
    options: [
      { id: '1', text: 'hat', isCorrect: false },
      { id: '2', text: 'habt', isCorrect: false },
      { id: '3', text: 'haben', isCorrect: true },
      { id: '4', text: 'habe', isCorrect: false },
    ],
    correctAnswer: '3',
    explanation: 'Sie haben = They have (plural form)',
    isPremium: false,
    order: 2,
  },

  // Regular Verbs
  {
    lessonId: 6,
    type: 'fill-blank',
    question: 'Conjugate: "Wir _____ Deutsch." (We are learning German)',
    content: 'Use the correct form of "lernen"',
    correctAnswer: 'lernen',
    explanation: 'Wir lernen = We learn/are learning',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 6,
    type: 'multiple-choice',
    question: 'Which verb form is correct for "He plays"?',
    options: [
      { id: '1', text: 'er spielt', isCorrect: true },
      { id: '2', text: 'er spielen', isCorrect: false },
      { id: '3', text: 'er spielst', isCorrect: false },
      { id: '4', text: 'er spielen', isCorrect: false },
    ],
    correctAnswer: '1',
    explanation: 'Er spielt = He plays (3rd person singular)',
    isPremium: false,
    order: 2,
  },

  // Personal Pronouns & Cases
  {
    lessonId: 7,
    type: 'fill-blank',
    question: 'Complete: "___ bin groß." (I am tall)',
    content: 'Nominative pronoun for first person singular',
    correctAnswer: 'Ich',
    explanation: 'Ich = I (nominative case)',
    isPremium: false,
    order: 1,
  },

  // ========== VOCABULARY EXERCISES ==========
  // Family Vocabulary
  {
    lessonId: 8,
    type: 'multiple-choice',
    question: 'What does "der Vater" mean?',
    options: [
      { id: '1', text: 'mother', isCorrect: false },
      { id: '2', text: 'father', isCorrect: true },
      { id: '3', text: 'brother', isCorrect: false },
      { id: '4', text: 'uncle', isCorrect: false },
    ],
    correctAnswer: '2',
    explanation: 'Der Vater = the father',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 8,
    type: 'fill-blank',
    question: 'Complete: "Die _____ ist alt." (The grandmother is old)',
    content: 'Family member: Großmutter',
    correctAnswer: 'Großmutter',
    explanation: 'Die Großmutter = the grandmother',
    isPremium: false,
    order: 2,
  },

  // Numbers & Time
  {
    lessonId: 9,
    type: 'multiple-choice',
    question: 'What is the German word for "five"?',
    options: [
      { id: '1', text: 'zwei', isCorrect: false },
      { id: '2', text: 'vier', isCorrect: false },
      { id: '3', text: 'fünf', isCorrect: true },
      { id: '4', text: 'sechs', isCorrect: false },
    ],
    correctAnswer: '3',
    explanation: 'Fünf = five',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 9,
    type: 'fill-blank',
    question: 'What is the German word for Monday?',
    content: 'First day of the week',
    correctAnswer: 'Montag',
    explanation: 'Montag = Monday',
    isPremium: false,
    order: 2,
  },

  // Colors & Adjectives
  {
    lessonId: 10,
    type: 'multiple-choice',
    question: 'What does "blau" mean?',
    options: [
      { id: '1', text: 'red', isCorrect: false },
      { id: '2', text: 'blue', isCorrect: true },
      { id: '3', text: 'green', isCorrect: false },
      { id: '4', text: 'yellow', isCorrect: false },
    ],
    correctAnswer: '2',
    explanation: 'Blau = blue',
    isPremium: false,
    order: 1,
  },

  // ========== SPEAKING EXERCISES ==========
  // Greetings
  {
    lessonId: 11,
    type: 'typing',
    question: 'How do you say "Good morning" in German?',
    content: 'Write the correct greeting',
    correctAnswer: 'Guten Morgen',
    explanation: 'Guten Morgen = Good morning',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 11,
    type: 'typing',
    question: 'Write the phrase: "My name is..."',
    content: 'German: Ich heiße...',
    correctAnswer: 'Ich heiße',
    explanation: 'Ich heiße = My name is / I am called',
    isPremium: false,
    order: 2,
  },

  // Common Phrases
  {
    lessonId: 12,
    type: 'multiple-choice',
    question: 'How do you ask someone their name?',
    options: [
      { id: '1', text: 'Wie heißt du?', isCorrect: true },
      { id: '2', text: 'Wie geht es dir?', isCorrect: false },
      { id: '3', text: 'Was machst du?', isCorrect: false },
      { id: '4', text: 'Woher kommst du?', isCorrect: false },
    ],
    correctAnswer: '1',
    explanation: 'Wie heißt du? = What is your name?',
    isPremium: false,
    order: 1,
  },
  {
    lessonId: 12,
    type: 'typing',
    question: 'Write: "I am a student."',
    content: 'German: Ich bin Schüler/Schülerin',
    correctAnswer: 'Ich bin',
    explanation: 'Ich bin Schüler/Schülerin = I am a student',
    isPremium: false,
    order: 2,
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
