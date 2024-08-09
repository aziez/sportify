import { ProductCard } from '../landing-page/farmui/product-card';

import { MotionValue } from 'framer-motion';
import React from 'react';

type Product = {
  id: string;
  title: string;
  description: string;
  img: string;
  harga: number;
  sale?: boolean;
  rating?: number;
};

type Props = {
  title: string;
  products: Product[];
};

const SewaProduct: React.FC<Props> = ({ title, products }) => {
  // Default value for translate if you don't have a specific value
  const defaultTranslate: MotionValue<number> = 0 as any; // Replace with your actual default value or logic

  return (
    <div className="mt-4 p-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-4xl">
        Sewa {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              translate={defaultTranslate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SewaProduct;
