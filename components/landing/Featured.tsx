import Events from "./Featured/Events";
import RecentPosts from "./Featured/RecentPosts";

const Featured = async () => {
  return (
    <section id='featured' className='min-h-screen grid place-items-center'>
      <div className='w-4/5 flex flex-col gap-2 lg:gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-4'>
        <h1 className='text-2xl md:tex-3xl lg:text-4xl lg:self-end self-center'>
          Events
        </h1>
        <h1 className='text-2xl md:tex-3xl lg:text-4xl hidden lg:inline col-span-3 lg:self-end'>
          Recent Posts
        </h1>
        <Events className='lg:row-span-3' />
        <h1 className='text-2xl self-center mt-16 lg:mt-20 lg:hidden'>
          Recent Posts
        </h1>
        <RecentPosts className='lg:col-span-3 row-span-3' />
      </div>
    </section>
  );
};

export default Featured;
