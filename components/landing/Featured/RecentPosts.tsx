"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import RecentPostCard from "./RecentPostCard";

const RecentPosts = ({ className }: { className: string }) => {
  const [recents, setRecents] = useState([1, 2, 3]);

  return (
    <div
      className={cn(
        "grid grid-rows-3 border border-foreground/30 gap-4 rounded-2xl p-6",
        className
      )}>
      {recents.map((recent) => {
        return <RecentPostCard />;
      })}
    </div>
  );
};

export default RecentPosts;
