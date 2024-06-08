import React from "react";

const Register = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign Up
      </h1>

      <form className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Name</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Name"
            type="text"
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Password"
            type="password"
          />
        </div>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Already have an account? <span className="font-bold text-green-950">  Sign in </span></label>
      </div>
    </div>
  );
};

export default Register;
