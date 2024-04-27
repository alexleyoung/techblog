import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PanelsTopLeftIcon, Pen } from "lucide-react";

const Aside = () => {
  return (
    <aside className='w-48 fixed m-auto h-full bg-background border-r border-foreground/10 flex flex-col justify-between items-center p-8'>
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
          href='/admin/create'
          className='flex gap-2 self-start w-full hover:bg-muted px-3 py-2 rounded-xl text-foreground/80 hover:text-foreground transition-colors'>
          <Pen size={20} strokeWidth={1} />
          CREATE
        </Link>
      </div>
      <ThemeToggle />
    </aside>
  );
};

export default Aside;
