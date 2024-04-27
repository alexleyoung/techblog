import Events from "./Featured/Events";
import RecentPosts from "./Featured/RecentPosts";

const Featured = async () => {
  return (
    <section id='featured' className='min-h-screen grid place-items-center'>
      <div className='w-4/5 flex flex-col gap-16 lg:gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-3'>
        <Events className='lg:row-span-3' />
        <RecentPosts className='lg:col-span-3 row-span-3' />
      </div>
    </section>
  );
};

export default Featured;
