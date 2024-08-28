import React from 'react'
import Link from "next/link"
import Image from "next/image"
type title = { 
    title: string,
    description: string,
    lessons: number,
    author: string,
    link: string,
    category: string
    price: string
  }
export default function CoursecardS({ title, description, lessons, author, link, category, price }: title) {
  return (
    <Link href={`/${link}`} className='aspect-square border border-dashed border-slate-600 hover:scale-[1.1] transition duration-300 p-5'>
        <div className='w-full h-32 relative'>
            <Image src="/logo.png" layout='fill' className='object-cover' alt="product image"/>
        </div>
        <div className='flex justify-between'>
            <span>{author}</span>
            <span>{price}</span>
        </div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{category}</div>
        <div>{lessons} : lessons</div>
    </Link>
  )
}
