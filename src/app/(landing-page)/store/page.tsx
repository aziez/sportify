import CardProduct from '@/components/layouts/products/product-card';
import FilterProduct from '@/components/layouts/store/filter-product';
import { SearchIcon } from 'lucide-react';

const products = [
  {
    name: 'Proteam Bola Futsal Warrior',
    imageUrl: '/sample/futsal/b1.png',
    price: 5000,
    link: 'proteamfutsalwarrior1',
    badge: 'Available',
  },
  {
    name: 'Proteam Bola Futsal Warrior',
    imageUrl: '/sample/futsal/b2.png',
    price: 5000,
    link: 'proteamfutsalwarrior2',
    badge: 'Available',
  },
  {
    name: 'Bola Futsal Nike Flight',
    imageUrl: '/sample/futsal/b3.png',
    price: 5000,
    link: 'nikeflight',
    badge: 'Available',
  },
  {
    name: 'Proteam Bola Futsal Warrior',
    imageUrl: '/sample/futsal/b4.png',
    price: 5000,
    link: 'proteamfutsalwarrior3',
    badge: 'Available',
  },
];

export default function page() {
  return (
    <div className="px-10 py-16">
      <div className="flex flex-col md:flex-row items-start gap-3">
      <div className="flex md:hidden">
            <form className="w-full rounded-full">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <SearchIcon className='w-4'/>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Cari Perlengkapan..."
                  required
                />
              </div>
            </form>
          </div>
        <div className="basis-1/4">
          <FilterProduct />
        </div>
        <div className="basis-3/4">
          <div className="hidden md:flex">
            <form className="w-full rounded-full">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <SearchIcon className='w-4'/>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Cari Perlengkapan..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
