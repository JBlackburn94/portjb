"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import heroImg from "../../public/portHero.webp";
import heroImgBg from "../../public/portFlower.svg";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    gsap.to("#heroSVG", {
      opacity: 1,
      x: 0,
      rotate: 360,
      duration: 1,
      delay: 1,
    });
    gsap.to("#heroImg", {
      opacity: 1,
      duration: 1,
      delay: 1.5,
    });
    gsap.to(".heading", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 2,
      stagger: 0.2,
    });
  });
  return (
    <main className="bg-background overflow-x-hidden h-screen text-main flex flex-col items-center justify-start gap-[30px] pt-[157px]">
      <div className="flex items-center justify-center">
        <Image
          src={heroImg}
          alt="An image of Jason Blackburn"
          className="absolute opacity-0 z-10"
          id="heroImg"
        />
        <Image
          src={heroImgBg}
          alt="An SVG shape of a flower"
          id="heroSVG"
          className="opacity-0 translate-x-[100%]"
        />
      </div>
      <div>
        <h1 className="font-bold text-[28px] heading opacity-0 translate-y-[40px]">
          Frontend
          <br />
          Developer
        </h1>
        <h2 className="heading opacity-0 translate-y-[40px]">London, UK</h2>
      </div>
    </main>
  );
}
