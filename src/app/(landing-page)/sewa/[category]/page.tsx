import React from 'react';
import { notFound } from 'next/navigation';
import sewaProducts from '@/data/sewaproducts';
import CardProduct from '@/components/layouts/products/product-card';


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
  const productList = sewaProducts[category as keyof typeof sewaProducts];

  if (!productList) {
    notFound();
  }

  return (
    <div className="mt-4 p-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-4xl">
        Sewa {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productList.map(product => (
            <CardProduct key={product.link} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return Object.keys(sewaProducts).map(category => ({ category }));
}

export default CategoryPage;
