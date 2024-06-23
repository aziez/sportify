import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function FormCategory() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="grid flex-1 gap-8 p-4 md:p-6 lg:p-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Forum Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>General Discussion</CardTitle>
                <CardDescription>
                  Talk about anything related to the forum.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    <span className="font-medium">1,234</span> posts
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    View
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>
                  Stay up-to-date with the latest forum news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    <span className="font-medium">567</span> posts
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    View
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feedback &amp; Suggestions</CardTitle>
                <CardDescription>
                  Share your ideas and help us improve the forum.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    <span className="font-medium">234</span> posts
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    View
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Off-Topic</CardTitle>
                <CardDescription>
                  Discuss anything that doesn't fit in the other categories.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    <span className="font-medium">789</span> posts
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    View
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
