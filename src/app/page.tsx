import FeatureSection from '@/components/layouts/landing-page/feature-section';
import { HeroParallax } from '@/components/layouts/landing-page/hero-section';
import Navbar from '@/components/layouts/main-navbar/navbar';

export default async function Home() {
  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
      sale: true,
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
      sale: true,
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
      sale: true,
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
      sale: false,
    },
    {
      title: 'Editrix AI',
      sale: true,
      link: 'https://editrix.ai',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
      title: 'Pixel Perfect',
      sale: true,
      link: 'https://app.pixelperfect.quest',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
      sale: true,
    },
    {
      title: 'Aceternity UI',
      link: 'https://ui.aceternity.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
      sale: true,
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://smartbridgetech.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'https://renderwork.studio',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      sale: true,
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
  ];

  const features = [
    {
      title: 'Sport Equipment',
      description:
        'Platfrom pembelian dan penyewaan alat alat olahraga terlengkap di Semarang.',
      link: '#',
      thumbnail: '/img/sport-equipment.png',
    },
    {
      title: 'Venue Rentals',
      description:
        'Sewa tempat olahraga di seluruh Indonesia dengan mudah dan cepat.',
      link: '#',
      thumbnail: '/img/rental-vanue.png',
    },
    {
      title: 'Healthy Forum',
      description: 'Platform berkumpul dan berolahraga bersama.',
      link: '#',
      thumbnail: '/img/ilustration-sport.png',
    },
  ];

  return (
    <>
      <Navbar />
      <HeroParallax products={products} />

      <FeatureSection features={features} />

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        {session !== null ? (
          <h1>Hello {session?.user?.name}</h1>
        ) : (
          <Button variant={'ringHover'}>
            <Link href={'/login'}>Login</Link>
          </Button>
        )}
        <ThemeToggle />
        <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
