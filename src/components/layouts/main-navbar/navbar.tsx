// @flow
import { ShoppingCartIcon, User2Icon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import * as React from 'react';

import { authOptions } from '@/lib/auth';
import { ThemeToggle } from '../../toogle-theme';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { ChartItem } from './chart-items';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-primary/100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
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
        <a className="btn btn-ghost text-xl">Sportify</a>
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
        {session !== null ? (
          <Button variant={'gooeyRight'} className="rounded-full border">
            <User2Icon className="h-5 w-5" />
            <p>{session?.user?.name} Username</p>
          </Button>
        ) : (
          <div className="dropdown dropdown-end">
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
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
