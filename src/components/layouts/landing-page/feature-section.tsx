'use client';
import React from 'react';
import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { FeatureCard } from './farmui/feature-card';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export const FeatureSection = ({
  features,
}: {
  features: {
    thumbnail: string;
    link: string;
    title: string;
    description: string;
  }[];
}) => {
  console.log(features);

  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Browse <br />
            <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
              Our Awesome Featured
            </span>
          </h1>
        </>
      }
    >
      <ScrollArea className="h-full px-4">
        <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
          {features.map((feature, i) => (
            <FeatureCard features={feature} />
          ))}
        </BentoGrid>
      </ScrollArea>
    </ContainerScroll>
  );
};

export default FeatureSection;
