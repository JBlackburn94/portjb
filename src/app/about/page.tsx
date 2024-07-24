"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitSquare,
  FaAws,
  FaPython,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiGreensock,
  SiDjango,
  SiTypescript,
  SiFramer,
  SiVercel,
  SiExpress,
} from "react-icons/si";

export default function page() {
  return (
    <main className="bg-background h-[100dvh] text-main overflow-x-hidden flex flex-col items-start justify-start gap-[30px] pt-[120px] px-[48px]">
      <h1 className="font-bold text-[28px]">Skills</h1>
      <section className="flex flex-col items-start gap-[20px]">
        <h2 className="font-semibold text-[20px]">Current Tech Stack</h2>
        <div className="flex gap-[30px] items-start justify-center">
          <div className="flex flex-col gap-[10px]">
            <span className="flex gap-[10px] items-center">
              <FaHtml5 className="text-[main] text-[20px]" />
              <p>HTML</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaCss3 className="text-[main] text-[20px]" />
              <p>CSS</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaJs className="text-[main] text-[20px]" />
              <p>JavaScript</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaReact className="text-[main] text-[20px]" />
              <p>React</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <RiNextjsFill className="text-[main] text-[20px]" />
              <p>Next.Js</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiGreensock className="text-[main] text-[20px]" />
              <p>GSAP</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaGitSquare className="text-[main] text-[20px]" />
              <p>Git</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaAws className="text-[main] text-[20px]" />
              <p>AWS</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiDjango className="text-[main] text-[20px]" />
              <p>Django</p>
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="flex gap-[10px] items-center">
              <RiTailwindCssFill className="text-[main] text-[20px]" />
              <p>TailwindCSS</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiTypescript className="text-[main] text-[20px]" />
              <p>TypeScript</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiFramer className="text-[main] text-[20px]" />
              <p>Framer Motion</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaWebflow className="text-[main] text-[20px]" />
              <p>Webflow</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiVercel className="text-[main] text-[20px]" />
              <p>Vercel</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaPython className="text-[main] text-[20px]" />
              <p>Python</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <FaDatabase className="text-[main] text-[20px]" />
              <p>SQL</p>
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start gap-[20px]">
        <h2 className="font-semibold text-[20px]">Currently Learning</h2>
        <div className="flex gap-[30px] items-start justify-center">
          <div className="flex flex-col gap-[10px]">
            <span className="flex gap-[10px] items-center">
              <FaNodeJs className="text-[main] text-[20px]" />
              <p>Node.Js</p>
            </span>
            <span className="flex gap-[10px] items-center">
              <SiExpress className="text-[main] text-[20px]" />
              <p>Express.Js</p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
