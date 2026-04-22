'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LessonCard } from '@/components/lessons/LessonCard';
import { Skill } from '@/types';

const skills: { name: Skill; emoji: string; description: string }[] = [
  { name: 'lesen', emoji: '📖', description: 'Reading' },
  { name: 'schreiben', emoji: '✏️', description: 'Writing' },
  { name: 'hören', emoji: '🎧', description: 'Listening' },
  { name: 'sprechen', emoji: '🗣️', description: 'Speaking' },
];

export default function Dashboard() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>('lesen');
  const [userLevel] = useState<'A1' | 'A2' | 'B1'>('A1');

  const handleStartLesson = (lessonId: string) => {
    // Navigate to lesson
    console.log('Starting lesson:', lessonId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🇩🇪 Deutsch Lernen</h1>
          <div className="flex gap-4 items-center">
            <Badge variant="info">Level: {userLevel}</Badge>
            <Button variant="ghost">Profile</Button>
            <Button variant="secondary">Logout</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader
            title="Welcome Back! 👋"
            description="Continue your German learning journey. Choose a skill to practice:"
          />
        </Card>

        {/* Skills Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name)}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedSkill === skill.name
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-4xl mb-2">{skill.emoji}</div>
              <h3 className="font-bold text-lg">{skill.description}</h3>
              <p className="text-sm text-gray-600 capitalize">{skill.name}</p>
            </button>
          ))}
        </div>

        {/* Lessons Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedSkill.charAt(0).toUpperCase() + selectedSkill.slice(1)} Lessons - Level {userLevel}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mock lessons */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <LessonCard
                key={num}
                lesson={{
                  id: `lesson-${num}`,
                  title: `Lesson ${num}: ${selectedSkill}`,
                  description: `Practice your ${selectedSkill} skills`,
                  skill: selectedSkill,
                  level: userLevel,
                  content: 'Lesson content goes here',
                  isPremium: num > 3,
                  estimatedDuration: 15,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                }}
                onStart={handleStartLesson}
                isPremium={true}
              />
            ))}
          </div>
        </div>

        {/* Premium CTA */}
        <Card className="mt-12 bg-purple-50 border-purple-200">
          <CardHeader
            title="Unlock Premium Features 👑"
            description="Get access to advanced lessons, offline mode, and personalized feedback."
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
