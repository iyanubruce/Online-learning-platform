import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

type dark = {
  dark: boolean;
};
const Navbar = ({ dark }: dark) => {
  return (
    <div
      className={`w-screen text-white flex justify-center pt-4 pb-5  ${dark ? "bg-[#161616]" : ""}`}
    >
      <div className={`${styles.icont} saira text-base`}>
        <Link href={"/"}>
          <span className={`${styles.logo}`}>
            Stellar <span className="text-[#2AAA94]">Study</span>
          </span>
        </Link>
        <Link
          href={`/courses`}
          className={`p-0 mx-auto flex gap-2 items-center`}
        >
          <span
            className={`font-medium ${dark ? "text-white" : "text-[#1B2336]"} `}
          >
            Courses
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill={`${dark ? "white" : "black"}`}
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
        </Link>
        <Link href={`/login`} className={`${styles.login}`}>
          Login
        </Link>
        <Link href={`/signUp`} className={`${styles.SignIn}`}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
