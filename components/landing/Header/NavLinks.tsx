import logout from "@/actions/logout";
import { ThemeToggle } from "@/components/ThemeToggle";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";

const NavLinks = async () => {
  const { user } = await validateRequest();

  return (
    <>
      {user?.id === process.env.ADMIN && (
        <Link
          href='/admin'
          className='hover:text-primary/50 transition-colors duration-300'>
          Admin
        </Link>
      )}
      <Link
        href='/#featured'
        className='hover:text-primary/50 transition-colors duration-300'>
        Featured
      </Link>
      <Link
        href='/articles'
        className='hover:text-primary/50 transition-colors duration-300'>
        All
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
    </>
  );
};

export default NavLinks;
