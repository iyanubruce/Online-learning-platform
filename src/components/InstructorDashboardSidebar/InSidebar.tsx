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
          <div className={`w-[300px] h-screen lg:hidden ${ isSidebarOpen ? 'block' : 'hidden'} bg-slate-500 fixed top-0 left-0 z-10`}>
            <button onClick={() => {setIsSideBarOpen(false)}}>
              close
            </button>
          </div>
        </nav>
        <div className="bg-red-200 col-span-2 lg:block hidden row-span-11"> SideBar</div>
        <main className='bg-slate-600 row-span-11 col-span-12 lg:col-span-10'>
        {children}
        </main>
    </div>
    
  )
}
