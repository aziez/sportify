import CardLapangan from '@/components/layouts/products/lapangan-card';
import SearchVenue from '@/components/layouts/rental/search-venue';

const lapangans = [
  {
    title: 'Lapangan Futsal Fitnation',
    img: '/sample/futsal/lap1.jpg',
    harga: 5000,
    link: '#',
    // badge: 'Best Seller',
  },
  {
    title: 'Lapangan Basket SportCenter',
    img: '/sample/futsal/lap1.jpg',
    harga: 7000,
    link: '#',
    // badge: 'New Arrivals',
  },
  {
    title: 'Lapangan Voli ArenaPro',
    img: '/sample/futsal/lap1.jpg',
    harga: 6000,
    link: '#',
    // badge: 'Popular',
  },
  {
    title: 'Lapangan Futsal SuperKick',
    img: '/sample/futsal/lap1.jpg',
    harga: 5000,
    link: '#',
    // badge: 'Trending',
  },
  {
    title: 'Lapangan Basket HoopDreams',
    img: '/sample/futsal/lap2.jpg',
    harga: 7000,
    link: '#',
    // badge: 'Best Value',
  },
  {
    title: 'Lapangan Voli SpikeZone',
    img: '/sample/futsal/lap2.jpg',
    harga: 6000,
    link: '#',
    // badge: 'Top Rated',
  },
];

export default function Venue() {
  return (
    <div className="container py-16">
      <SearchVenue />
      <h1 className="mb-10 text-sm text-gray-500">
        Menampilkan 349 venue tersedia
      </h1>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
