import React from 'react'

export default function page() {
  return (
  <div>
    <div className='text-center text-3xl font-bold'>Create A New Course</div>
    <form className='flex flex-col gap-7'>
      <label className='text-left text-lg font-bold'>Enter Course Title</label>
      <input type="text" placeholder='e.g Software dev course' className='w-72 px-4 py-2 bg-transparent border border-blue-300 focus:outline-none rounded'/>
      <label className='text-left text-lg font-bold'>Upload course image</label>
      <label htmlFor="imageUpload" className="bg-blue-500 hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Upload Image
      </label>
      <input type="file" id="imageUpload" name="image" accept="image/*" className='hidden' />

      
    </form>
  </div>
    
  )
}
