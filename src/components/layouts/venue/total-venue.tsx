import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Trash2Icon } from 'lucide-react';

export default function TotalVenue() {
  return (
    <div className="mt-10 w-full md:mt-0 md:w-[40%]">
      <Card className="px-4 py-5">
        <CardTitle className="mb-4">Dipilih</CardTitle>
        <div className="mt-2 flex w-full justify-between border p-2">
          <div className="">
            <h1>Senin, 5 Aug </h1>
            <p className="text-xs">20:00 - 21:00</p>
            <p className="text-xs">Rp240.000</p>
          </div>
          <Trash2Icon />
        </div>
        <div className="mt-2 flex w-full justify-between border p-2">
          <div className="">
            <h1>Senin, 5 Aug </h1>
            <p className="text-xs">20:00 - 21:00</p>
            <p className="text-xs">Rp240.000</p>
          </div>
          <Trash2Icon />
        </div>

        <div className="">
          <div className="mt-2 flex justify-between bg-gray-100 p-2">
            <h1>Total Durasi</h1>
            <p>120 Menit</p>
          </div>
          <div className="mb-4 mt-2 flex justify-between bg-gray-100 p-2">
            <h1>Total Harga</h1>
            <p>Rp240.000</p>
          </div>
        </div>
        <Button className="w-full">Booking Sekarang</Button>
      </Card>
    </div>
  );
}
