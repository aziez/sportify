import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between bg-muted px-6 py-4 md:flex-row md:px-10">
      <div className="mb-4 flex flex-col items-center gap-4 md:mb-0 md:flex-row">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-medium">Sportify</span>
        </Link>
        <div className="text-pretty text-center text-muted-foreground">
          <p className="text-base font-bold">123 Main St, Anytown USA</p>
          <p className="text-base">555-555-5555</p>
          <span className="text-base">info@acme.com</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="hover:underline">
          <Link href="#" prefetch={false}>
            About Us
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="#" prefetch={false}>
            Terms and Conditions
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="#" prefetch={false}>
            Police Agreement
          </Link>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 md:mt-0">
        <div className="text-muted-foreground transition-colors hover:text-primary">
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <TwitterIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="text-muted-foreground transition-colors hover:text-primary">
          <Link href="#" aria-label="Facebook" prefetch={false}>
            <FacebookIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="text-muted-foreground transition-colors hover:text-primary">
          <Link href="#" aria-label="LinkedIn" prefetch={false}>
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
