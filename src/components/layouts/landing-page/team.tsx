/* eslint-disable @next/next/no-img-element */
const Team = () => {
  return (
    <section className="footer footer-center bg-base-300 p-10 text-primary-content">
      <h1 className="text-xl font-bold text-black dark:text-white md:text-4xl">
        Team SPORTIFY
      </h1>
      <div className="grid grid-cols-1 gap-10 p-4 text-black sm:grid-cols-2 md:grid-cols-3 md:p-4 lg:grid-cols-5">
        <div className="flex flex-col items-center">
          <img
            src="/img/deni.jpeg"
            alt="Team Member 1"
            width={200}
            height={200}
            className="h-36 w-36 rounded-full object-cover object-top"
          />
          <h3 className="mt-4 text-lg font-semibold">Deni Nur Zaman</h3>
          <p className="text-sm text-muted-foreground">(S1 Informatika)</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/eni.jpeg"
            alt="Team Member 2"
            width={200}
            height={200}
            className="h-36 w-36 rounded-full object-cover object-top"
          />
          <h3 className="mt-4 text-lg font-semibold">Eni Maryanti</h3>
          <p className="text-sm text-muted-foreground">(S1 Pendidikan Kimia)</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/sopi.jpeg"
            alt="Team Member 3"
            width={200}
            height={200}
            className="h-36 w-36 rounded-full object-cover object-top"
          />
          <h3 className="mt-4 text-lg font-semibold">M. Sofi Nur Azmi</h3>
          <p className="text-sm text-muted-foreground">(S1 Teknik Mesin)</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/melani.jpeg"
            alt="Team Member 4"
            width={200}
            height={200}
            className="h-36 w-36 rounded-full object-cover object-top"
          />
          <h3 className="mt-4 text-lg font-semibold">Melani Indah Cahyani</h3>
          <p className="text-sm text-muted-foreground">(S1 Pendidikan Kimia)</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/surya.jpeg"
            alt="Team Member 5"
            width={200}
            height={200}
            className="h-36 w-36 rounded-full object-cover object-top"
          />
          <h3 className="mt-4 text-lg font-semibold">Surya Adi Pamungkas</h3>
          <p className="text-sm text-muted-foreground">
            (S1 Ilmu Keolahragaan)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
