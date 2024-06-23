import { CheckIcon } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TrackingForm() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold">Track Your Order</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="tracking-number">Tracking Number</Label>
              <Input
                id="tracking-number"
                type="text"
                placeholder="Enter your tracking number"
                required
              />
            </div>
            <div>
              <Label htmlFor="captcha">Captcha</Label>
              <div className="flex items-center">
                <div className="mr-4 rounded-md bg-muted px-4 py-2"></div>
                <Input
                  id="captcha"
                  type="text"
                  placeholder="Enter the captcha"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Track Order
            </Button>
          </form>
        </div>
        <div className="rounded-lg bg-background p-6 shadow">
          <h1 className="mb-6 text-2xl font-bold">Order Tracking</h1>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Order #</p>
              <p className="text-lg font-medium">12345</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="text-lg font-medium">June 23, 2023</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="text-lg font-medium text-green-500">Delivered</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-medium">Placed</p>
                <p className="text-sm text-muted-foreground">June 21, 2023</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-medium">Shipped</p>
                <p className="text-sm text-muted-foreground">June 22, 2023</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-medium">In Transit</p>
                <p className="text-sm text-muted-foreground">June 23, 2023</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-medium">Delivered</p>
                <p className="text-sm text-muted-foreground">June 23, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
