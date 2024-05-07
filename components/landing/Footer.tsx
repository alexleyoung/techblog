import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full bg-muted/50 py-4 px-8 text-sm tracking-wider font-light border-t'>
      <div className='grid grid-cols-2 w-1/2 translate-x-1/4'>
        <p>&copy;AYKM 2024</p>
        <div className='flex flex-col gap-2'>
          <Link
            href='/about'
            className='hover:text-primary/50 transition-colors duration-300'>
            About
          </Link>
          <Link
            href=''
            className='hover:text-primary/50 transition-colors duration-300'>
            Contact
          </Link>
          <Link
            href='https://discord.gg/EpfFF6GEQU'
            target='_blank'
            className='hover:text-primary/50 transition-colors duration-300'>
            Discord
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
