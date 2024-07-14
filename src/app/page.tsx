/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from '@/components/layouts/footer';
import Hero from '@/components/layouts/landing-page/hero';
import InfoSection from '@/components/layouts/landing-page/info-section';
import Team from '@/components/layouts/landing-page/team';
import Navbar from '@/components/layouts/main-navbar/navbar';

export default async function Home() {
  const features = [
    {
      title: 'Sport Equipment',
      description:
        'Platfrom pembelian dan penyewaan alat alat olahraga terlengkap di Semarang.',
      link: '#',
      thumbnail: '/img/sport-equipment.png',
    },
    {
      title: 'Venue Rentals',
      description:
        'Sewa tempat olahraga di seluruh Indonesia dengan mudah dan cepat.',
      link: '#',
      thumbnail: '/img/rental-vanue.png',
    },
    {
      title: 'Healthy Forum',
      description: 'Platform berkumpul dan berolahraga bersama.',
      link: '#',
      thumbnail: '/img/ilustration-sport.png',
    },
  ];

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
    <div>
      <Navbar menus={menus} />
      <Hero />
      <InfoSection />
      <Team />
      {/* <HeroParallax /> */}
      {/* <FeatureSection features={features} /> */}
      <Footer />
    </div>
  );
}
