import React from "react";

type FilterIconPropsType = {
  checked: number | null;
};

const FilterIcon = ({ checked }: FilterIconPropsType) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill={checked !== null ? "red" : "transparent"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5H9"
        stroke="white"
        // stroke-width="1.5"
        // stroke-linecap="round"
        // stroke-linejoin="round"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14H4"
        stroke="white"
        // stroke-width="1.5"
        // stroke-linecap="round"
        // stroke-linejoin="round"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" />
      <circle cx="17" cy="14" r="4" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};

export default FilterIcon;
