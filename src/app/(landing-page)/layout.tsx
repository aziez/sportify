import Footer from '@/components/layouts/footer';
import MainNavbar from '@/components/layouts/main-navbar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
