'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, usePathname } from 'next/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import CardLapangan from './lapangan-card';
import CardProduct from './product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Product = {
  title: string;
  img: string;
  harga: number;
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
  const [searchCategory, setSearchCategory] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  // Extract category from pathname
  const currentCategory = pathname.split('/')[1]; // Assuming /[category] structure

  const getCategoryLink = () => {
    if (searchCategory === 'sewa-lapangan') {
      return '/sewa-lapangan';
    } else if (searchCategory === 'beli-perlengkapan') {
      return '/beli-perlengkapan';
    } else if (searchCategory === 'sewa-perlengkapan' && currentCategory) {
      return `/sewa/${currentCategory}`;
    }
    return '#';
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const link = getCategoryLink();
    if (link !== '#') {
      router.push(link);
    }
  };

  return (
    <div className="mt-4 p-4">
      <Head>
        <title>{title.toUpperCase()} DAY</title>
      </Head>
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-7xl">
        {title.toUpperCase()} DAY
      </h1>
      <div className="container mb-10">
        <h1 className="mb-5 text-2xl font-medium">Apa yang anda cari ?</h1>

        <div className="rounded-2xl border border-gray-500 px-6 py-4">
          <form className="flex justify-between" onSubmit={handleSearch}>
            <select
              id="underline_select"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}>
              <option value="" disabled>
                Pilih yang dicari
              </option>
              <option value="sewa-lapangan">Sewa Lapangan</option>
              <option value="sewa-perlengkapan">Sewa Perlengkapan</option>
              <option value="beli-perlengkapan">Beli Perlengkapan</option>
            </select>
            <input type="text" placeholder=" Lokasi" />
            <Button type="submit">Temukan</Button>
          </form>
        </div>
      </div>

      {Object.keys(products).map((category) => (
        <div key={category} className="container">
          <h1 className="mb-4 text-xl font-bold md:text-5xl">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <Carousel className="w-full">
            <CarouselContent>
              {products[category].map((product) => (
                <CarouselItem
                  className={`md:basis-1/${category === 'lapangan' ? '2' : '4'} lg:basis-1/${category === 'lapangan' ? '2' : '4'}`}
                  key={product.link}>
                  {category === 'lapangan' ? (
                    <CardLapangan product={product} />
                  ) : (
                    <CardProduct product={product} />
                  )}
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
