import Image from 'next/image';

import welcomeImg from 'public/img/DSCF2992-scaled-e1717593656488.jpg';
import Sportify from 'public/logo.svg';
import FormLogin from '@/components/layouts/login/form-login';

export default function Login() {
  return (
    <div className="h-full w-full items-center justify-center lg:grid lg:grid-cols-2">
      <div className="flex h-screen items-center justify-center px-6 py-12">
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2">
            <Sportify className="h-[100px] w-[100px]" />
            <p className="text-balance text-muted-foreground">
              Enter your account bellow to login to your SPORTIFY account
            </p>
          </div>
          <div className="grid gap-4">
            <FormLogin />
          </div>
        </div>
      </div>
      <div className="hidden h-full px-8 lg:flex lg:items-end lg:justify-center">
        <Image
          src={welcomeImg}
          alt="Image"
          layout="contain"
          objectFit="contain"
          className="dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
