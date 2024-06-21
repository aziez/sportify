import FeatureSection from '@/components/layouts/landing-page/feature-section';
import { HeroParallax } from '@/components/layouts/landing-page/hero-section';
import Navbar from '@/components/layouts/main-navbar/navbar';

export default async function Home() {
  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
      sale: true,
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
      sale: true,
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
      sale: true,
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
      sale: false,
    },
    {
      title: 'Editrix AI',
      sale: true,
      link: 'https://editrix.ai',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
      title: 'Pixel Perfect',
      sale: true,
      link: 'https://app.pixelperfect.quest',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
      sale: true,
    },
    {
      title: 'Aceternity UI',
      link: 'https://ui.aceternity.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
      sale: true,
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://smartbridgetech.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'https://renderwork.studio',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
  ];

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
      <Navbar menus={menus} />
      <HeroParallax products={products} />
      <FeatureSection features={features} />
    </>
  );
}
