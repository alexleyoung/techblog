import Link from "next/link";
import Events from "./Featured/Events";
import RecentPosts from "./Featured/RecentPosts";

const Featured = () => {
  return (
    <section id='featured' className='min-h-screen grid place-items-center'>
      <div className='w-4/5 flex flex-col lg:items-center lg:flex-row gap-16 lg:gap-8'>
        <div className='flex flex-col items-center lg:flex-1'>
          <h1 className='text-2xl md:tex-3xl'>Events</h1>
          <Events />
        </div>
        <div className='flex flex-col items-center lg:flex-[3_3_0%]'>
          <h1 className='text-2xl md:tex-3xl'>Recent Posts</h1>
          <RecentPosts />
          <Link href='articles' className='self-end px-2 tracking-wide'>
            See all posts here.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
