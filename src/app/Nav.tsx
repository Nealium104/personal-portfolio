'use client'

import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMoon, IoSunny } from 'react-icons/io5'
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
        <div className="hidden md:flex md:justify-between">
          <span className="text-4xl m-4">Neal Grindstaff</span>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="ml-4">
              {theme === 'dark' ? <IoSunny /> : <IoMoon />}
            </button>
            <Link className="mx-3 light:text-black hover:bg-black/40" href="/app/web">Web</Link>
            <Link className="mx-3 light:text-black hover:bg-black/40" href="/app/photography">Photography</Link>
            <Link className="mx-3 light:text-black hover:bg-black/40" href="/app/music">Music</Link>
            <Link href="/contact"></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;