import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import { Badge } from '../../../ui/badge';
import { Card, CardContent } from '../../../ui/card';

interface StarIconProps {
  className?: string;
}

interface RatingProps {
  value: number;
}

const StarIcon: FC<StarIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Rating: FC<RatingProps> = ({ value }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 ${i < Math.floor(value) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
      />
    );
  }
  return <div className="flex items-center space-x-1">{stars}</div>;
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    sale?: boolean;
    rating?: number;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[20rem] flex-shrink-0"
    >
      <Card className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
        <div className="relative">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="h-64 w-full object-cover"
            width={600}
            height={400}
          />
          {product?.sale && (
            <Badge className="absolute left-4 top-4 bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              SALE
            </Badge>
          )}
        </div>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Rating value={product.rating ?? 3} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.rating}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Crafted with premium fleece, this hoodie is perfect for cozy days
            and chilly nights.
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">$49.99</h2>
            <h3 className="text-lg font-bold text-red-500 line-through">
              $69.99
            </h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
