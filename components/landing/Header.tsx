import logout from "@/actions/logout";
import { validateRequest, lucia } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  const { user } = await validateRequest();

  return (
    <header className='container fixed left-1/2 transform -translate-x-1/2 border bg-background backdrop-blur-md h-14 w-[90%] rounded-l-full rounded-r-full shadow-md mt-4 flex justify-between items-center'>
      <div className='flex gap-2'>
        {/* <Image src='' alt='' height={24} width={24} /> */}
        <Link href='#' className='font-light tracking-wide'>
          ISU TECH
        </Link>
      </div>
      <nav className='flex gap-4 tracking-wide'>
        <Link href='#featured'>Featured</Link>
        {user ? (
          <form action={logout}>
            <button type='submit'>Logout</button>
          </form>
        ) : (
          <Link href='/login'>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
