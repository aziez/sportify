import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import { cn } from '@/lib/utils';
import AuthProvider from '@/provider/auth-provider';
import LayoutProvider from '@/provider/layout-provider';
import { ThemeProvider } from '@/provider/theme-provider';
import { fontJakarta } from '@/styles/font';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | SPORTIFY',
    default: 'Sportify - Easy confinient and reliable',
  },
  description: 'Easy confinient and reliable',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontJakarta.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider session={session}>
            <LayoutProvider>{children}</LayoutProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
