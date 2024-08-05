import { MailIcon, MapIcon, PhoneIcon } from 'lucide-react';

const About = () => {
  return (
    <footer className="footer m-10 grid max-w-7xl grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
      <aside>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">About Us</span>
          </div>
          <p className="text-pretty text-muted-foreground">
            Sewa tempat ataupun alat volly,bulutangkis,dan futsal. Web baru yang
            menawarkan bahan sewaan. Menyewakan barang pada kawasan Semarang dan
            sekitarnya. Jangan ragu untuk menghubungi kami apa yang Anda
            butuhkan untuk produksi terbaikmu
          </p>
        </div>
      </aside>
      <aside className="flex w-full items-center justify-center">
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Contact Us</span>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-bold text-muted-foreground">
                Whatsapp 085xxxx xxx xxxx
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                sportify@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Semarang dan sekitarnya
              </span>
            </div>
          </div>
          <div className="gap-4">
            <p>Buka setiap hari 24/7</p>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default About;
