import { NextRequest, NextResponse } from 'next/server';

import { resendVerificationEmail } from '@/lib/email';

export interface ResendVerify {
  email: string;
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const requestData: ResendVerify = await req.json();
    const email = requestData;

    await resendVerificationEmail(email);
    return NextResponse.json(
      {
        message: `Resend verify successfully to ${email}`,
        data: requestData,
      },
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
