import { NextRequest, NextResponse } from 'next/server';
import { successResponse, errorResponse } from '@/lib/utils';

/**
 * GET /api/users/profile
 * Get user profile
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Get user session
    // TODO: Fetch user profile from database

    return NextResponse.json(
      successResponse(
        {
          id: 'user-1',
          email: 'user@example.com',
          name: 'User Name',
          isPremium: false,
        },
        'User profile retrieved'
      ),
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json(
      errorResponse(err.message, 'Failed to fetch user profile'),
      { status: 500 }
    );
  }
}
