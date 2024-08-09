'úse client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';

export const FeatureCard = ({
  features,
}: {
  features: {
    thumbnail: string;
    link: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <Card className="card image-full h-96 bg-base-100 shadow-xl dark:bg-gray-950">
      <figure>
        <Image
          height={1000}
          width={1000}
          src={features.thumbnail}
          alt={features.title}
          className="h-64 w-full object-cover"
        />
      </figure>
      <CardContent className="card-body space-y-4 p-6">
        <h2 className="card-title text-4xl font-semibold text-black dark:text-white">
          {features.title}
        </h2>
        <p className="text-lg">{features.description}</p>
        <CardFooter className="card-actions justify-end">
          <Button
            variant={'expandIcon'}
            Icon={MoveRightIcon}
            iconPlacement="right"
          >
            Read More
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
