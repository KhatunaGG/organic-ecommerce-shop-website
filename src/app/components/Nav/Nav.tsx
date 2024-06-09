'use client'
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import Search from "../Search/Search";


const Nav = () => {


  return (
    <div className="h-[10vh] flex flex-row items-center">
      <Search />

      {/* <form className="px-[3%] lg:px-[7%] py-2 w-[50%] relative flex items-center">
        <img
          src="/assets/search-icon.svg"
          alt=""
          className="absolute pl-2  transform -translate-y-1/2 top-1/2"
        />
        <input
          className="pl-10  py-1.5 rounded-l-md outline-none flex-grow  border border-[#dfdcdc]"
          type="text"
        />
        <Button text="Search" width="20%" />
      </form> */}

      <div className="h-[70%] w-[1px] bg-[#b6b2b2]"></div>

      <div className="w-[50%] flex items-center justify-start gap-4 text-[#7d7979] font-bold cursor-pointer ml-4">
        <Link href={`pages/favorites`} >
          <span>Favorites</span>
        </Link>
        <Link href={`/pages/shoppingcart`}>
          <span>Sopping Cart</span>
        </Link>
        <Link href={`/pages/checkout`}>
          <span>Checkout</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
