'use client';
import { useSession } from 'next-auth/react';

import SideNavbar from '@/components/layouts/side-navbar';
import TopNavbar from '@/components/layouts/top-navbar';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNavbar />
      <div className="flex flex-col">
        <TopNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
              <h2>Session Data:</h2>
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
