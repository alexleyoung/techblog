"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import RecentPostCard from "./RecentPostCard";
import { Post, getPosts } from "@/lib/api/posts";

const RecentPosts = ({ className }: { className: string }) => {
  const [recents, setRecents] = useState<Post[]>([]);

  const getRecents = async () => {
    const results = await getPosts();
    setRecents(results.slice(0, 3));
  };

  useEffect(() => {
    getRecents();
  }, []);

  return (
    <>
      <div
        className={cn(
          "flex flex-col lg:grid lg:grid-rows-3 border border-foreground/30 gap-4 rounded-2xl p-6",
          className
        )}>
        {recents.map((recent, i) => {
          return <RecentPostCard key={i} post={recent} />;
        })}
      </div>
    </>
  );
};

export default RecentPosts;
