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
          className={`${style.div2} border rounded-2xl border-light p-4 bg-[#111111] hover:scale-95 transition-transform`}
        >
          <p className="text-2xl font-semibold">I'm Subhash</p>
        </div>
        <div
          className={`${style.div3} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
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
          className={`${style.div6} border rounded-2xl border-light bg-purple flex flex-col items-center hover:scale-95 transition-transform`}
        >
          <div className="w-full flex justify-between items-center p-4">
            <h3 className="text-4xl font-semibold">Skills</h3>
            <Sparkle fill="#DCD4DF" size={28} />
          </div>
        </div>
        <div
          className={`${style.div7} border rounded-2xl border-light bg-[#111111] hover:scale-95 transition-transform`}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
