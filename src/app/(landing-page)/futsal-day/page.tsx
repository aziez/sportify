import { ProductCard } from '@/components/layouts/landing-page/farmui/product-card';
import CardLapangan from '@/components/layouts/products/lapangan-card';
import CardProduct from '@/components/layouts/products/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const bolas = [
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b1.png',
    harga: 5000,
    link: 'proteamfutsalwarrior1',
    badge: 'Best Seller',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b2.png',
    harga: 5000,
    link: 'proteamfutsalwarrior2',
    badge: 'New Arrivals',
  },
  {
    title: 'Bola Futsal Nike Flight ',
    img: '/sample/futsal/b3.png',
    harga: 5000,
    link: 'nikeflight',
    badge: 'Best Seller',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b4.png',
    harga: 5000,
    link: 'proteamfutsalwarrior3',
    badge: 'Best Seller',
  },
];

const rompis = [
  {
    title: 'Rompi Futsal Ortus Hijau Toska',
    img: '/sample/futsal/rompi.png',
    harga: 5000,
    link: '#',
    // badge: 'Best Seller',
  },
  {
    title: 'Rompi Futsal Adidas Hitam',
    img: '/sample/futsal/rompi2.png',
    harga: 5000,
    link: '#',
    // badge: 'New Arrivals',
  },
  {
    title: 'Rompi Futsal Adidas Hijau Toska',
    img: '/sample/futsal/rompi3.png',
    harga: 5000,
    link: '#',
    // badge: 'Best Seller',
  },
  {
    title: 'Rompi Futsal Adidas Hijau Muda',
    img: '/sample/futsal/rompi4.png',
    harga: 5000,
    link: '#',
    // badge: 'Best Seller',
  },
];
const lapangans = [
  {
    title: 'Rompi Futsal Ortus Hijau Toska',
    img: '/sample/futsal/lap1.jpg',
    harga: 5000,
    link: '#',
    // badge: 'Best Seller',
  },
  {
    title: 'Rompi Futsal Adidas Hitam',
    img: '/sample/futsal/lap2.jpg',
    harga: 5000,
    link: '#',
    // badge: 'New Arrivals',
  },
];

export default async function Futsal() {
  return (
    <div className="mt-4 p-4">
      <h1 className="mb-4 text-center font-jakarta text-2xl font-bold md:text-7xl">
        FUTSAL DAY
      </h1>
      <Separator className="my-6 h-1" />
      <div className="container">
        <h1 className="mb-4 text-xl font-bold md:text-5xl">Bola</h1>
        <Carousel className="w-full">
          <CarouselContent>
            {bolas.map((bola) => (
              <CarouselItem className="md:basis-1/4 lg:basis-1/4">
                <CardProduct product={bola} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mx-4 h-12 w-12" />
          <CarouselPrevious className="mx-4 h-12 w-12" />
        </Carousel>
      </div>
      <Separator className="my-6 h-1" />
      <div className="container">
        <h1 className="mb-4 text-xl font-bold md:text-5xl">Rompi</h1>
        <Carousel className="w-full">
          <CarouselContent>
            {rompis.map((rompi) => (
              <CarouselItem className="md:basis-1/4 lg:basis-1/4">
                <CardProduct product={rompi} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mx-4 h-12 w-12" />
          <CarouselPrevious className="mx-4 h-12 w-12" />
        </Carousel>
      </div>
      <Separator className="my-6 h-1" />
      <div className="container">
        <h1 className="mb-4 text-xl font-bold md:text-5xl">Lapangan</h1>
        <Carousel className="w-full">
          <CarouselContent>
            {lapangans.map((lapangan) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <CardLapangan product={lapangan} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mx-4 h-12 w-12" />
          <CarouselPrevious className="mx-4 h-12 w-12" />
        </Carousel>
      </div>
    </div>
  );
}
