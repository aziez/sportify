import { DateOption } from './date-option';
import TotalVenue from './total-venue';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function VenueDetails() {
  return (
    <div className="">
      <div className="container py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full md:w-[60%]">
            <img
              className="h-96 rounded-2xl object-cover"
              src="/sample/badminton/lap1.jpg"
              alt=""
            />
          </div>
          <Card className="w-full flex-col rounded-2xl border-0 bg-transparent px-8 py-6 shadow-none">
            <CardTitle className="text-3xl font-bold">
              Hall Bulu Tangkis Pasar Jatirawasari By SR
            </CardTitle>
            <div className="flex items-center gap-2">
              <p>4.8</p>
              <StarFilledIcon className="text-yellow-400" />
              <p>Kota Jakarta Pusat</p>
            </div>
            <Badge className="mt-2 bg-gray-200 font-normal text-gray-600 hover:bg-gray-200">
              Badminton
            </Badge>
            <CardDescription className="mt-8 font-bold text-black">
              Deskripsi
            </CardDescription>
            <CardDescription>
              TIGA LAPANGAN BULUTANGKIS DI JATIRAWASARI BERKUALITAS
              INTERNATIONAL DAN BERKARPET VINYL
            </CardDescription>
            <CardDescription className="mt-8 font-bold text-black">
              Lokasi
            </CardDescription>
            <CardDescription>
              Jl. gunung sahari XII no.11 Jakarta pusat 10720
            </CardDescription>
            <Button
              variant={'outline'}
              className="rounded-fll mt-3 max-w-xl rounded-full border-black"
            >
              Buka di Map <SquareArrowOutUpRight className="ml-4 w-4" />
            </Button>
            <a href="#check">
              <Button className="mt-8 w-full">Cek Ketersediaan</Button>
            </a>
          </Card>
        </div>

        <div id="check" className="mt-16 flex flex-col md:flex-row">
          <div className="w-full">
            <h1 className="mb-6 text-xl font-bold">Lapangan Tersedia</h1>
            <DateOption />
          </div>
          <TotalVenue />
        </div>
      </div>
    </div>
  );
}
