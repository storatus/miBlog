"use client";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { links } from "@/app/config/navBar";
import useScroll from "@/app/hooks/useScroll";

const getHeaderClasses = (scrolled: boolean) => {
  return `fixed top-0 inset-x-0 flex justify-center ${
    scrolled ? "bg-white/20 backdrop-blur" : "bg-transparent"
  } z-30 transition-all duration-300`;
};

export default function NavBar() {
  const scrolled = useScroll(50);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // Define the regex pattern to match just the locales at the rootNavBar
  // Test the current path against the pattern

  const allLinks = Object.keys(links).map((el) => links[el]);

  return (
    <>
      <div className={getHeaderClasses(scrolled)}>
        <header className="max-w-6xl container mx-auto flex min-h-20 items-center justify-between bg-black px-3">
          <div
            className={classNames({
              "flex flex-1 ": true,
            })}
          >
            <div className="p-2 hover:cursor-pointer text-white">
              <Link href={`/`} passHref legacyBehavior>
                <Image
                  width={100}
                  height={100}
                  src={"/mcWorkLogo.webp"}
                  alt="Logo"
                  className="w-28"
                />
              </Link>
              <span>Expertise</span>
            </div>
          </div>

          <nav className="hidden flex-1  justify-end space-x-6 text-white lg:flex">
            {allLinks.map((el) => {
              return (
                <Link
                  className="flex text-xl font-semibold hover:underline"
                  href={`${el.href}`}
                  key={el.id}
                >
                  <span>{el.label}</span>
                </Link>
              );
            })}
          </nav>
        </header>
      </div>
      {isMobileMenu && (
        <div className="fixed inset-0 z-40 h-screen w-screen bg-white/20 backdrop-blur-sm" />
      )}
      {isMobileMenu && (
        <div className="fixed  right-0 z-50 h-full w-2/3 rounded-l-xl bg-black   bg-opacity-90 text-white shadow-xl">
          <div className="flex h-20 w-full  items-center justify-end  px-2">
            <div
              onClick={() => setIsMobileMenu(false)}
              className="flex cursor-pointer p-2 text-white hover:text-green-400 lg:hidden"
            >
              <MenuIcon size={30} />
            </div>
          </div>
          <div className="flex-1 ">
            {allLinks.map((el) => {
              return (
                <Link
                  className="flex text-xl font-semibold hover:underline"
                  href={`${el.href}`}
                  key={el.id}
                >
                  <span>{el.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
