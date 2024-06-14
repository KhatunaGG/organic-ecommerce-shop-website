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

// "use client";
// import { auth } from "@/app/firebase/firebase";
// import Button  from "../Button/Button";
// import React, { useState } from "react";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { useRouter } from "next/navigation";

// const Register = () => {
//   const [createUserWithEmailAndPassword] =
//     useCreateUserWithEmailAndPassword(auth);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeaPassword, setRepeatPassword] = useState("");
//   const [error, setError] = useState('')

//   const router = useRouter();

//   const registerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (password !== repeaPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     try {
//       const resp = await createUserWithEmailAndPassword(email, password);
//       if(resp?.user) {
//         router.push('/pages/signin')
//       }
//       setName('')
//       setEmail("");
//       setPassword("");
//       setRepeatPassword('')

//    console.log(resp)
//    console.log(resp?.user.displayName)

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
//       <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
//         Sign Up
//       </h1>

//       <form onSubmit={registerSubmit} className="w-full flex flex-col gap-6">
//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Name</label>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Name"
//             type="text"
//             value={name}
//           />
//         </div>

//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Email"
//             type="text"
//             value={email}
//           />
//         </div>

//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Password"
//             type="password"
//             value={password}
//           />
//         </div>

//         <div className="w-full flex flex-col  gap-y-1">
//           <label htmlFor="">Password</label>
//           <input
//             onChange={(e) => setRepeatPassword(e.target.value)}
//             className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//             placeholder="Password"
//             type="password"
//             value={repeaPassword}
//           />
//         </div>
//         <Button text={"Register"} paddingY={'14px'} rounded={'8px'} />

//       </form>

//       <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
//         <input type="checkbox" name="" id="" />
//         <label htmlFor="">
//           Already have an account?{" "}
//           <span className="font-bold text-green-950"> Sign in </span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Register;

//----------------------------------------------------------------------------
"use client";
// import { auth } from "../../firebase/config";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Register = () => {

  // const [createUserWithEmailAndPassword] =
  //   useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   try {
  //     e.preventDefault();
  //     const res = await createUserWithEmailAndPassword(email, password)

  //   console.log(res, 'respons')
  //   }catch (er) {
  //     const errorMessege = er
  //     console.log(er, 'er')
  //     console.log(errorMessege, 'errorMessege')
  //   }
    
  // };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign Up
      </h1>

      <form
      
      // onSubmit={handleSubmit}
      
      className="w-full flex flex-col gap-6">
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
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          Already have an account?{" "}
          <span className="font-bold text-green-950"> Sign in </span>
        </label>
      </div>
    </div>
  );
};

export default Register;
