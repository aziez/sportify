// components/SidebarItem.tsx
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { usePathname } from 'next/navigation';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  StoreIcon,
  Bell,
} from 'lucide-react';

// Sidebar items configuration
interface SidebarItemConfig {
  href: string;
  icon: React.ReactNode;
  label: string;
  badgeCount?: number;
  roles?: string[]; // Roles that can access this item
}

const sidebarItems: SidebarItemConfig[] = [
  {
    href: '/dashboard',
    icon: <Home className="h-4 w-4" />,
    label: 'Dashboard',
  },
  {
    href: '#',
    icon: <ShoppingCart className="h-4 w-4" />,
    label: 'Orders',
    badgeCount: 6,
  },
  {
    href: '/dashboard/products',
    icon: <Package className="h-4 w-4" />,
    label: 'Products',
  },
  { href: '#', icon: <Users className="h-4 w-4" />, label: 'Customers' },
  {
    href: '/dashboard/vanues',
    icon: <StoreIcon className="h-4 w-4" />,
    label: 'Vanue Setting',
    roles: ['vendor'],
  },
];

const SidebarItem = ({ href, icon, label, badgeCount }: SidebarItemConfig) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
      {icon}
      {label}
      {badgeCount !== undefined && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badgeCount}
        </Badge>
      )}
    </Link>
  );
};

export { SidebarItem, sidebarItems };
