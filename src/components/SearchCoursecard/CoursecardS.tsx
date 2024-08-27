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
    <Link href={`/${link}`}>
      <Image src="/" layout='fill' className='object-cover' alt="product image"/>
    </Link>
  )
}
