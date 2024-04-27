"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Post, getPost } from "@/lib/api/posts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Article = () => {
  const { title_slug } = useParams();
  const [data, setData] = useState<Post>();
  const [error, setError] = useState<Error | null>(null);

  const findPost = async () => {
    const { data, error } = await getPost(String(title_slug));
    if (error) {
      setError(error);
      console.log(error);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    findPost();
  }, []);

  if (error) {
    return (
      <div className='grid place-items-center h-screen'>
        Error 404. Page not found.
      </div>
    );
  }
  if (!data) {
    return (
      <div>
        <Skeleton className='w-full h-16 rounded-2xl translate-y-[160px]' />
        <Skeleton className='w-2/5 h-16 rounded-2xl translate-y-[170px]' />
        <div className='flex justify-between w-full translate-y-[180px]'>
          <Skeleton className='w-40 h-12 rounded-2xl' />
          <Skeleton className='w-1/4 h-12 rounded-2xl' />
        </div>
      </div>
    );
  }

  return (
    <>
      <section className='flex flex-col gap-8 pt-40'>
        <h1 className='text-6xl'>{data.title}</h1>
        <div className='flex justify-between w-full'>
          <h2 className='text-3xl'>
            <em>{data.author}</em>
          </h2>
          <h2 className='text-3xl'>{String(data.timestamp).slice(0, 10)}</h2>
        </div>
      </section>
      <section className='mt-8'>
        <p className='text-base'>{data.content}</p>
      </section>
    </>
  );
};

export default Article;
