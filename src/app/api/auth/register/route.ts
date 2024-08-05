// api/auth/register.route.ts

import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/prisma';
import {
  generateEmailVerificationToken,
  isUsersEmailVerified,
  sendVerificationEmail,
} from '@/lib/email';

export interface RegisterRequestData {
  displayName: string;
  email: string;
  password: string;
  role: any;
}

export async function POST(request: Request) {
  try {
    const requestData: RegisterRequestData = await request.json();
    const { email } = requestData;

    // await isUsersEmailVerified(email);
    await isUsersEmailVerified(email);
    const response = await registerHandle(requestData, request);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'An error occurred during registration.' },
      { status: 400 }
    );
  }
}

async function registerHandle(
  requestData: RegisterRequestData,
  request: Request
) {
  const { displayName, email, password, role } = requestData;

  if (!displayName || !email || !password || !role) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    const hashedPassword = await hash(password, 10);
    const verificationToken = await generateEmailVerificationToken();

    const isEmailExist = await checkIsExits(email);

    if (isEmailExist) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 400 }
      );
    }

    const rolesData = await checkRole(role);
    if (!rolesData) {
      return NextResponse.json(
        { message: 'Role is undefined' },
        { status: 400 }
      );
    }

    await prisma.user.create({
      data: {
        displayName,
        email,
        password: hashedPassword,
        rolesId: rolesData.id,
        emailVerifToken: verificationToken,
      },
    });

    await sendVerificationEmail(email, verificationToken);

    // Get the base URL
    const baseUrl = new URL(request.url).origin;
    const url = `${baseUrl}/email/verify/send?email=${email}&verification_sent=1`;

    return NextResponse.json(
      { message: 'Successfully Registered', url: url },
      { status: 200 }
    );
  } catch (e) {
    console.error('Error in registration:', e);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

async function checkIsExits(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

async function checkRole(role: any) {
  return prisma.role.findFirst({
    where: { name: role },
  });
}
