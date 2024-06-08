"use client";
import { ClobalContext, DataType } from "@/app/context/Context";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useContext } from "react";

type ProductPropsType = {
  product: DataType;
};

const Product = ({ product }: ProductPropsType) => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { addToCart } = context;

  return (
    <div className="flex flex-col flex-grow bg-white    items-center    shadow-xl rounded-lg relative group">
      <button className="outline-none absolute right-[3%] top-[3%] w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center  hover:bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ">
        <img className="w-6 h-6" src="/assets/Heart (1).svg" alt="" />
      </button>
      <div className="w-full flex items-center justify-center">
        <img className="w-[200px] h-[200px] " src={product.image} alt="" />
      </div>
      <div className="w-full p-4">
        <Link href={`/pages/Details/${product.id}`}>
          <h2 className="w-full text-left  pt-2">{product.title}</h2>
          <h2 className="w-full text-left font-bold text-green-900">
            {product.price.toFixed(2)}
          </h2>

          <Stack className="w-full text-left pb-4 pt-4" spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
        </Link>
      </div>

      <button
      onClick={() => addToCart(product)}
      className="outline-none absolute right-[3%] bottom-[3%] w-10 h-10 rounded-full bg-green-300 flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-green-500 ">
        <img className="w-6 h-6" src="/assets/Bag.svg" alt="" />
      </button>
    </div>
  );
};

export default Product;
