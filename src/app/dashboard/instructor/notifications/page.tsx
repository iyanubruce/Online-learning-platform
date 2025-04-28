import React from 'react'
import Link from "next/link"
import { notifications } from '@/components/Arrays/notifications'
export default function page() {
  return (
    <div>
        {notifications.map((notification, index) => (
            <Link href={`${notification.link}`} key={index} className='p-5 flex'>
                <span>{notification.name}</span>
                <span>{notification.date}</span>
            </Link>
        ))}
    </div>
  )
}