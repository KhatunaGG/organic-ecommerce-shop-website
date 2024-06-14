
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import React from 'react';

// const Login = () => {

//   const signUp = (email: string, password: string) => {

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log('User signed up:', user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing up:', errorCode, errorMessage);
//       });
//   };

//   return (
//     <div>Login</div>
//   );
// };

// export default Login;




// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

"use client";
import React, { useState } from "react";

const Login = () => {
  // const context = useContext(ClobalContext);
  // if (!context) return;
  // const { data, categoryArray, checked, handleFilter, value, setValue } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(password, email);
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
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
            required
          />
        </div>

        <button type="submit" className="w-full bg-gray-200">
          Sign in
        </button>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          Do not have an account?
          <span className="font-bold text-green-950"> Sign up </span>
        </label>
      </div>
    </div>
  );
};

export default Login;

