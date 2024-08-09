'use server';
import prisma from './prisma';

import { render } from '@react-email/components';
import { randomBytes } from 'crypto';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
require('dotenv').config();

import EmailTemplateVerify from '../components/emails/verify-template';

export const sendVerificationEmail = async (email: string, token: string) => {
  console.log(process.env.MAIL_FROM, 'EMAIL SENDERRRR');

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    secure: true,
    port: Number(process.env.NEXT_PUBLIC_MAIL_PORT) || 465,
    tls: {
      ciphers: 'SSLv3',
    },
    debug: true,
    connectionTimeout: 100000,
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const magicLink = `email=${email}&token=${token}`;

  const emailHtml = await render(EmailTemplateVerify({ magicLink }));

  const mailOptions = {
    from: process.env.MAIL_FROM, // Specify the sender's email address
    to: email,
    subject: 'Verify your email address',
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email verify send successfully', email },
      { status: 200 },
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

export const resendVerificationEmail = async (email: any) => {
  const emailVerificationToken = await generateEmailVerificationToken();

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
    { message: 'Email verification sent', email },
    { status: 200 },
  );
};

// Function to generate an email verification token
export const generateEmailVerificationToken = () => {
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
