import React from "react";

type CasetProps = {
  index: number;
  isActive: boolean;
  id: string;
};

const Caset = ({ index, isActive, id }: CasetProps) => {
  return (
    <div
      className={`transition-all h-40 w-72 flex items-center justify-center flex-col ${
        index % 2 ? "rotate-3" : "-rotate-3"
      }  shrink-0 cursor-pointer ${isActive ? "mt-64" : "mt-0"}`}
      data-id={id}
    >
      <div className="w-full h-14 bg-[#FC7457] shadow-xl pointer-events-none"></div>
      <div className="w-[90%] h-full bg-[#FC7457] px-3 pb-3 pointer-events-none">
        <div className="size-full bg-[#FF9451] pointer-events-none">{id}</div>
      </div>
    </div>
  );
};

export default Caset;
