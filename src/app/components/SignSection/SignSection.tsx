import React from "react";

const SignSection = () => {
  return (
    <section className="w-full h-[7vh] bg-green-950 flex items-center justify-center">
      <div className="w-full px-[7%] flex flex-row items-center justify-end">
        <div className="sign flex flex-row items-center gap-2 ">
          <button className="text-white text-[13px]">Sign In</button>
          <span className="text-white text-[13px]">/</span>
          <button className="text-white text-[13px]"> Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default SignSection;
