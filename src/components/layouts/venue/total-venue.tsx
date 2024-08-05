import { Card, CardTitle } from '@/components/ui/card'
import { Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button';

export default function TotalVenue() {
  return (
    <div className="w-full md:w-[40%] mt-10 md:mt-0">
    <Card className='px-4 py-5'>
      <CardTitle className='mb-4'>Dipilih</CardTitle>
        <div className="flex w-full border p-2 justify-between mt-2">
          <div className="">
            <h1>Senin, 5 Aug </h1>
            <p className='text-xs'>20:00 - 21:00</p>
            <p className='text-xs'>Rp240.000</p>
          </div>
          <Trash2Icon/>
        </div>
        <div className="flex w-full border p-2 justify-between mt-2">
          <div className="">
            <h1>Senin, 5 Aug </h1>
            <p className='text-xs'>20:00 - 21:00</p>
            <p className='text-xs'>Rp240.000</p>
          </div>
          <Trash2Icon/>
        </div>

        <div className="">
        <div className=" bg-gray-100 flex justify-between p-2 mt-2">
            <h1>Total Durasi</h1>
            <p>120 Menit</p>
          </div>
          <div className="bg-gray-100 flex justify-between p-2 mt-2 mb-4">
            <h1>Total Harga</h1>
            <p>Rp240.000</p>
          </div>
        </div>
        <Button className='w-full'>
          Booking Sekarang
        </Button>
      
    </Card>
  </div>
  )
}
