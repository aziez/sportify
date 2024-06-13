import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';

// Ensure the AUTH_SECRET environment variable is defined
if (!process.env.AUTH_SECRET) {
  throw new Error('Please define the AUTH_SECRET environment variable');
}

export default withAuth(
  {
    jwt: { decode: authOptions.jwt?.decode },
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized: ({ token }: any) => !!token,
    },
  },
  {
    secret: process.env.AUTH_SECRET,
  }
);

export const config = { matcher: ['/dashboard/', '/dashboard/:path*'] };
