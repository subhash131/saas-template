"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
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
          url={videoUrl || "https://youtu.be/Ia2UNzM-woI?si=BWFYJThGRW_hnove"}
          controls={true}
          light={false}
          pip={true}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                autoplay: 0,
                cc_load_policy: 1,
                iv_load_policy: 3,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
