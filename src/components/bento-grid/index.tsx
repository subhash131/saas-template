import React from "react";
import style from "./bento.module.css";
import Rocket from "./rocket";
import { Sparkle } from "lucide-react";

const BentoGrid = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center backdrop-blur-lg sticky top-0">
      <div className={`${style.parent} w-[80%] h-[80%] gap-3`}>
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
          className={`${style.div3} border rounded-2xl border-purple bg-purple flex flex-col items-center hover:scale-95 transition-transform overflow-hidden p-4 gap-6`}
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

        <div
          className={`${style.div4} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>
        <div
          className={`${style.div5} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>
        <div
          className={`${style.div6} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>

        <div
          className={`${style.div7} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>
        <div
          className={`${style.div8} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
