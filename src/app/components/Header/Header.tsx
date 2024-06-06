// import React from "react";

// const Header = () => {
//   return (
//     <div
//       className="w-full h-[20vh] flex items-center justify-center"
//       style={{
//         backgroundImage: "url('/assets/Breadcrumbs.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//         <div className="max-w-screen-xl w-full flex flex-row items-center space-x-2 px-[7%]">
//             <img src="/assets/home.svg" alt="" />
//             <img src="/assets/arrow.svg" alt="" />
//             <p className="text-gray-400 text-xs">Category</p>
//             <img src="/assets/arrow.svg" alt="" />
//             <p className=" text-xs text-green-700 font-bold">Vegetables</p>
//         </div>
//     </div>
//   );
// };

// export default Header;

"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-full flex flex-col items-start gap-4 px-[7%] z-10">
       <div className="flex flex-row items-center gap-4">
       <img src="/assets/leaf.svg" alt="" />
       <img src="/assets/Ecobazar.svg" alt="" />
       </div>

        <div className="flex flex-row space-x-2 items-center">
          <img src="/assets/home.svg" alt="" />
          <img src="/assets/arrow.svg" alt="" />
          <p className="text-gray-800 text-xs">Category</p>
          <img src="/assets/arrow.svg" alt="" />
          <p className=" text-xs text-green-900 font-bold">Vegetables</p>
        </div>
      </div>

      <div className="absolute w-full h-[50vh]  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b1.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b2.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b3.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b4.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
