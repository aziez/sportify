import ProductDetail from '@/components/layouts/products/product-detail';
import { Separator } from '@/components/ui/separator';
const bolas = [
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b1.png',
    harga: 5000,
    link: '#',
    badge: 'Best Seller',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b2.png',
    harga: 5000,
    link: '#',
    badge: 'New Arrivals',
  },
  {
    title: 'Bola Futsal Nike Flight ',
    img: '/sample/futsal/b3.png',
    harga: 5000,
    link: '#',
    badge: 'Best Seller',
  },
  {
    title: 'Proteam Bola Futsal Warrior',
    img: '/sample/futsal/b4.png',
    harga: 5000,
    link: '#',
    badge: 'Best Seller',
  },
];

export default async function Page() {
  return (
    <div className="mt-4 p-4">
      <ProductDetail product={bolas} />
      <Separator className="h-1" />
    </div>
  );
}
