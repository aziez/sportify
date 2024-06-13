'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AvatarIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const formSchema = z.object({
  username: z.string().min(1, { message: 'username is required' }),
  password: z.string().min(1, { message: 'password is required' }),
});

type Inputs = z.infer<typeof formSchema>;

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [pending, startTransition] = useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit, control, reset } = form;

  function onSubmit(data: Inputs) {
    console.log(data);

    startTransition(async () => {
      let res = await signIn('credentials', { data, redirect: false });

      console.log(res, 'RESPONSEEDD');
    });
  }

  function tooglePassword() {
    setShow((next) => !next);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="2x:mt-7 mt-5 space-y-6"
      >
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username" className="mb-2 font-medium">
                Username
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center font-sans">
                  <Input type="text" placeholder="enter username" {...field} />
                  <AvatarIcon className="absolute right-4 h-5 w-5 text-azure-600" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password" className="mb-2 font-medium">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center font-sans">
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder="enter password"
                    {...field}
                  />
                  {show ? (
                    <EyeClosedIcon
                      className="absolute right-4 h-5 w-5 cursor-pointer text-azure-600"
                      onClick={tooglePassword}
                    />
                  ) : (
                    <EyeOpenIcon
                      className="absolute right-4 h-5 w-5 cursor-pointer text-azure-600"
                      onClick={tooglePassword}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default FormLogin;
