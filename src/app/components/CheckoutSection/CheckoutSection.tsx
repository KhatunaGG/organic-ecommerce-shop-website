import React from "react";
import Button from "../Button/Button";
import OrderSummery from "../OrderSummery/OrderSummery";

function CheckoutSection() {
  return (
    <div className=" w-full flex flex-col gap-[30px] flex-grow items-start  mt-8 mb-10 md:gap-[1%] md:flex-row">
      <div className="left-side w-full md:w-[70%] flex flex-col gap-[20px]">
        <h1 className="font-bold tracking-wide text-green-950 text-[32px]">
          Billing Information
        </h1>

        <form className="form flex flex-col gap-4 border-b border-b-[#e1dfdf] pb-[20px] ">
          <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
            <div className="w-full flex flex-col md:w-[33%] gap-y-1 ">
              <label className="" htmlFor="">
                First name
              </label>
              <input
                className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Your First name"
                type="text"
              />
            </div>

            <div className="w-full flex flex-col md:w-[33%] gap-y-1">
              <label htmlFor="">Last name</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Your last name"
                type="text"
              />
            </div>

            <div className="w-full flex flex-col md:w-[33%] gap-y-1">
              <label htmlFor="">Company Name (optional)</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Company Name"
                type="text"
              />
            </div>
          </div>

          <div>
            <div className="w-full flex flex-col gap-y-1 text-xs lg:text-sm">
              <label htmlFor="">Street Address</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Street Address"
                type="text"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
            <div className="w-full flex flex-col md:w-[33%] gap-y-1">
              <label className="" htmlFor="">
                Country / Region
              </label>
              <input
                className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                type="text"
              />
            </div>

            <div className="w-full flex flex-col md:w-[33%] gap-y-1">
              <label htmlFor="">States</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                type="text"
              />
            </div>

            <div className="w-full flex flex-col md:w-[33%] gap-y-1">
              <label htmlFor="">Zip Code</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Zip Code"
                type="text"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-[1%] text-xs lg:text-sm">
            <div className="w-full flex flex-col md:w-[50%] gap-y-1">
              <label className="" htmlFor="">
                Email
              </label>
              <input
                className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Email Address"
                type="text"
              />
            </div>

            <div className="w-full flex flex-col md:w-[50%] gap-y-1">
              <label htmlFor="">Phone</label>
              <input
                className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
                placeholder="Phone number"
                type="text"
              />
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Ship to a different address</label>
          </div>
        </form>
        <div className=" flex flex-col gap-[10px] pt-[20px] ">
          <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
            Additional Info
          </h2>
          <div>
            <label htmlFor="" className="text-xs lg:text-sm">
              Order Notes (Optional)
            </label>
            <textarea
              name=""
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="w-full border border-[#e1dfdf] rounded-md text-xs p-2 lg:text-sm"
            ></textarea>
          </div>
        </div>
      </div>

      <OrderSummery />

    </div>
  );
}

export default CheckoutSection;
