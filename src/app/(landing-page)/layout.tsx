import Footer from '@/components/layouts/footer';
import MainNavbar from '@/components/layouts/main-navbar';
import Navbar from '@/components/layouts/main-navbar/navbar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
    {
      label: 'Store',
      link: '/store',
    },
    {
      label: 'Booking',
      link: '/booking',
    },
    {
      label: 'Tracking',
      link: '/tracking',
    },
    {
      label: 'Forums',
      link: '/forum',
    },
  ];

  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
