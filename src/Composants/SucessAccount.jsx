import React from 'react';
import Image from "../assets/Images/Image5.png";
import { Link } from 'react-router-dom';
import Check from "../assets/Images/check.png";

const SucessAccount = () => {
  return (
    <div className="md:flex md:max-h-screen">
      {/* Left Side */}
      <div
        className="w-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[30px] p-5 shadow-xl border border-white border-opacity-20 
        w-[90%] max-w-[1250px] h-auto md:h-[550px] flex flex-col justify-center items-center gap-y-4 md:gap-y-3 text-center"
        >

          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold drop-shadow-md">
            <span className="text-[#3252DF]">Lanka</span>
            <span className="text-[#152C5B]">Stay.</span>
          </h1>

          <img src={Check} alt="Check" className="w-10 h-10" />

          <p className="text-[#3252DF] text-[20px] sm:text-[24px] md:text-[30px] font-semibold">
            Account Created Successfully
          </p>

          <p className="text-[#152C5B] text-[16px] sm:text-[20px] md:text-[24px]">
            Please Check Your Email
          </p>

          <button className="px-6 py-2 sm:px-8 md:px-10 bg-[#3252DF] text-white rounded-[7px] mt-2">
            <Link to="/Booking" className="text-[14px] sm:text-[16px]">
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SucessAccount;
