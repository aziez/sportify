'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { id } from 'date-fns/locale';

import { z } from 'zod';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  item: z.string({ required_error: 'Jumlah barang tidak boleh kosong' }).min(1),
  startDate: z.date({
    required_error: 'Tanggal pengambilan tidak boleh kosong',
  }),
  endDate: z.date({
    required_error: 'Tanggal pengembalian tidak boleh kosong',
  }),
  totalDay: z.string({
    required_error: 'Hari tidak boleh kosong ',
  }),
});

const FormSewa = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const startDate = useWatch({ control: form.control, name: 'startDate' });
  const totalDay = parseInt(
    useWatch({ control: form.control, name: 'totalDay' })
  );

  useEffect(() => {
    if (startDate && totalDay) {
      const endDate = addDays(startDate, totalDay);
      form.setValue('endDate', endDate);
    }
  }, [startDate, totalDay, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-4 flex flex-col items-center justify-center gap-4 md:flex-col lg:flex-row lg:items-stretch xl:flex-row xl:items-stretch 2xl:flex-row 2xl:items-stretch">
          <FormField
            control={form.control}
            name="item"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Jumlah Item</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Pengambilan</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP', { locale: id })
                        ) : (
                          <span>Pilih tanggal</span>
                        )}

                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="totalDay"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Hari</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih hari" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 Hari</SelectItem>
                    <SelectItem value="2">2 Hari</SelectItem>
                    <SelectItem value="3">3 Hari</SelectItem>
                    <SelectItem value="4">4 Hari</SelectItem>
                    <SelectItem value="5">5 Hari</SelectItem>
                    <SelectItem value="6">6 Hari</SelectItem>
                    <SelectItem value="7">7 Hari</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Pengembalian</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                        disabled
                      >
                        {field.value ? (
                          format(field.value, 'PPP', { locale: id })
                        ) : (
                          <span>Pilih tanggal</span>
                        )}

                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-full rounded-full p-6 text-lg font-bold"
        >
          Sewa Sekarang
        </Button>
      </form>
    </Form>
  );
};

export default FormSewa;
