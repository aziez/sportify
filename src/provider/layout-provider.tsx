'use client';

import LayoutLoader from '@/components/layout-loader';
import { useMounted } from '@/hooks/use-mounted';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { FC, ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

const LayoutProvider: FC<ProviderProps> = ({ children }) => {
  const mounted = useMounted();
  const location = usePathname();

  if (!mounted) {
    return <LayoutLoader />;
  } else {
    return (
      <motion.div
        key={location}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: { opacity: 0, y: 50 },
          pageAnimate: { opacity: 1, y: 0 },
          pageExit: { opacity: 0, y: -50 },
        }}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={true}
        />
        <main>{children}</main>
      </motion.div>
    );
  }
};

export default LayoutProvider;
