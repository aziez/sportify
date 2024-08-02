import CardLapangan from "@/components/layouts/products/lapangan-card";
import SearchVenue from "@/components/layouts/rental/search-venue";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const lapangans = [
    {
      name: 'Lapangan Futsal Fitnation',
      imageUrl: '/sample/futsal/lap1.jpg',
      price: 5000,
      link: '#',
      // badge: 'Best Seller',
    },
    {
      name: 'Lapangan Basket SportCenter',
      imageUrl: '/sample/futsal/lap1.jpg',
      price: 7000,
      link: '#',
      // badge: 'New Arrivals',
    },
    {
      name: 'Lapangan Voli ArenaPro',
      imageUrl: '/sample/futsal/lap1.jpg',
      price: 6000,
      link: '#',
      // badge: 'Popular',
    },
    {
      name: 'Lapangan Futsal SuperKick',
      imageUrl: '/sample/futsal/lap1.jpg',
      price: 5000,
      link: '#',
      // badge: 'Trending',
    },
    {
      name: 'Lapangan Basket HoopDreams',
      imageUrl: '/sample/futsal/lap2.jpg',
      price: 7000,
      link: '#',
      // badge: 'Best Value',
    },
    {
      name: 'Lapangan Voli SpikeZone',
      imageUrl: '/sample/futsal/lap2.jpg',
      price: 6000,
      link: '#',
      // badge: 'Top Rated',
    },
  ];
  

export default function Venue() {
  return (
    <div className="container py-16">
        <SearchVenue/>
      <h1 className="text-sm text-gray-500 mb-10">Menampilkan 349 venue tersedia</h1>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lapangans.map((lapangan, index) => (
            <div key={index}>
              <CardLapangan product={lapangan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
