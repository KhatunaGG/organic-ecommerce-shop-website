"use client";
import { ClobalContext, DataType } from "@/app/context/Context";
import React, { useContext, useEffect } from "react";

type CartItemPropsType = {
  cartItem: DataType;
};

function CartItem({ cartItem }: CartItemPropsType) {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { shoppingCartItems, increment, decrement, setTotalPrice, setTotalCount } = context;

  useEffect(() => {
    if (cartItem.count && shoppingCartItems.length > 0) {
      const totalCount = shoppingCartItems.reduce((acc, item) => {
        if (item && item.count) {
          return acc + item.count;
        }
        return acc;
      }, 0);
  
      const totalPrice = shoppingCartItems.reduce((acc, item) => {
        if (item && item.count && item.price) {
          return acc + (item.count * item.price);
        }
        return acc;
      }, 0);
  
      setTotalCount(totalCount);
      setTotalPrice(totalPrice);
    }
  }, [cartItem.count, shoppingCartItems]);
  

  return (
    <div className="cart-item w-full md:p-2">
      <div className="border border-gray-200 md:p-1 flex-grow">
        <div className="w-full flex flex-row items-center md:justify-between  py-2 ">
          <div className="capitalize text-base text-[var(--text-gray)] w-[60%] md:w-[40%] flex flex-row items-center">
            <img
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
              src={cartItem.image}
              alt=""
            />
            <p className="text-xs md:text-sm lg:text-sm">{cartItem.title}</p>
          </div>

          <ul className="w-full flex flex-row items-center justify-around md:justify-between  md:w-[50%] font-bold text-xs md:text-sm text-[var(--text-gray)]">
            <li className="">$ {cartItem.price}</li>
            <li className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 border border-[#d9d6d6] rounded-[30px]">
              <button
                onClick={() => decrement(cartItem.id)}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-400 text-black  flex items-center justify-center"
              >
                -
              </button>
              <p className="">{cartItem.count}</p>
              <button
                onClick={() => increment(cartItem.id)}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-400 text-black  flex items-center justify-center"
              >
                +
              </button>
            </li>
            <li className="">
              ${" "}
              {cartItem?.count
                ? cartItem.price * cartItem?.count
                : cartItem.price}
            </li>
          </ul>
          <div className="w-[15%] md:w-[10%] flex items-center justify-center">
            <button className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full text-sm md:text-md ">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
