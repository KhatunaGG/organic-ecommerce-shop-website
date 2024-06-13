"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import { FilterIcon } from "../_atoms";

import Slider from "@mui/material/Slider";

function Filter() {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data, categoryArray, checked, handleFilter, value, setValue } = context;
  const price_range = [0, 20];

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <div className="hidden w-[25%] md:flex flex-col items-start gap-4">
      <h2 className="text-gray-400 w-full text-right">
        {data.length} Results Found
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-center gap-4 bg-green-600 rounded-full p-[14px] px-8">
          <p className="text-white font-bold">Filter</p>
          <FilterIcon checked={checked} />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-green-950 text-sm md:text-lg">
            All Categories
          </h2>
          <div className="flex flex-col items-start gap-4">
            {categoryArray.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={checked === i}
                  onChange={() => handleFilter(i, item.toLowerCase())}
                  className="rounded-full w-3 h-3 text-green-600 focus:ring-green-600"
                />
                <label
                  className="cursor-pointer hover:cursor-pointer text-green-900"
                  onClick={() => handleFilter(i, item.toLowerCase())}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Slider
            sx={{
              color: "success.main",
            }}
            getAriaLabel={() => "Price range"}
            onChange={handleChange}
            min={price_range[0]}
            max={price_range[1]}
            value={value}
            valueLabelDisplay="auto"
            step={1}
            className="w-[150px] lg:w-[180px] mt-4"
          />
    </div>
  );
}

export default Filter;
