'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRightCircleIcon, MapPin, TextSearch } from 'lucide-react';

export default function SearchVenue() {
  return (
    <div className="mb-10">
      <div className="">
        <form className="flex flex-col gap-6 md:flex-row">
          <div className="input input-bordered flex items-center gap-2">
            <TextSearch className="w-5" />
            <input
              type="text"
              className="grow border-0"
              placeholder="Nama Venue"
            />
          </div>
          <div className="input input-bordered flex items-center gap-2">
            <MapPin className="w-5" />
            <input type="text" className="grow border-0" placeholder="Lokasi" />
          </div>
          <Select>
            <SelectTrigger className="h-12 w-full max-w-sm">
              <SelectValue placeholder="Cabang Olahraga" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Badminton</SelectItem>
              <SelectItem value="dark">Futsal</SelectItem>
              <SelectItem value="system">Volly</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant={'outline'}
            className="rounded-fll w-full rounded-full border-black md:w-[50%]"
          >
            Temukan <ArrowRightCircleIcon className="ml-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
