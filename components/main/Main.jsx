import React from 'react'
import LeftsideBar from '../leftsideBar/LeftsideBar'
export const Main = () => {
  return (
    <div className="flex justify-between">
    <LeftsideBar/>
    <div className=' bg-lime-100 w-full h-screen'>
    <div className='flex'>
    <div className='flex p-6 gap-12 mt-11 ml-11 justify-between'>
    <div>
     <h1 className=' text-5xl font-bold font-serif  text-orange-600'>Government Of Kerala</h1>
     <h2 className=' text-3xl font-semibold text-green-600 '>Waste Management Service</h2>
     </div>
     <img 
      src='/gov.png'
      className='h-[9rem] '
     />
    </div>
    
   
    
     </div>
    </div>
    <div className=' right-0 hidden xl:flex  font-medium p-7 mt-8  text-green-50  w-96 rounded-xl h-96 mr-8 bg-green-600'>
      contineous scrolling content
     </div>
    </div>
  )
}
