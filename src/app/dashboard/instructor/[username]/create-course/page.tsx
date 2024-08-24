"use client"
import React from 'react'
import { orders } from '@/components/Arrays/orders'
import Image from 'next/image'
import styles from "./createcourse.module.css"
import { useRouter, usePathname } from 'next/navigation'
export default function page() {
  const router = useRouter()
  const route = usePathname();
  const parts = route.split("/");
    const [firstPart, secondPart, thirdPart, lastPart] = parts;
    const username = lastPart;

  return (
  <div className='text-white p-10'>
    <button className={`p-2 bg-btnColor rounded`} onClick={() => router.push(`/dashboard/instructor/${username}/create-course/course-create`)}>Create a New Course</button>
    <div className="w-full border border-gray-500 mt-7 h-[500px] rounded p-5 flex-col flex">
        <div className="flex flex-col pb">
          <span className="text-2xl font-bold pb-2">Your courses</span>
          <span className="text-sm pb-2"> Manage your Courses and veiw their sales and ratings</span>
        </div>
        <div className="w-full h-[85%] border border-gray-500 p-2">
          <div className={`${styles.list} ${styles.header}`}>
            <div>

            </div>
            <div>
              Name
            </div>
            <div>
              Category
            </div>
            <div>
              Price
            </div>
            <div>
              Total Sales
            </div>
            <div >
              Created At
            </div>
          </div>
          <div className="overflow-y-scroll h-[90%]">
          {orders.map((course, index) => (
            <div key={index} className={`${styles.list} ${styles.content}`}>
            <div>
              <Image src={course.imageurl} width={60} height={60} alt="hs" />
            </div>
            <div>
              {course.name}
            </div>
            <div>
              {course.category}
            </div>
            <div>
              {course.price}
            </div>
            <div>
              {course.totalSales}
            </div>
            <div>
              {course.createdAt}
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
  </div>
    
  )
}
