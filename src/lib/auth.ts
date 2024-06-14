// lib/auth.ts
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import axiosInstance from './axios';
import { cookies } from 'next/headers';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        try {
          const res = await axiosInstance.post(
            process.env.BE_URL + 'auth/login',
            {
              username: credentials.username,
              password: credentials.password,
            }
          );

          // console.log(res, 'DATAAA RESPONSEEE ASLIIII');

          const token = res.data;
          //
          //           cookies().set({
          //             name: 'access_token',
          //             value: token,
          //             httpOnly: true,
          //           });

          if (token) {
            return token;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV !== 'production',
};
