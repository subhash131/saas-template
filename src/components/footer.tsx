"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-96 w-screen flex items-center justify-center flex-col relative bg-[#111111]">
      <button
        className="absolute top-4 active:scale-95 left-4 scroll-smooth bg-white rounded-full text-black p-2 animate-bounce"
        onClick={() => {
          scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }}
      >
        <ChevronUp />
      </button>
      <p className="text-6xl font-semibold text-gradient">
        Let's work together
      </p>
      <Link
        href="mailto:subhashnayak131@gmail.com"
        className="bg-amber-100 px-10 py-2 rounded-full text-black cursor-pointer active:scale-95 transition-transform"
      >
        subhashnayak131@gmail.com
      </Link>
    </div>
  );
};

export default Footer;
