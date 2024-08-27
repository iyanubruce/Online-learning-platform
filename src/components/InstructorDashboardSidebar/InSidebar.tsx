"use client"
import Image from 'next/image';
import React, {ReactNode, useEffect} from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
interface LayoutProps {
    children: ReactNode;
  }

export default function InSidebar({children}: LayoutProps) {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const router = usePathname();
  const parts = router.split("/");
    const [firstPart, secondPart, thirdPart, lastPart] = parts;
    
    // Assign the last part to a variable
    const username = lastPart;
    console.log("Last part:", username);
  return (
    <div className="w-screen h-screen grid grid-cols-12 grid-rows-12 ">
        <nav className='bg-[#161616]  flex gap-6 px-5 items-center col-span-12 row-span-1 border-b-[0.1px] border-bg-slate-500'>
        <button className="lg:hidden block" onClick={() => {setIsSideBarOpen(true)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          <div className="flex h-4/6 gap-1 lg:w-96 lg:flex-grow-0 flex-grow rounded border border-white">
            <span className="w-9 grid place-content-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
            </span>
            <input type="text" className="flex-1 bg-transparent focus:border-none focus:outline-none text-white " placeholder='Search Courses....'/>
          </div>
            <Image src="/circle-user-round.svg" className="ml-auto"width={40} height={40} alt='User'/>
          <div className={`w-[300px] h-screen lg:hidden ${ isSidebarOpen ? 'block' : 'hidden'} bg-[#161616] text-gray-400 fixed top-0 left-0 z-10 grid grid-cols-1 auto-rows-[70px]`}>
            <div className='flex px-5 gap-3'> 
              <button onClick={() => {setIsSideBarOpen(false)}}>
                close
              </button>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600 cursor-pointer'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="lucide lucide-house">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              <Link href={`/dashboard/instructor/${username}`}>
                DashBoard
              </Link>
            </div>
            <div className="flex pl-5 gap-3 text-gray-400 hover:text-pink-600 cursor-pointer">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3V21M4 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM20.4 18.9C20.6 19.4 20.3 20 19.8 20.2L17.9 20.9C17.4 21.1 16.8 20.8 16.6 20.3L11.1 5.1C10.9 4.6 11.2 4 11.7 3.8L13.6 3.1C14.1 2.9 14.7 3.2 14.9 3.7L20.4 18.9Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <Link href="/instructor/sdf/courses" >Courses</Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600 cursor-pointer'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-pen stroke current">
                  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                </svg>
              </span>
              <Link href={`/instructor/${username}/create-course`}>
                Created Courses
              </Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600 cursor-pointer'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-current'>
                  <path d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M4 2C2.8 3.7 2 5.7 2 8M22 8C22 5.7 21.2 3.7 20 2M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <Link href={`/instructor/${username}/notifications`}>
                Notifications
              </Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600 cursor-pointer'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-current'>
                  <path d="M13 8H7M17 12H7M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span>
                Chats
              </span>
            </div>
          </div>
        </nav>
        <div className="col-span-2 lg:grid hidden row-span-11 bg-[#161616] border-r-[0.5px] border-bg-gray-600 text-gray-400 grid-cols-1 auto-rows-[70px] pt-10">
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="lucide lucide-house">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              <Link href={`/dashboard/instructor/${username}`}>
                DashBoard
              </Link>
            </div>
            <div className="flex pl-5 gap-3 text-gray-400 hover:text-pink-600">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3V21M4 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM20.4 18.9C20.6 19.4 20.3 20 19.8 20.2L17.9 20.9C17.4 21.1 16.8 20.8 16.6 20.3L11.1 5.1C10.9 4.6 11.2 4 11.7 3.8L13.6 3.1C14.1 2.9 14.7 3.2 14.9 3.7L20.4 18.9Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <Link href={`/dashboard/instructor/${username}/courses`}>
                Courses
              </Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-pen stroke current">
                  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                </svg>
              </span>
              <Link href={`/dashboard/instructor/${username}/create-course`}>
                Created Courses
              </Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-current'>
                  <path d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M4 2C2.8 3.7 2 5.7 2 8M22 8C22 5.7 21.2 3.7 20 2M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <Link href={`/dashboard/instructor/${username}/notifications`}>
                Notifications
              </Link>
            </div>
            <div className='flex pl-5 gap-3 text-gray-400 hover:text-pink-600'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-current'>
                  <path d="M13 8H7M17 12H7M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <Link href={`/dashboard/instructor/${username}/chats`}>
                Chats
              </Link>
            </div>
        
        </div>
        <main className=' row-span-11 col-span-12 lg:col-span-10 overflow-scroll'>
        {children}
        </main>
    </div>
    
  )
}
