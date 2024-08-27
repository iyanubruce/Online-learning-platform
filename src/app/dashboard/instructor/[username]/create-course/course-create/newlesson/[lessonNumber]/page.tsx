import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center'>
        <form action="submit" className='flex flex-col gap-3 items-start  w-[48rem] border border-neutral-500 mt-4 rounded p-3'>
           <span className='text-xl font-bold pt-3'>Add video for lesson one</span> 
            <button className='bg-pink-500 rounded p-2 text-lg font-bold w-max'>Click here</button>
            Add text for lesson one 
            <textarea
            placeholder="Paste or type your input here"
            className="w-full h-56 bg-transparent text-base"
            ></textarea>

            if your done with the course click
            <button className='bg-pink-500 rounded p-2 text-lg font-bold w-max'>save course</button>
            else click here
            <button className='bg-pink-500 rounded p-2 text-lg font-bold w-max'>Add next lesson</button>
        </form>
    </div>
  )
}
