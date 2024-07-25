'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import VanueMaps from './vanue-map';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Vanue name is required',
  }),
  location: z.string().min(2, {
    message: 'Vanue location is required',
  }),
  logo: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

const VanueForm = () => {
  const [edited, setEdited] = useState(false);
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      lat: position?.lat,
      lng: position?.lng,
    },
  });

  useEffect(() => {
    if (position) {
      form.setValue('lat', position.lat);
      form.setValue('lng', position.lng);
    }
  }, [position, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setEdited(false); // Reset edited state after form submission
  }

  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle>Vanue</CardTitle>
          <CardDescription>Your vanues store information.</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setEdited(!edited)}>
            {edited ? 'Cancel' : 'Edit Vanue'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormLabel>Vanue Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!edited}
                        type="text"
                        placeholder="your vanue name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormLabel>Vanue Location</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={!edited}
                        placeholder="your vanue location is here.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormLabel>Vanue logo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        disabled={!edited}
                        className="file-input file-input-bordered file-input-info w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="lat"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      {/* <FormLabel>Latitude</FormLabel> */}
                      <FormControl>
                        <Input
                          readOnly
                          type="hidden"
                          placeholder="lat..."
                          value={setPosition ? position?.lng : null}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lng"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      {/* <FormLabel>Longitude</FormLabel> */}
                      <FormControl>
                        <Input
                          readOnly
                          type="hidden"
                          placeholder="long..."
                          value={setPosition ? position?.lng : null}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormItem className="flex w-full flex-col">
                <FormLabel>Location (Click on Map to set position)</FormLabel>
                <FormControl>
                  <VanueMaps position={position} setPosition={setPosition} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
            <Button variant="ringHover" type="submit" className="mt-8 w-full">
              Save Vanue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default VanueForm;

//
// <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   disabled={!edited}
//                   id="name"
//                   defaultValue="The Venue"
//                   {...form.register('name')}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="logo">Logo</Label>
//                 <Input disabled={!edited} id="logo" type="file" />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="location">Location</Label>
//                 <Input
//                   disabled={!edited}
//                   id="location"
//                   defaultValue="123 Main St, Anytown USA"
//                   {...form.register('location')}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="latitude">Latitude</Label>
//                   <Input
//                     disabled={!edited}
//                     id="latitude"
//                     type="number"
//                     defaultValue="40.730610"
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="longitude">Longitude</Label>
//                   <Input
//                     disabled={!edited}
//                     id="longitude"
//                     type="number"
//                     defaultValue="-73.935242"
//                   />
//                 </div>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="map">Map</Label>
//                 <div className="relative w-full">
//                   <img
//                     src="/placeholder.svg"
//                     alt="Map"
//                     height={250}
//                     className="aspect-video w-full rounded-md object-cover"
//                   />
//                 </div>
//               </div>
