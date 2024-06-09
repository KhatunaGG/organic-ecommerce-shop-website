import React from "react";

const Coupon = () => {
  return (
    <div className="w-full border border-gray-200 p-2 flex flex-col lg:flex-row flex-grow items-center mt-2 gap-x-4 md:gap-y-2">
      <p className="block w-full lg:w-[15%] ml-4 text-xs lg:text-sm">
        Coupon Code
      </p>
      <form className="w-full lg:w-[84%] text-xs lg:text-sm">
        <input
          type="text"
          placeholder="Enter code"
          className="outline-none pl-6 w-[65%] md:w-[78%] border border-gray-200 py-[14px] rounded-l-full"
        />
        <button
          className="bg-green-600 text-[var(--text-gray)] w-[35%] md:w-[22%]  py-[14px]  rounded-r-full transition-all ease-in-out duration-300
      hover:border hover:border-green-600 hover:bg-transparent hover:text-green-600 whitespace-nowrap"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};

export default Coupon;
