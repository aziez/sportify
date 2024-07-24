// src/components/email/verify/verify-email.tsx
'use client';

// Importing necessary actions and components
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

import { findUserByEmail, verifyEmail } from '@/lib/email';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Meteors } from '@/components/ui/meteors';
import { useSession } from 'next-auth/react';

// Defining the Email Verification Component
export default function VerifyEmail() {
  // Accessing search parameters from the URL
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const router = useRouter();
  const session = useSession();

  // State for managing loading state and result message
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('Error verifying your email');

  // Effect hook for handling email verification process
  useEffect(() => {
    const checkIsVerified = async () => {
      try {
        if (!email || !token) {
          throw new Error('Missing required fields');
        }
        
        const user = await findUserByEmail(email);

        if (user?.emailVerifToken !== null) {
          await emailVerification();
        } else {
          setIsLoading(false);
          toast.success('Your email have been verified !');
          redirect('/login');
        }
      } catch (error) {
        console.error('Error verifying email:', error);
      }
    };
    const emailVerification = async () => {
      try {
        // Checking if required fields are present
        if (!email || !token) {
          throw new Error('Missing required fields');
        }

        // Finding user by email in the database
        const user = await findUserByEmail(email);
        if (!user) {
          throw new Error('Invalid verification token');
        }
        if (token !== user.emailVerifToken) {
          throw new Error('Invalid verification token');
        }

        console.log(user, 'DATAA USERRRR');
        console.log(session, 'DATAA SESSSION');

        // Updating user verification status in the database

        await verifyEmail(user.email);
        setResult('Email verified successfully. Please relogin.');
        setIsLoading(false);
      } catch (error) {
        console.error('Error verifying email:', error);
      }
    };

    // Initiating the email verification process
    checkIsVerified();
  }, [email, token, isLoading, router]);

  // Rendering the Email Verification Component
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      <Toaster />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" /> */}
      <Card className="relative items-center justify-end overflow-hidden rounded-xl border border-gray-800 bg-gray-900 px-4 py-8 text-center shadow-xl">
        <CardTitle className="mb-4 text-xl font-bold text-white">
          Verify your account
        </CardTitle>

        <CardDescription className="mb-4 text-base font-normal">
          <p className="font-jakarta text-lg text-white">
            {isLoading ? (
              <>
                <p>Please wait while we verify your account information</p>
                <span className="loading loading-infinity loading-lg text-white"></span>
              </>
            ) : (
              result
            )}
          </p>
        </CardDescription>

        {!isLoading && (
          <CardFooter>
            <Button variant={'shine'} className="w-full" size="lg">
              <Link href={'/login'}>Back to login</Link>
            </Button>
          </CardFooter>
        )}

        {/* Meaty part - Meteor effect */}
        <Meteors number={50} />
      </Card>
    </div>
  );
}
