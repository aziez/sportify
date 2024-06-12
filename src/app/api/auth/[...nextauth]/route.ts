import axiosInstance from '@/lib/axios';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, token, user }) {
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'john' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('Attempting to authenticate:', credentials);
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Please input username and password');
        }

        const { username, password } = credentials;

        const res = await axiosInstance.post(
          process.env.BE_URL + 'auth/login',
          {
            username,
            password,
          }
        );

        console.log('ress axios', res);

        if (res?.status === 401) {
          console.log(res?.statusText);
          return null;
        }

        const user = res?.data;
        console.log(user);
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
