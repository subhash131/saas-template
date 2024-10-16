"use client";
import React from "react";
import Button from "@/components/button";
import { Mail } from "lucide-react";

const items = [
  "Documentation",
  "Blog",
  "Case Studies",
  "News Letters",
  "Careers",
];

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center px-8 justify-between backdrop-blur-sn backdrop-blur-md text-sm fixed top-0 z-50">
      <div className="group py-2 relative px-6 bg-black cursor-pointer select-none">
        <div className="w-2 h-0.5 absolute top-0 right-0 border border-[#616160] group-hover:w-full transition-all" />
        <div className="w-2 h-0.5 absolute bottom-0 left-0 border border-[#616160] group-hover:w-full transition-all" />
        <div className="w-2 h-0.5 absolute top-0 left-0 border border-[#616160] " />
        <div className="w-2 h-0.5 absolute bottom-0 right-0 border border-[#616160] " />
        <div className="w-0.5 h-2 absolute top-0 right-0 border border-[#616160] " />
        <div className="w-0.5 h-2 absolute bottom-0 left-0 border border-[#616160] " />
        <div className="w-0.5 h-2 absolute top-0 left-0 border border-[#616160] group-hover:h-full transition-all" />
        <div className="w-0.5 h-2 absolute bottom-0 right-0 border border-[#616160] group-hover:h-full transition-all" />
        Subhash
      </div>
      <div className="flex gap-10 ">
        <ul className="flex gap-2 text-xs items-center max-md:hidden">
          {items.map((item, index) => {
            return (
              <li
                className="p-2 pointer-events-auto cursor-wait"
                key={`nav-${index}`}
                style={{ cursor: "pointer" }}
              >
                {item}
              </li>
            );
          })}
        </ul>

        <Button className="active:scale-95 transition-transform">
          <span className="flex items-center justify-center gap-2">
            Mail
            <Mail className="inline" size={18} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
