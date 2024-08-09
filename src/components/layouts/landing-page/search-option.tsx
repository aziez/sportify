/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ArrowRightCircleIcon, MapPinIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function SearchOption({ data }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className="container relative z-10 -mt-16 grid items-center justify-center">
      <SearchForm categories={data} />
    </div>
  );
}

function SearchForm({ categories }) {
  const form = useForm();
  const router = useRouter();

  function onSubmit(data) {
    console.log(data, 'SUBMITTED');
    const sub = data?.subcategory;
    const cat = data?.category;

    if (!cat) {
      router.push(`/${data?.subcategory}`);
    } else if (!sub) {
      toast.error('Pilih kategori !! ');
    } else {
      router.push(`/${sub}/${cat.toLowerCase()}`);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="align-center flex flex-col justify-center gap-6 rounded-xl bg-tangerine-400 p-8 md:flex-row"
      >
        <FormField
          control={form.control}
          name="subcategory"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-12 w-full max-w-sm">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venue">Sewa Lapangan</SelectItem>
                    <SelectItem value="rental">Sewa Perlengkapan</SelectItem>
                    <SelectItem value="buy">Beli Perlengkapan</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="input input-bordered flex items-center gap-2 border-white bg-transparent">
                  <MapPinIcon className="w-5" />
                  <input
                    className="grow border-0"
                    type="text"
                    placeholder="Masukkan nama lokasi..."
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-12 w-full max-w-sm">
                    <SelectValue placeholder="Pilih cabang olahraga" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.data?.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          variant={'outline'}
          className="rounded-fll h-12 w-full rounded-full border-black md:w-[50%]"
        >
          Temukan <ArrowRightCircleIcon className="ml-4" />
        </Button>
      </form>
    </Form>
  );
}
