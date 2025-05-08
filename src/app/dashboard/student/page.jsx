"use client"
import CourseRecommendationCard from '@/components/CourseRecommendationCard/CourseRecommendationCard';
import CourseCard from '@/components/CourseCard/CourseCard';
import Image from 'next/image';
import { useState } from 'react';
import styles from "./dash.module.css"
import Footer from '@/components/Footer/Footer';

export default function StudentDashboard() {
  return (
    <div className="text-white min-h-screen">
      <div className="flex">
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
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Course Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseRecommendationCard description="Leaarn the Essentials of JAvascript" lessons={15} author='John Smith' link='basdfnaskdjn' category="programming" title="Recommended Course 1" />
              <CourseRecommendationCard description="Leaarn the Essentials of JAvascript" lessons={15} author='John Smith' link='basdfnaskdjn' category="programming" title="Recommended Course 2" />
              <CourseRecommendationCard description="Leaarn the Essentials of JAvascript" lessons={15} author='John Smith' link='basdfnaskdjn' category="programming" title="Recommended Course 3" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

