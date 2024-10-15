import React from "react";

type CasetProps = {
  index: number;
};

const Caset = ({ index }: CasetProps) => {
  return (
    <div
      className={`h-40 w-72 flex items-center justify-center flex-col ${
        index % 2 ? "rotate-6" : "-rotate-6"
      }  shrink-0 cursor-pointer`}
    >
      <div className="w-full h-14 bg-[#FC7457] shadow-xl"></div>
      <div className="w-[90%] h-full bg-[#FC7457] px-3 pb-3">
        <div className="size-full bg-[#FF9451]"></div>
      </div>
    </div>
  );
};

export default Caset;
