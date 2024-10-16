import React from "react";

type CasetProps = {
  index: number;
  id: string;
  name: string;
};

const Caset = ({ index, id, name }: CasetProps) => {
  return (
    <div
      className={`transition-all h-40 w-72 flex items-center justify-center flex-col ${
        index % 2 ? "rotate-3" : "-rotate-3"
      }  shrink-0 cursor-pointer mt-10`}
      data-id={id}
    >
      <div className="w-full h-14 bg-[#FC7457] shadow-xl pointer-events-none font-semibold flex items-center px-4">
        {name}
      </div>
      <div className="w-[90%] h-full bg-[#FC7457] px-3 pb-3 pointer-events-none">
        <div className="size-full bg-[#FF9451] pointer-events-none">{id}</div>
      </div>
    </div>
  );
};

export default Caset;
