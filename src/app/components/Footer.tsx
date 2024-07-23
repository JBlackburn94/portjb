"use client";
import Link from "next/link";
import { footerLinks } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Footer() {
  useGSAP(() => {
    gsap.to("#footer", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
  });

  return (
    <footer
      id="footer"
      className="md:hidden opacity-0 translate-y-[40px] flex items-center justify-center w-full bg-background bottom-[5%] fixed"
    >
      <div className="bg-accent text-background flex gap-[30px] px-[14px] py-[5px] font-bold">
        {footerLinks.map(({ id, name, href }) => (
          <Link key={id} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
