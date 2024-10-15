"use client";
import React from "react";
import Button from "@/components/button";

const items = [
  "Documentation",
  "Blog",
  "Case Studies",
  "News Letters",
  "Careers",
];

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center px-8 justify-between backdrop-blur-sn bg-black text-sm fixed top-0 z-50">
      <div className="py-2 border border-[#616160] relative px-6 bg-black cursor-pointer select-none">
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

        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
