/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ArrowRightCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const InfoSection = () => {
  return (
    <div className="gap-4">
      <div className="mt-4 grid w-full items-center justify-center text-center md:grid-cols-2 md:text-start">
        <div className="order-last h-full md:order-first">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-5xl">
            Pesan Sekarang, <br /> Main Futsal Kapan Saja!
          </h1>
          <p className="my-8 font-jakarta text-lg">
            Penyewaan bola futsal dengan proses yang mudah dan cepat. Pesan
            online, dan bola siap digunakan kapan pun Anda butuhkan.Dapatkan
            bola futsal terbaik untuk permainan yang lebih menyenangkan.
          </p>
          <Button
            variant={'outline'}
            className="w-[50%] rounded-full border-black px-6">
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <Carousel className="my-4 w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/bola1.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/rompi.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/bola2.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/lapangan.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <Link href={'/futsal'}>
            <Button
              variant={'outline'}
              className="rounded-fll mt-12 w-[50%] rounded-full border-black">
              Sewa Sekarang <ArrowRightCircleIcon className="ml-4" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={9000}
            width={9000}
            alt="footbal"
            src="/img/fo1.png"
            className="aspect-square h-auto object-cover object-top"
          />
        </div>
      </div>
      <Separator className="mb-8 hidden h-1 md:flex" />
      <div className="grid w-full items-center justify-center text-center md:grid-cols-2 md:text-start">
        <div className="flex items-center justify-center">
          <Image
            height={9000}
            width={9000}
            alt="footbal"
            src="/img/po1.png"
            className="aspect-square h-auto object-contain object-top"
          />
        </div>
        <div className="h-full">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-5xl">
            Cari Peralatan Volly dengan lebih mudah!
          </h1>
          <p className="my-8 text-wrap font-jakarta text-lg">
            Kami menyediakan raket dan shuttlecock terbaik untuk setiap
            pertandingan. Sewa perlengkapan dari kami dan nikmati permainan
            tanpa kendala. Pesan online, dan perlengkapan siap digunakan kapan
            pun Anda butuhkan.{' '}
          </p>
          <Button
            variant={'outline'}
            className="w-[50%] rounded-full border-black px-6">
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <Carousel className="my-4 w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/poli1.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/poli2.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/poli3.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/poli4.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Link href={'/volly'}>
            <Button
              variant={'outline'}
              className="rounded-fll mt-12 w-[50%] rounded-full border-black">
              Sewa Sekarang <ArrowRightCircleIcon className="ml-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="mb-8 hidden h-1 md:flex" />
      <div className="grid w-full items-center justify-center text-center md:grid-cols-2 md:text-start">
        <div className="order-last h-full md:order-first">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-5xl">
            Pengalaman Bermain Bulutangkis Tanpa Hambatan!
          </h1>
          <p className="my-8 text-wrap font-jakarta text-lg">
            Kami menyediakan raket dan shuttlecock terbaik untuk setiap
            pertandingan. Sewa perlengkapan dari kami dan nikmati permainan
            tanpa kendala. Pesan online, dan perlengkapan siap digunakan kapan
            pun Anda butuhkan.{' '}
          </p>
          <Button
            variant={'outline'}
            className="w-[50%] rounded-full border-black px-6">
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <Carousel className="my-4 w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/raket1.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/raket2.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/raket3.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  src="/img/raket4.png"
                  className="aspect-square rounded-lg object-cover transition-opacity group-hover:opacity-80"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Link href={'/badminton'}>
            <Button
              variant={'outline'}
              className="rounded-fll mt-12 w-[50%] rounded-full border-black">
              Sewa Sekarang <ArrowRightCircleIcon className="ml-4" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={9000}
            width={9000}
            alt="footbal"
            src="/img/pb1.png"
            className="aspect-square h-auto object-contain object-top"
          />
        </div>
      </div>
      <Separator className="mb-8 hidden h-1 md:flex" />
    </div>
  );
};

export default InfoSection;
