import React from 'react';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/layouts/products/product-page';

type Product = {
  name: string;
  imageUrl: string;
  price: number;
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
        name: 'Proteam Bola Futsal Warrior',
        imageUrl: '/sample/futsal/b1.png',
        price: 5000,
        link: 'proteamfutsalwarrior1',
        badge: 'Best Seller',
      },
      {
        name: 'Proteam Bola Futsal Warrior',
        imageUrl: '/sample/futsal/b2.png',
        price: 5000,
        link: 'proteamfutsalwarrior2',
        badge: 'New Arrivals',
      },
      {
        name: 'Bola Futsal Nike Flight',
        imageUrl: '/sample/futsal/b3.png',
        price: 5000,
        link: 'nikeflight',
        badge: 'Best Seller',
      },
      {
        name: 'Proteam Bola Futsal Warrior',
        imageUrl: '/sample/futsal/b4.png',
        price: 5000,
        link: 'proteamfutsalwarrior3',
        badge: 'Best Seller',
      },
    ],
    rompi: [
      {
        name: 'Rompi Futsal Ortus Hijau  ',
        imageUrl: '/sample/futsal/rompi.png',
        price: 5000,
        link: '#',
      },
      {
        name: 'Rompi Futsal Adidas Hitam',
        imageUrl: '/sample/futsal/rompi2.png',
        price: 5000,
        link: '#',
      },
      {
        name: 'Rompi Futsal Adidas Hijau  ',
        imageUrl: '/sample/futsal/rompi3.png',
        price: 5000,
        link: '#',
      },
      {
        name: 'Rompi Futsal Adidas Hijau Muda',
        imageUrl: '/sample/futsal/rompi4.png',
        price: 5000,
        link: '#',
      },
    ],
    lapangan: [
      {
        name: 'Lapangan Futsal Ortus Hijau  ',
        imageUrl: '/sample/futsal/lap1.jpg',
        price: 5000,
        link: '#',
      },
      {
        name: 'Lapangan Futsal Adidas Hitam',
        imageUrl: '/sample/futsal/lap2.jpg',
        price: 5000,
        link: '#',
      },
    ],
  },
  volly: {
    bola: [
      {
        name: 'Bola volly PSYCHE Outdor Beach',
        imageUrl: '/sample/volly/b1.png',
        price: 7000,
        link: 'nikeelite',
        badge: 'Best Seller',
      },
      {
        name: 'Bola volly AGNITE No 5 PVC indoor',
        imageUrl: '/sample/volly/b2.png',
        price: 8000,
        link: 'spaldingtf1000',
        badge: 'New Arrivals',
      },
      {
        name: 'Bola volly MIKASA 2200 Supergold',
        imageUrl: '/sample/volly/b3.png',
        price: 7500,
        link: 'wilsonevolution',
        badge: 'Best Seller',
      },
      {
        name: 'Bola volly MIKASA 330 HOLOGRAM',
        imageUrl: '/sample/volly/b4.png',
        price: 7200,
        link: 'moltengg7x',
        badge: 'Best Seller',
      },
    ],
    jersey: [
      {
        name: 'Basketball Jersey Nike',
        imageUrl: '/sample/volly/jersey1.png',
        price: 6000,
        link: '#',
      },
      {
        name: 'Basketball Jersey Adidas',
        imageUrl: '/sample/volly/jersey2.png',
        price: 6200,
        link: '#',
      },
      {
        name: 'Basketball Jersey Puma',
        imageUrl: '/sample/volly/jersey3.png',
        price: 6300,
        link: '#',
      },
      {
        name: 'Basketball Jersey Puma',
        imageUrl: '/sample/volly/jersey4.png',
        price: 6300,
        link: '#',
      },
    ],
    lapangan: [
      {
        name: 'Lapangan Basket Ortus Green',
        imageUrl: '/sample/volly/lap1.jpg',
        price: 6000,
        link: '#',
      },
      {
        name: 'Lapangan Basket Adidas Court',
        imageUrl: '/sample/volly/lap2.jpg',
        price: 6200,
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
