"use client";
import { Squeeze } from "hamburger-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    gsap.to("#mobile-nav", {
      x: nav ? "-100%" : "0",
      opacity: nav ? 0 : 1,
      duration: 0.5,
    });

    const navLink = document.querySelectorAll("#nav-link");
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        setNav(false);
        gsap.to("#mobile-nav", {
          x: "-100%",
          opacity: 0,
          duration: 0.5,
        });
      });
    });
  };

  useGSAP(() => {
    gsap.to("#nav", {
      y: 0,
      opacity: 1,
      duration: 0.5,
    });
  });

  return (
    <header className="bg-background text-main w-full fixed z-30">
      <nav
        className="p-[30px] flex justify-between items-center translate-y-[40%] opacity-0"
        id="nav"
      >
        <h1 className="font-bold">
          Jason
          <br />
          Blackburn
        </h1>
        <div onClick={handleNav}>
          <Squeeze toggled={nav} toggle={setNav} />
        </div>
        <div
          className="absolute top-0 left-0 bg-main text-background h-[100dvh] w-1/2 z-40 flex flex-col items-center justify-start pt-[40px] gap-[20px] text-[28px] translate-x-[-100%] opacity-0"
          id="mobile-nav"
        >
          {navLinks.map(({ id, name, href }) => (
            <Link key={id} href={href} id="nav-link">
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
