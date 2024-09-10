'use client'
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'
import Link from "next/link"
import { useState } from 'react'
import { courseFeatures, ratings } from '@/components/Arrays/courses'
import CommentCard from '@/components/commentCard/commentCard'
export default function CoursePage() {
  const [descOpen, setDescOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div className='h-96 relative mt-5'>
        <Image src="/logo.png" fill className='object-cover' alt={`course image`}/>
      </div>
      <div className="grid relative">
        <div className='hidden lg:flex flex-col w-96 p-5 border border-dashed border-slate-600 absolute bg-bgColor right-24 top-[-10rem] '>
          <div className='h-44 relative'>
            <Image src="/logo.png" layout="fill" alt='course image' className='object-cover' />
          </div>
          <div className='flex justify-between items-center mt-4'>
            <span className='text-3xl font-semibold'>$49.59</span> <span className='text-lg font-semibold line-through opacity-85'>$99.99</span><span className='text-lg font-semibold'>50%Off</span>
          </div>
          <div className='text-center text-lg text-blue-200 mt-4'>11 hours left at this price</div>
          <button className='w-full bg-blue-500 p-3 rounded-md text-center mt-4'> Buy now </button>
          <hr className="border-gray-500 my-4" />
          <div className='text-xs flex flex-col gap-3'>
            <h3 className='text-2xl font-semibold leading-5'>This Course Included</h3>
            <div className="flex items-center gap-3">
              <span><Image src="/logo.png" alt="" width={10} height={10} /></span>
              <span>Money Back guarantee </span>
            </div>
            <div className="flex items-center gap-3">
              <span><Image src="/logo.png" alt="" width={10} height={10} /></span>
              <span>Access on all devices</span>
            </div>
            <div className="flex items-center gap-3">
              <span><Image src="/logo.png" alt="" width={10} height={10} /></span>
              <span>12: lessons </span>
            </div>
          </div>
          <hr className="border-gray-500 my-4 items-center"/>
          <div>
            <h3 className='text-2xl font-semibold leading-5'>Share this Course</h3>
            <div className='flex gap-5 mt-5'>
              <Link href="/" className='flex items-center'>
                <Image src="/facebook.avif" className="rounded-full" width={30} height={30} alt="facebook" />
              </Link>
              <Link href="/" className='flex items-center'>
                <Image src="/whatsapp.png" className="rounded-full" width={30} height={30} alt="whatsapp" />
              </Link>
              <Link href="/" className='flex items-center'>
                <Image src="/youtube.png" className="rounded-full" width={30} height={30} alt="youtube" />
              </Link>
              <Link href="/" className='flex items-center'>
                <Image src="/telegram.png" className="rounded-full" width={30} height={30} alt="telegram" />
              </Link>
              <Link href="/" className='flex items-center'>
                <Image src="/twitter.png" className="rounded-full" width={30} height={30} alt="twitter" />
              </Link>
              <Link href="/" className='flex items-center'>
                <Image src="/instagram.jpg" className="rounded-full" width={30} height={30} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className='pl-10'>
          <div className='lg:w-[50rem] border border-dashed border-slate-600 p-5 mt-10'>
            <h3 className='text-2xl font-semibold leading-6'>What you'll Learn</h3>
            <div className='grid grid-cols-2 gap-y-3 auto-rows-auto '>
              {courseFeatures.map((feature, index) => (
                <div key={index} className='flex items-center gap-3 text-base'>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <h3 className='text-2xl font-semibold leading-6 mt-10'>Course content</h3>
          <p className='font-extralight'>9 sections &bull; 10 lessons &bull; 5h 10m total lenght</p>
          <div>
            {

            }
          </div>
          <h3 className='text-2xl font-semibold leading-6 mt-10'>Requirements</h3>
          <ul className="w-[50rem]">
            <li className="text-sm">There are no skill prerequisites for this course although it's helpful if you are familiar with operating your computer and using the internet.</li>
            <li className="text-sm">You can take this course using a Mac, PC or Linux machine.</li>
            <li className="text-sm">It is recommended that you download the free VScode text editor.</li>
          </ul>
          <h3 className='text-2xl font-semibold leading-6 mt-10'>Description</h3>
          <div className={` ${descOpen ? "h-[12rem] mask-image-custom":""} w-[50rem]`}>
            <div>
              Completely Updated for 2023/2024 with 40 NEW lectures coding activities and projects! 
              Learn What It Takes to Code Dynamic, Professional Websites and Web Apps From The Comfort of Your Own Home 
              Do you ever browse the internet wondering how your favorite websites were built? Facebook, Twitter, Amazon—they were all created by people who at one point in time didn’t know anything about coding. How did they obtain this knowledge? 
              In this comprehensive course, I’m going to show you everything you need to know so that you can follow in these people’s footsteps. 
              You’re going to learn how to code AND you’re going to become a certified professional from a recognized international trainer. And best of all, you’re going to have fun doing it. 
              You Don’t Have to Be a Genius or a Mathematical Wizard. 
              So many people believe that you must have a special ‘gift’ to create professional-quality, dynamic websites/web apps. I’m here to tell you once and for all that this is false. All you need to have is the desire to learn and the ability to follow instructions—that’s it! 
              Our course starts teaching basic coding principles and develops your coding skills in a variety of languages from beginner through to advanced. Here it is, once and for all, a complete guide that will take you from novice to web developer. 
              Skip Hours of Frustration and Thousands of Wasted Dollars and Become 100% Certified 
              The internet has changed the rules of doing business. More and more companies are migrating online while many new, never before seen businesses are created every day thanks to the power of this phenomenon. You know what that means? Higher demand for people just like you! 
              But the problem for these businesses is that while demand is high, supply is short. 
              Please don’t let a lack of knowledge stop you from having the career of your dreams, not when the knowledge you need is right here and is extremely affordable. 
              Don’t worry, you won’t need to buy any additional courses, it’s all here. No need to spend four years and over $15,000 per year in college tuition either—it really is all here. From HTML to CSS then to Javascript and finally PHP, you will learn how to Become a Certified Web Developer.
              It Doesn’t Matter Where You’re Starting From...You Can Do It! 
              Maybe: hieved competencies in HTML, CSS, and JavaScript-- everything you need to create basic web applications. New for 2023:  No exams are required to earn your certifications.  Complete and submit all the lab activities for the course program and you'll earn your new certifications!
            </div>
          </div>
          <button onClick={() => setDescOpen((prev) => !prev)} className={` ${descOpen ? "block":"hidden"}`}>show more </button>
          <div className="p-5 w-[50rem] border border-dashed border-slate-600 mt-10 mb-10">
            <h3>Featured Review</h3>
            <div className="grid grid-cols-2 w-[50rem]">
              {ratings.map((rating, index) => (
                <CommentCard key={index} name={rating.name} rating={rating.rating} comment={rating.comment} datePosted={rating.datePosted}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
