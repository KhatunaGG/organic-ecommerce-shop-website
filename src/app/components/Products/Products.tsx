"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Product from "../Product/Product";

const Products = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data } = context;
  console.log(data);

  return (
    <div className="  mx-auto gap-[2%] flex flex-row items-start mt-8 mb-10">
      <div className="w-[25%]">
        <h2 className="text-gray-400">52 Results Found</h2>
      </div>

      <div className="w-[73%] grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3  ">
        {data.slice(0, 6).map((item, i) => (
          <Product key={i} product={item} />
        ))}

        <img
          src="/assets/Breadcrumbs.png"
          alt=""
          className="col-span-full shadow-md h-[15vh]"
        />

        <div className="md:col-span-2">
          {data.slice(6, 7).map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </div>

        {data.slice(7, data.length).map((item, i) => (
          <Product key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
