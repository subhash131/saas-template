import React from "react";
import VideoController from "./video-controller";

const Projects = () => {
  return (
    <div className="w-screen h-screen flex bg-black sticky top-0 flex-col">
      <div className="w-full h-80 bg--400"></div>
      <div className="size-full flex items-center justify-center">
        <VideoController />
      </div>
    </div>
  );
};

export default Projects;
