"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import heroImg from "../../public/portHero.webp";
import heroImgBg from "../../public/portFlower.svg";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    gsap.to("#heroSVG", {
      opacity: 1,
      x: 0,
      rotate: 360,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to("#heroImg", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
    });
    gsap.to(".content", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 1.2,
      stagger: 0.2,
    });
  });
  return (
    <main className="bg-background overflow-x-hidden h-[100dvh] text-main flex flex-col items-center justify-start gap-[30px] pt-[120px] px-[48px] pb-4">
      <div className="flex items-center justify-center relative z-0">
        <Image
          src={heroImgBg}
          alt="An SVG shape of a flower"
          id="heroSVG"
          className="opacity-0 translate-x-[100%] z-10"
        />
        <Image
          src={heroImg}
          alt="An image of Jason Blackburn"
          className="absolute opacity-0 z-20"
          id="heroImg"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[28px] content opacity-0 translate-y-[40px] text-center">
          Frontend
          <br />
          Developer
        </h1>
        <h2 className="content opacity-0 translate-y-[40px]">London, UK</h2>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <p className="text-center content opacity-0 translate-y-[40px]">
          Hello, my name is Jason. I am a Frontend Developer from London, UK. My
          speciality is the creation of beautiful, accessible and responsive
          websites using a variety of tools and technologies including React,
          Next.js, GSAP and TailwindCSS.
        </p>
        <Link
          className="content opacity-0 translate-y-[40px] font-semibold underline hover:scale-110"
          href={"/about"}
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}
