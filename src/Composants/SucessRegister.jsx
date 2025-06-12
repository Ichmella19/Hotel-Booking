import React from 'react';

 import Image from "../assets/Images/Image5.png";
 import { Link } from 'react-router-dom';
 import Check from "../assets/Images/check.png";
const SucessRegister = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div
        className="w-full relative bg-cover bg-center"
        style={{
          backgroundImage:  `url(${Image})`, // remplace avec ton image
        }}
      ><div className="absolute top-1/2 gap-y-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[30px] p-5 shadow-xl border border-white border-opacity-20 w-[1250px] h-[550px] flex flex-col justify-center items-center">
  <h1 className="text-[50px]  drop-shadow-md">
    <span className="text-[#3252DF]">Lanka</span><span className="text-[#152C5B]">Stay.</span>
  </h1>
<img src={Check} alt="" className='w-10 h-10'/>
<p className='text-[#3252DF] text-[30px]'>Once we verified, You can Access Dashboard</p>

<button className="px-10 py-2 bg-[#3252DF] text-white rounded-[7px] w-fit">
  <Link to="/UserDashboard" className="text-[16px]">View Dashboard</Link>
  </button>
</div>
      </div>
  </div>
  );
}
export default SucessRegister;
