'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function ProductDetail({ product }: { product: any }) {
  const [api, setApi] = useState<CarouselApi>();
  const [data, setData] = useState(product);
  const [date, setDate] = useState<Date>();

  console.log(product, 'Lemparan Parent');

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api) return;
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    if (product) {
      setData(product);
    }
  });

  console.log(data, 'DATAAAA');

  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
      <div className="max-h-lg grid items-start gap-4">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {data.map((prod: any) => (
              <CarouselItem>
                <img
                  src={prod.img}
                  alt="Product Image"
                  width={600}
                  height={600}
                  className="aspect-square overflow-hidden rounded-lg border border-gray-400 bg-gray-400 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-2 flex items-start gap-2">
            {data.map((thumb: any, index: number) => (
              <img
                onClick={() => onThumbClick(index)}
                width={50}
                height={50}
                alt="thumbnails"
                className="aspect-square w-[calc(15%-0.5rem)] rounded-md border object-cover object-top"
                src={thumb?.img}
              />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="grid gap-4 md:gap-10">
        <div className="prose">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Proteam Bola Futsal Warrior
          </h1>
          <Button
            variant={'ringHover'}
            size={'lg'}
            className="mt-4 flex w-full items-center justify-between rounded-full bg-[#ffa800] hover:bg-[#ffaa008c]"
          >
            <p className="text-base">Promo Semarang 20%</p>
            <p>
              Berakhir dalam <br />{' '}
              <span className="text-sm font-bold">01.20.30</span>
            </p>
          </Button>
          <div className="mt-3 flex justify-normal gap-3">
            <h3 className="text-lg font-bold text-red-500">Rp. 5000 /jam</h3>
            <h3 className="text-lg font-bold line-through">
              Rp. {(5000 * 25) / 10}/jam
            </h3>
          </div>
          <Separator className="h-1" />
          <div className="mt-8 flex w-full justify-between rounded">
            <div>
              <p>Pengambilan</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <p>Hari</p>
            </div>
            <div>
              <p>Pengembalian</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
