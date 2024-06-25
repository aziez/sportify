// api/auth/register.route.ts

import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { randomBytes } from 'crypto';
import { redirect } from 'next/navigation';
import nodemailer from 'nodemailer';

import prisma from '@/lib/prisma';

export interface RegisterRequestData {
  displayName: string;
  email: string;
  password: string;
  role: string;
}

export async function POST(request: Request) {
  const requestData = await request.json();
  const { email } = requestData;

  try {
    await isUsersEmailVerified(email);
    await registerHandle(requestData);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return NextResponse.json(
      { message: 'Invalid JSON data in request body' },
      { status: 400 }
    );
  }
}

async function registerHandle(requestData: RegisterRequestData) {
  const { displayName, email, password, role } = requestData;

  // console.log(requestData, '-----------------------------');

  const hashedPassword = await hash(password, 10);
  const verificationToken = randomBytes(32).toString('hex');

  if (!displayName || !email || !password || !role) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  const isEmailExist = await checkIsExits(email);
  const rolesData = await checkRole(role);

  if (isEmailExist) {
    return {
      errors: {
        email: ['email already exist'],
      },
    };
  }

  if (rolesData === null) {
    return {
      errors: {
        role: ['role is undefinied'],
      },
    };
  }

  try {
    await prisma.user.create({
      data: {
        displayName,
        email,
        password: hashedPassword,
        rolesId: rolesData.id,
        emailVerifToken: verificationToken,
      },
    });
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

  await sendVerificationEmail(requestData.email, verificationToken);
  redirect(`/email/verify/send?email=${requestData.email}&verification_sent=1`);
}

async function checkIsExits(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}
async function checkRole(role: string) {
  const roles = await prisma.role.findUnique({
    where: { name: role },
  });

  return roles;
}

// Function to send a verification email
const sendVerificationEmail = async (email: string, token: string) => {
  // nodemailer configuration. make sure to replace this with your native email provider in production.

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    port: Number(process.env.NEXT_PUBLIC_MAIL_PORT) || 0,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  });

  // the content of the email
  const emailData = {
    from: '"Blog Nextjs Auth" <verification@test.com>',
    to: email,
    subject: 'Email Verification',
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="http://localhost:3000/email/verify?email=${email}&token=${token}">Verify Email</a>
    `,
  };

  try {
    // send the email
    await transporter.sendMail(emailData);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Function to resend email verification
export const resendVerificationEmail = async (email: string) => {
  const emailVerificationToken = randomBytes(32).toString('hex');

  try {
    // update email verification token
    await prisma.user.update({
      where: { email },
      data: { emailVerifToken: emailVerificationToken },
    });

    // send the verification link along with the token
    await sendVerificationEmail(email, emailVerificationToken);
  } catch (error) {
    return 'Something went wrong.';
  }

  return 'Email verification sent.';
};

// Function to verify a user's email
export const verifyEmail = (email: string) => {
  return prisma.user.update({
    where: { email },
    data: {
      emailVerifiedAt: new Date(),
      emailVerifToken: null,
    },
  });
};

// Function to check if a user's email is verified
export const isUsersEmailVerified = async (email: string) => {
  console.log(email, 'DATA EMAILLLLLL');

  const user = await prisma.user.findFirst({
    where: { email },
  });

  // if the user doesn't exist then it's none of the function's business
  if (!user) return true;

  // if the emailVerifiedAt value is null then raise the EmailNotVerifiedError error
  if (!user?.emailVerifiedAt) throw new Error('error');

  return true;
};
