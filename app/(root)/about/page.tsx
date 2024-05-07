import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Alex from "@/public/images/alex.jpg";
import Kaylee from "@/public/images/kaylee.jpg";

const About = () => {
  return (
    <main className='pt-28 mx-auto w-4/5'>
      <section className='flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-16'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl'>About</h1>
          <p>COM S 319: Software Construction and User Interfaces</p>
          <p>May 6, 2024</p>
          <hr />
          <h2>Team 82</h2>
          <p>Alex Young | alexy@iastate.edu</p>
          <p>Kaylee Maczek | kaylee53@iastate.edu</p>
          <hr />
          <h2>Instructor</h2>
          <p>Dr. Abraham N. Aldaco Gastelum | aaldaco@iastate.edu</p>
        </div>
        <Carousel className='w-full max-w-xs'>
          <CarouselContent>
            <CarouselItem>
              <div className='aspect-square size-full border border-foreground/20 rounded-tr-2xl rounded-bl-2xl shadow-lg p-4 flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl'>Alex Young</h1>
                  <h2> First-Year CS & Math</h2>
                </div>
                <div className='grid place-items-center h-full'>
                  <Image
                    src={Alex}
                    alt='Picture of Alex Young'
                    className='aspect-square rounded-lg object-cover'
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='aspect-square size-full border border-foreground/20 rounded-tl-2xl rounded-br-2xl shadow-lg p-4 flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl'>Kaylee Maczek</h1>
                  <h2> First-Year CS & Cybersecurity</h2>
                </div>
                <div className='grid place-items-center h-full'>
                  <Image
                    src={Kaylee}
                    alt='Picture of Kaylee Maczek'
                    className='aspect-square rounded-lg object-cover'
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default About;
