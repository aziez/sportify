'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ShoppingBagIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { ProductCard } from './farmui/product-card';
import { useProducts } from '@/hooks/products/use-products';
// import { ProductCard } from '@/components/component/product-card';

export const HeroParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const { data: products, error, isLoading } = useProducts();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 250]),
    springConfig
  );

  if (error) return <p>Error loading products</p>;

  const firstRow = products?.data?.slice(0, 5);
  const secondRow = products?.data?.slice(3, 9);

  return (
    <div
      ref={ref}
      className="relative flex h-full flex-col self-auto overflow-hidden py-80 antialiased [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mb-20 bg-slate-300 py-8">
        <h1 className="mb-8 text-center text-xl font-bold text-primary dark:text-white md:text-4xl">
          Featured Products
        </h1>
        {!isLoading ? (
          <>
            <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse bg-red-500">
              {firstRow?.map((product: any) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.id}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row space-x-20">
              {secondRow?.map((product: any) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.id}
                />
              ))}
            </motion.div>
          </>
        ) : (
          <p>Loading Data</p>
        )}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 z-10 mx-auto w-full max-w-7xl px-4">
      <h1 className="text-2xl font-bold text-primary dark:text-white md:text-7xl">
        Sportify 🤸‍♂️ <br /> Tingkatkan Kebugaranmu
      </h1>
      <p className="mt-8 max-w-2xl text-primary-content dark:text-neutral-200 md:text-xl">
        Sportify hadir untuk membantu Generasi Milenial dan Gen Z yang kurang
        gerak biar lebih sehat dan bahagia. Dengan platform kami, kamu bisa cari
        teman olahraga, sewa fasilitas olahraga, dan pinjam peralatan dengan
        mudah. Gabung sekarang dan mulai perjalanan kebugaranmu bersama
        Sportify!
      </p>
      <div className="flex-rows flex gap-3">
        <Button variant={'shine'} size={'lg'} className="mt-4">
          Ayo Mulai !!
        </Button>
        <Button
          variant={'expandIcon'}
          Icon={ShoppingBagIcon}
          iconPlacement="right"
          size={'lg'}
          className="mt-4 rounded-full">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroParallax;
