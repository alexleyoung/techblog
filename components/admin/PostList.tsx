"use client";

import { Post, getPosts } from "@/lib/api/posts";
import { useState, useEffect } from "react";
import AdminPost from "./AdminPost";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getData = async () => {
    const refresh = await getPosts();
    setPosts(refresh);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => {
        return (
          <AdminPost key={String(post._id)} post={post} refresh={getData} />
        );
      })}
    </div>
  );
};

export default PostList;
