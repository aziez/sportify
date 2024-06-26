'use server';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

import prisma from './prisma';

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    port: Number(process.env.NEXT_PUBLIC_MAIL_PORT) || 0,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  });

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
    await transporter.sendMail(emailData);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
  return NextResponse.json(
    { message: 'Email verify send succesfully', email: email },
    { status: 200 }
  );
};

export const resendVerificationEmail = async (email: string) => {
  const emailVerificationToken = generateEmailVerificationToken();

  try {
    await prisma.user.update({
      where: { email },
      data: { emailVerifToken: emailVerificationToken },
    });
    await sendVerificationEmail(email, emailVerificationToken);
  } catch (error) {
    console.error('Error resending verification email:', error);
    return NextResponse.json({ message: error }, { status: 400 });
  }

  return NextResponse.json(
    { message: 'Email verification sent', email: email },
    { status: 200 }
  );
};

// Function to generate an email verification token
export const generateEmailVerificationToken = () => {
  // generates a buffer containing 32 random bytes.
  // The 32 indicates the number of bytes to generate, and it is commonly used
  // for creating secure tokens or identifiers.
  return randomBytes(32).toString('hex');
};

export const verifyEmail = async (email: string) => {
  try {
    await prisma.user.update({
      where: { email },
      data: {
        emailVerifiedAt: new Date(),
        emailVerifToken: null,
      },
    });
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};

export const isUsersEmailVerified = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) return true;
  if (!user.emailVerifiedAt) throw new Error('Email not verified');

  return true;
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};
