"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caset from "./caset";
import { Project } from ".";

export default function Carousel({ data }: { data: Project[] }) {
  return (
    <div className="w-screen px-20 overflow-hidden">
      <Slider
        speed={1000}
        slidesToShow={3}
        focusOnSelect
        centerMode
        draggable={true}
        waitForAnimate={true}
      >
        {data.map(({ id, name }, idx) => (
          <Caset id={id} index={idx} name={name} />
        ))}
      </Slider>
    </div>
  );
}
