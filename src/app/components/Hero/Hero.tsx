import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[20vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/Breadcrumbs.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="max-w-screen-xl w-full flex flex-row items-center space-x-2 px-[7%]">
        <img src="/assets/home.svg" alt="" />
        <img src="/assets/arrow.svg" alt="" />
        <p className="text-gray-400 text-xs">Category</p>
        <img src="/assets/arrow.svg" alt="" />
        <p className=" text-xs text-green-700 font-bold">Vegetables</p>
      </div> */}
    </div>
  );
};

export default Hero;
