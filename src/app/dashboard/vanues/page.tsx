import VanuePage from '@/components/dashboard/vendor/vanue';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId: any = session?.user?.id;

  return (
    <main className="flex flex-col gap-8 sm:px-6 sm:py-0 md:gap-8 lg:flex-row xl:flex-row 2xl:flex-row">
      <VanuePage userId={userId} />
    </main>
  );
}
