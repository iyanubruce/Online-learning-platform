import React from 'react'
import styles from './login.module.css'
import Image from 'next/image'
export default function Login() {
  return (
    <div className='w-screen h-screen bg-[#171717] text-white flex justify-center items-center relative'>
        <div className={`w-96 h-96 ${styles.glass} px-10 flex flex-col items-center z-10 shadow-pink-400`}>
            <span className='mb-10'><Image src='/Herowithoutbg.svg' width={100} height={100} alt="icon" /></span>
            <form className='flex flex-col items-center w-full'>
                <input type="text" name="email" placeholder='Enter your username or email' className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-none placeholder:text-gray-900' />
                <input type="text" name="email" placeholder='Enter your password' className='bg-transparent pl-5 border rounded border-white w-full h-9 mb-10 text-black focus:border-none focus:outline-non placeholder:text-gray-900'/>
                <button type="submit" className="bg-btnColor w-32 h-12 text-white text-xl font-bold flex justify-center items-center rounded-2xl">Login</button>
            </form>
        </div>
        <Image src='/Herowithoutbg.svg' width={400} height={400} alt="icon" className={styles.abs}/>
    </div>
  )
}
