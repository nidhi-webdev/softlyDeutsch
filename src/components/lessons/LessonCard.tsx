'use client';

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ILesson } from '@/types';
import { getDifficultyColor } from '@/lib/utils';

interface LessonCardProps {
  lesson: ILesson;
  onStart: (lessonId: string) => void;
  isCompleted?: boolean;
  isPremium?: boolean;
}

export function LessonCard({
  lesson,
  onStart,
  isCompleted = false,
  isPremium = false,
}: LessonCardProps) {
  const canAccess = !lesson.isPremium || isPremium;
  const difficultyColor = getDifficultyColor(lesson.level as any);

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader
        title={lesson.title}
        description={lesson.description}
      />
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="info">{lesson.skill.toUpperCase()}</Badge>
            <Badge variant="warning">{lesson.level}</Badge>
          </div>
          {isCompleted && <Badge variant="success">✓ Completed</Badge>}
        </div>

        <div className="text-sm text-gray-600">
          <p>Estimated Duration: {lesson.estimatedDuration} minutes</p>
        </div>

        {lesson.isPremium && !isPremium && (
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-700 font-medium">
              👑 Premium Content - Upgrade to access
            </p>
          </div>
        )}

        <Button
          onClick={() => onStart(lesson.id)}
          disabled={!canAccess}
          className="w-full"
          variant={isCompleted ? 'secondary' : 'primary'}
        >
          {isCompleted ? 'Review Lesson' : canAccess ? 'Start Lesson' : 'Unlock with Premium'}
        </Button>
      </CardContent>
    </Card>
  );
}
