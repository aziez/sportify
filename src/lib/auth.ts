import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

interface CustomUser extends User {
  id: string;
  displayName: string;
  email: string;
  role: string;
  isVerified: boolean;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error('Invalid email or password');
        }

        const isVerified =
          user.emailVerifToken === null || user.emailVerifiedAt !== null;

        const role = await prisma.role.findUnique({
          where: { id: user.rolesId },
        });

        const passwordMatch = await compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          throw new Error('Invalid password');
        }

        const customUser: CustomUser = {
          id: user.id,
          displayName: user.displayName,
          email: user.email,
          role: role?.name ?? 'Customer',
          isVerified,
        };

        return customUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.id = customUser.id;
        token.displayName = customUser.displayName;
        token.email = customUser.email;
        token.role = customUser.role;
        token.isVerified = customUser.isVerified;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.displayName = token.displayName as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.isVerified = token.isVerified as boolean;
      }
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
};
