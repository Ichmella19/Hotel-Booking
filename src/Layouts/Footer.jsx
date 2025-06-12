 import React from 'react'
 const Footer= () => {
   
     return (
       <section className='pt-[60px] border-t-2 '>
        <div className='flex justify-between px-[100px]'>
        <div className='text-start flex flex-col gap-y-2'>
                 {/* Logo */}
        <p className="text-black text-[18px]"> <span className="text-[#3252DF] text-[18px] ">Lanka</span>Stay.</p>
            <p className='text-[16px] text-[#B0B0B0] w-[300px]'>We kaboom your beauty holiday
            instantly and memorable.</p>
            </div>
            <div className='flex-flex-col gap-y-7'>
                <p className='text-[16px] text-[#152C5B]'>Become hotel Owner</p>
                <button className="flex gap-x-2 p-3 bg-[#3252DF] text-white rounded-[7px] w-fit">
             
            <a href="/Register">Register Now</a>
           </button>
            </div>
        </div>
           
            <div className='w-ful&l bg-[#3252DF] flex items-center justify-center py-1 mt-[20px]'>
<p className='text-[14px] text-[#F5F6F8]'>Copyright 2024 • All rights reserved • Salman Faris</p>
            </div>
       </section>
     )
 }

 export default Footer