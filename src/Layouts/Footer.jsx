import React from 'react'

const Footer = () => {
  return (
    <section className="pt-[60px] border-t-2">
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-10 lg:px-[100px] gap-y-8 md:gap-y-0">
        {/* Bloc gauche */}
        <div className="text-start flex flex-col gap-y-2">
          {/* Logo */}
          <p className="text-black text-[18px]">
            <span className="text-[#3252DF]">Lanka</span>Stay.
          </p>
          <p className="text-[16px] text-[#B0B0B0] w-full md:w-[300px]">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>

        {/* Bloc droit */}
        <div className="flex flex-col gap-y-4">
          <p className="text-[16px] text-[#152C5B]">Become hotel Owner</p>
          <button className="flex gap-x-2 p-3 bg-[#3252DF] text-white rounded-[7px] w-fit">
            <a href="/Register">Register Now</a>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#3252DF] flex items-center justify-center py-2 mt-[20px] px-4 text-center">
        <p className="text-[14px] text-[#F5F6F8]">
          Copyright 2024 • All rights reserved • Salman Faris
        </p>
      </div>
    </section>
  )
}

export default Footer
