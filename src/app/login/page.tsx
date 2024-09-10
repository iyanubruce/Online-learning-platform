"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "../../redux/store";
import { setUser } from "@/redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = user;

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        setError(data);
        return;
      }
      dispatch(setUser(data.user));
      setError(null);
      // router.push(`/dashboard/${data.userRole}/${data._id}`);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#171717] text-white flex justify-center items-center relative">
      <div
        className={`w-96 h-96 ${styles.glass} px-10 flex flex-col items-center z-10 shadow-pink-400`}
      >
        <span className="mb-10">
          <Image src="/Herowithoutbg.svg" width={100} height={100} alt="icon" />
        </span>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Enter your username or email"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black placeholder:text-gray-900"
          />
          <input
            type="password"
            name="email"
            required
            placeholder="Enter your password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="bg-transparent pl-5 border rounded border-white w-full h-9 mb-10 text-black focus:border-none placeholder:text-gray-900"
          />
          <button
            type="submit"
            className="bg-btnColor w-32 h-12 text-white text-xl font-bold flex justify-center items-center rounded-2xl"
          >
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
