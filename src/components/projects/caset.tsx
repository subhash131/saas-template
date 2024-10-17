import React from "react";
import { Project } from ".";

const Caset = ({
  index,
  id,
  name,
  color,
  innerColor,
}: Project & { index: number }) => {
  return (
    <div
      className={`transition-all h-40 w-72 flex items-center justify-center flex-col ${
        index % 2 ? "rotate-3" : "-rotate-3"
      }  shrink-0 cursor-pointer mt-10 caset `}
      data-id={id}
    >
      <div
        className={`w-full h-14  shadow-xl pointer-events-none font-semibold flex items-center px-4 rounded-md justify-center ${color}`}
      >
        {name}
      </div>
      <div
        className={`w-[90%] h-full px-3 pb-3 pointer-events-none rounded-b-md ${color}`}
      >
        <div
          className={`size-full pointer-events-none rounded-b-md p-2 ${innerColor}`}
        ></div>
      </div>
    </div>
  );
};

export default Caset;
