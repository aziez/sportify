/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
'use client';
import FormSewa from './form-sewa';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { useCallback, useEffect, useState } from 'react';

export default function ProductDetail({ product }: { product: any }) {
  const [api, setApi] = useState<CarouselApi>();
  const [data, setData] = useState(product);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api) return;
      api?.scrollTo(index);
    },
    [api],
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    if (product) {
      setData(product);
    }
  }, [api, product]);

  console.log(data, 'DATAAAA');

  return (
    <div className="mx-auto grid items-center gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
      <div className="grid items-start gap-4">
        <Carousel setApi={setApi} className="mx-auto">
          <CarouselContent>
            {data.map((prod: any) => (
              <CarouselItem key={prod.id}>
                <img
                  src={prod.img}
                  alt="Product Image"
                  className="aspect-square max-h-[420px] overflow-hidden bg-gray-400 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <p className="mt-4 text-base font-semibold">Variant</p>
          <div className="mt-2 flex items-start gap-2">
            {data.map((thumb: any, index: number) => (
              <img
                key={index}
                onClick={() => onThumbClick(index)}
                width={50}
                height={50}
                alt="thumbnails"
                className="aspect-square w-[calc(15%-0.5rem)] cursor-pointer rounded-md border object-cover object-top"
                src={thumb?.img}
              />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="grid gap-4 md:gap-10">
        <div className="prose">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Proteam Bola Futsal Warrior
          </h1>
          <Button
            variant="ringHover"
            className="mt-4 flex w-full items-center justify-between rounded-full bg-tangerine-400 hover:bg-tangerine-700"
          >
            <p className="text-base">Promo Semarang 20%</p>
            <p>
              Berakhir dalam <br />
              <span className="text-sm font-bold">01.20.30</span>
            </p>
          </Button>
          <div className="mt-3 flex justify-normal gap-3">
            <h3 className="text-lg font-bold text-red-500">Rp. 5000 /jam</h3>
            <h3 className="text-lg font-bold line-through">
              Rp. {(5000 * 25) / 10}/jam
            </h3>
          </div>
          <Separator className="h-1" />
          <FormSewa />
          <div className="card my-8 w-full bg-slate-500 text-primary-content">
            <div className="card-body">
              <h2 className="card-title text-base font-bold">
                WARRANTY & SATISFACTION GUARANTEE
              </h2>
              <p>
                Gratis penukaran produk atau upgrade produk cuma-cuma atau
                jaminan refund penuh jika barang yang diterima tidak sesuai,
                tidak layak.
              </p>
              <Separator className="my-2" />
              <p>Bisa cancel, ganti alat atau tanggal kapanpun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
