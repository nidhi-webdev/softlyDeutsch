'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { IExercise } from '@/types';

interface ExerciseComponentProps {
  exercise: IExercise;
  onSubmit: (answer: string) => Promise<void>;
  loading?: boolean;
  userAnswer?: string;
  isCorrect?: boolean;
  feedback?: string;
}

export function Exercise({
  exercise,
  onSubmit,
  loading = false,
  userAnswer,
  isCorrect,
  feedback,
}: ExerciseComponentProps) {
  const [answer, setAnswer] = useState(userAnswer || '');

  const handleSubmit = async () => {
    await onSubmit(answer);
  };

  const renderExerciseContent = () => {
    switch (exercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {exercise.options?.map((option: any) => (
              <label key={option.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="option"
                  value={option.id}
                  checked={answer === option.id}
                  onChange={(e) => setAnswer(e.target.value)}
                  disabled={loading || isCorrect !== undefined}
                  className="w-4 h-4"
                />
                <span className="ml-3">{option.text}</span>
              </label>
            ))}
          </div>
        );

      case 'fill-blank':
      case 'typing':
        return (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            disabled={loading || isCorrect !== undefined}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );

      case 'matching':
        return (
          <div className="text-gray-600">
            <p>Matching exercise - Implementation to be added</p>
          </div>
        );

      case 'listening':
        return (
          <div>
            {exercise.audioUrl && (
              <audio
                controls
                className="w-full mb-4"
              >
                <source src={exercise.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type what you hear..."
              disabled={loading || isCorrect !== undefined}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );

      case 'speaking':
        return (
          <div className="text-gray-600">
            <p>Speaking exercise - Mic implementation to be added</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader title={`Exercise ${exercise.order + 1}: ${exercise.type}`} />
      <CardContent className="space-y-6">
        <div>
          <p className="text-lg font-medium mb-4">{exercise.question}</p>
          {exercise.content && (
            <p className="text-gray-600 mb-4">{exercise.content}</p>
          )}
        </div>

        <div>
          {renderExerciseContent()}
        </div>

        {feedback && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            {exercise.explanation && (
              <p className="text-sm mt-2 text-gray-700">{exercise.explanation}</p>
            )}
            {feedback && (
              <p className="text-sm mt-2 text-gray-700">{feedback}</p>
            )}
          </div>
        )}

        {isCorrect === undefined && (
          <Button
            onClick={handleSubmit}
            loading={loading}
            disabled={!answer.trim()}
            className="w-full"
          >
            Check Answer
          </Button>
        )}

        {isCorrect !== undefined && (
          <Button variant="secondary" className="w-full">
            Next Exercise
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
