"use client";

import { Post, getPosts } from "@/lib/api/posts";
import { useState, useEffect } from "react";
import AdminPost from "./AdminPost";
import { Skeleton } from "../ui/skeleton";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const refresh = await getPosts();
    setPosts(refresh);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      {loading ? (
        <>
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
        </>
      ) : (
        posts.map((post) => {
          return (
            <AdminPost key={String(post._id)} post={post} refresh={getData} />
          );
        })
      )}
    </div>
  );
};

export default PostList;
