import React from "react";
import VideoController from "./video-controller";
import Caset from "./caset";

const projects = [
  {
    name: "",
    id: "1",
    isActive: false,
  },
  {
    name: "",
    id: "2",
    isActive: false,
  },
  {
    name: "",
    id: "3",
    isActive: false,
  },
  {
    name: "",
    id: "4",
    isActive: false,
  },
  {
    name: "",
    id: "5",
    isActive: false,
  },
  {
    name: "",
    id: "6",
    isActive: false,
  },
  {
    name: "",
    id: "7",
    isActive: false,
  },
];

const Projects = () => {
  return (
    <div className="w-screen h-screen flex bg-black sticky top-0 flex-col">
      <div className="w-full h-80 flex items-center justify-between px-10 gap-16 overflow-x-scroll overflow-y-hidden">
        {projects.map((project, idx) => {
          return <Caset index={idx} key={idx} />;
        })}
      </div>
      <div className="size-full flex relative items-start mt-2 justify-center">
        <div className="h-6 w-72 absolute z-10 -mt-6 flex items-center justify-between">
          <div className="h-full w-4 bg-[#171719] rounded-tl"></div>
          <div className="h-full w-4 bg-[#171719] rounded-tr"></div>
        </div>
        <VideoController />
      </div>
    </div>
  );
};

export default Projects;
