import InfiniteCards from "./Hero/InfiniteCards";

const Hero = () => {
  return (
    <section className='h-[90vh] grid place-items-center'>
      <div className='flex flex-col gap-4 lg:gap-8 xl:gap-16 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-5xl'>CS Events and Resources</h1>
          <h2 className='text-xl lg:text-3xl'>
            <em>all in one place</em>.
          </h2>
        </div>
        <InfiniteCards />
      </div>
    </section>
  );
};

export default Hero;
