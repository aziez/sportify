import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import VanueForm from '@/components/dashboard/vendor/vanue/vanue-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import VanuePage from '@/components/dashboard/vendor/vanue';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId: any = session?.user?.id

  return (
    <main className="flex flex-col gap-8 sm:px-6 sm:py-0 md:gap-8 lg:flex-row xl:flex-row 2xl:flex-row">
      <VanuePage userId={userId} />
    </main>
  );
}
