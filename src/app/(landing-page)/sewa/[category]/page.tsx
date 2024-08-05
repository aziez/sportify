import React from 'react';
import { notFound } from 'next/navigation';
import CardProduct from '@/components/layouts/products/product-card';

// sewaproducts.ts
const Product = {
  futsal: [
    {
      title: 'Bola Futsal',
      img: '/sample/futsal/b1.png',
      harga: 50000,
      link: '/futsal-bola',
    },
    {
      title: 'Bola Futsal',
      img: '/sample/futsal/b2.png',
      harga: 30000,
      link: '/futsal-vest',
    },
    {
      title: 'Bola Futsal',
      img: '/sample/futsal/b3.png',
      harga: 30000,
      link: '/futsal-vest',
    },
  ],
  volly: [
    {
      title: 'Bola Volley',
      img: '/sample/volly/b1.png',
      harga: 40000,
      link: '/volley-ball',
    },
    {
      title: 'Bola Volley',
      img: '/sample/volly/b2.png',
      harga: 60000,
      link: '/volley-jersey',
    },
    {
      title: 'Bola Volley',
      img: '/sample/volly/b3.png',
      harga: 60000,
      link: '/volley-jersey',
    },
  ],
  badminton: [
    {
      title: 'Raket Badminton',
      img: '/sample/volly/b1.png',
      harga: 70000,
      link: '/badminton-racket',
    },
    {
      title: 'Shuttlecock',
      img: '/sample/volly/b1.png',
      harga: 20000,
      link: '/shuttlecock',
    },
  ],
};

type Product = {
  title: string;
  img: string;
  harga: number;
  link: string;
  badge?: string;
};

type Props = {
  params: {
    category: string;
  };
};

const CategoryPage: React.FC<Props> = ({ params }) => {
  const { category } = params;
  const productList = Product[category as keyof typeof Product];

  if (!productList) {
    notFound();
  }

  return (
    <div className="mt-4 p-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-4xl">
        Sewa Perlengkapan {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productList.map((product) => (
            <CardProduct key={product.link} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return Object.keys(Product).map((category) => ({ category }));
}

export default CategoryPage;
