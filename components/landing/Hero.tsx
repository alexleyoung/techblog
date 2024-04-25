import InfiniteCards from "./Hero/InfiniteCards";

const Hero = () => {
  return (
    <section className='h-screen flex flex-col items-center mt-24'>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl'>CS Events and Resources</h1>
          <h2 className='text-xl'>
            <em>all in one place</em>.
          </h2>
        </div>
        <InfiniteCards />
      </div>
    </section>
  );
};

export default Hero;
