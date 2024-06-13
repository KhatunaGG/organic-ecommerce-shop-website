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
import Button from "../Button/Button";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const registerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const initialCartValue = 0;

      await addDoc(collection(db, "users"), {
        userName: name,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
        uid: user.uid,
      });
      setSuccessMsg("User registered successfully");

      router.push("/pages/signin");
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      setErrorMsg("Please fill all the required fields");
    }
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">Sign Up</h1>

      <form onSubmit={registerSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Name"
            type="text"
            value={name}
          />
        </div>

        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
            value={email}
          />
        </div>

        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Password"
            type="password"
            value={password}
          />
        </div>

        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="">Repeat Password</label>
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Repeat Password"
            type="password"
            value={repeatPassword}
          />
        </div>
        <Button text={"Register"} paddingY={"14px"} rounded={"8px"} />
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          Already have an account? <span className="font-bold text-green-950">Sign in</span>
        </label>
      </div>
    </div>
  );
};

export default Register;
