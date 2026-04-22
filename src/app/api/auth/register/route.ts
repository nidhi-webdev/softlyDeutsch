import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { IApiResponse, IUser } from '@/types';

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<IApiResponse<Partial<IUser>>>> {
  try {
    const { email, password, name }: RegisterRequest = await req.json();

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        isPremium: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: user,
        message: 'User registered successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[REGISTER_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to register user',
      },
      { status: 500 }
    );
  }
}
