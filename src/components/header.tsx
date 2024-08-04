"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuRef = useRef<HTMLButtonElement>(null);

  const sidebarvariants = {
    initial: { x: 600 },
    open: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    close: { x: 600, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight - 80,
      onLeave: () => {
        gsap.to(menuRef.current, {
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to(menuRef.current, {
          scale: 0,
          opacity: 0,
          ease: "power1.inOut",
        });
      },
    });
  });
  return (
    <header className="">
      <main className="px-12 md:px-24 absolute top-6 z-[100] items-center flex justify-between w-full">
        <div className="text-[1.5rem] md:text-[2rem]">Vishal</div>
        <nav>
          <ul className="flex gap-3 md:gap-10 items-center">
            {navItems.map((item, index) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <button
        ref={menuRef}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={clsx(
          `fixed p-4 h-[90px] w-[90px] rounded-full z-[999] m-10 right-0 flex flex-col justify-center items-center scale-0 opacity-0
        after:w-full after:h-1  after:relative 
        before:w-full before:h-1 before:relative after:transition-all after:duration-1000 before:transition-all before:duration-1000 transition-colors duration-1000
      `,
          isMenuOpen
            ? "after:rotate-45 before:-rotate-45 after:top-[-1.5px] before:top-[1.5px] bg-slate-100 after:bg-black before:bg-black"
            : "before:-top-2 after:top-2 bg-slate-800 after:bg-white before:bg-white"
        )}
      ></button>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            variants={sidebarvariants}
            initial="initial"
            animate="open"
            exit="close"
            className="fixed h-full w-[600px] bg-gray-800 top-0 right-0 z-[100]"
          >
            <div className="max-w-[70%] mx-auto mt-36">
              <p className="h-8 border-b">NAVIGATION</p>
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <NavLinks
                    key={item.title}
                    href={item.href}
                    title={item.title}
                    index={index}
                    activeIndex={activeIndex}
                  />
                ))}

                <div className="flex justify-between">
                  <a href="#" className="text-sm">
                    dribbble
                  </a>
                  <a href="#" className="text-sm">
                    twitter
                  </a>
                  <a href="#" className="text-sm">
                    instagram
                  </a>
                  <a href="#" className="text-sm">
                    linkedin
                  </a>
                </div>
                <li></li>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

const NavLinks = ({
  title,
  href,
  index,
  activeIndex,
}: {
  title: string;
  href: string;
  index: number;
  activeIndex: number;
}) => {
  const text = {
    initial: { x: 600 },
    open: (index: number) => ({
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.1,
      },
    }),
    close: (index: number) => ({
      x: 600,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.1,
      },
    }),
  };
  return (
    <Link
      href={href}
      className={clsx(
        "first-of-type:mt-16",
        activeIndex == index
          ? "before:h-20 before:w-20 before:rounded-full before:bg-white before:relative before:-left-10"
          : ""
      )}
    >
      <motion.p
        custom={index}
        className="text-6xl"
        initial="initial"
        animate="open"
        exit="close"
        variants={text}
      >
        {title}
      </motion.p>
    </Link>
  );
};

const navItems = [
  {
    title: "Home",

    href: "/",
  },

  {
    title: "Work",

    href: "/work",
  },

  {
    title: "About",

    href: "/about",
  },

  {
    title: "Contact",

    href: "/contact",
  },
];
