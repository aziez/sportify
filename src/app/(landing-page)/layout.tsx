import Footer from '@/components/layouts/footer';
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
      <Navbar menus={menus} />
      {children}
      <Footer />
    </>
  );
}
