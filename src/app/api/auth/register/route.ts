import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method Not allowed' },
      { status: 405 }
    );
  }

  const errors = [];
  let requestData;

  try {
    requestData = await request.json();
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return NextResponse.json(
      { message: 'Invalid JSON data in request body' },
      { status: 400 }
    );
  }

  const { username, email, password, user_type } = requestData;

  if (!username || !email || !password || !user_type) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    errors.push('Password length should be more than 6 characters');
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const userExist = await prisma.users.findUnique({
      where: { email },
    });

    if (userExist) {
      return NextResponse.json(
        { message: 'Email is already registered' },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
        user_type,
      },
    });

    console.log(username, email, user_type, 'SUCCESSFULLY REGISTERED');

    return NextResponse.json(
      {
        message: 'User registered successfully!',
        newUser,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error('Error in registration:', e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json(
          { message: 'Email is already registered' },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
