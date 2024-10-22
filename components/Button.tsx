"use client";
import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  link: string;
  newTab?: boolean;
};

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  link,
  newTab,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full ? "w-full" : ""
      }`}
      type={type}
      onClick={() => {
        newTab ? window.open(link, "_blank") : window.location.assign(link);
      }}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
