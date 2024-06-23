import Link from 'next/link';
import { MessageSquare, ThumbsDown, ThumbsUp } from 'lucide-react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function RecentForum() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="grid flex-1 gap-8 p-4 md:p-6 lg:p-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Recent Posts</h2>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="#"
                    className="font-medium hover:underline"
                    prefetch={false}
                  >
                    Introducing the new forum design
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    @shadcn
                  </Link>
                  <span>•</span>
                  <time dateTime="2023-06-23T12:34:56">June 23, 2023</time>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We've just launched a brand new design for the forum. Check it
                  out and let us know what you think!
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="sr-only">Dislike</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    12 likes, 3 dislikes
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    5 comments
                  </div>
                </div>
              </CardFooter>
              <CardContent className="mt-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        @jaredpalmer
                      </Link>
                      <span>•</span>
                      <time dateTime="2023-06-23T12:40:00">June 23, 2023</time>
                    </div>
                    <p className="mt-2">
                      This new design looks great! I really like the clean and
                      modern aesthetic.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDown className="h-4 w-4" />
                        <span className="sr-only">Dislike</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="#"
                    className="font-medium hover:underline"
                    prefetch={false}
                  >
                    Tips for writing effective forum posts
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    @jaredpalmer
                  </Link>
                  <span>•</span>
                  <time dateTime="2023-06-21T09:12:34">June 21, 2023</time>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Improve your forum engagement with these helpful tips for
                  writing great posts.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="sr-only">Dislike</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    8 likes, 1 dislike
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    3 comments
                  </div>
                </div>
              </CardFooter>
              <CardContent className="mt-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        @acmeinc
                      </Link>
                      <span>•</span>
                      <time dateTime="2023-06-21T09:20:00">June 21, 2023</time>
                    </div>
                    <p className="mt-2">
                      Great tips! I especially like the advice about keeping
                      posts concise and focused.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDown className="h-4 w-4" />
                        <span className="sr-only">Dislike</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="#"
                    className="font-medium hover:underline"
                    prefetch={false}
                  >
                    Announcing the forum moderator team
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link href="#" className="hover:underline" prefetch={false}>
                    @acmeinc
                  </Link>
                  <span>•</span>
                  <time dateTime="2023-06-18T15:45:00">June 18, 2023</time>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Meet the new team of moderators who will be helping to
                  maintain a positive and constructive forum environment.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="sr-only">Dislike</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    15 likes, 2 dislikes
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    7 comments
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
