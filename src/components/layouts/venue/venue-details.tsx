import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { ArrowRightCircleIcon, Car, SquareArrowOutUpRight, StarIcon, Trash2Icon } from 'lucide-react';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import CalendarNavigation from './date-options';
import TotalVenue from './total-venue';
  

export default function VenueDetails() {
  return (
    <div className="">
      <div className="container py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-[60%] ">
            <img className="rounded-2xl h-96 object-cover" src="/sample/badminton/lap1.jpg" alt="" />
          </div>
          <Card className="py-6 px-8 rounded-2xl w-full flex-col border-0 shadow-none bg-transparent">   
            <CardTitle className='text-3xl font-bold'>Hall Bulu Tangkis Pasar Jatirawasari By SR</CardTitle>
            <div className='flex items-center gap-2'>
                <p>4.8</p>
                <StarFilledIcon className='text-yellow-400'/> 
                <p>Kota Jakarta Pusat</p>
            </div>
            <Badge className='bg-gray-200 text-gray-600 font-normal hover:bg-gray-200 mt-2'>Badminton</Badge>
            <CardDescription className='font-bold text-black mt-8'>Deskripsi</CardDescription>
            <CardDescription>TIGA LAPANGAN BULUTANGKIS DI JATIRAWASARI BERKUALITAS INTERNATIONAL DAN BERKARPET VINYL</CardDescription>
            <CardDescription className='font-bold text-black mt-8'>Lokasi</CardDescription>
            <CardDescription>Jl. gunung sahari XII no.11 Jakarta pusat 10720</CardDescription>
            <Button
            variant={'outline'}
            className="rounded-fll max-w-xl rounded-full border-black mt-3"
          >
            Buka di Map <SquareArrowOutUpRight className="ml-4 w-4" />
          </Button>
            <Button className='w-full mt-8'>Cek Ketersediaan</Button>
          </Card>
        </div>

        <div className="flex mt-16 flex-col md:flex-row">
        <div className="w-full">
          <h1 className="text-xl font-bold mb-6">Lapangan Tersedia</h1>
          <CalendarNavigation/>
        </div>
        <TotalVenue/>
        </div>
      </div>
    </div>
  );
}
