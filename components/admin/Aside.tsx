import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PanelsTopLeftIcon, Pen, CalendarPlus } from "lucide-react";

const Aside = () => {
  return (
    <>
      {/* desktop nav */}
      <aside className='hidden md:flex w-48 fixed m-auto h-full bg-background border-r border-foreground/10 flex-col justify-between items-center p-8'>
        <div className='flex flex-col items-center gap-4'>
          <Link
            href='/'
            className='font-light tracking-wide font-2xl flex gap-3 items-center mb-8'>
            <Image
              src='/images/cselogo.png'
              alt='cse logo'
              height={24}
              width={24}
            />
            CSE TECH
          </Link>
          <Link
            href='/admin'
            className='flex gap-2 self-start w-full hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors'>
            <PanelsTopLeftIcon size={20} strokeWidth={1} />
            OVERVIEW
          </Link>
          <Link
            href='/admin/post'
            className='flex gap-2 self-start w-full hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors'>
            <Pen size={20} strokeWidth={1} />
            POST
          </Link>
          <Link
            href='/admin/event'
            className='flex gap-2 self-start w-full hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors'>
            <CalendarPlus size={20} strokeWidth={1} />
            EVENT
          </Link>
        </div>
        <ThemeToggle />
      </aside>

      {/* mobile nav */}
      <aside className='md:hidden flex w-full fixed bottom-0 bg-background border-t border-foreground/10 justify-around items-center p-4 z-50'>
        <Link href='/' className='px-2 w-1/5 grid place-items-center'>
          <Image
            src='/images/cselogo.png'
            alt='cse logo'
            height={24}
            width={24}
          />
        </Link>
        <Link
          href='/admin/post'
          className='grid place-items-center hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors w-1/5'>
          <Pen size={20} strokeWidth={1} />
        </Link>
        <Link
          href='/admin'
          className='grid place-items-center hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors w-1/5'>
          <PanelsTopLeftIcon size={20} strokeWidth={1} />
        </Link>
        <Link
          href='/admin/event'
          className='grid place-items-center hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors w-1/5'>
          <CalendarPlus size={20} strokeWidth={1} />
        </Link>
        <ThemeToggle className='grid place-items-center w-1/5' />
      </aside>
    </>
  );
};

export default Aside;
