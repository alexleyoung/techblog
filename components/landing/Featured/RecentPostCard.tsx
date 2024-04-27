import { Post } from "@/lib/api/posts";
import Link from "next/link";

const RecentPostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/articles/${post.title_slug}`}>
      <div className='w-full grid grid-cols-10 gap-3 border p-6 shadow-lg hover:scale-[103%] transition-all duration-300 rounded-sm'>
        <div className='col-span-3' />
        <div className='flex flex-col col-span-7 justify-center items-end text-right h-full gap-2'>
          <h1 className='font-bold text-4xl tracking-wide'>{post.title}</h1>
          <h2 className='font-light text-xl'>{post.author}</h2>
          <h2 className='font-light text-xl'>
            {`Posted ${String(post.timestamp).slice(0, 10)}`}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default RecentPostCard;
