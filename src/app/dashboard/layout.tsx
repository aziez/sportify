'use client';
import SideBar from '@/components/dashboard/sidebar/sidebar-bar';
import TopNavbar from '@/components/layouts/top-navbar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { HomeIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Dashboard({ children }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const generateBreadcrumbs = (pathname) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      return { segment, href };
    });
  };

  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <TopNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                  <HomeIcon className="h-5 w-5" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((breadcrumb, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbSeparator />

                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{breadcrumb.segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.segment}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          {children}
        </main>
      </div>
    </div>
  );
}
