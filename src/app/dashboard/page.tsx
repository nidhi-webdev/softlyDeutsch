'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LessonCard } from '@/components/lessons/LessonCard';
import { Skill } from '@/types';

// Define lesson categories for A1 Level
const lessonCategories = [
  {
    id: 'nouns',
    title: '🔤 Nouns: Der, Die, Das',
    emoji: '🔤',
    description: 'Master German noun genders and articles',
    lessons: [
      { number: 1, title: 'Nominativ: Der, Die, Das - Grundlagen' },
      { number: 2, title: 'Common Masculine Nouns (der)' },
      { number: 3, title: 'Common Feminine Nouns (die)' },
      { number: 4, title: 'Common Neuter Nouns (das)' },
    ],
  },
  {
    id: 'grammar',
    title: '📚 Grammar A1',
    emoji: '📚',
    description: 'Essential verb conjugations and sentence structure',
    lessons: [
      { number: 1, title: 'Verb Conjugation: Sein (To Be)' },
      { number: 2, title: 'Verb Conjugation: Haben (To Have)' },
      { number: 3, title: 'Regular Verbs: Machen, Spielen, Lernen' },
      { number: 4, title: 'Personal Pronouns & Cases' },
    ],
  },
  {
    id: 'vocabulary',
    title: '📖 Vocabulary A1',
    emoji: '📖',
    description: 'Build your German vocabulary foundation',
    lessons: [
      { number: 1, title: 'Everyday Vocabulary: Family' },
      { number: 2, title: 'Everyday Vocabulary: Numbers & Time' },
      { number: 3, title: 'Everyday Vocabulary: Colors & Adjectives' },
    ],
  },
  {
    id: 'speaking',
    title: '🗣️ Speaking (Sprechen)',
    emoji: '🗣️',
    description: 'Practice speaking German confidently',
    lessons: [
      { number: 1, title: 'Sprechen: Greetings & Introductions' },
      { number: 2, title: 'Sprechen: Common Phrases & Questions' },
    ],
  },
];

export default function Dashboard() {
  const [expandedCategory, setExpandedCategory] = useState<string>('nouns');
  const [userLevel] = useState<'A1' | 'A2' | 'B1'>('A1');
  const [completedLessons] = useState<Set<string>>(new Set());

  const handleStartLesson = (lessonId: string) => {
    // Navigate to lesson
    console.log('Starting lesson:', lessonId);
  };

  const currentCategory = lessonCategories.find(cat => cat.id === expandedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🇩🇪 Deutsch Lernen A1</h1>
          <div className="flex gap-4 items-center">
            <Badge variant="info">Level: {userLevel}</Badge>
            <Button variant="ghost">Profile</Button>
            <Button variant="secondary">Logout</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader
            title="Welcome to A1 German Learning! 👋"
            description="Start with fundamentals: Master German articles (Der, Die, Das), essential grammar, everyday vocabulary, and speaking basics."
          />
        </Card>

        {/* Category Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Choose Your Learning Path:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lessonCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setExpandedCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                  expandedCategory === category.id
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="text-4xl mb-2">{category.emoji}</div>
                <h3 className="font-bold text-base mb-1">{category.title.split(':')[1]?.trim() || category.title}</h3>
                <p className="text-sm text-gray-600">{category.lessons.length} lessons</p>
              </button>
            ))}
          </div>
        </div>

        {/* Lessons Section */}
        {currentCategory && (
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">
                {currentCategory.title}
              </h2>
              <p className="text-gray-600 text-lg">{currentCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.lessons.map((lesson, idx) => (
                <LessonCard
                  key={lesson.number}
                  lesson={{
                    id: `${currentCategory.id}-lesson-${lesson.number}`,
                    title: lesson.title,
                    description: `Complete this ${currentCategory.title.split(':')[1]?.trim() || 'lesson'}`,
                    skill: 'lesen' as const,
                    level: userLevel,
                    content: 'Lesson content goes here',
                    isPremium: false,
                    estimatedDuration: 12 + (lesson.number * 2),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  }}
                  onStart={handleStartLesson}
                  isPremium={false}
                  isCompleted={completedLessons.has(`${currentCategory.id}-lesson-${lesson.number}`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Progress Overview */}
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardHeader
            title="Your Progress 📊"
            description={`You have completed 0 out of ${lessonCategories.reduce((acc, cat) => acc + cat.lessons.length, 0)} lessons`}
          />
          <CardContent>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">0% Complete</p>
          </CardContent>
        </Card>

        {/* Premium CTA */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader
            title="Unlock Premium Features 👑"
            description="Get access to advanced exercises, audio pronunciation guides, and personalized feedback."
          />
          <CardContent>
            <Link href="/pricing">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Premium Plans
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
