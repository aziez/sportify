'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import About from '@/components/layouts/landing-page/about';
import Hero from '@/components/layouts/landing-page/hero';
import InfoSection from '@/components/layouts/landing-page/info-section';
import SearchOption from '@/components/layouts/landing-page/search-option';
import Team from '@/components/layouts/landing-page/team';
import { useCategories } from '@/hooks/categories/use-categories';

export default function Home() {
  const { data: categories, error, isLoading } = useCategories();

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
    <>
      <Hero />
      <main className="px-32">
        <SearchOption data={categories ?? null} />
        <InfoSection />
        <Team />
        <About />
      </main>
    </>
  );
}
