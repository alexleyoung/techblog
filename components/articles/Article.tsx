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
export default Article;
