'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🇩🇪</div>
              <h1 className="text-2xl font-bold text-gray-900">Softly Deutsch</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started Free</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
              <Link href="/auth/signin" className="block">
                <Button variant="ghost" className="w-full">Sign In</Button>
              </Link>
              <Link href="/auth/signup" className="block">
                <Button className="w-full">Get Started Free</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ #1 GERMAN LEARNING PLATFORM
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your <span className="text-blue-600">German</span> Skills
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn German from A1 to B1 level with interactive lessons in Reading, Writing, Listening, and Speaking. 
              Practice with real exam formats and get instant feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/auth/signup">
                <Button size="lg" className="w-full sm:w-auto">Get Started Free</Button>
              </Link>
              <Link href="/lessons">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto border-2 border-gray-300">
                  View Lessons
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">JK</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">SM</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-sm font-bold">AR</div>
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600"><strong>Trusted by 10,000+ students</strong></p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 space-y-4">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4 border-l-4 border-blue-500">
                <div className="text-3xl">📖</div>
                <div>
                  <h4 className="font-bold text-gray-900">Practice Questions</h4>
                  <p className="text-sm text-gray-600">For Levels A1-B2</p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4 border-l-4 border-pink-500">
                <div className="text-3xl">✏️</div>
                <div>
                  <h4 className="font-bold text-gray-900">AI Writing Evaluation</h4>
                  <p className="text-sm text-gray-600">Grammar feedback & correction</p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4 border-l-4 border-orange-500">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-bold text-gray-900">Exam Success</h4>
                  <p className="text-sm text-gray-600">Real exam patterns & format</p>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="features" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master All 4 Core Skills</h3>
            <p className="text-xl text-gray-600">Comprehensive training across all essential German language competencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon="📖"
              title="Lesen"
              subtitle="Reading"
              description="Improve comprehension with authentic German texts and targeted exercises"
              color="from-blue-50 to-blue-100"
              borderColor="border-blue-500"
            />
            <SkillCard
              icon="✏️"
              title="Schreiben"
              subtitle="Writing"
              description="Master grammar and syntax with instant AI-powered feedback"
              color="from-pink-50 to-pink-100"
              borderColor="border-pink-500"
            />
            <SkillCard
              icon="🎧"
              title="Hören"
              subtitle="Listening"
              description="Train with native speakers and improve listening comprehension"
              color="from-purple-50 to-purple-100"
              borderColor="border-purple-500"
            />
            <SkillCard
              icon="🗣️"
              title="Sprechen"
              subtitle="Speaking"
              description="Practice pronunciation with interactive exercises and real-time feedback"
              color="from-orange-50 to-orange-100"
              borderColor="border-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learn at Your Level</h3>
            <p className="text-xl text-gray-600">Structured progression from Beginner to Intermediate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LevelCard 
              level="A1" 
              title="Beginner"
              description="Start here if you're new to German" 
              lessons="13 Lessons"
              exercises="27 Exercises"
              time="162 Minutes"
              featured={false}
            />
            <LevelCard 
              level="A2" 
              title="Elementary"
              description="Build on your basics" 
              lessons="Coming Soon"
              exercises="Expanding"
              time="~3 hours"
              featured={true}
            />
            <LevelCard 
              level="B1" 
              title="Intermediate"
              description="Achieve fluency" 
              lessons="Coming Soon"
              exercises="Expanding"
              time="~4 hours"
              featured={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Loved by Learners</h3>
            <p className="text-xl text-gray-600">Real feedback from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Mueller"
              role="Student"
              feedback="The interactive lessons made learning German so much fun! I passed my A1 exam in just 2 months."
              rating={5}
            />
            <TestimonialCard
              name="Marco Rossi"
              role="Student"
              feedback="The AI writing feedback is incredible. It corrected my grammar mistakes instantly with explanations."
              rating={5}
            />
            <TestimonialCard
              name="Elena Schmidt"
              role="Student"
              feedback="Finally a platform that covers all four skills equally. The speaking practice is game-changing!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Master German?
          </h3>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of students learning German with structured lessons and interactive exercises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
                Start Free Now
              </Button>
            </Link>
            <Link href="/lessons">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white/10">
                Explore Lessons
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  subtitle,
  description,
  color,
  borderColor,
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-8 border-l-4 ${borderColor} hover:shadow-lg transition-all group`}>
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-2xl font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-blue-600 font-semibold mb-4">{subtitle}</p>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function LevelCard({ 
  level, 
  title,
  description,
  lessons,
  exercises,
  time,
  featured
}: { 
  level: string; 
  title: string;
  description: string;
  lessons: string;
  exercises: string;
  time: string;
  featured: boolean;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden transition-all hover:shadow-2xl ${
      featured ? 'md:scale-105 shadow-xl border-2 border-blue-500' : 'shadow-md border border-gray-200'
    }`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      <div className={`p-8 ${featured ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'}`}>
        <div className={`text-6xl font-bold mb-3 ${featured ? 'text-blue-600' : 'text-gray-900'}`}>{level}</div>
        <h5 className="text-2xl font-bold text-gray-900 mb-2">{title}</h5>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3 mb-6 pb-6 border-b">
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-gray-700">{lessons}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-gray-700">{exercises}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-gray-700">{time}</span>
          </div>
        </div>

        <Link href="/auth/signup">
          <Button className="w-full" size="lg">
            {featured ? 'Get Started Now' : 'Explore'}
          </Button>
        </Link>
      </div>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  feedback,
  rating,
}: {
  name: string;
  role: string;
  feedback: string;
  rating: number;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{feedback}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h5 className="font-bold text-gray-900">{name}</h5>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
