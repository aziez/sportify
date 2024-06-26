'use client';
import { MailOpenIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { resendVerificationEmail } from '@/lib/email';

export default function Send() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  //
  const handleResendVerify = () => {
    try {
      const response = resendVerificationEmail(email);
      console.log(response);
      // You can add additional logic here to show a message to the user
    } catch (error) {
      console.error('Failed to resend verification email:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <MailOpenIcon className="h-12 w-12" />
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Verify Your Email</h1>
            <p className="text-bold text-xl">{email}</p>
            <p className="text-muted-foreground">
              We've sent a verification link to your email address. Please check
              your inbox and click the link to verify your account.
            </p>
          </div>
          <Button
            variant={'shine'}
            className="w-full bg-primary-foreground"
            onClick={() => handleResendVerify()}
          >
            Resend Verification Email
          </Button>
          {/* <SendForm /> */}
        </div>
      </div>
    </div>
  );
}
