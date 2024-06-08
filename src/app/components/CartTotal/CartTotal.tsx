'use client'
import React from 'react'
import Button from '../Button/Button'

const CartTotal = () => {
  return (
    <div className="cart-total w-full md:w-[29%] p-[24px] border border-gray-200 shadow-md flex flex-col gap-4">
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
        </div>
  )
}

export default CartTotal