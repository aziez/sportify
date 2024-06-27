// src/components/email/verify/verify-email.tsx
'use client';

// Importing necessary actions and components
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { findUserByEmail, verifyEmail } from '@/lib/email';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Meteors } from '@/components/ui/meteors';

// Defining the Email Verification Component
export default function VerifyEmail() {
  // Accessing search parameters from the URL
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const token = searchParams.get('token');

  // State for managing loading state and result message
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('Error verifying your email');

  // Effect hook for handling email verification process
  useEffect(() => {
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

        // Validating the verification token
        if (token !== user.emailVerifToken) {
          throw new Error('Invalid verification token');
        }

        // Updating user verification status in the database
        await verifyEmail(user.email);

        // Updating result message and indicating loading completion
        setResult('Email verified successfully. Please relogin.');
        setIsLoading(false);
      } catch (error) {
        console.error('Error verifying email:', error);
      }
    };

    // Initiating the email verification process
    emailVerification();
  }, [email, token]);

  // Rendering the Email Verification Component
  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" /> */}
      <Card className="relative items-center justify-end overflow-hidden rounded-xl border border-gray-800 bg-gray-900 px-4 py-8 text-center shadow-xl">
        <CardTitle className="mb-4 text-xl font-bold text-white">
          Verify your account
        </CardTitle>

        <CardDescription className="mb-4 text-base font-normal">
          <p className="font-jakarta text-lg text-white">
            {isLoading
              ? 'Please wait while we verify your account information.'
              : result}
          </p>

          <span className="loading loading-infinity loading-lg text-white"></span>
        </CardDescription>

        <CardFooter>
          <Button variant={'shine'} className="w-full">
            Login
          </Button>
        </CardFooter>

        {/* Meaty part - Meteor effect */}
        <Meteors number={50} />
      </Card>
    </div>
  );
}
