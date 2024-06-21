// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Extract the pathname from the request URL
  const { pathname } = req.nextUrl;

  // Check if token is available and user is trying to access login or register page
  if (token && (pathname === '/login' || pathname === '/register')) {
    // Redirect to dashboard if token exists
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // If no token and trying to access protected routes, redirect to login
  if (!token && pathname.startsWith('/dashboard')) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Continue to next middleware or the request if no redirection is needed
  return NextResponse.next();
}

// Protect the /dashboard route and login/register routes
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
