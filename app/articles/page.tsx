import Link from "next/link";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "@/lib/api/posts";

const Articles = async () => {
  const data = await getPosts();

  function Article({ post }: { post: any }) {
    return (
      <Link href={`/articles/${post.title_slug}`}>
        <Card className="w-[700px] m-3  ">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>{post.timestamp}</p>
            <p>{post.author}</p>
          </CardFooter>
        </Card>
      </Link>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center m-9">Articles</h1>
      <div className="flex flex-col items-center">
        {data.map((post) => {
          return <Article post={post} />;
        })}
      </div>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Articles;
