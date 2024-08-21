"use client"
import CourseRecommendationCard from '@/components/CourseRecommendationCard/CourseRecommendationCard';
import CourseCard from '@/components/CourseCard/CourseCard';
import Image from 'next/image';
import { useState } from 'react';
import styles from "./dash.module.css"
import Footer from '@/components/Footer/Footer';

export default function StudentDashboard() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isnavbarOpen, setIsnavbarOpen] = useState(false)
  return (
    <div className="text-white min-h-screen">
      {/* Header */}
      <header className="bg-searchGray border-b-2 border-black shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/Herowithoutbg.svg" alt="Platform Logo" width={40} height={40} className='md:block hidden'/>
          <button className='md:hidden block' onClick={() => {setIsnavbarOpen(!isnavbarOpen); console.log(isnavbarOpen)}}>          <Image src="/Herowithoutbg.svg" alt="Platform Logo" width={40} height={40} />
          </button>
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-[#161616] rounded-full px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-bell"></i>
          </a>
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
            >
              <Image
                src="/profile-pic.png"
                alt="Profile Picture"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="hidden md:block">John Doe</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            {isProfileMenuOpen && (
              <div className={`absolute right-0 mt-2 w-40 ${styles.glass} shadow-md rounded-md`}>
                <a href="#" className="block px-4 py-2 text-white hover:bg-btnColor">
                  Profile Settings
                </a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-btnColor">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <div className="flex">
        <nav className={`bg-searchGray ${styles.nav} w-64 h-screen shadow-md ${ isnavbarOpen ? 'block':'hidden'} md:block`}>
          <ul className="space-y-2 mt-6">
            <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                My Courses
              </a>
            </li>
            {/* Will be implemented in future */}
            {/* <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                Assignments
              </a>
            </li> */}
            <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                Messages
              </a>
            </li>
            {/* Will be implemented in future */}
            {/* <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                Community / Forums
              </a>
            </li> */}
            <li>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
                Profile Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Welcome & Resume Learning */}
          <div className="bg-searchGray text-white p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-2xl font-bold">Welcome, John!</h1>
            <p className="mt-2 text-textGray">Continue your learning journey</p>
            <a href="#" className="mt-4 inline-block bg-btnColor text-white px-4 py-2 rounded-full">
              Resume Learning
            </a>
          </div>

          {/* Current Courses */}
          <section className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-4">Current Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard title="Course Title 1" progress={60} />
              <CourseCard title="Course Title 2" progress={40} />
              <CourseCard title="Course Title 3" progress={80} />
            </div>
          </section>
          
              {/* Will be implemented in future */}
          {/* Upcoming Deadlines
          <section className="mb-6">
            <h2 className="text-xl textfont-semibold mb-4">Upcoming Deadlines</h2>
            <div className="bg-searchGray p-4 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Assignment 1</span>
                  <span className="text-textGray">Due: Oct 10, 2023</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Quiz 2</span>
                  <span className="text-textGray">Due: Oct 12, 2023</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Project 3</span>
                  <span className="text-textGray">Due: Oct 15, 2023</span>
                </li>
              </ul>
            </div>
          </section> */}

          {/* Course Recommendations */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Course Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseRecommendationCard title="Recommended Course 1" />
              <CourseRecommendationCard title="Recommended Course 2" />
              <CourseRecommendationCard title="Recommended Course 3" />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

