import React from 'react'
import { courses } from '@/components/Arrays/courses'
import CourseRecommendationCard from '@/components/CourseRecommendationCard/CourseRecommendationCard'
export default function page() {
  return (
    <div className='p-4'>
     <h1>Your Courses</h1>
     <div className='grid grid-cols-4 gap-4'>
        {courses.map((course, index) =>(
            <CourseRecommendationCard key={index} title={course.courseTitle} author={course.author} category={course.courseCategory} description={course.shortDescription} link={course.link} lessons={course.lessons} />
        ))}
     </div>
    </div>
  )
}
