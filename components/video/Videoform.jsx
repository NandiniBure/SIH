import React from 'react'

const Videoform = () => {
  return (
    <div className=' h-screen bg-gradient-to-t from-green-300 to-lime-200 flex justify-center'>
    <div className='rounded-xl  shadow-xl  bg-gray-500 bg-opacity-40 h-[30rem] mt-32 sm:w-[45rem]'>
      <form className=''>
         <h1 className=' text-center mt-4 text-3xl font-bold text-black'>Add Video</h1>
         <div className='flex flex-col mt-8 ml-28'>
         <label className=' font-semibold'>Title : </label>
         <input className=' rounded-lg p-2  w-[30rem] bg-white  opacity-40'
          placeholder='enter Title of the video'
         />
         
         </div>
         <div className='flex flex-col mt-8 ml-28 '>
         <label className=' font-semibold'>Thumbnail : </label>
         <input className=' rounded-lg p-2  w-[30rem] bg-white  opacity-40'
          placeholder='enter Thumbnail link of the video'
         />
         </div>
         <div className='flex flex-col mt-8 ml-28 '>
         <label className=' font-semibold'>Video Link : </label>
         <input className='rounded-lg  p-2  w-[30rem] bg-white  opacity-40'
          placeholder='enter video link of the video'
         /> 
         </div>
          <div className='flex justify-center'>
         <button className='mt-16 p-2 w-20 hover:bg-slate-500 hover:scale-90 shadow-xl bg-slate-600 rounded-lg text-lg text-white font-semibold'>Save</button>
         </div>
      </form>
      </div>
    </div>
  )
}

export default Videoform