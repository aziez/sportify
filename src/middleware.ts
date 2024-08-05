import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  });

  // Extract the pathname from the request URL
  const { pathname } = req.nextUrl;

  // Log the token for debugging
  console.log(token, 'Middleware Token');

  // If token exists, check if email is verified
  if (token) {
    // Redirect to verify-email page if email is not verified
    if (!token.isVerified && pathname !== '/email') {
      const url = req.nextUrl.clone();
      url.pathname = '/email/verify/send';
      url.searchParams.set('email', token.email as string);
      url.searchParams.set('verification_sent', '1');
      return NextResponse.redirect(url);
    }

    // Redirect to dashboard if token exists and accessing login or register page
    if (
      pathname === '/login' ||
      pathname === '/register' ||
      pathname.startsWith('/email')
    ) {
      const url = req.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
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
  matcher: ['/dashboard/:path*', '/login', '/register', '/email'],
};
