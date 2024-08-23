"use client"
import Image from 'next/image';
import React, {ReactNode, useEffect} from 'react'
import { useState } from 'react';
interface LayoutProps {
    children: ReactNode;
  }

export default function InSidebar({children}: LayoutProps) {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)
  useEffect(() => {
    console.log
  })
  return (
    <div className="w-screen h-screen grid grid-cols-12 grid-rows-12">
        <nav className='bg-[#161616]  flex gap-6 px-5 items-center col-span-12 row-span-1'>
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
            <div className='flex pl-5 gap-3'>
              Dashboard
            </div>
            <div className='flex pl-5 gap-3'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3V21M4 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM20.4 18.9C20.6 19.4 20.3 20 19.8 20.2L17.9 20.9C17.4 21.1 16.8 20.8 16.6 20.3L11.1 5.1C10.9 4.6 11.2 4 11.7 3.8L13.6 3.1C14.1 2.9 14.7 3.2 14.9 3.7L20.4 18.9Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span>
                Courses
              </span>
            </div>
            <div className='flex pl-5 gap-3'>
              <span>
                Created Courses
              </span>
            </div>
            <div className='flex pl-5 gap-3'>
              <span>
                Notifications
              </span>
            </div>
            <div className='flex pl-5 gap-3'>
              <span>
                Chats
              </span>
            </div>
          </div>
        </nav>
        <div className="bg-red-200 col-span-2 lg:block hidden row-span-11"> SideBar</div>
        <main className='bg-slate-600 row-span-11 col-span-12 lg:col-span-10'>
        {children}
        </main>
    </div>
    
  )
}
