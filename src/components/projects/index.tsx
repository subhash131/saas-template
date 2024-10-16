"use client";
import React, { useState } from "react";
import VideoController from "./video-controller";
import Carousel from "./carousel";

const projects = [
  {
    name: "",
    id: "project-1",
    isActive: false,
  },
  {
    name: "",
    id: "project-2",
    isActive: false,
  },
  {
    name: "",
    id: "project-3",
    isActive: false,
  },
  {
    name: "",
    id: "project-4",
    isActive: false,
  },
  {
    name: "",
    id: "project-5",
    isActive: false,
  },
  {
    name: "",
    id: "project-6",
    isActive: false,
  },
  {
    name: "",
    id: "project-7",
    isActive: false,
  },
];

const Projects = () => {
  const [data, setData] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLDivElement).getAttribute("data-id");
    if (!id) return;

    const index = data.findIndex((project) => project.id === id);
    console.log("🚀 ~ handleClick ~ index:", index);
    setActiveIndex(index);
    const updatedData = data.map((project) => {
      if (project.id === id) {
        return { ...project, isActive: true };
      }
      return { ...project, isActive: false };
    });
    setData(updatedData);
  };

  return (
    <div
      className="w-screen h-screen flex bg-black sticky top-0 flex-col"
      onClick={handleClick}
    >
      <div className="py-10">
        <Carousel />
      </div>

      <div className="size-full flex items-center justify-center">
        <div className="h-[70%] flex  items-start mt-2 justify-center absolute">
          <div className="h-6 w-96 absolute z-10 -ml-12 -mt-6 flex items-center justify-between">
            <div className="h-full w-6 bg-[#171719] rounded-tl"></div>
            <div className="h-full w-6 bg-[#171719] rounded-tr"></div>
          </div>
          <VideoController />
        </div>
      </div>
    </div>
  );
};

export default Projects;
