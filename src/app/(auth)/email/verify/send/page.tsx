'use client';
import { Button } from '@/components/ui/button';
import useAsync from '@/hooks/use-async';
import { emailApi } from '@/stores/api/api';
import { MailOpenIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import toast from 'react-hot-toast';

export default function Send() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [isPending, startTransition] = useTransition();
  const [resend] = useAsync(emailApi.resend);

  const [timer, setTimer] = useState(60); // 1 minute countdown
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let countdown: any;
    if (isButtonDisabled) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            setIsButtonDisabled(false);
            return 60; // reset timer
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [isButtonDisabled]);

  const handleResendVerify = () => {
    // console.log(email);

    try {
      startTransition(async () => {
        await resend(email).then((res) => {
          toast.success(res.data.message);
          setIsButtonDisabled(true); // Disable the button after resending
        });
      });
    } catch (error) {
      console.error('Failed to resend verification email:', error);
      toast.error(
        'Failed to resend verification email. Please try again later.',
      );
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
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
            disabled={isButtonDisabled || isPending}
            onClick={handleResendVerify}
          >
            {isPending && (
              <span className="loading-xl loading loading-dots mr-4"></span>
            )}
            {isButtonDisabled
              ? `Resend in ${timer}s`
              : 'Resend Verification Email'}
          </Button>
        </div>
      </div>
    </div>
  );
}
