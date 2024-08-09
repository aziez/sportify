import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-cards';
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy-background';
import { headers } from 'next/headers';
import Link from 'next/link';
import NoFound from 'public/nofound.svg';

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get('host');
  return (
    <WavyBackground className="flex min-h-[100dvh] flex-col items-center justify-center sm:px-6 lg:px-8">
      <CardContainer className="m-6 rounded-xl border bg-white/40 p-12">
        <CardBody className="mx-auto max-w-md text-center">
          <CardItem translateZ="100" className="mt-4 w-full">
            <NoFound className="mb-4 h-[240px] w-full motion-safe:animate-pulse" />
          </CardItem>
          <CardItem translateZ={60} as={'p'} className="m-4 text-lg text-white">
            Oops, the page you were looking for could not be found. <br />
            {domain}
          </CardItem>
          <CardItem as={Link} href="/" translateZ={20}>
            <Button variant={'ringHover'}>Go to Homepage</Button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </WavyBackground>
  );
}
