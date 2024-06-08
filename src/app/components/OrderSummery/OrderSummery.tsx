
import React from "react";
import Button from "../Button/Button";

const OrderSummery = () => {
  return (
    <div className="right-side w-full md:w-[30%] border border-[#e1dfdf] shadow-md rounded-md p-6 flex flex-col gap-4 ">
      <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
        Order Summery
      </h2>
      <div className="bg-green-200 flex flex-col items-start gap-2">
        <div className="w-full flex flex-row items-center justify-between">
          <img className="w-[50px] h-[50px]" src="" alt="" />
          <p className="inline-block">title</p>
          <p className="inline-block">pricee</p>
        </div>
      </div>

      <div className="w-full flex-col items-center ">
        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] ">
          <div>Subtotal:</div>
          <div>$84.00</div>
        </div>

        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] ">
          <div>Shipping:</div>
          <div>Free</div>
        </div>

        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] ">
          <div>Total:</div>
          <div>$84.00</div>
        </div>
      </div>

      <div className="w-full items-start flex flex-col gap-2">
        <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
          Payment Method
        </h2>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input type="radio" name="" id="" value="" className="w-4 h-4" />
          <label htmlFor="">Cash on Delivery</label>
        </div>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input type="radio" name="" id="" value="" className="w-4 h-4" />
          <label htmlFor="">Paypal</label>
        </div>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input type="radio" name="" id="" value="" className="w-4 h-4" />
          <label htmlFor="">Amazon Pay</label>
        </div>
      </div>

      <Button text={"Place Order"} rounded="30px" />
    </div>
  );
};

export default OrderSummery;
