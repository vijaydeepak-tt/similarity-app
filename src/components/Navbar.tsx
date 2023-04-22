import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { buttonVariants } from '@/ui/Button';
import SignOutButton from '@/components/SignOutButton';
import SignInButton from '@/components/SignInButton';
import ThemeToggle from '@/components/ThemeToggle';

interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession();
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex item-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: 'link' })}>
          Text Similarity 1.0
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Documentation
          </Link>
        </div>
        {session ? (
          <>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: 'ghost' })}
            >
              Dashboard
            </Link>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
