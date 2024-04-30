import { Post } from "@/lib/api/posts";
import Link from "next/link";

const RecentPostCard = ({ post }: { post: Post }) => {
  const date = new Date(post.timestamp);

  return (
    <Link href={`/articles/${post.title_slug}`}>
      <div className='w-full container grid grid-cols-10 gap-6 border p-6 shadow-lg hover:scale-[103%] transition-all duration-300 rounded-sm'>
        <div className='flex flex-col col-span-7 justify-center items-start text-left h-full gap-2'>
          <h1 className='font-bold text-xl md:text-2xl lg:text-3xl md:tracking-wide'>
            {post.title}
          </h1>
          <h2 className='font-light text-sm md:text-base lg:text-xl'>
            <em>{post.author}</em>
          </h2>
          <h2 className='font-light text-sm md:text-base lg:text-xl'>
            {`Posted ${date.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}`}
          </h2>
        </div>
        <div className='col-span-3 size-20 lg:size-40 bg-blue-500 justify-self-center self-center' />
      </div>
    </Link>
  );
};

export default RecentPostCard;
