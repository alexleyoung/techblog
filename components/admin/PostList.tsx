"use client";

import { getPosts } from "@/lib/api/crud";
import Post from "@/components/admin/Post";
import { useState, useEffect } from "react";

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
        return <Post key={String(post._id)} post={post} refresh={getData} />;
      })}
    </div>
  );
};

export default PostList;
