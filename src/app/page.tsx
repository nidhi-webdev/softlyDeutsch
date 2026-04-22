'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🇩🇪 Deutsch Lernen</h1>
        <div className="space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">Learn German Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Master German from A1 to B1 level through interactive lessons in Reading, Writing,
          Listening, and Speaking. Start your language journey for free, or go premium for advanced content.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link href="/auth/signup">
            <Button size="lg">Get Started Free</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="ghost" size="lg" className="text-white border-2 border-white">
              View Premium Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose Deutsch Lernen?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="📖"
              title="Lesen (Reading)"
              description="Improve your reading skills with authentic German texts and comprehension exercises."
            />
            <FeatureCard
              icon="✏️"
              title="Schreiben (Writing)"
              description="Master German writing with guided exercises and instant feedback on grammar and syntax."
            />
            <FeatureCard
              icon="🎧"
              title="Hören (Listening)"
              description="Train your ear with native speaker audio and listening comprehension drills."
            />
            <FeatureCard
              icon="🗣️"
              title="Sprechen (Speaking)"
              description="Practice pronunciation with interactive speaking exercises and real-time feedback."
            />
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Learn at Your Level
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LevelCard level="A1" description="Beginner - Start here if you're new to German" />
            <LevelCard level="A2" description="Elementary - Build on your basics" />
            <LevelCard level="B1" description="Intermediate - Achieve fluency" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
        <p className="text-lg mb-8">
          Join thousands of students learning German with our interactive platform.
        </p>
        <Link href="/auth/signup">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Free Trial Now
          </Button>
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function LevelCard({ level, description }: { level: string; description: string }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="text-5xl font-bold text-blue-600 mb-4">{level}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
