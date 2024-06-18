'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const LayoutLoader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-2">
      <Image src={'/logo.webp'} width={500} height={500} alt="logo" />
      <span className="inline-flex gap-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </span>
    </div>
  );
};

export default LayoutLoader;
