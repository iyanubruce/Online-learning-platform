"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import styles from "./signup.module.css";
import Image from "next/image";
export default function SignUp() {
  const router = useRouter();
  interface ApiResponse {
    message: string;
  }

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstname, lastname, email, password, role } = userData;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/routes/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password, role }),
      });

      const data: ApiResponse = await res.json();
      const message = data.message;

      if (res.status === 400) {
        setError(message || "Invalid input");
        setLoading(false);
      } else if (res.status === 200) {
        setError(null);
        router.push("/login");
        setLoading(false);
      } else {
        setError("Something went wrong");
      }
    } catch (error: any) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen bg-[#161616] text-white flex justify-center items-center relative">
      <div
        className={`w-96  ${styles.glass} px-10 pb-10 flex flex-col items-center z-10`}>
        <span className="mb-10">
          <Image src="/Herowithoutbg.svg" width={100} height={100} alt="icon" />
          <br />
        </span>
        <p className="text-sm text-white">
          Have an account{" "}
          <Link className="text-blue-500" href="/login">
            sign in
          </Link>
        </p>
        <form onSubmit={onSignUp} className="flex flex-col items-center w-full">
          <input
            type="text"
            required
            name="firstname"
            placeholder="Firstname"
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-white focus:outline-non placeholder:text-gray-200"
          />
          <input
            type="text"
            required
            name="lastname"
            placeholder="Lastname"
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900"
          />
          <label className="text-black w-full text-left">Signing up as</label>
          <select
            id="role"
            name="role"
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
            defaultValue="Select a role"
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-none placeholder:text-gray-900">
            <option value="" disabled>
              Select role
            </option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          <input
            type="text"
            required
            name="email"
            placeholder="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-200"
          />
          <input
            type="text"
            required
            name="password"
            placeholder="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="bg-transparent pl-5 border rounded border-white w-full h-9 mb-10 text-black focus:border-none focus:outline-non placeholder:text-gray-200"
          />
          {error ? (
            <div className="w-full bg-red-700 text-white text-lg">{error}</div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-btnColor w-32 h-12 text-white text-xl font-bold flex justify-center items-center rounded-2xl">
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
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
