"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
export default function page() {
  const router = useRouter();
  const route = usePathname();
  const parts = route.split("/");
    const [firstPart, secondPart, thirdPart, lastPart] = parts;
    const username = lastPart;

  return (
    <form action="submit" className='p-5 text-white grid grid-cols-12 gap-5 lg:grid-rows-12 h-full lg:h-[600px] '>
      <div className='lg:col-span-7 col-span-12 row-span-6 border border-zinc-400 rounded p-3'>
      <header>
        <h1 className='text-lg font-bold pb-3'>Product Details</h1>
      </header>
      <div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full bg-transparent border broder-white rounded"
              defaultValue="Gamer Gear Pro Controller"
            />
          </div>
          <div className="grid gap-3">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
              className="h-[5rem] bg-transparent border broder-white rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <div className='col-span-12 lg:col-span-5 lg:row-span-12 border border-zinc-400 rounded p-3'>
      <div className="overflow-hidden">
        <header>
          <h3 className='text-lg font-bold'>Course Image</h3>
          <p className='text-sm'>
            Upload an image to represent your course
          </p>
        </header>
        <div>
          <div className="flex flex-col gap-3">
            <Image
              alt="Product image"
              className="rounded-md"
              height={150}
              src="/Herowithoutbg.svg"
              width={150}
            />
            <div className="grid grid-cols-3 gap-2 text-white">
              <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <svg className="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
                <span className="">Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-span-12 lg:col-span-7 row-span-6 border border-zinc-400 rounded p-3'>
      <header>
        <h1>Product Category</h1>
      </header>
      <div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <div>
              <label htmlFor="category" className="bg-transparent border broder-white rounded" aria-label="select category">
                <select
                  id="category"
                  className="w-full bg-transparent border broder-white rounded"
                >
                  <option className="bg-[#161616] border broder-white rounded" value="" disabled>
                    select category
                  </option>
                  <option className="bg-[#161616] border broder-white rounded" value="clothing">Clothing</option>
                  <option className="bg-[#161616] border broder-white rounded" value="electronics">Electronics</option>
                  <option className="bg-[#161616] border broder-white rounded" value="accessories">Accessories</option>
                </select>
              </label>
            </div>
            <div>
            <button onClick={()=> router.push(`/dashboard/instructor/${username}/create-course/course-create/newlesson/1`)} className="bg-pink-600 text-lg p-2 rounded flex items-center font-bold mt-8 gap-3 w-"> 
              <span>Next</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
              </span> 
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}
