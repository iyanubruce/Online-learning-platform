"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { courseFeatures, ratings } from "@/components/Arrays/courses";
import CommentCard from "@/components/commentCard/commentCard";
import Accordion from "@/components/Accordion/accordion";
import Rating from "@/components/Rating/rating";
import { usePathname } from "next/navigation";
import { courses } from "@/components/Arrays/courses";
export default function CoursePage() {
  const path = usePathname();
  const courseName1 = path.toString().split("/").pop();
  const courseName: string = courseName1
    ? courseName1
        .replace(/-/g, " ")
        .replace(/^\w/, (c: string) => c.toUpperCase())
    : "";

  function getCourseByLink(link: string) {
    return courses.find((course) => course.link === link);
  }

  // Example usage
  const courseLink = path;
  const course = getCourseByLink(courseLink);
  const [descOpen, setDescOpen] = useState(true);
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data);
    };

    fetchData();
    console.log(data);
  }, []);
  return (
    <div
      className={`${darkMode ? "bg-[#161616] text-white" : "bg-[#f0f0f0] text-black"} m-0`}
    >
      <Navbar dark={darkMode} />
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
          fill="none"
          stroke={`${darkMode ? "white" : "black"}`}
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
      <div className="hte-96 relative bg-black text-white p-20">
        <div className="z-10 flex flex-col gap-5 w-full md:w-[45rem]">
          <h1 className="text-4xl rowdies">{course?.courseTitle}</h1>
          <p className="text-xl ">{course?.shortDescription}</p>
          <div className="flex gap-3 items-center">
            4.2
            <Rating rating={4.5} /> <span>7,306 ratings</span>{" "}
            <span>347,224 students</span>
          </div>
          <div>
            Created by <span>Iyanuoluwa</span>
          </div>
          <div>
            <span></span>Last Updated 2/2020 <span></span> English
          </div>
        </div>
      </div>
      <div
        className={`grid relative ${darkMode ? "bg-[#161616] text-white" : "bg-[#f0f0f0] text-black"}`}
      >
        <div
          className={`hidden lg:flex flex-col w-96 p-5 border border-dashed border-slate-600 absolute ${darkMode ? "bg-inherit" : "bg-[#f0f0f0]"} right-24 top-[-10rem] rowdies font-light`}
        >
          <div className="h-44 relative">
            <Image
              src={`${course?.image}`}
              fill
              alt="course image"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-4 ">
            <span className="text-3xl font-semibold saira">
              ${course?.price}
            </span>{" "}
            <span className="text-lg font-semibold line-through opacity-85">
              $99.99
            </span>
            <span className="text-lg font-semibold">50%Off</span>
          </div>
          <div
            className={`text-center text-lg ${darkMode ? "text-blue-200" : "text-blue-700"} mt-4`}
          >
            11 hours left at this price
          </div>
          <button className="w-full bg-blue-500 p-3 rounded-md text-center mt-4">
            {" "}
            Buy now{" "}
          </button>
          <hr className="border-gray-500 my-4" />
          <div className="text-xs flex flex-col gap-3">
            <h3 className="text-2xl font-semibold leading-5">
              This Course Includes
            </h3>
            <div className="flex items-center gap-3">
              <span>
                <Image src="/logo.png" alt="" width={10} height={10} />
              </span>
              <span>Money Back guarantee </span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <Image src="/logo.png" alt="" width={10} height={10} />
              </span>
              <span>Access on all devices</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <Image src="/logo.png" alt="" width={10} height={10} />
              </span>
              <span>{course?.lessons.toString()}: lessons </span>
            </div>
          </div>
          <hr className="border-gray-500 my-4 items-center" />
          <div>
            <h3 className="text-2xl font-semibold leading-5">
              Share this Course
            </h3>
            <div className="flex gap-5 mt-5">
              <Link href="/" className="flex items-center">
                <Image
                  src="/facebook.avif"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="facebook"
                />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/whatsapp.png"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="whatsapp"
                />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/youtube.png"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="youtube"
                />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/telegram.png"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="telegram"
                />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/twitter.png"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="twitter"
                />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/instagram.jpg"
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="instagram"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="pl-10">
          <div className=" w-full lg:w-[50rem] border border-dashed border-slate-600 p-5 mt-10">
            <h3 className="text-2xl font-semibold leading-6">
              What you'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 auto-rows-auto saira text-sm ">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-semibold leading-6 mt-10 mb-5">
            Course content
          </h3>
          <p className="font-extralight font-sm saira">
            9 sections &bull; 10 lessons &bull; 5h 10m total lenght
          </p>
          <div className="lg:w-[50rem] border border-dashed border-slate-600">
            <Accordion />
          </div>
          <h3 className="text-2xl font-semibold leading-6 mt-10 mb-5">
            Requirements
          </h3>
          <ul className="w-[50rem]">
            <li className="text-sm">
              There are no skill prerequisites for this course although it's
              helpful if you are familiar with operating your computer and using
              the internet.
            </li>
            <li className="text-sm">
              You can take this course using a Mac, PC or Linux machine.
            </li>
            <li className="text-sm">
              It is recommended that you download the free VScode text editor.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold leading-6 mt-10 mb-5">
            Description
          </h3>
          <div
            className={` ${descOpen ? "h-[12rem] mask-image-custom" : ""} w-full md:w-[50rem]`}
          >
            <div>{course?.longDescription}</div>
          </div>
          <button
            onClick={() => setDescOpen((prev) => !prev)}
            className={` ${descOpen ? "block" : "hidden"}`}
          >
            show more{" "}
          </button>
          <div className="p-5 w-full md:w-[50rem] border border-dashed border-slate-600 mt-10 mb-10">
            <h3 className="rowdies text-">Featured Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[50rem] mt-5 gap-y-5">
              {ratings.map((rating, index) => (
                <CommentCard
                  key={index}
                  name={rating.name}
                  rating={rating.rating}
                  comment={rating.comment}
                  datePosted={rating.datePosted}
                  image={rating.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
