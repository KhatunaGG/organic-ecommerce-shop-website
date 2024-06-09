"use client";
import { ClobalContext, DataType } from "@/app/context/Context";
import React, { useContext } from "react";

type HeartIconPropsType = {
  product?: DataType;
  width?: string;
  hight?: string;
};

function HeartIcon({ product, width, hight }: HeartIconPropsType) {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { favorites } = context;

  return (
    <svg
      className={`${width} ${hight}`}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill={favorites.includes(product as DataType) ? "red" : "transparent"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.999 28.5722C-10.6672 13.8334 7.9995 -2.16662 15.999 7.95079C23.9995 -2.16663 42.6661 13.8334 15.999 28.5722Z"
        stroke="#706d6d"
        // stroke-width="1.5"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default HeartIcon;
