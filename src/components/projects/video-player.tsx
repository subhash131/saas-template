"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="size-full rounded-xl bg-[#252527] overflow-hidden border-2 border-[#383838]">
      {hasWindow && (
        <ReactPlayer
          url={"https://youtu.be/Ia2UNzM-woI?si=BWFYJThGRW_hnove"}
          controls={true}
          light={false}
          pip={true}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
