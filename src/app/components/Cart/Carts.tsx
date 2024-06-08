"use client";
import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import Coupon from "../Coupon/Coupon";
import { ClobalContext } from "@/app/context/Context";
import CartTotal from "../CartTotal/CartTotal";
import Link from "next/link";

const Carts = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { shoppingCartItems, totalPrice, totalCount, setShoppingCartItems } = context;

  return (
    <div className="flex flex-col flex-grow  gap-6 mb-10 mt-8 items-center w-full ">
      <h2 className="text-[20px] w-full font-bold text-green-950 text-center">
        My Shopping Cart
      </h2>

      <div className="w-full flex flex-col flex-grow md:flex-row items-start  md:gap-[1%]  ">
        <div className="cart-block w-full md:w-[70%] felx flex-grow flex-col border border-gray-200  ">
          <div className="w-full flex flex-row items-center justify-between  border border-gray-200 py-2">
            <div className="uppercase font-bold text-xs md:text-sm lg:text-sm text-[var(--text-gray)] w-[60%] md:w-[40%]">
              Product
            </div>

            <ul className="w-full flex flex-row flex-grow items-center justify-between md:w-[50%] uppercase font-bold text-xs md:text-sm-sm lg:text-sm text-[var(--text-gray)]">
              <li className="">price</li>
              <li className="">Quantity</li>
              <li className=" ">Subtotal</li>
            </ul>
            <div className="w-[15%] md:w-[10%]"></div>
          </div>
          {totalCount === 0 && (
            <div className="w-full py-6 flex items-center justify-center text-red-600">
              Your shopping cart is empty
            </div>
          )}
          {shoppingCartItems.map((item, i) => (
            <CartItem key={i} cartItem={item} />
          ))}
          <div className="w-full border border-gray-200 py-2 flex items-center justify-between text-xs lg:text-sm ">
            <Link href={"/"}>
              <button className="font-bold text-[var(--text-gray) px-6 py-[12px] md:px-8 md:py-[14px] bg-[#f2f2f2] rounded-full">
                Return to shop
              </button>
            </Link>
            <button
            onClick={() => setShoppingCartItems([])}
             className="font-bold text-[var(--text-gray) px-6 py-[12px] md:px-8 md:py-[14px] bg-[#f2f2f2] rounded-full">
              Remove All
            </button>
          </div>
          <Coupon />
        </div>
        <CartTotal totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Carts;
