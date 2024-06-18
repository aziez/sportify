'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

import LayoutLoader from '@/components/layout-loader';
import { useMounted } from '@/hooks/use-mounted';

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
        <main>{children}</main>
      </motion.div>
    );
  }
};

export default LayoutProvider;
