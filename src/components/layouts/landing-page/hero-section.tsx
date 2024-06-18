'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBagIcon } from 'lucide-react';
import { ProductCard } from './farmui/product-card';
import { Separator } from '@/components/ui/separator';
// import { ProductCard } from '@/components/component/product-card';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    sale: boolean;
    rating: number;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

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
  return (
    <div
      ref={ref}
      className="relative flex h-full flex-col self-auto overflow-hidden py-80 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mb-20 bg-slate-300 py-8"
      >
        <h1 className="mb-8 text-center text-xl font-bold text-primary dark:text-white md:text-4xl">
          Featured Products
        </h1>
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
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
      <p className="mt-8 max-w-2xl text-black text-secondary dark:text-neutral-200 md:text-xl">
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
          className="mt-4 rounded-full"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -20,
//       }}
//       key={product.title}
//       className="group/product relative h-96 w-[30rem] flex-shrink-0"
//     >
//       <Link
//         href={product.link}
//         className="block group-hover/product:shadow-2xl"
//       >
//         <Image
//           src={product.thumbnail}
//           height="600"
//           width="600"
//           className="absolute inset-0 h-full w-full object-cover object-left-top"
//           alt={product.title}
//         />
//       </Link>
//       <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
//       <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
//         {product.title}
//       </h2>
//     </motion.div>
//   );
// };

export default HeroParallax;
