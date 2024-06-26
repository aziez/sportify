// src/components/email/verify/verify-email.tsx
'use client';

// Importing necessary actions and components
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { findUserByEmail, verifyEmail } from '@/lib/email';

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
    <>
      {/* Displaying loading or result message */}
      <div className="mb-4">{isLoading ? 'Please wait ...' : result}</div>

      {/* Navigation link back to the login page */}
      <div className="my-3">
        <Link href="/login" className="rounded bg-white px-2 py-3">
          Back to Login
        </Link>
      </div>
    </>
  );
}
