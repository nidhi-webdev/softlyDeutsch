import { IApiResponse } from '@/types';

/**
 * Standardized API response formatter
 */
export function apiResponse<T>(
  success: boolean,
  data?: T,
  error?: string,
  message?: string
): IApiResponse<T> {
  return {
    success,
    data,
    error,
    message,
  };
}

/**
 * Success response
 */
export function successResponse<T>(data: T, message?: string): IApiResponse<T> {
  return apiResponse(true, data, undefined, message);
}

/**
 * Error response
 */
export function errorResponse<T = never>(error: string, message?: string): IApiResponse<T> {
  return apiResponse<T>(false, undefined, error, message);
}

/**
 * Parse lesson content
 */
export function parseLesson(content: string) {
  try {
    return JSON.parse(content);
  } catch {
    return { text: content };
  }
}

/**
 * Calculate user level based on score
 */
export function calculateUserLevel(
  totalScore: number,
  lessonsCompleted: number
): 'A1' | 'A2' | 'B1' {
  if (lessonsCompleted < 10) return 'A1';
  if (lessonsCompleted < 25) return 'A2';
  return 'B1';
}

/**
 * Format time spent
 */
export function formatTimeSpent(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
  return `${Math.round(seconds / 3600)}h`;
}

/**
 * Get difficulty color
 */
export function getDifficultyColor(level: 'A1' | 'A2' | 'B1'): string {
  switch (level) {
    case 'A1':
      return 'green';
    case 'A2':
      return 'yellow';
    case 'B1':
      return 'red';
    default:
      return 'gray';
  }
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}
