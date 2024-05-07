"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Post, getPosts } from "@/lib/api/posts";
import Article from "@/components/articles/Article";

const Articles = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  return (
    <div>
      <h1 className='text-4xl text-center m-9'>Articles</h1>
      <div className='min-h-screen flex flex-col items-center'>
        {posts.map((post) => {
          return <Article key={post.title_slug} post={post} />;
        })}
      </div>
      <Link href='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3'>
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Articles;
