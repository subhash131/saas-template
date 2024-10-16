"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caset from "./caset";

export default function Carousel() {
  return (
    <div className="w-screen px-20 overflow-hidden">
      <Slider
        speed={500}
        slidesToShow={3}
        focusOnSelect
        centerMode
        draggable
        centerPadding="100px"
      >
        <Caset id="1234" index={1} isActive={false} />
        <Caset id="1235" index={2} isActive={false} />
        <Caset id="1236" index={3} isActive={false} />
        <Caset id="1237" index={3} isActive={false} />
        <Caset id="1238" index={3} isActive={false} />
      </Slider>
    </div>
  );
}
