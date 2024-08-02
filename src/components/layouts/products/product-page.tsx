'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, usePathname } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import CardLapangan from './lapangan-card';
import CardProduct from './product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Product = {
  name: string;
  imageUrl: string;
  price: number;
  link: string;
  badge?: string;
};

type Props = {
  title: string;
  products: {
    [key: string]: Product[];
  };
};

export default function ProductPage({ title, products }: Props) {
 
  return (
    <div className="mt-4 p-4">
      <Head>
        <title>{title.toUpperCase()} DAY</title>
      </Head>
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-7xl">
        {title.toUpperCase()} DAY
      </h1>
      
      {Object.keys(products).map(category => (
        <div key={category} className="container">
          <h1 className="mb-4 text-xl font-bold md:text-5xl">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <Carousel className="w-full">
            <CarouselContent>
              {products[category].map(product => (
                <CarouselItem
                  className={`md:basis-1/${category === 'lapangan' ? '2' : '4'} lg:basis-1/${category === 'lapangan' ? '2' : '4'}`}
                  key={product.link}
                >
                  {category === 'lapangan' ? <CardLapangan product={product} /> : <CardProduct product={product} />}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="mx-4 h-12 w-12" />
            <CarouselPrevious className="mx-4 h-12 w-12" />
          </Carousel>
          <Separator className="my-6 h-1" />
        </div>
      ))}
    </div>
  );
}
