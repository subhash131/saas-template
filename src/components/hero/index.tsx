"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/button";
import styles from "./hero.module.css";
import {
  BarChart3,
  GitCompareArrows,
  LayoutPanelTop,
  Rocket,
  Scaling,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-20 w-screen h-screen overflow-hidden sticky top-0">
      <div className="w-full h-full justify-center flex absolute -z-10 after:w-full after:h-full after:-z-[9] after:absolute after:bg-[black] after:blur-3xl">
        <Image
          src="/assets/mesh.svg"
          width={100}
          height={100}
          alt="background image"
          className="w-[80%] ml-32 h-[65%] select-none max-md:w-full max-md:ml-10"
        />
      </div>
      <div className="w-full h-full flex justify-between absolute z-10">
        <div className="w-96 h-full relative  blur-sm">
          <Image
            src="/assets/apple.svg"
            width={100}
            height={100}
            alt="background image"
            className="absolute left-[20%] top-[40%] -rotate-12 max-md:left-0"
          />
          <Scaling
            size={44}
            className="absolute right-[20%] top-[5%] rotate-12"
          />
          <Rocket size={44} className="absolute right-[20%] bottom-[20%]" />
        </div>
        <div className="w-96 h-full relative  blur-sm">
          <Image
            src="/assets/android.svg"
            width={100}
            height={100}
            alt="android image"
            className="absolute right-[20%] top-[40%] rotate-12 max-md:right-0"
          />
          <BarChart3
            size={44}
            className="absolute left-[20%] top-[5%] -rotate-6 "
          />
          <GitCompareArrows
            size={44}
            className="absolute left-[20%] bottom-[20%]"
          />
        </div>
      </div>
      <div className="w-full h-full gap-24 flex justify-center flex-col items-center absolute z-30 ">
        <div className="w-[40rem] h-[18rem] relative flex flex-col gap-16 text-center max-md:w-[20rem]">
          <div className="flex flex-col gap-4 max-md:gap-10 items-center ">
            <p className="text-[2.8rem] leading-tight max-md:text-3xl">
              I specialize in shaping the future of digital experiences!
            </p>
            <p className="text-sm text-[#cecece] w-96 leading-4 max-md:w-72">
              Elevate your projects with cutting-edge front-end development
              expertise.
            </p>
          </div>
          <div
            onClick={() => {
              scrollTo({
                top: innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <Button
              className="px-10 text-base active:scale-105 transition-transform pointer-events-none"
              fontSize="text-base"
              href="#"
            >
              About me
            </Button>
          </div>
        </div>
        <div
          className={` overflow-hidden relative w-[calc(100px*5)] max-md:w-[calc(50px*5)] before:bg-gradient-linear-to-r before:h-full before:w-[15%] before:z-10 before:absolute before:-right-4 before:top-0 after:absolute after:w-[15%] after:h-full after:bg-gradient-linear-to-l after:z-10 after:top-0 after:-left-4 whitespace-nowrap flex items-center h-5 ${styles.slide_wrap}`}
        >
          <ul
            className={`inline-block text-xs items-center ${styles.logo_slide}`}
          >
            <div className="flex gap-8 ml-8">
              <li className="flex gap-1">
                <Scaling size={16} strokeWidth={1} />
                Responsive Web Design
              </li>
              <li className="flex gap-1">
                <BarChart3 size={16} strokeWidth={1} />
                Performance Tuning
              </li>
              <li className="flex gap-1">
                <GitCompareArrows size={16} strokeWidth={1} />
                Collaborative Development
              </li>
              <li className="flex gap-1">
                <Rocket size={16} strokeWidth={1} /> Accessibility Focus
              </li>
              <li className="flex gap-1">
                <LayoutPanelTop size={16} strokeWidth={1} />
                UI/UX Optimization
              </li>
            </div>
          </ul>
          {/* Copy of same items */}
          <ul
            className={`inline-block  text-xs items-center ${styles.logo_slide}`}
          >
            <div className="flex gap-8 ml-8">
              <li className="flex gap-1">
                <Scaling size={16} strokeWidth={1} />
                Responsive Web Design
              </li>
              <li className="flex gap-1">
                <BarChart3 size={16} strokeWidth={1} />
                Performance Tuning
              </li>
              <li className="flex gap-1">
                <GitCompareArrows size={16} strokeWidth={1} />
                Collaborative Development
              </li>
              <li className="flex gap-1">
                <Rocket size={16} strokeWidth={1} /> Accessibility Focus
              </li>
              <li className="flex gap-1">
                <LayoutPanelTop size={16} strokeWidth={1} />
                UI/UX Optimization
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
