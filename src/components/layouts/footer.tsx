/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-4 text-base-content">
      <nav className="grid grid-flow-row gap-4">
        <p className="text-lg font-semibold">Supported by : </p>
        <div className="grid grid-flow-col items-center justify-center gap-4">
          <img
            src="/pendidikan.png"
            alt="Product Image"
            width={64}
            height={60}
            className="aspect-auto object-cover transition-opacity group-hover:opacity-80"
          />
          <img
            src="/simbelmawa.png"
            alt="Product Image"
            width={64}
            height={60}
            className="aspect-auto object-cover transition-opacity group-hover:opacity-80"
          />
          <img
            src="/kampus-merdeka.png"
            alt="Product Image"
            width={64}
            height={60}
            className="aspect-auto object-cover transition-opacity group-hover:opacity-80"
          />
          <img
            src="/p2mw.png"
            alt="Product Image"
            width={64}
            height={60}
            className="aspect-auto object-cover transition-opacity group-hover:opacity-80"
          />
          <img
            src="/unimus.png"
            alt="Product Image"
            width={64}
            height={60}
            className="aspect-auto object-cover transition-opacity group-hover:opacity-80"
          />
        </div>

        <p className="font-jakarta text-base">
          We're part of the P2MW team from{' '}
          <a
            href="http://unimus.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jakarta text-base font-bold text-blue-600 visited:text-purple-600"
          >
            Universitas Muhammadiyah Semarang.
          </a>
        </p>
        <p>
          © <span className="text-blue-600">Sportify</span>{' '}
          {new Date().getFullYear()} Universitas Muhammadiyah Semarang.
        </p>
        <aside>All rights reserved. 0.1</aside>
      </nav>
    </footer>
  );
}
