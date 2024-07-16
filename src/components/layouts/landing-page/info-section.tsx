/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ArrowRightCircleIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const InfoSection = () => {
  return (
    <>
      <div className="grid p-12 md:grid-cols-2">
        <div className="h-full">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-6xl">
            Pesan Sekarang, <br /> Main Futsal Kapan Saja!
          </h1>
          <p className="my-8 text-wrap font-jakarta text-lg">
            Penyewaan bola futsal dengan proses yang mudah dan cepat. Pesan
            online, dan bola siap digunakan kapan pun Anda butuhkan.Dapatkan
            bola futsal terbaik untuk permainan yang lebih menyenangkan.
          </p>
          <Button
            variant={'outline'}
            className="w-[50%] rounded-full border-black px-6"
          >
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <div className="flex snap-x snap-mandatory items-center gap-x-3 overflow-x-auto p-4">
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/bola1.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/rompi.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/bola2.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/lapangan.png" />
            </div>
          </div>
          <Link href={'/futsal-day'}>
            <Button
              variant={'outline'}
              className="rounded-fll mt-12 w-[50%] rounded-full border-black"
            >
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
            className="max-h-[640px] w-auto"
          />
        </div>
      </div>
      <div className="grid p-12 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            height={9000}
            width={9000}
            alt="footbal"
            src="/img/po1.png"
            className="max-h-[640px] w-auto"
          />
        </div>
        <div className="h-full">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-6xl">
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
            className="w-[50%] rounded-full border-black px-6"
          >
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <div className="flex snap-x snap-mandatory items-center gap-x-3 overflow-x-auto p-4">
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/poli1.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/poli2.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/poli3.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/poli4.png" />
            </div>
          </div>
          <Button
            variant={'outline'}
            className="rounded-fll mt-12 w-[50%] rounded-full border-black"
          >
            Sewa Sekarang <ArrowRightCircleIcon className="ml-4" />
          </Button>
        </div>
      </div>
      <div className="grid p-12 md:grid-cols-2">
        <div className="h-full">
          <h1 className="text-xl font-bold text-black dark:text-white md:text-6xl">
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
            className="w-[50%] rounded-full border-black px-6"
          >
            Info Lainya <ArrowRightCircleIcon className="ml-4" />
          </Button>
          <div className="flex snap-x snap-mandatory items-center gap-x-3 overflow-x-auto p-4">
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/raket1.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/raket2.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/raket3.png" />
            </div>
            <div className="grid w-32 shrink-0 snap-center snap-always">
              <img src="/img/raket4.png" />
            </div>
          </div>
          <Button
            variant={'outline'}
            className="rounded-fll mt-12 w-[50%] rounded-full border-black"
          >
            Sewa Sekarang <ArrowRightCircleIcon className="ml-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={9000}
            width={9000}
            alt="footbal"
            src="/img/pb1.png"
            className="max-h-[640px] w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default InfoSection;
