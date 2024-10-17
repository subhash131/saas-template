"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caset from "./caset";
import { Project } from ".";

export default function Carousel({ data }: { data: Project[] }) {
  return (
    <div className="max-w-[120rem] px-20 overflow-hidden">
      <Slider
        speed={1000}
        slidesToShow={3}
        focusOnSelect
        centerMode
        draggable={false}
        waitForAnimate={true}
        arrows={false}
      >
        {data.map(({ id, name, color, innerColor, link }, idx) => (
          <Caset
            id={id}
            index={idx}
            name={name}
            color={color}
            innerColor={innerColor}
            link={link}
          />
        ))}
      </Slider>
    </div>
  );
}
