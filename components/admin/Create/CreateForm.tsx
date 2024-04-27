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
import { Textarea } from "@/components/ui/textarea";
import { Post, createPost, updatePost } from "@/lib/api/posts";

const formSchema = z.object({
  title: z.string().min(1).max(100),
  author: z.string().min(1).max(100),
  content: z.string().min(1),
});

const CreateForm = ({
  children,
  titleText,
  contentHeight = "h-96",
  post,
  refresh,
}: {
  children: React.ReactNode;
  titleText?: string;
  submitText?: string;
  contentHeight?: string;
  post?: Post | null;
  refresh?: (() => Promise<void>) | null;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: String(post ? post.title : ""),
      author: String(post ? post.author : ""),
      content: String(post ? post.content : ""),
    },
  });

  const handleSubmit = async () => {
    if (!post && !refresh) {
      await createPost(form.getValues());
      form.reset();
    } else if (post && refresh) {
      await updatePost({ ...post, ...form.getValues() });
      refresh();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='h-full flex flex-col gap-4'>
        {titleText && <h1 className='text-3xl'>{titleText}</h1>}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='author'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder='Author' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Content'
                    {...field}
                    className={contentHeight}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {/* <Button type='submit'>{submitText}</Button> */}
        {children}
      </form>
    </Form>
  );
};

export default CreateForm;
