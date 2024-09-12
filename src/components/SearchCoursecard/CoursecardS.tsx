import React from 'react'
import Link from "next/link"
import Image from "next/image"
type title = { 
    title: string,
    description: string,
    lessons: number,
    author: string,
    link: string,
    category: string,
    price: string,
    dark: bolean,
    image: string
  }
export default function CoursecardS({ title, description, lessons, author, link, category, price, dark, image }: title) {
  return (
    <Link href={`${link}`} className={`flex ${dark && "text-white dark-course-border"} text-black flex-col aspect-square border ${!dark && "shadow-lg"} rounded-xl dark:border-slate-600 hover:scale-[1.1] transition duration-300 p-5`}>
        <div className='w-full h-32 relative'>
            <Image src={`${image}`} layout='fill' className='object-cover' alt="product image"/>
        </div>
        <div className='flex justify-between rowdies text-sm'>
            <span>{author}</span>
            <span>{price}</span>
        </div>
        <h1 className="rowdies text-base">{title}</h1>
        <div className="saira text-sm">{description}</div>
        <div className="saira text-sm">{category}</div>
        <div className="saira text-sm self-end justfy-self pt-5">{lessons} : lessons</div>
    </Link>
  )
}
