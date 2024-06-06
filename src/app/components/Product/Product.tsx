'use client'
import { DataType } from "@/app/context/Context";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

type ProductPropsType = {
  product: DataType;
};

const Product = ({ product }: ProductPropsType) => {
  return (
    <div className="flex flex-col flex-grow bg-white m-5 items-center shadow-xl rounded-lg">
      <div className="w-[200px] h-[200px] bg-white flex items-center justify-center">
        <img className="w-[200px] h-[200px] " src={product.image} alt="" />
      </div>
      <h2 className="w-full text-left pl-4 pt-2">{product.title}</h2>
      <h2 className="w-full text-left pl-4 font-bold text-green-900">{(product.price).toFixed(2)}</h2>
      <Stack className="w-full text-left p-4 " spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating.rate}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
};

export default Product;
