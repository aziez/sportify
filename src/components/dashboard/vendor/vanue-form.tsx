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
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import VanueMaps from './vanue-map';
import UploadsLogo from './venue-uploads';
import { vanueApi } from '@/stores/api/api';
import axiosInstance from '@/lib/axios';
import FileUploader from '@/components/uploads/file-uploader';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Vanue name is required',
  }),
  location: z.string().min(2, {
    message: 'Vanue location is required',
  }),
  logo: z.string().min(2, {
    message: 'Vanue logo is required',
  }),
  lat: z.number({
    invalid_type_error: 'Latitude is required',
  }),
  lng: z.number({
    invalid_type_error: 'Longitude is required',
  }),
});

const VanueForm = () => {
  const [edited, setEdited] = useState(false);
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const [pending, start] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      lat: position?.lat,
      lng: position?.lng,
    },
  });

  const handleUploadsLogo = async (fileInfo: any) => {
    const fileUrl = fileInfo.cdnUrl;
    const fileName = fileInfo.name;

    console.log(fileInfo, 'INFOOO FILEEEE');

    const response = await vanueApi.uploadLogo({ fileUrl, fileName });

    console.log(response, 'RESPONSE UPLOADSSSSS');

    // if (item.allEntries[0].status === 'success') {
    //   const urls = item.allEntries.map((entry) => entry.cdnUrl);
    //   form.setValue('logo', urls[0]);
    // } else {
    //   console.log('File upload in progress');
    // }
  };

  useEffect(() => {
    if (position) {
      form.setValue('lat', position.lat);
      form.setValue('lng', position.lng);
    }
  }, [position, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      start(async () => {
        await vanueApi.addVanue(data).then((res) => {
          console.log(res, 'RESPONSEEEE');
          setEdited(false); // Reset edited state after form submission
        });
      });
    } catch (error) {
      console.log(error, 'ERRRORE');
    }
  }

  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle>Vanue</CardTitle>
          <CardDescription>Your vanue store information.</CardDescription>
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
                    <FormLabel>Vanue Logo</FormLabel>
                    <FormControl>
                      <>
                        <Input type="hidden" {...field} />
                        {/* <UploadsLogo handleChangeEvenet={handleUploadsLogo} /> */}
                        <FileUploader destination="/sportify/logo" />
                      </>
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
                      <FormControl>
                        <Input
                          readOnly
                          type="hidden"
                          placeholder="lat..."
                          value={position ? position.lat : ''}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lng"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          readOnly
                          type="hidden"
                          placeholder="lng..."
                          value={position ? position.lng : ''}
                          {...field}
                        />
                      </FormControl>
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
            {edited && (
              <Button
                disabled={pending}
                variant="ringHover"
                type="submit"
                className="mt-8 w-full"
              >
                {pending && (
                  <span className="loading-xl loading loading-dots mr-4"></span>
                )}
                Save Vanue
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default VanueForm;
