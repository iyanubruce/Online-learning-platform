import React from 'react'

export default function page() {
  return (
    <form className='p-5 text-white'>
      <div>
        <div>
            New Course
        </div>
        <div>
            <span>Name</span>
            <input type='text' placeholder='enter the name of your course' />
            <label>Description</label>
            <input type='textarea' placeholder='enter the course description' />
        </div>
        <button>create course</button>
      </div>
    </form>
  )
}
