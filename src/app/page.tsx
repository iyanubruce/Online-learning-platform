"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./index.module.css";
import { images } from "@/components/Arrays/images";
import { courses } from "@/components/Arrays/courses";
import HomeVideo from "@/components/HomeVideo/homeVideo";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation"
export default function Home() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="m-0">
        <Navbar dark={darkMode} />
        {/* Hero Section */}
        <div className={`flex justify-center ${darkMode ? "dark-hero-linear-gradient": "hero-linear-gradient"} py-[7.1rem] isolate relative overflow-hidden`}>
          <Image
            src="/YoungSmilingWoman.png"
            width={450}
            height={700}
            alt="Young smiling woman"
            className="absolute bottom-[-30%] lg:bottom-[-15px] right-[-20%] md:right-[12%] z-[-1]"
          />
          <Image
            src="rectangle1.svg"
            height={90}
            width={150}
            alt="woman"
            className="absolute bottom-[-10px]"
          />
          <Image
            src="rectangle2.svg"
            height={90}
            width={185}
            alt="woman"
            className="absolute bottom-[-10px]"
          />
          <Image
            src="rectangle3.svg"
            height={90}
            width={215}
            alt="woman"
            className="absolute bottom-[-10px]"
          />
          <Image
            src="/CircleH.svg"
            width={100}
            height={100}
            alt="woman"
            className="absolute left-[-10px] z-[-1]"
          />
          <Image
            src="/layerblut.svg"
            width={1000}
            height={1000}
            alt="layerblur"
            className="absolute right-[0%] top-0 z-[-2]"
          />
          <div className=" text-xs absolute top-[8rem] left-[48%] saira hidden xl:block">
            <span>
              <Image
                src="/HeroS.svg"
                width={18}
                height={30}
                alt="stars"
                className="absolute left-[-30px]"
              />
            </span>
            <h6 className="font-bold">Ronald Richards</h6>
            <p className="my-1 relative">
              In a coaching role, you ask the
              <br /> quetions and rely more on your
              <br /> staff, who become the experts, to
              <br /> provide the information{" "}
            </p>
            <p className="flex gap-3 items-center">
              <span className="text-green-300">4.9</span>
              <span>
                <Image src="/5star.svg" width={40} height={40} alt="stars" />
              </span>
            </p>
          </div>
          <div className="w-[84%] ">
            <span className="saira uppercase text-sm word-spacing-1 ">
              Successful coaches are visionaries
            </span>
            <div className="font-normal text-6xl leading-[65px] text-white rowdies mt-[1.4rem]">
              Good <span className="text-[#4be5ca]">coaching</span> is
              <br />
              good teaching &amp; <br />
              nothing else
            </div>

            <button className="border border-white rounded-md saira font-semibold text-sm py-2 px-4 mt-[2.5rem]">
              Veiw Courses
            </button>

            <form className="w-[21.8rem] saira">
              <span className={`flex items-center bg-white p-2 rounded mt-12`}>
                <input
                  type="text"
                  name="Search"
                  placeholder="What do you want to learn today?"
                  className={`${styles.Hsearch} text-xs`}
                />
                <button
                  type="submit"
                  className={`ml-auto text-xs flex justify-center items-center gap-2 btn-linear-gradient py-[0.5rem] px-[1.4rem] rounded-md font-medium`}
                >
                  <Image
                    src="/search.svg"
                    height={20}
                    width={20}
                    alt="searchicon"
                  />
                  <span>Search</span>
                </button>
              </span>
            </form>
          </div>
        </div>
        {/* Brands */}
        <div className="flex justify-center gap-[6.8rem] after-hero-linear-gradient py-10 overflow-y-hidden">
          <Image src="/brand1.svg" width={80} height={34} alt="brand1" />
          <Image src="/brand2.svg" width={80} height={34} alt="brand2" />
          <Image src="/brand3.svg" width={80} height={34} alt="brand3" />
          <Image src="/brand4.svg" width={80} height={34} alt="brand4" />
          <Image src="/brand5.svg" width={80} height={34} alt="brand5" />
          <Image src="/brand6.svg" width={80} height={34} alt="brand6" />
        </div>
        {/* Featured courses */}
        <div className={`text-center ${ darkMode ? "bg-[#161616]":"gradient-box"} py-20 relative`}>
          <Image
            src="/Circle.svg"
            width={80}
            height={70}
            alt="woman"
            className="absolute left-[15%]"
          />
          <h1 className={`rowdies text-3xl ${darkMode ?"text-white" :"text-black"} mb-10`}>
            Featured <span className="text-[#2aaa94]">Courses</span>
          </h1>
          <p className={`${darkMode?"text-slate-100" :"text-[#4e596b]"} saira mb-10`}>
            {" "}
            Discover our top courses designed to help you learn new skills and
            achieve your goals.
            <br /> Start learning today with expert-led lessons in
            <br />
            various fields.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 md:px-[6.7rem] auto-rows-[400px] gap-10 mx-auto max-w-[1280px]">
            {courses.slice(-6).map((course, index) => (
              <div key={index} onClick={()=>router.push(`${course.link}`)} className={`${darkMode ? "bg-transparent border border-slate-200 ": "bg-white text-[#324361] "} transform cursor-pointer hover:scale-[1.03] transition-transform duration-300 rounded-xl`}>
                <div className="relative h-1/2">
                  {" "}
                  <Image
                    src={`${course.image}`}
                    className="object-cover rounded-t-xl"
                    alt="image"
                    fill
                  />
                </div>
                <div className="h-1/2 p-5 flex flex-col  saira">
                  <div className="flex justify-between text-xs ">
                    <span>5,957 students</span> <span>01h 49m</span>
                  </div>
                  <div className="text-left font-semibold text-lg mt-5">
                    {course.courseTitle}: {course.shortDescription}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <span>$49.99</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-cart"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/courses">
            <button className="saira btn-linear-gradient p-3 mt-10 font-medium text-sm rounded">
              Explore Courses
            </button>
          </Link>
        </div>
        {/*Why Learn our courses*/}
        <div className={`${darkMode?"dark-btn-linear-gradient":"btn-linear-gradient"} py-20 text-center flex flex-col items-center relative isolate`}>
          <Image
            src="CircleL1.svg"
            height={90}
            width={90}
            alt="cirxle"
            className="absolute left-[-10px] transform translate-y-[25%]"
          />
          <Image
            alt="cirxle"
            src="CircleL2.svg"
            height={90}
            width={110}
            className="absolute left-[-10px] transform translate-y-[10%]"
          />
          <Image
            alt="cirxle"
            src="CircleL3.svg"
            height={90}
            width={130}
            className="absolute left-[-10px]"
          />
          <Image
            alt="cirxle"
            src="/CircleH.svg"
            width={400}
            height={300}
            className="absolute left-[-10px] top-[-10px] z-[-1]"
          />
          <h1 className="rowdies text-3xl mb-10">
            Why <span className="text-[#4be5ca]">learn</span> with our courses?
          </h1>
          <p className="saira mb-20">
            Why Learn with Our Courses Our expert-designed courses offer
            practical skills, flexible learning,
            <br /> and up-to-date content. Join thousands of students and
            advance your career
            <br /> at your own pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 px-20 auto-rows-[300px] w-full mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center relative">
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute left-0 block md:hidden"
              />
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute right-0 block md:hidden"
              />
              <span>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 80 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.4 57.3333H76.8V18.1333C76.8 15.8222 76.0444 13.9111 74.5333 12.4C73.0222 10.8889 71.2 10.1333 69.0667 10.1333H64.2667V6.4C64.2667 4.62222 63.6889 3.15556 62.5333 2C61.3778 0.844444 60 0.26667 58.4 0.26667H38.6667C36.8889 0.26667 35.4222 0.844444 34.2667 2C33.1111 3.15556 32.5333 4.62222 32.5333 6.4V10.1333H10.9333C8.8 10.1333 6.97778 10.8889 5.46667 12.4C3.95556 13.9111 3.2 15.8222 3.2 18.1333V57.3333H1.6C1.06667 57.3333 0.666667 57.5111 0.4 57.8667C0.133333 58.2222 0 58.5778 0 58.9333C0 62.4889 1.24444 65.5111 3.73333 68C6.22222 70.4889 9.24444 71.7333 12.8 71.7333H33.0667C33.4222 71.7333 33.7333 71.6 34 71.3333C34.2667 71.0667 34.4 70.7111 34.4 70.2667C34.4 69.8222 34.2667 69.4222 34 69.0667C33.7333 68.7111 33.4222 68.5333 33.0667 68.5333H12.8C10.4889 68.5333 8.4 67.7778 6.53333 66.2667C4.66667 64.7556 3.55556 62.8444 3.2 60.5333H76.8C76.4445 62.8444 75.3333 64.7556 73.4667 66.2667C71.6 67.7778 69.5111 68.5333 67.2 68.5333H46.9333C46.5778 68.5333 46.2667 68.7111 46 69.0667C45.7333 69.4222 45.6 69.8222 45.6 70.2667C45.6 70.7111 45.7333 71.0667 46 71.3333C46.2667 71.6 46.5778 71.7333 46.9333 71.7333H67.2C70.7556 71.7333 73.7778 70.4889 76.2667 68C78.7556 65.5111 80 62.4889 80 58.9333C80 58.5778 79.8667 58.2222 79.6 57.8667C79.3333 57.5111 78.9333 57.3333 78.4 57.3333ZM35.7333 6.4C35.7333 5.51111 36 4.8 36.5333 4.26667C37.0667 3.73334 37.7778 3.46667 38.6667 3.46667H58.4C59.1111 3.46667 59.7778 3.73334 60.4 4.26667C61.0222 4.8 61.3333 5.51111 61.3333 6.4V20.8C61.3333 21.5111 61.0222 22.1778 60.4 22.8C59.7778 23.4222 59.1111 23.7333 58.4 23.7333H43.7333C43.2 23.7333 42.8444 23.8222 42.6667 24L40 26.4V25.0667C40 24.7111 39.8667 24.4 39.6 24.1333C39.3333 23.8667 38.8889 23.7333 38.2667 23.7333C37.6444 23.7333 37.0667 23.4222 36.5333 22.8C36 22.1778 35.7333 21.5111 35.7333 20.8V6.4ZM6.13333 18.1333C6.13333 16.7111 6.62222 15.5556 7.6 14.6667C8.57778 13.7778 9.68889 13.3333 10.9333 13.3333H32.5333V16.5333H10.9333C10.5778 16.5333 10.2222 16.6667 9.86667 16.9333C9.51111 17.2 9.33333 17.6 9.33333 18.1333V57.3333H6.13333V18.1333ZM18.9333 57.3333V56.5333C18.9333 54.2222 19.7333 52.2222 21.3333 50.5333C22.9333 48.8444 24.8889 48 27.2 48H28V50.9333C28 51.4667 28.1333 51.8667 28.4 52.1333C28.6667 52.4 29.0222 52.5333 29.4667 52.5333C29.9111 52.5333 30.2667 52.4 30.5333 52.1333C30.8 51.8667 30.9333 51.4667 30.9333 50.9333V48H31.7333C34.0444 48 36 48.8444 37.6 50.5333C39.2 52.2222 40 54.2222 40 56.5333V57.3333H18.9333ZM33.6 40.8C33.6 41.8667 33.2 42.8 32.4 43.6C31.6 44.4 30.6222 44.8 29.4667 44.8C28.3111 44.8 27.3333 44.4 26.5333 43.6C25.7333 42.8 25.3333 41.8667 25.3333 40.8V39.7333C25.3333 38.6667 25.7333 37.7333 26.5333 36.9333C27.3333 36.1333 28.3111 35.7333 29.4667 35.7333C30.6222 35.7333 31.6 36.1333 32.4 36.9333C33.2 37.7333 33.6 38.6667 33.6 39.7333V40.8ZM43.2 57.3333V56.5333C43.2 53.8667 42.4444 51.5111 40.9333 49.4667C39.4222 47.4222 37.4222 46.0444 34.9333 45.3333C36 44.0889 36.5333 42.5778 36.5333 40.8V39.7333C36.5333 37.7778 35.8667 36.0889 34.5333 34.6667C33.2 33.2444 31.5111 32.5333 29.4667 32.5333C27.4222 32.5333 25.7333 33.2444 24.4 34.6667C23.0667 36.0889 22.4 37.7778 22.4 39.7333V40.8C22.4 42.5778 22.9333 44.0889 24 45.3333C21.5111 46.0444 19.5111 47.4222 18 49.4667C16.4889 51.5111 15.7333 53.8667 15.7333 56.5333V57.3333H12.5333V19.4667H32.5333V20.8C32.5333 22.0444 32.9333 23.2444 33.7333 24.4C34.5333 25.5556 35.6444 26.3111 37.0667 26.6667V30.4C37.0667 30.9333 37.3333 31.3778 37.8667 31.7333H38.6667C39.0222 31.7333 39.3778 31.6444 39.7333 31.4667L44.2667 26.6667H58.4C60 26.6667 61.3778 26.0889 62.5333 24.9333C63.6889 23.7778 64.2667 22.4 64.2667 20.8V19.4667H67.4667V57.3333H43.2ZM70.6667 57.3333V18.1333C70.6667 17.6 70.4889 17.2 70.1333 16.9333C69.7778 16.6667 69.4222 16.5333 69.0667 16.5333H64.2667V13.3333H69.0667C70.3111 13.3333 71.4222 13.7778 72.4 14.6667C73.3778 15.5556 73.8667 16.7111 73.8667 18.1333V57.3333H70.6667ZM43.4667 62.9333H36.5333C36.1778 62.9333 35.8222 63.1111 35.4667 63.4667C35.1111 63.8222 34.9333 64.2222 34.9333 64.6667C34.9333 65.1111 35.1111 65.4667 35.4667 65.7333C35.8222 66 36.1778 66.1333 36.5333 66.1333H43.4667C44 66.1333 44.4 66 44.6667 65.7333C44.9333 65.4667 45.0667 65.1111 45.0667 64.6667C45.0667 64.2222 44.9333 63.8222 44.6667 63.4667C44.4 63.1111 44 62.9333 43.4667 62.9333ZM44.8 19.4667C45.3333 19.8222 45.8667 20 46.4 20C46.9333 20 47.3778 19.8222 47.7333 19.4667L53.6 16C54.6667 15.4667 55.2 14.6222 55.2 13.4667C55.2 12.3111 54.6667 11.4667 53.6 10.9333L47.7333 7.46667C46.8444 6.93333 45.8667 6.93333 44.8 7.46667C43.7333 8 43.2 8.88889 43.2 10.1333V16.8C43.2 18.0444 43.7333 18.9333 44.8 19.4667ZM46.4 10.4L52 13.6L46.4 16.5333V10.4ZM40 68.5333C39.6444 68.5333 39.2889 68.7111 38.9333 69.0667C38.5778 69.4222 38.4 69.8222 38.4 70.2667C38.4 70.7111 38.5778 71.0667 38.9333 71.3333C39.2889 71.6 39.6444 71.7333 40 71.7333C40.3556 71.7333 40.7111 71.6 41.0667 71.3333C41.4222 71.0667 41.6 70.7111 41.6 70.2667C41.6 69.8222 41.4222 69.4222 41.0667 69.0667C40.7111 68.7111 40.3556 68.5333 40 68.5333Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="rowdies text-xl mt-10">O1. Learn</span>
              <p className="mt-10 text-sm saira">
                Gain practical, in-demand skills through
                <br /> expert-led courses.
              </p>
            </div>
            <div className="flex flex-col items-center relative">
              <span>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 80 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4667 12.4C23.2889 12.0444 22.9778 11.8222 22.5333 11.7333C22.0889 11.6444 21.6889 11.6889 21.3333 11.8667C20.9778 12.2222 20.7111 12.5778 20.5333 12.9333C20.3556 13.2889 20.4 13.6889 20.6667 14.1333C20.9333 14.5778 21.2889 14.8 21.7333 14.8C22.1778 14.8 22.5778 14.7111 22.9333 14.5333C23.2889 14.3555 23.5111 14.0444 23.6 13.6C23.6889 13.1555 23.6444 12.7555 23.4667 12.4ZM79.2 24.6667L40.8 0.933327C40.2667 0.577766 39.7333 0.577766 39.2 0.933327L26.4 8.93333C25.8667 9.1111 25.5556 9.42221 25.4667 9.86666C25.3778 10.3111 25.4667 10.7111 25.7333 11.0667C26 11.4222 26.3556 11.6444 26.8 11.7333C27.2444 11.8222 27.6444 11.7778 28 11.6L40 4.13332L75.4667 26L40 47.8667L20.8 36.1333L37.0667 26.5333C37.9556 27.2444 38.9778 27.6 40.1333 27.6C41.2889 27.6 42.3556 27.1111 43.3333 26.1333C44.3111 25.1555 44.8 24.0444 44.8 22.8C44.8 21.5555 44.3111 20.4889 43.3333 19.6C42.3556 18.7111 41.2444 18.2667 40 18.2667C38.7556 18.2667 37.6444 18.7111 36.6667 19.6C35.6889 20.4889 35.2 21.5555 35.2 22.8L35.4667 23.8667L17.8667 34.2667L4.53333 26L16.8 18.2667C17.1556 18.0889 17.3778 17.7778 17.4667 17.3333C17.5556 16.8889 17.5111 16.4889 17.3333 16.1333C17.1556 15.7778 16.8444 15.5555 16.4 15.4667C15.9556 15.3778 15.5556 15.4222 15.2 15.6L0.8 24.6667C0.266667 25.0222 0 25.4667 0 26C0 26.5333 0.266667 26.9778 0.8 27.3333L14.9333 35.8667L13.0667 36.9333C11.6444 37.8222 10.5333 38.9778 9.73333 40.4C8.93333 41.8222 8.53333 43.3333 8.53333 44.9333V47.6C7.64444 47.9555 6.88889 48.4889 6.26667 49.2C5.64444 49.9111 5.33333 50.8 5.33333 51.8667V54.5333C4.08889 55.7778 3.46667 57.3778 3.46667 59.3333V73.7333C3.46667 74.2667 3.6 74.6667 3.86667 74.9333C4.13333 75.2 4.53333 75.3333 5.06667 75.3333H14.9333C15.4667 75.3333 15.8667 75.2 16.1333 74.9333C16.4 74.6667 16.5333 74.2667 16.5333 73.7333V59.3333C16.5333 57.3778 15.9111 55.7778 14.6667 54.5333V51.8667C14.6667 50.8 14.3556 49.9111 13.7333 49.2C13.1111 48.4889 12.3556 47.9555 11.4667 47.6V44.9333C11.4667 43.8667 11.7333 42.8889 12.2667 42C12.8 41.1111 13.6 40.4 14.6667 39.8667L16.5333 38.5333V53.7333C16.5333 54.0889 16.7111 54.4444 17.0667 54.8C17.4222 55.1556 17.7778 55.3333 18.1333 55.3333C22.0444 55.3333 25.7778 56.0889 29.3333 57.6C32.8889 59.1111 36.0889 61.2889 38.9333 64.1333C39.2889 64.3111 39.6444 64.4 40 64.4C40.3556 64.4 40.7111 64.3111 41.0667 64.1333C43.9111 61.2889 47.1111 59.1111 50.6667 57.6C54.2222 56.0889 57.9556 55.3333 61.8667 55.3333C62.2222 55.3333 62.5778 55.1556 62.9333 54.8C63.2889 54.4444 63.4667 54.0889 63.4667 53.7333V51.0667C63.4667 50.5333 63.2889 50.1333 62.9333 49.8667C62.5778 49.6 62.2222 49.4667 61.8667 49.4667C61.5111 49.4667 61.1556 49.6 60.8 49.8667C60.4444 50.1333 60.2667 50.5333 60.2667 51.0667V52.1333C53.3333 52.4889 47.1111 54.8889 41.6 59.3333V56.1333C41.6 55.7778 41.4222 55.4222 41.0667 55.0667C40.7111 54.7111 40.3556 54.5333 40 54.5333C39.6444 54.5333 39.2889 54.7111 38.9333 55.0667C38.5778 55.4222 38.4 55.7778 38.4 56.1333V59.3333C32.8889 54.8889 26.6667 52.4889 19.7333 52.1333V39.0667L39.2 51.0667C39.3778 51.2444 39.6444 51.3333 40 51.3333C40.3556 51.3333 40.6222 51.2444 40.8 51.0667L60.2667 39.0667V40.6667C60.2667 41.2 60.4444 41.6 60.8 41.8667C61.1556 42.1333 61.5111 42.2667 61.8667 42.2667C62.2222 42.2667 62.5778 42.1333 62.9333 41.8667C63.2889 41.6 63.4667 41.2 63.4667 40.6667V37.2L79.2 27.3333C79.7333 26.9778 80 26.5333 80 26C80 25.4667 79.7333 25.0222 79.2 24.6667ZM40 21.2C40.3556 21.2 40.7111 21.3778 41.0667 21.7333C41.4222 22.0889 41.6 22.4889 41.6 22.9333C41.6 23.3778 41.4222 23.7333 41.0667 24C40.7111 24.2667 40.3556 24.4 40 24.4C39.6444 24.4 39.2889 24.2667 38.9333 24C38.5778 23.7333 38.4 23.3778 38.4 22.9333C38.4 22.4889 38.5778 22.0889 38.9333 21.7333C39.2889 21.3778 39.6444 21.2 40 21.2ZM8.53333 51.8667C8.53333 51.5111 8.66667 51.1556 8.93333 50.8C9.2 50.4444 9.55556 50.2667 10 50.2667C10.4444 50.2667 10.8 50.4444 11.0667 50.8C11.3333 51.1556 11.4667 51.5111 11.4667 51.8667V52.6667H8.53333V51.8667ZM13.3333 59.3333V72.1333H6.66667V59.3333C6.66667 58.2667 6.97778 57.4222 7.6 56.8C8.22222 56.1778 9.02222 55.8667 10 55.8667C10.9778 55.8667 11.7778 56.1778 12.4 56.8C13.0222 57.4222 13.3333 58.2667 13.3333 59.3333ZM62.9333 44.4C62.5778 44.0444 62.2222 43.8667 61.8667 43.8667C61.5111 43.8667 61.1556 44.0444 60.8 44.4C60.4444 44.7555 60.2667 45.1555 60.2667 45.6C60.2667 46.0444 60.4444 46.4 60.8 46.6667C61.1556 46.9333 61.5111 47.0667 61.8667 47.0667C62.2222 47.0667 62.5778 46.9333 62.9333 46.6667C63.2889 46.4 63.4667 46.0444 63.4667 45.6C63.4667 45.1555 63.2889 44.7555 62.9333 44.4Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="rowdies text-xl mt-10">O2. Graduate</span>
              <p className="mt-10 text-sm saira">
                Achieve your goals with a recognized certification
                <br /> and new career opportunities.
              </p>
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute left-0"
              />
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute right-0"
              />
            </div>
            <div className="flex flex-col items-center relative">
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute left-0 block md:hidden"
              />
              <Image
                src="/Line.svg"
                width={1.6}
                height={30}
                alt="line"
                className="absolute right-0 block md:hidden"
              />
              <span>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.9333 28.8C39.4667 28.8 39.8667 28.6667 40.1333 28.4C40.4 28.1333 40.5333 27.7778 40.5333 27.3333C40.5333 26.8889 40.4 26.4889 40.1333 26.1333C39.8667 25.7778 39.5111 25.6 39.0667 25.6C38.6222 25.6 38.2222 25.7778 37.8667 26.1333C37.5111 26.4889 37.3333 26.8889 37.3333 27.3333C37.3333 27.7778 37.5111 28.1333 37.8667 28.4C38.2222 28.6667 38.5778 28.8 38.9333 28.8ZM29.3333 28.8C29.6889 28.8 30.0444 28.6667 30.4 28.4C30.7556 28.1333 30.9333 27.7778 30.9333 27.3333C30.9333 26.8889 30.7556 26.4889 30.4 26.1333C30.0444 25.7778 29.6889 25.6 29.3333 25.6C28.9778 25.6 28.6222 25.7778 28.2667 26.1333C27.9111 26.4889 27.7333 26.8889 27.7333 27.3333C27.7333 27.7778 27.9111 28.1333 28.2667 28.4C28.6222 28.6667 28.9778 28.8 29.3333 28.8ZM71.4667 32.2667C71.1111 32.2667 70.8 32.4 70.5333 32.6667C70.2667 32.9333 70.1333 33.2889 70.1333 33.7333C70.1333 34.1778 70.2667 34.5778 70.5333 34.9333C70.8 35.2889 71.1111 35.4667 71.4667 35.4667C73.0667 35.4667 74.3556 35.9556 75.3333 36.9333C76.3111 37.9111 76.8 39.1111 76.8 40.5333V64C76.8 65.6 76.3111 66.8889 75.3333 67.8667C74.3556 68.8444 73.0667 69.3333 71.4667 69.3333H34.9333C33.5111 69.3333 32.2667 68.8444 31.2 67.8667C30.1333 66.8889 29.6 65.6 29.6 64V40.5333C29.6 39.1111 30.1333 37.9111 31.2 36.9333C32.2667 35.9556 33.5111 35.4667 34.9333 35.4667H57.6C57.9556 35.4667 58.2667 35.2889 58.5333 34.9333C58.8 34.5778 58.9333 34.1778 58.9333 33.7333C58.9333 33.2889 58.8 32.9333 58.5333 32.6667C58.2667 32.4 57.9556 32.2667 57.6 32.2667H47.7333C47.9111 31.2 48 30.1333 48 29.0667V22.4H50.1333C50.4889 22.4 50.8444 22.2667 51.2 22C51.5556 21.7333 51.7333 21.4222 51.7333 21.0667V15.4667C51.7333 12.6222 51.0222 10.0444 49.6 7.73333C48.1778 5.42222 46.2667 3.55555 43.8667 2.13333C41.4667 0.711105 38.8444 -7.62939e-06 36 -7.62939e-06C33.8667 -7.62939e-06 31.9111 0.577774 30.1333 1.73333C28.3556 2.88889 27.0222 4.44444 26.1333 6.39999C23.4667 6.57777 21.2889 7.6 19.6 9.46666C17.9111 11.3333 17.0667 13.5111 17.0667 16V20.5333C17.0667 21.2444 17.3778 21.6889 18 21.8667C18.6222 22.0444 19.2889 22.2222 20 22.4V29.0667C20 31.3778 20.5778 33.6 21.7333 35.7333C22.8889 37.8667 24.4444 39.5556 26.4 40.8V41.8667H24.5333C20.0889 41.8667 16 42.9778 12.2667 45.2C8.53333 47.4222 5.55556 50.4 3.33333 54.1333C1.11111 57.8667 0 62.0444 0 66.6667V70.6667C0 73.1556 0.933333 75.3333 2.8 77.2C4.66667 79.0667 6.84444 80 9.33333 80H67.2C67.7333 80 68.1333 79.8667 68.4 79.6C68.6667 79.3333 68.8 78.9778 68.8 78.5333C68.8 78.0889 68.6667 77.6889 68.4 77.3333C68.1333 76.9778 67.7333 76.8 67.2 76.8H65.8667C66.9333 75.5556 67.6444 74.1333 68 72.5333H71.4667C73.9556 72.5333 76 71.6889 77.6 70C79.2 68.3111 80 66.3111 80 64V40.5333C80 38.2222 79.2 36.2667 77.6 34.6667C76 33.0667 73.9556 32.2667 71.4667 32.2667ZM47.2 72.5333V76.8H38.1333V76C38.1333 74.7556 37.7778 73.6 37.0667 72.5333H47.2ZM36 3.2C39.5556 3.2 42.5333 4.39999 44.9333 6.8C47.3333 9.2 48.5333 12.0889 48.5333 15.4667V19.4667H36C33.8667 19.4667 32 18.6667 30.4 17.0667C28.8 15.4667 28 13.5555 28 11.3333C28 9.11111 28.8 7.2 30.4 5.6C32 3.99999 33.8667 3.2 36 3.2ZM20 16C20 14.5778 20.4889 13.2444 21.4667 12C22.4444 10.7556 23.6444 9.95555 25.0667 9.6L24.8 11.2C24.8 13.5111 25.4222 15.6444 26.6667 17.6C24.7111 19.2 22.4889 19.7333 20 19.2V16ZM23.2 29.0667V22.4C25.3333 22.0444 27.2 21.1556 28.8 19.7333C30.9333 21.5111 33.3333 22.4 36 22.4H45.0667V29.0667C45.0667 30.1333 44.8889 31.2 44.5333 32.2667H34.9333C33.1556 32.2667 31.5556 32.7556 30.1333 33.7333C28.7111 34.7111 27.7333 35.9111 27.2 37.3333C25.9556 36.4444 24.9778 35.2444 24.2667 33.7333C23.5556 32.2222 23.2 30.6667 23.2 29.0667ZM9.33333 76.8C7.55556 76.8 6.08889 76.2222 4.93333 75.0667C3.77778 73.9111 3.2 72.4444 3.2 70.6667V66.6667C3.2 62.7556 4.13333 59.1556 6 55.8667C7.86667 52.5778 10.4889 49.9556 13.8667 48C17.2444 46.0444 20.8 45.0667 24.5333 45.0667H26.4V64C26.4 65.0667 26.5778 66.0444 26.9333 66.9333H15.7333C15.3778 66.9333 15.0222 67.0667 14.6667 67.3333C14.3111 67.6 14.1333 67.9556 14.1333 68.4C14.1333 68.8444 14.3111 69.2 14.6667 69.4667C15.0222 69.7333 15.3778 69.8667 15.7333 69.8667H26.4V76.8H9.33333ZM29.6 76.8V72.5333H31.4667C32.3556 72.5333 33.1556 72.8889 33.8667 73.6C34.5778 74.3111 34.9333 75.1111 34.9333 76V76.8H29.6ZM50.4 72.5333H56.2667V76.8H50.4V72.5333ZM59.4667 76.8V72.5333H64.8C64.4445 73.7778 63.7778 74.8 62.8 75.6C61.8222 76.4 60.7111 76.8 59.4667 76.8ZM53.3333 46.6667C51.7333 46.6667 50.3556 47.2 49.2 48.2667C48.0444 49.3333 47.4667 50.6667 47.4667 52.2667C47.4667 53.8667 48.0444 55.2444 49.2 56.4C50.3556 57.5556 51.7333 58.1333 53.3333 58.1333C54.9333 58.1333 56.2667 57.5556 57.3333 56.4C58.4 55.2444 58.9333 53.8667 58.9333 52.2667C58.9333 50.6667 58.4 49.3333 57.3333 48.2667C56.2667 47.2 54.9333 46.6667 53.3333 46.6667ZM53.3333 54.9333C52.4444 54.9333 51.7778 54.7111 51.3333 54.2667C50.8889 53.8222 50.6667 53.2 50.6667 52.4C50.6667 51.6 50.8889 50.9333 51.3333 50.4C51.7778 49.8667 52.4 49.6 53.2 49.6C54 49.6 54.6667 49.8667 55.2 50.4C55.7333 50.9333 56 51.6 56 52.4C56 53.2 55.7333 53.8222 55.2 54.2667C54.6667 54.7111 54.0444 54.9333 53.3333 54.9333ZM64.5333 35.4667C64.8889 35.4667 65.2444 35.2889 65.6 34.9333C65.9556 34.5778 66.1333 34.1778 66.1333 33.7333C66.1333 33.2889 65.9556 32.9333 65.6 32.6667C65.2444 32.4 64.8889 32.2667 64.5333 32.2667C64.1778 32.2667 63.8222 32.4 63.4667 32.6667C63.1111 32.9333 62.9333 33.2889 62.9333 33.7333C62.9333 34.1778 63.1111 34.5778 63.4667 34.9333C63.8222 35.2889 64.1778 35.4667 64.5333 35.4667Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="rowdies text-xl mt-10">03. Work</span>
              <p className="mt-10 text-sm saira">
                Apply your knowledge in real-world projects
                <br /> and collaborations.
              </p>
            </div>
          </div>
        </div>
        {/*Top categories*/}
        <div className="section-gradient text-center pt-20 pb-28 px-[6.8rem]">
          <h1 className="text-4xl rowdies text-black mb-10">
            Top <span className="text-[#2aaa94]">Categories</span>
          </h1>
          <p className="text-[#4E596B] saira mb-20 text-lg font-semibold">
            12,000+ unique online courses
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-5 mx-auto max-w-[1280px]">
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory1.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                Digital
                <br /> Marketing
              </span>
              <span className="text-[#4F547B] text-sm font-medium">
                25 courses
              </span>
            </div>
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory2.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                Web <br /> Development
              </span>
              <span className="text-[#4F547B] text-sm font-semibold">
                16 courses
              </span>
            </div>
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory3.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                Arts &amp;
                <br /> Humanities
              </span>
              <span className="text-[#4F547B] text-sm font-semibold">
                75 courses
              </span>
            </div>
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory4.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                Personal <br /> Development
              </span>
              <span className="text-[#4F547B] text-sm font-semibold">
                22 courses
              </span>
            </div>
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory5.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                IT and <br /> Software
              </span>
              <span className="text-[#4F547B] text-sm font-semibold">
                110 courses
              </span>
            </div>
            <div className="flex-col flex items-center bg-white gap-8 rounded-xl saira font-semibold text-lg pt-6 pb-8">
              {" "}
              <Image
                src="/topCategory6.svg"
                width={62}
                height={30}
                alt="catimage"
              />
              <span className="text-[#324361]">
                Graphic <br /> Design
              </span>
              <span className="text-[#4F547B] text-sm font-semibold">
                85 courses
              </span>
            </div>
          </div>
        </div>
        {/*About and testimonials*/}
        <div className="flex flex-col md:flex-row 2xl:justify-center justify-start items-center gap-[6.8rem] pt-20 md:mb-0 mb-10">
          <div className=" w-96 aspect-square md:ml-[6.8rem] relative">
            <Image src="/education.svg" fill alt="education" />
          </div>
          <div className="relative">
            <h1 className="text-black rowdies text-3xl mb-10">
              {" "}
              The number one factor in
              <br />{" "}
              <span className="text-[#2aaa94]">
                relevance drives out the resistance
              </span>
            </h1>
            <p className="text-[#4e596b] text-[0.8rem] saira mb-10">
              Staying relevant is key to overcoming resistance. When you
              consistently provide value and
              <br /> adapt to changing needs, resistance fades, making way for
              progress and success
            </p>
            <button className="saira btn-linear-gradient p-3 font-medium text-sm rounded">
              Learn More
            </button>
            <Image
              src="/Polygon7.svg"
              width={60}
              height={60}
              alt="polygon"
              className="absolute right-0 bottom-[-100px]"
            />
          </div>
        </div>
        {/*Video and reviews*/}
        <div className="flex flex-col items-center py-20 bg-gradient-to-b from-transparent to-[#dbedff]">
          <HomeVideo />
          <h1 className="rowdies text-4xl text-center relative text-[#2AAA94] my-10 w-full">
            Testimonials
            <Image
              src="/Ellipse1217.svg"
              width={60}
              height={60}
              alt="ellipse"
              className="absolute left-[10%] top-0"
            />
          </h1>
          <p className="saira text-black mb-5">
            What our students say about us
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 auto-rows-auto w-full px-20 text-black max-w-[1280px] mx-auto">
            <div className="p-5 bg-white rounded-xl flex-col flex">
              <div className="flex gap-5 items-center mb-5">
                <Image
                  src="/comment1.png"
                  width={70}
                  height={70}
                  alt="comment"
                />
                <span className="rowdies text-xl font-semibold text-black">
                  Ronald Richards
                </span>
              </div>
              <p className="text-[#7E7EAA] text-sm saira">
                "Fantastic platform! The user interface is intuitive, and the
                content is always up-to-date with the latest industry trends.
                The support from instructors and the community made learning
                enjoyable. I've gained so much confidence in my abilities since
                enrolling!"{" "}
              </p>
              <div className="flex gap-1 pt-5 justify-self-end">
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl">
              <div className="flex gap-5 items-center mb-5 ">
                <Image
                  src="/comment2.png"
                  width={70}
                  height={70}
                  alt="comment"
                />
                <span className="rowdies text-lg font-semibold text-black">
                  Wade Warren
                </span>
              </div>
              <p className="text-[#7E7EAA] text-sm saira">
                "This is by far the best online learning experience I've had.
                The variety of courses is impressive, and the hands-on projects
                helped me apply what I learned in real-world scenarios. I've
                already landed a new job thanks to the skills I gained here!"{" "}
              </p>
              <div className="flex gap-1 pt-5 justify-self-end">
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
              </div>
            </div>
            <div className="p-5 bg-white rounded-lg">
              <div className="flex gap-5 items-center mb-5">
                <Image
                  src="/comment3.png"
                  width={70}
                  height={70}
                  alt="comment"
                />
                <span className="rowdies text-lg font-semibold text-black">
                  Jacob Jones
                </span>
              </div>
              <p className="text-[#7E7EAA] text-sm saira">
                "I absolutely love this platform! The courses are
                well-structured, and the instructors are knowledgeable and
                engaging. The flexibility to learn at my own pace has been a
                game-changer for balancing my work and studies."{" "}
              </p>
              <div className="flex gap-1 pt-5 justify-self-end">
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
                <Image src="/Star 6.svg" width={12} height={12} alt="star" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
