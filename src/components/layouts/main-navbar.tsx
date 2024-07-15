'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import Image from 'next/image';
import { UserCircle, UserIcon } from 'lucide-react';
import { Button } from '../ui/button';
import ChartItem from './main-navbar/chart-items';
import ProfileMenu from './main-navbar/profile-items';
import Fb from 'public/social/fb.svg';
import Ig from 'public/social/ig.svg';
import Tw from 'public/social/x.svg';

const MainNavbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="navbar bg-gray-600">
        <div className="navbar-start space-x-4">
          <Button variant={'outline'} size={'icon'} className="rounded-full">
            <Fb className="h-5 w-5" />
          </Button>
          <Button variant={'outline'} size={'icon'} className="rounded-full">
            <Tw className="h-5 w-5" />
          </Button>
          <Button variant={'outline'} size={'icon'} className="rounded-full">
            <Ig className="h-5 w-5" />
          </Button>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image
              alt="logo"
              width={500}
              height={500}
              className="h-[42px] w-auto"
              src={'/sportify.png'}
            />
          </Link>
        </div>
        <div className="navbar-end space-x-4 text-white">
          <ChartItem />
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
              <ProfileMenu />
            </div>
          )}
        </div>
      </div>
      <div className="navbar sticky top-0 z-50 bg-black text-neutral-content">
        <Button variant={'linkHover1'}>Home</Button>
        <Button variant={'linkHover2'}>Syarat dan Cara Sewa</Button>
        <Button variant={'linkHover2'}>Contact Info</Button>
        <Button variant={'linkHover2'}>Review</Button>
        <Button variant={'linkHover2'}>Categories</Button>
      </div>
    </>
  );
};

export default MainNavbar;
