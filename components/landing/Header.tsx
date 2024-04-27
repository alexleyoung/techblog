import logout from "@/actions/logout";
import { validateRequest } from "@/lib/auth";
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
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = async () => {
  const { user } = await validateRequest();

  return (
    <header className='container fixed border z-50 left-1/2 -translate-x-1/2 backdrop-blur-md h-14 w-[90%] rounded-l-full rounded-r-full shadow-md mt-4 flex justify-between items-center'>
      <div className='flex gap-3 items-center'>
        <Image
          src='/images/cselogo.png'
          alt='cse logo'
          height={24}
          width={24}
        />
        <Link href='/' className='font-light tracking-wide font-2xl'>
          CSE TECH
        </Link>
      </div>
      <nav className='hidden sm:flex gap-4 tracking-wide font-light items-center text-sm'>
        {user?.id === process.env.ADMIN && (
          <Link
            href='/admin'
            className='hover:text-primary/50 transition-colors duration-300'>
            Admin
          </Link>
        )}
        <Link
          href='#featured'
          className='hover:text-primary/50 transition-colors duration-300'>
          Featured
        </Link>
        {user ? (
          <form action={logout}>
            <button
              type='submit'
              className='hover:text-primary/50 transition-colors duration-300'>
              Logout
            </button>
          </form>
        ) : (
          <Link
            href='/login'
            className='hover:text-primary/50 transition-colors duration-300'>
            Login
          </Link>
        )}
        <ThemeToggle />
      </nav>
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
              {user?.id === process.env.ADMIN && (
                <Link
                  href='/admin'
                  className='hover:text-primary/50 transition-colors duration-300'>
                  Admin
                </Link>
              )}
              <Link
                href='#featured'
                className='hover:text-primary/50 transition-colors duration-300'>
                Featured
              </Link>
              {user ? (
                <form action={logout}>
                  <button
                    type='submit'
                    className='hover:text-primary/50 transition-colors duration-300'>
                    Logout
                  </button>
                </form>
              ) : (
                <Link
                  href='/login'
                  className='hover:text-primary/50 transition-colors duration-300'>
                  Login
                </Link>
              )}
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
