import FormLogin from '@/components/layouts/login/form-login';
import Image from 'next/image';
import Sfund from 'public/svg/sfund.svg';
import welcomeImg from 'public/svg/welcome.svg?url';

export default function Login() {
  return (
    <div className="w-full items-center justify-center lg:grid lg:grid-cols-2">
      <div className="flex h-[100vh] items-center justify-center bg-muted px-6 py-12">
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2">
            <Sfund />
            <h1 className="font-jakarta text-xl font-bold">Hey, Hello 👋</h1>
            <p className="text-balance text-muted-foreground">
              Enter your account bellow to login to your SFUND account
            </p>
          </div>
          <div className="grid gap-4">
            <FormLogin />
          </div>
        </div>
      </div>
      <div className="hidden p-6 lg:block">
        <Image
          src={welcomeImg}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
