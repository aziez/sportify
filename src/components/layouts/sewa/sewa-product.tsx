import React from 'react';
import { useRouter } from 'next/router';
import sewaProducts from '@/data/sewaproducts';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { ProductCard } from '../landing-page/farmui/product-card';

type Product = {
  title: string;
  img: string;
  harga: number;
  link: string;
  badge?: string;
};

type Props = {
  title: string;
  products: Product[];
};

const SewaProduct: React.FC<Props> = ({ title, products }) => {

  return (
    <div className="mt-4 p-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-4xl">
        Sewa {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <ProductCard key={product.link} product={product} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default SewaProduct

