import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { StoreIcon } from 'lucide-react';
import VanueForm from '@/components/dashboard/vendor/vanue-form';

export default function Component() {
  return (
    <main className="flex flex-col gap-8 sm:px-6 sm:py-0 md:gap-8 lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="grid w-full">
        <VanueForm />
      </div>
      <div className="flex">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vanue Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-nowrap text-2xl font-bold">
              GOR. Wisanggeni 2
            </div>
            <p className="text-nowrap text-xs text-muted-foreground">
              jl.Halmahera Utara, No.40, kel.Jakarta Barat
            </p>
          </CardContent>
          <CardFooter>
            <div>
              <img
                src="/placeholder.svg"
                alt="Map"
                width={320}
                className="aspect-square h-full rounded-md object-cover"
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
