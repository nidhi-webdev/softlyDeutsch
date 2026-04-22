// User Types
export interface IUser {
  id: string;
  email: string;
  name: string;
  password?: string;
  isPremium: boolean;
  premiumExpiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Skill Levels
export type SkillLevel = 'A1' | 'A2' | 'B1';
export type Skill = 'lesen' | 'schreiben' | 'hören' | 'sprechen';

// Lesson Types
export interface ILesson {
  id: string;
  title: string;
  description: string;
  skill: Skill;
  level: SkillLevel;
  content: string; // Rich text content
  audioUrl?: string;
  imageUrl?: string;
  isPremium: boolean;
  estimatedDuration: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

// Exercise Types
export interface IExercise {
  id: string;
  lessonId: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'typing' | 'listening' | 'speaking';
  question: string;
  content?: string;
  audioUrl?: string;
  options?: IExerciseOption[];
  correctAnswer?: string;
  explanation?: string;
  isPremium: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

// Progress Types
export interface IProgress {
  id: string;
  userId: string;
  lessonId: string;
  exerciseId?: string;
  score: number;
  isCompleted: boolean;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProgress {
  userId: string;
  skill: Skill;
  level: SkillLevel;
  totalLessons: number;
  completedLessons: number;
  averageScore: number;
  totalTimeSpent: number; // in minutes
  lastActivityAt?: Date;
}

// Payment Types
export interface IPayment {
  id: string;
  userId: string;
  stripePaymentId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  planType: 'monthly' | 'yearly';
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Exercise Submission
export interface IExerciseSubmission {
  exerciseId: string;
  userAnswer: string;
  isCorrect?: boolean;
  score?: number;
}

// Lesson Difficulty
export interface ILessonDifficulty {
  level: SkillLevel;
  description: string;
  estimatedHours: number;
}

// Content Item (for lessons)
export interface IContentItem {
  id: string;
  type: 'text' | 'image' | 'audio' | 'video';
  content: string;
  order: number;
  metadata?: Record<string, string | number | boolean>;
}
