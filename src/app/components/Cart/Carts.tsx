"use client";
import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import Coupon from "../Coupon/Coupon";
import { ClobalContext } from "@/app/context/Context";
import CartTotal from "../CartTotal/CartTotal";

const Carts = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { shoppingCartItems } = context;

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

            <ul className="w-full flex flex-row flex-grow items-center justify-between md:w-[50%] bg-green-400 uppercase font-bold text-xs md:text-sm-sm lg:text-sm text-[var(--text-gray)]">
              <li className="">price</li>
              <li className="">Quantity</li>
              <li className=" ">Subtotal</li>
            </ul>
            <div className="w-[15%] md:w-[10%]"></div>
          </div>

          {shoppingCartItems.map((item, i) => (
            <CartItem key={i} cartItem={item} />
          ))}

          <div className="w-full border border-gray-200 py-2 flex items-center justify-between text-xs lg:text-sm ">
            <button className="font-bold text-[var(--text-gray) px-6 py-[12px] md:px-8 md:py-[14px] bg-[#f2f2f2] rounded-full">
              Return to shop
            </button>
            <button className="font-bold text-[var(--text-gray) px-6 py-[12px] md:px-8 md:py-[14px] bg-[#f2f2f2] rounded-full">
              Update Cart
            </button>
          </div>

          <Coupon />
        </div>

        <CartTotal />

        {/* <div className="cart-total w-full md:w-[29%] p-[24px] border border-gray-200 shadow-md flex flex-col gap-4">
          <h2 className="text-base font-bold">Cart Total</h2>
          <div className="flex flex-col">
            <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
              <span>Subtotal:</span>
              <span className="font-bold">$84.00</span>
            </div>

            <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
              <span>Shipping:</span>
              <span className="font-bold">Free</span>
            </div>

            <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
              <span>Total:</span>
              <span className="font-bold">$84.00</span>
            </div>
          </div>
          <Button text={"Proceed to checkout"} rounded={"50px"} />
        </div> */}
      </div>
    </div>
  );
};

export default Carts;
