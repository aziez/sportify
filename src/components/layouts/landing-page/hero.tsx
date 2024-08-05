import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-top-hero bg-cover">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content md:text-start">
        <div className="grid md:grid-cols-2">
          <div className="my-10 space-y-3 text-pretty">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-7xl">
              Selamat Datang Di SPORTIFY !
            </h1>
            <p className="mb-4 mt-4 text-lg">
              Kami memastikan untuk memenuhi kebutuhan Olahraga di bidang VOLLY,
              FUTSAL dan BULUTANGKIS, Terletak di Semarang dan sekitarnya
              Dapatkan Gratis Pengiriman & Ekstra 1 hari untuk sewa 2 hari
            </p>
            <Button
              variant={'ringHover'}
              size={'lg'}
              className="mt-10 rounded-full bg-[#ffa800] hover:bg-[#ffaa0073]">
              Promo Semarang 20%
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
