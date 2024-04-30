import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "./Header/NavLinks";

const Header = () => {
  return (
    <header className='container fixed border z-50 left-1/2 -translate-x-1/2 backdrop-blur-md h-14 w-[90%] rounded-l-full rounded-r-full shadow-md mt-4 flex justify-between items-center'>
      {/* Logo */}
      <Link
        href='/'
        className='font-light tracking-wide font-2xl flex gap-3 items-center'>
        <Image
          src='/images/cselogo.png'
          alt='cse logo'
          height={24}
          width={24}
        />
        CSE TECH
      </Link>

      {/* Desktop Nav */}
      <nav className='hidden sm:flex gap-4 tracking-wide font-light items-center text-sm'>
        <NavLinks />
      </nav>

      {/* Mobile Nav */}
      <nav className='sm:hidden'>
        <Sheet>
          <SheetTrigger className='flex items-center'>
            <AlignRight size={24} />
          </SheetTrigger>
          <SheetContent className='flex flex-col gap-8'>
            <SheetHeader>
              <SheetTitle>
                <span className='font-normal tracking-wide'>Menu</span>
              </SheetTitle>
              <SheetClose />
            </SheetHeader>
            <div className='w-full flex flex-col items-center gap-4 font-light tracking-wide'>
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
