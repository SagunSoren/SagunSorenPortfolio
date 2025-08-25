"use client";
import Image from "next/image";
import background from "../../public/bg.png";
import { IoMoonOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="px-24 max-md:px-4 py-5 w-full ">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={background} alt="background image" className="w-full" />
      </div>

      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium cursor-pointer dark:text-neutral-300">
          <a href="./">
            Sagun <span className="font-bold text-[#ec1552] text-3xl">.</span>
          </a>
        </h1>
        <ul className="ml-16 max-xl:hidden flex gap-10 shadow-sm px-10 py-3 rounded-full dark:bg-neutral-300 dark:text-black">
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="flex gap-5 items-center dark:text-neutral-300">
          <button
            className="cursor-pointer"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {/* <IoMoonOutline className="text-xl font-black" /> */}
            {theme === "light" ? (
              <IoMoonOutline className="text-xl font-black" />
            ) : (
              <CiLight className="text-xl font-black" />
            )}
          </button>
          <a
            className="px-4 border-1 py-3 rounded-full text-sm flex gap-2 items-center cursor-pointer"
            href="#testimonials"
          >
            Connect
            <MdArrowOutward className="text-xl" />
          </a>

          <RxHamburgerMenu
            className="text-2xl max-xl:block xl:hidden cursor-pointer"
            onClick={() => setShowMobileMenu(true)}
          />

          {/* Mobile Menu */}
          <div
            className={`xl:hidden ${
              showMobileMenu ? "fixed w-full" : "h-0 w-0"
            } right-0 bottom-0 top-0 overflow-hidden bg-white dark:bg-neutral-300 transition-all`}
          >
            <div className="flex justify-end p-8 md:px-24">
              <IoMdClose
                className="text-3xl dark:text-black"
                onClick={() => setShowMobileMenu(false)}
              />
            </div>
            <ul className="flex flex-col mt-10  justify-center items-center gap-8 text-lg dark:text-black">
              <li>
                <a
                  className="cursor-pointer hover:underline underline-offset-4"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-4"
                  onClick={() => setShowMobileMenu(false)}
                  href="#aboutme"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-4"
                  onClick={() => setShowMobileMenu(false)}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-4"
                  onClick={() => setShowMobileMenu(false)}
                  href="#work"
                >
                  My Work
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-4"
                  onClick={() => setShowMobileMenu(false)}
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
