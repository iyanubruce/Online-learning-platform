import React from 'react'
import styles from  './signup.module.css'
import Image from 'next/image'
export default function SignUp() {
  return (
    <div className='w-screen h-screen bg-searchGray text-white flex justify-center items-center relative'>
        <div className={`w-96  ${styles.glass} px-10 pb-10 flex flex-col items-center z-10`}>
            <span className='mb-10'><Image src='/Herowithoutbg.svg' width={100} height={100} alt="icon" /></span>
            <form className='flex flex-col items-center w-full'>
                <input type="text" required name="Firstname" placeholder='Firstname' className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900' />
                <input type="text" required name="lastname" placeholder='Lastname' className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900' />
                <label className='text-black w-full text-left'>Signing up as</label>
                <select id="role" name="role" className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900'>
                  <option value="Instructor">Student</option>
                  <option value="Student">Instructor</option>
                  <option value="Both">Both</option>
                </select>
                <input type="text" required name="email" placeholder='email' className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900' />
                <input type="text" required name="username" placeholder='Username' className='bg-transparent pl-5 border rounded border-white mb-10 w-full h-9 focus:border-none text-black focus:outline-non placeholder:text-gray-900' />
                <input type="text" required name="password" placeholder='password' className='bg-transparent pl-5 border rounded border-white w-full h-9 mb-10 text-black focus:border-none focus:outline-non placeholder:text-gray-900'/>
                <button type="submit" className="bg-btnColor w-32 h-12 text-white text-xl font-bold flex justify-center items-center rounded-2xl">Sign Up</button>
            </form>
        </div>
        <Image src='/Herowithoutbg.svg' width={400} height={400} alt="icon" className={styles.abs}/>
    </div>
  )
}
