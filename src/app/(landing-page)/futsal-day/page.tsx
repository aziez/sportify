import { ProductCard } from '@/components/layouts/landing-page/farmui/product-card';
import CardProduct from '@/components/layouts/products/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

export default async function Futsal() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-7xl">
        FUTSAL DAY
      </h1>
      <Separator className="m-8" />
      <h1 className="mb-4 text-xl font-bold md:text-5xl">Bola</h1>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <CardProduct />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mx-4 h-12 w-12" />
        <CarouselPrevious className="mx-4 h-12 w-12" />
      </Carousel>
    </div>
  );
}
