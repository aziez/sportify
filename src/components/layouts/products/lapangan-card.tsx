'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {  ArrowRightCircleIcon } from 'lucide-react';

export default function CardLapangan({ product }: { product: any }) {
  return (
    <Card className="w-full overflow-hidden">
      <div className="group relative">
        <img
          src={product?.img}
          alt="Product Image"
          width={6000}
          height={600}
          className="aspect-video object-cover transition-opacity group-hover:opacity-80"
        />
        <Button
          variant="outline"
          size="sm"
          className="absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ShoppingCartIcon className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{product?.title}</h3>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            ab, doloribus dolore officia eaque nam.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {product?.harga} / jam
            </p>
            <Button
              variant={'outline'}
              size={'default'}
              className="rounded-full"
            >
              Info Lainnya <ArrowRightCircleIcon className="ml-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
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
