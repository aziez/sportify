import {
  Bell,
  Home,
  Package,
  ShoppingCart,
  StoreIcon,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import Spotify from 'public/logo.svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

const SideNavbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  console.log(session, 'USER SESSIONS');

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
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === '/dashboard' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === '/dashboard/products' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="/dashboard/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === '/dashboard/products' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === '/dashboard/products' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              <Users className="h-4 w-4" />
              Customers
            </Link>
            {session?.user?.role.toLowerCase() === 'vendor' && (
              <Link
                href="/dashboard/vanues"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === '/dashboard/vanues' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                <StoreIcon className="h-4 w-4" />
                Vanue Setting
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
