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

export default function Component() {
  return (
    <main className="flex flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:flex-row md:gap-8 lg:flex-row xl:flex-row">
      <div className="grid">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="grid gap-2">
              <CardTitle>Vanue</CardTitle>
              <CardDescription>Your vanues store information.</CardDescription>
            </div>
            <Button variant="ringHover">Edit Vanue</Button>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="The Venue" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="logo">Logo</Label>
                  <Input id="logo" type="file" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    defaultValue="123 Main St, Anytown USA"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                      id="latitude"
                      type="number"
                      defaultValue="40.730610"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input
                      id="longitude"
                      type="number"
                      defaultValue="-73.935242"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="map">Map</Label>
                  <div className="relative w-full">
                    <img
                      src="/placeholder.svg"
                      alt="Map"
                      height={250}
                      className="aspect-video w-full rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="grid">
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
