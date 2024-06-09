'use client'
import React, { useContext,  useState } from "react";
import Button from "../Button/Button";
import { ClobalContext } from "@/app/context/Context";

function Search() {
    const context = useContext(ClobalContext);
    if (!context) return;
    const { getInputSearch, handleSearch, search, data, length } = context;
  

  return (
    <form 
    onSubmit={handleSearch}
    className="px-[3%] lg:px-[7%] py-2 w-[50%] relative flex items-center">
      <img
        src="/assets/search-icon.svg"
        alt=""
        className="absolute pl-2  transform -translate-y-1/2 top-1/2"
      />
      <input
      onChange={getInputSearch}
        className="pl-10  py-1.5 rounded-l-md outline-none flex-grow  border border-[#dfdcdc]"
        type="text"
        value={search}
      />
      <Button text={data.length < length ? 'clear' : 'Search' } width="20%"  />
    </form>
  );
}

export default Search;
