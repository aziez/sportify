'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getUserVanue } from '@/hooks/vanues/use-vanues';
import VanueMaps from './vanue-map';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import VanueForm from './vanue-form';

const VanuePage = ({ userId }: { userId: string }) => {
  const { data: vanue, error, isLoading } = getUserVanue(userId);
  console.log(vanue, 'DATAA VANUEEE');

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  return vanue?.data ? (
    <div className="grid w-full gap-4 lg:grid-cols-3">
      <>
        <div className="col-span-2">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader>
              <CardTitle>VANUE INFORMATIONS</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Vanue Name</p>
                <p className="text-nowrap text-xl font-bold">
                  {vanue?.data?.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Vanue Location</p>
                <p className="text-nowrap text-xl font-bold">
                  {vanue?.data?.location}
                </p>
              </div>
              <VanueMaps
                position={[vanue?.data?.lat, vanue?.data?.lng]}
                setPosition={() => {}}
              />
            </CardContent>
            <CardFooter>
              <Button variant="ringHover">Edit Data</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1">
          <Card
            x-chunk="dashboard-01-chunk-0"
            className="flex flex-col items-center justify-center">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vanue Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={vanue?.data?.logo}
                alt="logo"
                width={240}
                className="aspect-square h-full rounded-md object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </>
    </div>
  ) : (
    <VanueForm />
  );
};

export default VanuePage;
