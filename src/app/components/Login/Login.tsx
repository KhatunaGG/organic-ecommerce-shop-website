"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { ClobalContext } from "@/app/context/Context";
import { onAuthStateChanged, User, signOut } from "firebase/auth";

const Login = () => {
  const context = useContext(ClobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const setLoggedInUser = context ? context.setLoggedInUser : () => {};

  useEffect(() => {
    if (!context) return;

    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setLoggedInUser(currentUser?.email ?? "");
    });
    return () => {
      unsubscribe();
    };
  }, [context, setLoggedInUser]);

  const logout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPassword(email, password);
      if (resp?.user) {
        router.push("/");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!context) return null;

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
            value={email}
          />
        </div>

        <div className="w-full flex flex-col gap-y-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Password"
            type="password"
            value={password}
          />
        </div>

        <Button text={"Sign in"} paddingY={"14px"} rounded={"8px"} />
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">
          Already have an account?{" "}
          <span className="font-bold text-green-950"> Sign in </span>
        </label>
      </div>
    </div>
  );
};

export default Login;
