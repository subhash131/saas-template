"use client";
import React from "react";
import Button from "@/components/button";
import { FileUser, Mail } from "lucide-react";
import Link from "next/link";

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
          <li
            className="p-2 pointer-events-auto cursor-wait"
            style={{ cursor: "pointer" }}
          >
            <Link
              href="https://docs.google.com/document/d/1_36f9TZfEVI1OS6v1pF6UbjwokXCGid0DQEIG3Loxis/edit?usp=sharing"
              target="_blank"
              className="flex gap-2 items-center justify-center"
            >
              <FileUser size={14} /> Resume
            </Link>
          </li>
        </ul>

        <Button
          className="active:scale-95 transition-transform"
          href="mailto:subhashnayak131@gmail.com"
        >
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
