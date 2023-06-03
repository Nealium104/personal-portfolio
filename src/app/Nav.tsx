import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from 'next-themes';

const Nav: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav className="bg-black/25">
        {/* Mobile Menu */}
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="md:hidden text-5xl p-5">
            <GiHamburgerMenu />
          </button>
          <div className="flex flex-col">
            <h2 className="text-3xl md:hidden">Neal Grindstaff</h2>
            <div className={mobileMenuOpen ? 'hidden' : 'visible'}>
              <div className="flex flex-col absolute bg-black/10">
                <Link className="my-1 py-3 px-1 hover:bg-black/25" href="/web">
                  Web
                </Link>
                <Link
                  className="my-1 py-3 px-1 hover:bg-black/25"
                  href="/photography"
                >
                  Photography
                </Link>
                <Link className="my-1 py-3 px-1 hover:bg-black/25" href="/music">
                  Music
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <span className="text-4xl m-4">Neal Grindstaff</span>
          <div>
            <Link href="/web">Web</Link>
            <Link href="/photography">Photography</Link>
            <Link href="/music">Music</Link>
            <button onClick={toggleDarkMode} className="ml-4">
              night
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;