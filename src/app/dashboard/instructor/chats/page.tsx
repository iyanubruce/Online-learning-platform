import React from 'react'
import { chats } from '@/components/Arrays/chats'
export default function page() {
  return (
    <div className='grid grid-cols-12 gap-4 h-full bg-[#161616] p-2'>
      <div className="col-span-5 p-4"></div>
      <div className="col-span-7 rounded-lg bg-searchGray flex flex-col justify-end p-3">
        <div className="flex-grow max-h-[26rem] flex flex-col overflow-scroll pb-3">
          {chats.map((chat, index) => (
            <div key={index} className={`max-w-[25ch] text-pretty text-justify border border-neutral-500 p-2 rounded-md ${chat.from ? 'self-start': "self-end"}`}>
              <span>{chat.chat}</span>
            </div>
          ))}
        </div>
        <form className='w-full h-40 rounded-md bg-[#161616] flex flex-col'>
          <textarea name="chat" id="" className='bg-transparent w-full h-1/2'>

          </textarea>
          <button className='flex self-end mt-auto bg-green-600 p-3 rounded'>
            <span>
              Send Message
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-corner-down-left"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}
