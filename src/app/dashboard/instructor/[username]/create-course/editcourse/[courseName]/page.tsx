"use client"
import React from 'react'
import { Lessons } from '@/components/Arrays/lessons'
export default function page() {
  return (
    <div className='p-5'>
      <div className='border border-neutral-500'>
        {Lessons.map((lesson, index) => (
          <div key={index}>
            <button className="w-full p-2 text-xl flex gap-3 items-center font-bold text-left border rounded" onClick={() => {
              const className = "dropdown" + index;
              const dropdown = document.getElementById(className);
                console.log(className)
              // Null check to ensure the element exists
              if (dropdown) {
                if (dropdown.classList.contains("grid")) {
                  dropdown.classList.remove("grid");
                  dropdown.classList.add("hidden");
                } else {
                  dropdown.classList.remove("hidden");
                  dropdown.classList.add("grid");
                }
              }
            }}>
              <span>Lesson : {lesson.lessonNumber}</span>
              <span>
                {lesson.lessonTitle}
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div id={`dropdown`+`${index}`} className='hidden p-2 lg:auto-rows-[300px] grid-cols-1 auto-rows-auto'>
              <div className='border p-2 grid gap-3 '>
                <div className="border h-36 rounded"></div>
                <button className="rounded bg-green-500 p-2">Select a new video</button>
                <button className="rounded bg-green-500 p-2">Upload video</button>
              </div>
              <div className="md:col-span-8 col-span-12 border p-3">
                <form action="/" method="post">
                <span className='font-bold text-lg'>Edit the lesson text here</span>
                  <textarea className='w-full h-[150px] bg-transparent border border-neutral-600 rounded'>
                    {lesson.lessonDescription}
                  </textarea>
                  <button className="rounded bg-green-500 p-2">Change text</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
