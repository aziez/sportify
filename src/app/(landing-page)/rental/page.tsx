import { Separator } from '@radix-ui/react-select';

import CardProduct from '@/components/layouts/products/product-card';
import Category from '@/components/layouts/rental/category';

const products = [
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b1.png',
    harga: 5000,
    link: 'proteamfutsalwarrior1',
    badge: 'Available',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b2.png',
    harga: 5000,
    link: 'proteamfutsalwarrior2',
    badge: 'Available',
  },
  {
    title: 'Bola Futsal Nike Flight',
    img: '/sample/futsal/b3.png',
    harga: 5000,
    link: 'nikeflight',
    badge: 'Available',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b4.png',
    harga: 5000,
    link: 'proteamfutsalwarrior3',
    badge: 'Available',
  },
];

export default function Rental() {
  return (
    <div className="container mx-auto p-4">
      <Category />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Terbaru</h1>
        <Separator className="h1" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
