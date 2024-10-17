import React from "react";
import style from "./bento.module.css";
import Rocket from "./rocket";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BentoGrid = () => {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center backdrop-blur-lg sticky top-0"
      id="about-me"
    >
      <div className={`${style.parent} w-[80%] h-[80%] gap-3 lg:w-[90%]`}>
        <div
          className={`${style.div1} border rounded-2xl border-light overflow-hidden hover:scale-95 transition-transform`}
        >
          <Rocket />
        </div>
        <div
          className={`${style.div2} border rounded-2xl border-light p-4 bg-[#111111] hover:scale-95 transition-transform flex flex-col gap-4`}
        >
          <h2 className="text-2xl font-semibold">I'm Subhash.</h2>
          <p className="text-sm text-gray-400">
            With 3 years at PwC delivering software solutions for Victoria's
            Secret, Aon, and Bridgestone, I'm a Frontend Engineer passionate
            about building responsive, high-performance web apps. I excel in
            problem-solving, collaboration, and attention to detail, focusing on
            intuitive, engaging user experiences and seamless solutions.
          </p>
        </div>
        <div
          className={`${style.div3} border rounded-2xl border-purple bg-purple flex flex-col items-center hover:scale-95 transition-transform overflow-hidden p-4 gap-4`}
        >
          <div className="w-full flex justify-between items-center">
            <h3 className="text-4xl font-semibold">Skills</h3>
            <Sparkle fill="#DCD4DF" size={28} />
          </div>
          <div className="size-full">
            <p>Next.js</p>
            <p>React.js</p>
            <p>Typescript</p>
            <p>Redux</p>
            <p>Identity Access Management</p>
            <p>Sailpoint Identity Cloud</p>
            <p>Tailwind CSS</p>
            <p>Framer Motion</p>
            <p>LiveBlocks</p>
          </div>
        </div>

        <div className={`${style.div4} rounded-2xl flex flex-col gap-3`}>
          <div className="size-full bg-[#e7e7e7] rounded-2xl hover:scale-95 transition-transform " />
          <div className={`size-full`}></div>
          <div className="size-full bg-[#e7e7e7] rounded-2xl  hover:scale-95 transition-transform " />
        </div>
        <div
          className={`${style.div5} border rounded-2xl border-light bg-[#111111] flex gap-3 p-1 items-center justify-between`}
        >
          <div className="size-full text-3xl font-extrabold tracking-widest flex items-center justify-center">
            LIN
            <br />
            KS:
          </div>
          <Link
            target="_blank"
            href="https://x.com/subhashnayak131"
            className="size-[80%] bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-95 transition-transform cursor-pointer"
          >
            <Image src="/assets/x.png" alt="x" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLhG_qBEikcCrdDwfP-FOqCvq630DPIVBG"
            className="size-[80%] bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-95 transition-transform"
          >
            <Image
              src="/assets/youtube.svg"
              alt="youtube"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div
          className={`${style.div6} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform px-3 pt-6  flex flex-col gap-4 h-full`}
        >
          <h4 className="uppercase font-[1000] text-3xl">Recent Projects.</h4>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">Aon + Aetna</p>
              <p className="text-xs text-gray-400">2023 - 2024</p>
            </div>
            <p className="text-gray-400 text-xs">SaaS</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">CVS Health</p>
              <p className="text-xs text-gray-400">2022 - 2023</p>
            </div>
            <p className="text-gray-400 text-xs">SaaS</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">Bridgestone</p>
              <p className="text-xs text-gray-400">2021 - 2023</p>
            </div>
            <p className="text-gray-400 text-xs">SaaS</p>
          </div>
        </div>

        <div
          className={`${style.div7} border rounded-2xl border-light bg-[#111111]`}
        >
          <div className="size-full flex flex-col p-3">
            <div className="size-full flex items-center gap-4">
              <div className="size-10 rounded-full flex items-center justify-center border bg-black">
                O
              </div>
              <div className="flex flex-col">
                <p>Oliver Twist</p>
                <p className="text-[0.6rem] text-gray-400">
                  Product Manager at Aon
                </p>
              </div>
            </div>
            <p className="text-[0.6rem] size-full">
              You've been flexible with changing requirements and still
              delivered high-quality results. Your ability to adapt quickly is a
              huge asset to the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
