import CardProduct from '@/components/layouts/products/product-card';
import { notFound } from 'next/navigation';
import React from 'react';

// sewaproducts.ts
const Product = {
  futsal: [
    {
      name: 'Bola Futsal',
      imageUrl: '/sample/futsal/b1.png',
      price: 50000,
      link: '/futsal-bola',
    },
    {
      name: 'Bola Futsal',
      imageUrl: '/sample/futsal/b2.png',
      price: 30000,
      link: '/futsal-vest',
    },
    {
      name: 'Bola Futsal',
      imageUrl: '/sample/futsal/b3.png',
      price: 30000,
      link: '/futsal-vest',
    },
  ],
  volly: [
    {
      name: 'Bola Volley',
      imageUrl: '/sample/volly/b1.png',
      price: 40000,
      link: '/volley-ball',
    },
    {
      name: 'Bola Volley',
      imageUrl: '/sample/volly/b2.png',
      price: 60000,
      link: '/volley-jersey',
    },
    {
      name: 'Bola Volley',
      imageUrl: '/sample/volly/b3.png',
      price: 60000,
      link: '/volley-jersey',
    },
  ],
  badminton: [
    {
      name: 'Raket Badminton',
      imageUrl: '/sample/volly/b1.png',
      price: 70000,
      link: '/badminton-racket',
    },
    {
      name: 'Shuttlecock',
      imageUrl: '/sample/volly/b1.png',
      price: 20000,
      link: '/shuttlecock',
    },
  ],
};

type Product = {
  name: string;
  imageUrl: string;
  price: number;
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
