"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { courses } from "@/components/Arrays/courses";
import CoursecardS from "@/components/SearchCoursecard/CoursecardS";
import Footer from "@/components/Footer/Footer";
export default function Courses() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "bg-[#161616]" : "bg-[#f0f0f0]"} max-w-[1500px]`}>
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
        className="fixed top-0 right-0 m-6 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill='none'
          stroke={`${darkMode ? "white" :"black"}`}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-sun-moon"
        >
          <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.3 17.7-1.4 1.4" />
          <path d="m19.1 4.9-1.4 1.4" />
        </svg>
      </button>
      <Navbar dark={darkMode}/>
      <div className="flex items-center flex-col gap-4">
        <span
          className={`flex items-center ${darkMode ? "bg-searchGray" : "bg-slate-100"} p-3 rounded-3xl mt-12 w-96`}
        >
          <input
            type="text"
            name="Search"
            placeholder="Find a course, instuctor or topic"
            className={`w-3/4 ${darkMode ? "bg-searchGray text-white" : "bg-slate-100 text-black"}  focus:border-none focus:outline-none`}
          />
          <button type="submit" className={`ml-auto`}>
            {darkMode ? (
              <Image
                src="/search.svg"
                height={30}
                width={30}
                alt="searchicon"
              />
            ) : (
              <Image
                src="/search2.svg"
                height={30}
                width={30}
                alt="searchicon"
              />
            )}
          </button>
        </span>
        <div className="flex items-center flex-col gap-3 hidden md:block">
          <span className={`${darkMode ? "text-white" : "text-black"}`}>
            Select a Category
          </span>
          <div
            className={`grid grid-cols-6 ${darkMode ? "text-white" : "text-black"}`}
          >
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Developement
            </button>
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Design
            </button>
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Technology
            </button>
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Business
            </button>
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Marketing
            </button>
            <button className="flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30">
              Lifestyle
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-7 mt-7">
        <div
          className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-3 w-11/12 lg:gap-3`}
        >
          {courses.map((course, index) => (
            <CoursecardS
              key={index}
              title={course.courseTitle}
              author={course.author}
              category={course.courseCategory}
              description={course.shortDescription}
              link={course.link}
              lessons={course.lessons}
              price={course.price}
              dark={darkMode}
              image={course.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
