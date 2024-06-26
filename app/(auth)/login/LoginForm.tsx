"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import login from "@/actions/login";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(100),
});

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async () => {
    const result = await login(form.getValues());
    if (result) {
      setError(result.error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='max-w-md w-full flex flex-col gap-4'>
        <div className='flex justify-between items-end'>
          <h1 className='text-4xl font-light'>Login</h1>
          <Link href='/'>CSE TECH</Link>
        </div>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='Username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Password' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type='submit'>Submit</Button>
        {error && <FormMessage>{error}</FormMessage>}
        <Link href='/signup'>Don't have an account? Signup here.</Link>
        {}
      </form>
    </Form>
  );
};

export default LoginForm;
