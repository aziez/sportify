'use client';

import { ShoppingCartIcon } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
type Props = {};

export const ChartItem = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ringHover'}
          className="indicator rounded-full"
          size={'icon'}
        >
          <span className="sr-only">Chart list</span>
          <div className="indicator">
            <Badge
              variant={'outline'}
              className="indicator-item border-none bg-none text-white dark:text-black"
            >
              8
            </Badge>
            <ShoppingCartIcon className="h-5 w-5" />
            {/* <span className="badge indicator-item badge-sm">8</span> */}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <span className="text-lg font-bold">8 Items</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-info">Subtotal : Rp. 900.000,00</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button className="w-full" variant={'shine'}>
            View Chart
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChartItem;
