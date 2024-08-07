'use client';
import { MailOpenIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import axiosInstance from '@/lib/axios';

export default function Send() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [isPending, startTransition] = useTransition();
  //
  const handleResendVerify = async () => {
    console.log(email);

    try {
      startTransition(async () => {
        const response = await axiosInstance.post('/api/auth/resend', {
          email,
        });
        console.log(response);
        toast.success(response.data.message);
      });
    } catch (error) {
      console.error('Failed to resend verification email:', error);
      toast.error(
        'Failed to resend verification email. Please try again later.'
      );
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <Toaster />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>{' '}
      <div className="mx-auto w-full max-w-md space-y-6 px-8">
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
            {isPending && (
              <span className="loading loading-dots loading-xs"></span>
            )}
            Resend Verification Email
          </Button>
          {/* <SendForm /> */}
        </div>
      </div>
    </div>
  );
}
