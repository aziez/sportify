/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import { ArrowRightCircleIcon, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SearchOption() {
  return (
    <div className="mb-10">
      <h1 className="mb-5 text-2xl font-bold">Apa yang anda cari?</h1>

      <div className="">
        <form className="flex flex-col gap-6 md:flex-row">
          <Select>
            <SelectTrigger className="h-12 w-full max-w-sm">
              <SelectValue placeholder="Pilih yang dicari" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sewa Lapangan</SelectItem>
              <SelectItem value="dark">Sewa Perlengkapan</SelectItem>
              <SelectItem value="system">Beli Perlengkapan</SelectItem>
            </SelectContent>
          </Select>
          <label className="input input-bordered flex items-center gap-2">
            <MapPin className="w-5" />
            <input type="text" className="grow border-0" placeholder="Lokasi" />
          </label>
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
            className="rounded-fll w-full rounded-full border-black md:w-[50%]">
            Temukan <ArrowRightCircleIcon className="ml-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
