// components/Layout.tsx
"use client"
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from "next/image";
import {useState} from "react"
import Footer from '../Footer/Footer';
import styles from './dash.module.css'
interface LayoutProps {
  children: ReactNode;
}

export default function DLayout({ children }: LayoutProps) {
  const [isnavbarOpen, setIsnavbarOpen] = useState(false)
  return (
    <div className="bg-bgColor text-white">
      {/* Header */}
      <header className="bg-searchGray shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <Image src="/Herowithoutbg.svg" alt="Platform Logo" width={40} height={40} className='md:block hidden' />
          <button className='md:hidden block' onClick={() => {setIsnavbarOpen(!isnavbarOpen); console.log(isnavbarOpen)}}>          <Image src="/Herowithoutbg.svg" alt="Platform Logo" width={40} height={40} />
          </button>
          <input
            type="text"
            placeholder="Search courses, students, content..."
            className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Link  href="/" className="text-[#EAEAEA] hover:text-gray-900">
              <i className="fas fa-bell"></i>
            </Link>
          </Link>
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <Image width={100} height={50} src="/" alt="Profile Picture" className="rounded-full w-10 h-10" />
              <span className="hidden md:block">Jane Doe</span>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className={`bg-searchGray w-64 ${styles.nav} h-screen ${isnavbarOpen ? 'block':'hidden'} shadow-md md:block`}>
          <ul className="space-y-2 mt-6">
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Dashboard Overview</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link  href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">My Courses</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Course Creation Tool</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Assignments & Quizzes</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Discussions / Q&A</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Student Management</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Revenue / Earnings</Link>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Link href="/" className="block px-4 py-2 text-whitish hover:bg-searchGrayH">Settings</Link>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
