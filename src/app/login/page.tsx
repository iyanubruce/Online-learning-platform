"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/components/store/store";
import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "@/components/store/authSlice";
export default function Login() {
  const [userState, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { user, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetError());
    await dispatch(login({ ...userState }));
  };

  if (isAuthenticated && user) {
    return (
      <div>
        <h1>Welcome, {user.email}!</h1>
        <button disabled={loading}>Logout</button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#171717] text-white flex justify-center items-center relative">
      <div
        className={`w-96 h-96 ${styles.glass} px-10 flex flex-col items-center z-10 shadow-pink-400`}>
        <span className="mb-10">
          <Image src="/Herowithoutbg.svg" width={100} height={100} alt="icon" />
        </span>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your username or email"
            required
            onChange={(e) => setUser({ ...userState, email: e.target.value })}
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black placeholder:text-gray-900"
          />
          <input
            type="password"
            name="email"
            required
            placeholder="Enter your password"
            onChange={(e) =>
              setUser({ ...userState, password: e.target.value })
            }
            className="bg-transparent pl-5 border rounded border-white w-full h-9 mb-10 text-black focus:border-none placeholder:text-gray-900"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-btnColor w-32 h-12 text-white text-xl font-bold flex justify-center items-center rounded-2xl">
            Login
          </button>

          {error ? <div className="bg-red-500 p-3 rounded">{error}</div> : null}
        </form>
      </div>
      <Image
        src="/Herowithoutbg.svg"
        width={400}
        height={400}
        alt="icon"
        className={styles.abs}
      />
    </div>
  );
}
