'use client';


import { BentoGrid } from '@/components/ui/bento-grid';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FeatureCard } from './farmui/feature-card';

 const FeatureSection = ({
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
            <FeatureCard key={i} features={feature} />
          ))}
        </BentoGrid>
      </ScrollArea>
    </ContainerScroll>
  );
};

export default FeatureSection;
