import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const categories = ['Futsal', 'Badminton', 'Volley'];

export default function FilterProduct() {
  return (
    <Card className="box w-full p-6 md:max-w-xs">
      <div className="mb-7 flex w-full items-center justify-between border-b border-gray-200 pb-3">
        <CardTitle className="text-base font-medium leading-7 text-black">
          Category Filter
        </CardTitle>
        <p className="cursor-pointer text-xs font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600">
          RESET
        </p>
      </div>
      <div className="w-full">
        <CardDescription>Category</CardDescription>
        {categories.map((category, index) => (
          <div key={index} className="mt-2 flex items-center space-x-2">
            <Checkbox id={`category-${index}`} />
            <label
              htmlFor={`category-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 w-full">
        <CardDescription className="mb-2">Lokasi</CardDescription>
        <Input type="email" placeholder="Cari Lokasi" />
      </div>
      <div className=""></div>
    </Card>
  );
}
