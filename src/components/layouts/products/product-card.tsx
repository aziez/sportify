'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Product = {
  name: string;
  imageUrl: string;
  price: number;
  link: string;
  badge?: string;
};

export default function CardProduct({ product }: { product: Product }) {
  const link = `/${product?.link}`; // Menyesuaikan link dengan path yang sesuai
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      key={product?.name}
      className="group/product"
    >
      <Card className="w-full max-w-sm overflow-hidden">
        <div className="group relative">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            width={600}
            height={600}
            className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
          />
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Link href={link}>
              <ShoppingCartIcon className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Link>
          </Button>
        </div>
        <CardContent className="p-4 md:p-6">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">{product?.name}</h3>
            <p className="text-sm text-muted-foreground">{product?.price}</p>
            {product?.badge && (
              <div className="flex items-center justify-end">
                <div className="badge badge-info p-4 text-white">
                  {product?.badge}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
