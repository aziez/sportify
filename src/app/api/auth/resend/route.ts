import { NextRequest, NextResponse } from 'next/server';

import { resendVerificationEmail } from '@/lib/email';

export interface ResendVerify {
  email: string;
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 } // Use 405 for method not allowed
    );
  }

  try {
    const requestData: ResendVerify = await req.json();
    const { email } = requestData;

    console.log(email, 'EMAIL');

    await resendVerificationEmail(email);
    return NextResponse.json(
      { message: `Resend verify successfully to ${email}` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to resend verification email:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
