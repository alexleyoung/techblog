import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Featured from "@/components/landing/Featured";
import Footer from "@/components/landing/Footer";

const Home = () => {
  return (
    <div className='flex flex-col gap-24'>
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
