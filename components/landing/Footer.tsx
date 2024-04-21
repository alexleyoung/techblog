import Link from "next/link";

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 md:grid-cols-4 w-full bg-muted/50 py-4 px-8 text-sm tracking-wide font-light border-t'>
      <div className='md:block'></div>
      <div className='md:block'></div>
      <p>&copy;AYKM 2024</p>
      <div className='flex flex-col gap-2'>
        <Link
          href=''
          className='hover:text-primary/50 transition-colors duration-300'>
          About
        </Link>
        <Link
          href=''
          className='hover:text-primary/50 transition-colors duration-300'>
          Contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
