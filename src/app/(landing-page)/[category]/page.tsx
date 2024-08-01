import React from 'react';
import products from '../../../data/products';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/layouts/products/product-page';

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
  return Object.keys(products).map(category => ({ category }));
}

export default CategoryPage;
