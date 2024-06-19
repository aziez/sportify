'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AvatarIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Loader2Icon, MailIcon } from 'lucide-react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axiosInstance from '@/lib/axios';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string().email({ message: 'Email must be valid' }),
  password: z.string().min(1, { message: 'Password is required' }),
  user_type: z.string().min(1, { message: 'User type is required' }),
});

type Inputs = z.infer<typeof formSchema>;

const FormRegister = () => {
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      user_type: '',
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: Inputs) => {
    console.log('Form data:', data);

    startTransition(async () => {
      await axiosInstance
        .post('/api/auth/register', data)
        .then((response) => {
          toast.success('Registration successful!');

          reset();
        })
        .catch((error) => {
          console.error('Registration failed:', error);
          console.error('Response data:', error.response?.data);
          toast.error(
            'Registration failed: ' + error.response?.data?.message ||
              error.message
          );
        });
    });
  };

  function togglePassword() {
    setShow((next) => !next);
  }

  return (
    <Form {...form}>
      <Toaster />
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
                  <Input type="text" placeholder="Enter username" {...field} />
                  <AvatarIcon className="absolute right-4 h-5 w-5 text-azure-600" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email" className="mb-2 font-medium">
                Email
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center font-sans">
                  <Input type="email" placeholder="Enter email" {...field} />
                  <MailIcon className="absolute right-4 h-5 w-5 text-azure-600" />
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
                    placeholder="Enter password"
                    {...field}
                  />
                  {show ? (
                    <EyeClosedIcon
                      className="absolute right-4 h-5 w-5 cursor-pointer text-azure-600"
                      onClick={togglePassword}
                    />
                  ) : (
                    <EyeOpenIcon
                      className="absolute right-4 h-5 w-5 cursor-pointer text-azure-600"
                      onClick={togglePassword}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="user_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="user_type" className="mb-2 font-medium">
                User type
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center font-sans">
                  <select
                    id="user_type"
                    className="select select-bordered select-sm w-full"
                    {...field}
                  >
                    <option value="" disabled selected>
                      User Type
                    </option>
                    <option value="vendor">Vendor</option>
                    <option value="customer">Customer</option>
                  </select>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="ringHover" disabled={isPending} type="submit">
          {isPending && <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />}
          Register
        </Button>
      </form>
    </Form>
  );
};

export default FormRegister;
