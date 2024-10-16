"use client";
import React, { useState } from "react";
import VideoController from "./video-controller";
import Carousel from "./carousel";

export type Project = {
  name: string;
  link: string;
  id: string;
  color: string;
  innerColor: string;
};

const projects: Project[] = [
  {
    name: "Pacman + Web3",
    link: "https://youtu.be/wSvtOkk4b6c",
    id: "project-1",
    color: "bg-[#533FF9]",
    innerColor: "bg-[#9497FB]",
  },
  {
    name: "Realtime Editor",
    link: "https://youtu.be/yPLCGKZPh-0",
    id: "project-2",
    color: "bg-[#E06E1A]",
    innerColor: "bg-[#fc9758]",
  },
  {
    name: "Miro Clone",
    link: "https://youtu.be/gKDITYKFtcE",
    id: "project-3",
    color: "bg-[#4093FF]",
    innerColor: "bg-[#4861FF]",
  },

  {
    name: "Winu",
    link: "https://youtu.be/Ia2UNzM-woI",
    id: "project-4",
    color: "bg-[#b01d24]",
    innerColor: "bg-[#e64949]",
  },
  {
    name: "BetX Realtime Game",
    link: "https://youtu.be/eTA7FMQnP_o",
    id: "project-5",
    color: "bg-[#4C61DE]",
    innerColor: "bg-[#9497FB]",
  },
  {
    name: "WhatsApp Clone",
    link: "https://youtu.be/zf1mxFm1PeY",
    id: "project-3",
    color: "bg-[#007D41]",
    innerColor: "bg-[#134c30]",
  },
];

const Projects = () => {
  const [data] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLDivElement).getAttribute("data-id");
    if (!id) return;
    const index = data.findIndex((project) => project.id === id);
    setTimeout(() => {
      setActiveIndex(index);
    }, 1000);
  };

  return (
    <div
      className="w-screen h-screen flex bg-black sticky top-0 flex-col bg-[#]"
      onClick={handleClick}
    >
      <div className="py-10">
        <Carousel data={data} />
      </div>

      <div className="size-full flex items-center justify-center -mt-20">
        <div className="h-[70%] flex  items-start mt-2 justify-center absolute">
          <div className="h-6 w-96 absolute z-10 -ml-12 -mt-6 flex items-center justify-between">
            <div className="h-full w-6 bg-[#171719] rounded-tl"></div>
            <div className="h-full w-6 bg-[#171719] rounded-tr"></div>
          </div>
          <VideoController videoUrl={data[activeIndex].link} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
