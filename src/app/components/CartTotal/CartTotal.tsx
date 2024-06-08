import React from "react";
import Button from "../Button/Button";

type CartTotalPropsType = {
  totalPrice: number;
};

const CartTotal = ({ totalPrice }: CartTotalPropsType) => {
  const Shipping = 3.99;

  return (
    <>
   
     <div className="cart-total w-full md:w-[29%] p-[24px] border border-gray-200 shadow-md flex flex-col gap-4">
      <h2 className="text-base font-bold">Cart Total</h2>
      <div className="flex flex-col">
        <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
          <span>Subtotal:</span>
          <span className="font-bold">
            $ {totalPrice ? totalPrice.toFixed(2) : 0.0}
          </span>
        </div>

        <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
          <span>Shipping:</span>
          <span
            className={`${totalPrice >= 50.0 && "text-green-600"} font-bold`}
          >
            {" "}
            {totalPrice < 50.0 ? "$" : ""}
            {totalPrice < 50.0 ? 3.99 : "Free"}
          </span>
        </div>

        <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
          <span>Total:</span>
          <span className="font-bold">
            $ {totalPrice ? totalPrice.toFixed(2) : 0.0}
          </span>
        </div>
      </div>
      <Button text={"Proceed to checkout"} rounded={"50px"} />
    </div>
    </>
  );
};

export default CartTotal;
