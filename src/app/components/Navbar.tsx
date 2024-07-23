"use client";
import { Squeeze } from "hamburger-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [nav, setNav] = useState(false);

  useGSAP(() => {
    gsap.to("#nav", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <header className="bg-background text-main w-full fixed z-10">
      <nav
        className="p-[30px] flex justify-between items-center translate-y-[40%] opacity-0"
        id="nav"
      >
        <h1 className="font-bold">
          Jason
          <br />
          Blackburn
        </h1>
        <Squeeze />
      </nav>
    </header>
  );
}
