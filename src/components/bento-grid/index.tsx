import React from "react";
import style from "./bento.module.css";

const BentoGrid = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className={`${style.parent} w-[80%] h-[80%] gap-3`}>
        <div className={`${style.div1} border rounded-2xl border-light`}> </div>
        <div className={`${style.div2} border rounded-2xl border-light`}> </div>
        <div className={`${style.div3} border rounded-2xl border-light `}>
          {" "}
        </div>
        <div className={`${style.div4} border rounded-2xl border-light `}>
          {" "}
        </div>
        <div className={`${style.div5} border rounded-2xl border-light`}> </div>
        <div
          className={`${style.div6} border rounded-2xl border-light bg-purple`}
        >
          {" "}
        </div>
        <div className={`${style.div7} border rounded-2xl border-light `}>
          {" "}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
