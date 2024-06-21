'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { ThemeToggle } from '../../toogle-theme';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { ChartItem } from './chart-items';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';

const Navbar = ({
  menus,
}: {
  menus: {
    label: string;
    link: string;
  }[];
}) => {
  const { data: session } = useSession();

  return (
    <div className="navbar sticky top-0 z-50 bg-primary/50">
      <div className="navbar-start">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="bg-none lg:hidden xl:hidden 2xl:hidden"
          >
            <Button variant={'ghost'}>
              <Label className="swap swap-rotate">
                <input type="checkbox" />

                <svg
                  className="3-5 swap-off h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </Label>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {menus.map((menu: menuProps, i: number) => (
              <DropdownMenuItem key={i}>
                <Button variant={'linkHover1'}>
                  <Link href={menu.link}>{menu.label}</Link>
                </Button>
              </DropdownMenuItem>
            ))}
            {session === null && (
              <div className="flex md:hidden lg:hidden xl:hidden 2xl:hidden">
                <DropdownMenuItem>
                  <Button variant={'linkHover2'}>
                    <Link href="/register">Daftar</Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant={'ringHover'}>
                    <Link href="/login">Masuk</Link>
                  </Button>
                </DropdownMenuItem>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant={'linkHover2'}>
          <Link href="/">
            <Image
              alt="logo"
              width={500}
              height={500}
              className="h-[42px] w-auto"
              src={'/logo.webp'}
            />
          </Link>
        </Button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Booking</a>
          </li>
          <li>
            <a>Tracking</a>
          </li>
          <li>
            <a>Forun</a>
          </li>
          {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
          <li>
            <a>Events</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <ChartItem />
        <ThemeToggle />
        {session === null ? (
          <div className="hidden md:flex">
            <Button variant={'ringHover'} className="rounded-full">
              <Link href="/login">Masuk</Link>
            </Button>
            <Button variant={'linkHover2'}>
              <Link href="/register">Daftar</Link>
            </Button>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="btn-circle rounded-full border"
                  variant={'ringHover'}
                  size={'icon'}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session?.user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
