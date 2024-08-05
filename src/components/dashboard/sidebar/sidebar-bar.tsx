// components/SideBar.tsx
import { useSession } from 'next-auth/react';
import Spotify from 'public/logo.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { SidebarItem, sidebarItems } from './sidebar-item';

const SideBar = () => {
  const { data: session } = useSession();
  const userRole = session?.user?.role.toLowerCase() as string;

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Spotify className="h-[64px] w-[86px]" />
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarItems.map((item) => {
              if (!item.roles || item.roles.includes(userRole)) {
                return (
                  <SidebarItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    badgeCount={item.badgeCount}
                  />
                );
              }
              return null;
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
