import { Play } from "lucide-react";
import React from "react";
import VideoPlayer from "./video-player";

const VideoController = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="w-[60rem] h-[70%] bg-[#171719] overflow-hidden shrink-0 flex items-center justify-between rounded-3xl relative">
      <div className="w-[30%] h-full flex flex-col">
        <div className="size-full flex items-center justify-center relative">
          <div className="absolute p-2 rounded-md bg-[#9D9D9F] h-[60%] flex flex-col justify-between items-center shadow-lg">
            <Play
              className="-rotate-90"
              fill="#252525"
              stroke="#252525"
              size={18}
            />
            <Play
              className="rotate-90"
              fill="#252525"
              stroke="#252525"
              size={18}
            />
          </div>
          <div className="absolute p-2 rounded-md bg-[#9D9D9F] w-[60%] flex justify-between items-center">
            <Play
              className="rotate-180"
              fill="#252525"
              stroke="#252525"
              size={18}
            />
            <div className="size-4 rounded-full bg-[#252525]"></div>
            <Play fill="#252525" stroke="#252525" size={18} />
          </div>
        </div>
        <div className="size-full flex items-center justify-center gap-6 rotate-45">
          <div className="w-10 h-10 rounded-md bg-[#9D9D9F]"></div>
          <div className="w-10 h-10 rounded-md bg-[#9D9D9F]"></div>
        </div>
      </div>
      <div className="size-full p-2">
        <VideoPlayer videoUrl={videoUrl}/>
      </div>
      <div className="w-[30%] h-full flex flex-col items-center justify-center">
        <div className="size-full flex items-center justify-center -rotate-45">
          <div className="p-1 bg-[#9D9D9F] rounded-full gap-6 flex ">
            <div className="size-14 rounded-full bg-black grid place-content-center rotate-45">
              B
            </div>
            <div className="size-14 rounded-full bg-black grid place-content-center rotate-45">
              A
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pb-2 text-2xl text-[#9D9D9F] italic font-semibold">
          SUBHASH
        </div>
      </div>
    </div>
  );
};

export default VideoController;
