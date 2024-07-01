'use client';
import { LoaderIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LayoutLoader = () => {
  return (
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="absolute right-4 top-4 rounded-full bg-primary p-2">
        <LoaderIcon className="h-6 w-6 animate-spin text-primary-foreground" />
      </div>

      <Image src={'/logo.webp'} width={250} height={250} alt="logo" />
      <p className="inline-flex gap-1">
        <span className="loading loading-dots loading-lg"></span>
      </p>
    </div>
  );
};

export default LayoutLoader;
