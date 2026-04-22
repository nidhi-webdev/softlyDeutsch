import { NextRequest, NextResponse } from 'next/server';
import { successResponse, errorResponse } from '@/lib/utils';

/**
 * POST /api/progress/[lessonId]
 * Submit progress for a lesson
 */
export async function POST(
  request: NextRequest,
  props: { params: Promise<{ lessonId: string }> }
) {
  const params = await props.params;
  try {
    const body = await request.json();
    const { lessonId } = params;

    // TODO: Get user session
    // TODO: Update progress in database
    // TODO: Calculate score

    return NextResponse.json(
      successResponse(
        {
          lessonId,
          score: body.score,
          isCompleted: true,
        },
        'Progress saved successfully'
      ),
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json(
      errorResponse(err.message, 'Failed to save progress'),
      { status: 500 }
    );
  }
}

/**
 * GET /api/progress/[lessonId]
 * Get progress for a lesson
 */
export async function GET(
  request: NextRequest,
  props: { params: Promise<{ lessonId: string }> }
) {
  const params = await props.params;
  try {
    const { lessonId } = params;

    // TODO: Get user session
    // TODO: Fetch progress from database

    return NextResponse.json(
      successResponse(
        {
          lessonId,
          score: 0,
          isCompleted: false,
        },
        'Progress retrieved successfully'
      ),
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json(
      errorResponse(err.message, 'Failed to fetch progress'),
      { status: 500 }
    );
  }
}
