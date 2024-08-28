import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from "next/image"
import { courses } from '@/components/Arrays/courses'
import CoursecardS from '@/components/SearchCoursecard/CoursecardS'
import Footer from '@/components/Footer/Footer'
export default function Courses() {
  return (
    <div>
      <Navbar />
        <div className='flex items-center flex-col gap-4'>
            <span className={`flex items-center bg-searchGray p-3 rounded-3xl mt-12 w-96`}>
                <input type="text" name="Search" placeholder="Find a course, instuctor or topic" className={`w-3/4 bg-searchGray text-white focus:border-none focus:outline-none`}/>
                <button type="submit" className={`ml-auto`}>
                        <Image src="/search.svg" height={30} width={30} alt="searchicon" />
                </button>
            </span>
            <div className='flex items-center flex-col gap-3'>
                <span>Select a Category</span>
                <div className='grid grid-cols-6'>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Developement</button>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Design</button>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Technology</button>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Business</button>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Marketing</button>
                    <button className='flex justify-center border rounded-xl border-dotted border-slate-600 p-3 hover:bg-white hover:bg-opacity-30'>Lifestyle</button>
                </div>
            </div>
        </div>
        <div className='flex justify-center mb-7'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-11/12 lg:gap-y-3'>
                {courses.map((course, index)=> (
                    <CoursecardS key={index} title={course.courseTitle} author={course.author} category={course.courseCategory} description={course.shortDescription} link={course.link} lessons={course.lessons} price={course.price}/>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}
