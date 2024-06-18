// import React from "react";

// const Register = () => {
//   return (
//     <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
//       <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
//         Sign Up
//       </h1>

//       <form className="w-full flex flex-col gap-6">
//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Name</label>
//           <input
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Name"
//             type="text"
//           />
//         </div>

//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Email</label>
//           <input
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Email"
//             type="text"
//           />
//         </div>

//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Password</label>
//           <input
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Password"
//             type="password"
//           />
//         </div>
//       </form>

//       <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
//         <input type="checkbox" name="" id="" />
//         <label htmlFor="">Already have an account? <span className="font-bold text-green-950">  Sign in </span></label>
//       </div>
//     </div>
//   );
// };

// export default Register;

// --------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------
"use client";
import { ClobalContext } from "@/app/context/Context";
import { auth } from "@/app/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const router = useRouter();
  const path = usePathname();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const context = useContext(ClobalContext);
  if (!context) return;
  const { handleChange, isChecked, setIsChecked, setLoggedInUser } = context;




  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createUserWithEmailAndPassword(email, password);

      if (res?.user) {
        router.push("/sign-in");
      }
      setPassword("");
      setEmail("");
    } catch (er) {
      const errorMessege = er;
      console.log(er, "er");
      console.log(errorMessege, "errorMessege");
    }
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
            value={email}
            required
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Password"
            type="password"
            value={password}
            required
          />
        </div>

        <button type="submit" className="w-full bg-gray-200">
          Sign up
        </button>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input
          onChange={() => handleChange(path)}
          type="checkbox"
          checked={isChecked === path}
          name=""
          id=""
        />
        <label htmlFor="">
          Already have an account?{" "}
          <span
            onClick={() => {
              if (isChecked === path) {
                router.push("/pages/signin");
                setIsChecked("");
              }
            }}
            className="font-bold text-green-950 cursor-pointer"
          >
            {" "}
            Sign in{" "}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Register;
