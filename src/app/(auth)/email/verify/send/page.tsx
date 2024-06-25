import Sfund from 'public/logo.svg';

export default function Send() {
  return (
    <div className="h-full w-full items-center justify-center lg:grid lg:grid-cols-2">
      <div className="flex h-screen items-center justify-center px-6 py-12">
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2">
            <Sfund className="h-[100px] w-[100px]" />
            <p className="text-balance text-muted-foreground">
              Link verified has been send
            </p>
          </div>
        </div>
      </div>
      {/* <div className="hidden h-full px-8 lg:flex lg:items-end lg:justify-center">
        <Image
          src={welcomeImg}
          alt="Image"
          layout="contain"
          objectFit="contain"
          className="dark:brightness-[0.2] dark:grayscale"
        />
      </div> */}
    </div>
  );
}
