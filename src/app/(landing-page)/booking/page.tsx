import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <section className="w-full bg-gradient-to-r from-primary to-primary/90 py-12 md:py-24 lg:py-32">
        <div className="container px-4 text-center text-primary-foreground md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Book Your Sports Station
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              Find the perfect sports station for your next event or activity.
              Browse our selection and book your spot today.
            </p>
            <Button size="lg" variant="secondary">
              Book Now
            </Button>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[300px_1fr] md:px-6">
        <div className="space-y-6 rounded-lg bg-muted p-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Location</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                  <SelectItem value="city3">City 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Availability</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Amenities</h3>
              <div>
                <div className="space-y-2">
                  <Checkbox value="court">Court</Checkbox>
                  <Checkbox value="field">Field</Checkbox>
                  <Checkbox value="pool">Pool</Checkbox>
                  <Checkbox value="gym">Gym</Checkbox>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Price Range</h3>
              <div className="w-full" />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Location Range</h3>
              <div className="w-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Basketball Court</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.8</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Regulation-size basketball court with adjustable hoops.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$50/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Soccer Field</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.6</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Full-size soccer field with artificial turf.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$75/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Swimming Pool</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.9</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                25-meter lap pool with diving board and locker rooms.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$100/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Fitness Center</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.7</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Fully equipped gym with cardio and strength training equipment.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$80/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Tennis Courts</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.5</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Two regulation-size tennis courts with lighting.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$60/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Sports Station"
              className="aspect-video rounded-t-lg object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Volleyball Court</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="h-4 w-4 fill-primary" />
                  <span>4.3</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Regulation-size volleyball court with net and lighting.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold">$55/hr</span>
                <Button size="sm">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
