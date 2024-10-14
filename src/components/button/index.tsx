"use client";
import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fontSize?: string;
};

const Button = ({
  children,

  className,
  fontSize,
}: ButtonProps) => {
  return (
    <div className="relative place-content-center grid ">
      <div
        className={`z-10 absolute left-[2px] top-[2px]  w-[calc(100%-4px)] h-[calc(100%-4px)] grid place-content-center rounded-3xl pointer-events-none text-xs ${fontSize}`}
      >
        {" "}
        {children}
      </div>
      <button
        className={`py-3 rounded-3xl px-6 relative ${styles.button} ${className} ${fontSize} `}
      >
        <div className="absolute w-1 h-1 glow left-4"></div>
        <div className="absolute w-1 h-1 glow right-4"></div>
        {children}
      </button>
    </div>
  );
};

export default Button;
