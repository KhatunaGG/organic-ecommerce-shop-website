'use client'
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";

type ButtonPropsType = {
  text: string;
  width?: string;
  rounded?: string;

};

const Button = ({ text, width, rounded }: ButtonPropsType) => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { setButtonInnerText } = context;
  setButtonInnerText(text)
  
  return (
    <button
      style={{ width: width, borderRadius: rounded }}
      className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-r-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
    >
      {text}
    </button>
  );
};

export default Button;
