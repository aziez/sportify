'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useCategories } from '@/hooks/categories/use-categories';

export default function Component() {
  const { data, error, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  console.log(data?.data);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <section className="w-full bg-gradient-to-r from-primary to-primary/90 py-12 md:py-24 lg:py-32">
        <div className="container px-4 text-center text-primary-foreground md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Book Your Sports Station
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              Find the perfect sports station for your next event or activity.
              Browse our selection and book your spot today.
            </p>
            <Button size="lg" variant="secondary">
              Book Now
            </Button>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[300px_1fr] md:px-6">
        <div className="space-y-6 rounded-lg bg-muted p-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Location</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                  <SelectItem value="city3">City 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Availability</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Amenities</h3>
              <div>
                <div className="space-y-2">
                  <Checkbox value="court">Court</Checkbox>
                  <Checkbox value="field">Field</Checkbox>
                  <Checkbox value="pool">Pool</Checkbox>
                  <Checkbox value="gym">Gym</Checkbox>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Price Range</h3>
              <div className="w-full" />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Location Range</h3>
              <div className="w-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((product: any) => (
            // <li key={product.id}>{product.name}</li>
            <Card key={product.id}>
              <Image
                src={product?.imageUrl}
                width={400}
                height={300}
                alt="Sports Station"
                className="aspect-video rounded-t-lg object-cover"
              />
              <CardContent className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{product?.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary" />
                    <span>4.8</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{product?.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    ${product.pricePerHour}
                  </span>
                  <Button size="sm">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
