import { Card } from '@/components/ui/card';
import Link from 'next/link';

const categories = [
  { name: 'Futsal', link: '/sewa/futsal' },
  { name: 'Volley', link: '/sewa/volley' },
  { name: 'Badminton', link: '/sewa/badminton' },
];

export default function Category() {
  return (
    <div className="pb-20 pt-10">
      <h1 className="mb-2 text-xl font-bold">Category</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        <Link href="/rental/futsal" className="w-[20%]">
          <Card className="rounded-full border border-gray-200 bg-white px-5 py-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1>Futsal</h1>
          </Card>
        </Link>
        <Link href="/rental/volly" className="w-[20%]">
          <Card className="rounded-full border border-gray-200 bg-white px-5 py-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1>Volly</h1>
          </Card>
        </Link>
        <Link href="/rental/badminton" className="w-[20%]">
          <Card className="rounded-full border border-gray-200 bg-white px-5 py-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1>Badminton</h1>
          </Card>
        </Link>
      </div>
    </div>
  );
}
