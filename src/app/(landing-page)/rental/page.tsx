import CardProduct from '@/components/layouts/products/product-card';
import Category from '@/components/layouts/rental/category';

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

export default function Rental() {
  return (
    <div className="container mx-auto p-4">
      <Category />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Terbaru</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
