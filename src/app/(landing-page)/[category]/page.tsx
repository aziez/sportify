import React from 'react';
import { notFound } from 'next/navigation';

import ProductPage from '@/components/layouts/products/product-page';

type Product = {
  title: string;
  img: string;
  harga: number;
  link: string;
  badge?: string;
};

type CategoryProducts = {
  [key: string]: Product[];
};

type Products = {
  [key: string]: CategoryProducts;
};

const products: Products = {
  futsal: {
    bola: [
      {
        title: 'Proteam Bola Futsal Warrior',
        img: '/sample/futsal/b1.png',
        harga: 5000,
        link: 'proteamfutsalwarrior1',
        badge: 'Best Seller',
      },
      {
        title: 'Proteam Bola Futsal Warrior',
        img: '/sample/futsal/b2.png',
        harga: 5000,
        link: 'proteamfutsalwarrior2',
        badge: 'New Arrivals',
      },
      {
        title: 'Bola Futsal Nike Flight',
        img: '/sample/futsal/b3.png',
        harga: 5000,
        link: 'nikeflight',
        badge: 'Best Seller',
      },
      {
        title: 'Proteam Bola Futsal Warrior',
        img: '/sample/futsal/b4.png',
        harga: 5000,
        link: 'proteamfutsalwarrior3',
        badge: 'Best Seller',
      },
    ],
    rompi: [
      {
        title: 'Rompi Futsal Ortus Hijau Toska',
        img: '/sample/futsal/rompi.png',
        harga: 5000,
        link: '#',
      },
      {
        title: 'Rompi Futsal Adidas Hitam',
        img: '/sample/futsal/rompi2.png',
        harga: 5000,
        link: '#',
      },
      {
        title: 'Rompi Futsal Adidas Hijau Toska',
        img: '/sample/futsal/rompi3.png',
        harga: 5000,
        link: '#',
      },
      {
        title: 'Rompi Futsal Adidas Hijau Muda',
        img: '/sample/futsal/rompi4.png',
        harga: 5000,
        link: '#',
      },
    ],
    lapangan: [
      {
        title: 'Lapangan Futsal Ortus Hijau Toska',
        img: '/sample/futsal/lap1.jpg',
        harga: 5000,
        link: '#',
      },
      {
        title: 'Lapangan Futsal Adidas Hitam',
        img: '/sample/futsal/lap2.jpg',
        harga: 5000,
        link: '#',
      },
    ],
  },
  volly: {
    bola: [
      {
        title: 'Bola volly PSYCHE Outdor Beach',
        img: '/sample/volly/b1.png',
        harga: 7000,
        link: 'nikeelite',
        badge: 'Best Seller',
      },
      {
        title: 'Bola volly AGNITE No 5 PVC indoor',
        img: '/sample/volly/b2.png',
        harga: 8000,
        link: 'spaldingtf1000',
        badge: 'New Arrivals',
      },
      {
        title: 'Bola volly MIKASA 2200 Supergold',
        img: '/sample/volly/b3.png',
        harga: 7500,
        link: 'wilsonevolution',
        badge: 'Best Seller',
      },
      {
        title: 'Bola volly MIKASA 330 HOLOGRAM',
        img: '/sample/volly/b4.png',
        harga: 7200,
        link: 'moltengg7x',
        badge: 'Best Seller',
      },
    ],
    jersey: [
      {
        title: 'Basketball Jersey Nike',
        img: '/sample/volly/jersey1.png',
        harga: 6000,
        link: '#',
      },
      {
        title: 'Basketball Jersey Adidas',
        img: '/sample/volly/jersey2.png',
        harga: 6200,
        link: '#',
      },
      {
        title: 'Basketball Jersey Puma',
        img: '/sample/volly/jersey3.png',
        harga: 6300,
        link: '#',
      },
      {
        title: 'Basketball Jersey Puma',
        img: '/sample/volly/jersey4.png',
        harga: 6300,
        link: '#',
      },
    ],
    lapangan: [
      {
        title: 'Lapangan Basket Ortus Green',
        img: '/sample/volly/lap1.jpg',
        harga: 6000,
        link: '#',
      },
      {
        title: 'Lapangan Basket Adidas Court',
        img: '/sample/volly/lap2.jpg',
        harga: 6200,
        link: '#',
      },
    ],
  },
  badminton: {
    raket: [],
    shuttlecock: [],
    lapangan: [],
  },
};

type Props = {
  params: {
    category: string;
  };
};

const CategoryPage: React.FC<Props> = ({ params }) => {
  const { category } = params;
  const productList = products[category];

  if (!productList) {
    notFound();
  }

  return (
    <div>
      <ProductPage title={category} products={productList} />
    </div>
  );
};

export async function generateStaticParams() {
  return Object.keys(products).map((category) => ({ category }));
}

export default CategoryPage;
