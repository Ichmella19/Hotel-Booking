import React from 'react'
import Rectangle7 from "../assets/Images/Rectangle7.png";
import Rectangle8 from "../assets/Images/Rectangle8.png";
import Rectangle9 from "../assets/Images/Rectangle9.png";
import Rectangle10 from "../assets/Images/Rectangle10.png";
import Rectangle11 from "../assets/Images/Rectangle11.png";
import Rectangle12 from "../assets/Images/Rectangle12.png";
import Tv from "../assets/Images/tv.png";
import Wifi from "../assets/Images/wifi.png";
import Bedroom1 from "../assets/Images/bedroom1.png";
import Bedroom from "../assets/Images/bedroom.png";
import Livingroom from "../assets/Images/livingroom.png";
import Diningroom from "../assets/Images/diningroom.png";
import Ac from "../assets/Images/ac.png";
import Kulkas from "../assets/Images/kulkas.png";

const Origin = ({ title, image }) => {
  return (
    <main className='w-full min-h-screen bg-[#FFFFFF] mt-[60px] px-4 md:px-[100px] pb-[30px]' style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center justify-center md:py-[100px] py-[50px] relative">
        <div className="absolute left-4 md:left-0 top-0 md:top-auto flex items-start gap-x-1">
          <a href="#" className="text-[#B0B0B0]">Home</a>
          <a href="#" className="text-[#152C5B]">/ Hotels Details</a>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="text-[#152C5B] text-[36px] font-semibold">{title}</h1>
          <p className='text-[#B0B0B0]'>Galle, Sri Lanka</p>
        </div>
      </section>

      {/* Gallery */}
      <section className='flex flex-col lg:flex-row w-full gap-3'>
        <div className='w-full lg:w-1/2 cursor-pointer'>
          <img src={image} alt="" className='w-full h-[440px] object-cover rounded-[15px]'/>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-3 cursor-pointer'>
          <img src={Rectangle7} alt="" className='h-[215px] object-cover w-full rounded-[15px]'/>
          <img src={Rectangle8} alt="" className='h-[215px] object-cover w-full rounded-[15px]'/>
        </div>
      </section>

      {/* About + Booking */}
      <section className='flex flex-col gap-6 py-[30px]'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='w-full lg:w-1/2 flex flex-col gap-2'>
            <h1 className='text-[#152C5B] text-[20px]'>About the place</h1>
            <p className='text-[#B0B0B0] text-[16px]'>Minimal techno is a minimalist subgenre...</p>
            <p className='text-[#B0B0B0] text-[16px]'>Such trends saw the demise of the soul...</p>
          </div>
          <div className='w-full lg:w-1/2 border border-[#E5E5E5] rounded-[15px] p-[30px] flex flex-col justify-center items-center gap-2'>
            <p className='text-[#152C5B] text-[20px]'>Start Booking</p>
            <h1 className='text-[36px] text-[#1ABC9C]'>$200 <span className='text-[#B0B0B0]'> per Day</span></h1>
            <button className="px-20 py-2 bg-[#3252DF] text-white rounded-[7px]">
              <a href="/Booking">Book Now</a>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-between gap-6 py-[60px]'>
          {[
            { img: Bedroom1, label: 'bedroom', count: 1 },
            { img: Livingroom, label: 'living room', count: 1 },
            { img: Bedroom, label: 'bathroom', count: 1 },
            { img: Diningroom, label: 'dining room', count: 1 },
            { img: Wifi, label: 'mbp/s', count: 10 },
            { img: Ac, label: 'unit ready', count: 7 },
            { img: Kulkas, label: 'refigrator', count: 1 },
            { img: Tv, label: 'television', count: 2 },
          ].map((item, i) => (
            <div key={i} className='flex flex-col items-center gap-y-2'>
              <img src={item.img} alt="" className='w-10 h-10'/>
              <div className='flex gap-x-2'>
                <h1 className='text-[16px] text-[#152C5B]'>{item.count}</h1>
                <span className='text-[#B0B0B0]'>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Places */}
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {[
          { img: Rectangle9, title: 'Green Lake', subtitle: 'Nature' },
          { img: Rectangle10, title: 'Dog Clubs', subtitle: 'Pool' },
          {
            img: Rectangle11, title: 'Labour and Wait', subtitle: 'Shopping', badge: 'Popular choice'
          },
          { img: Rectangle12, title: 'Snorkeling', subtitle: 'Beach' },
        ].map((place, i) => (
          <div key={i} className='flex flex-col gap-y-3 text-start cursor-pointer'>
            <div className='relative'>
              <img src={place.img} alt="" className='w-full object-cover'/>
              {place.badge && (
                <button className='absolute top-0 right-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] flex items-center'>
                  <p className='text-[16px]'>{place.badge}</p>
                </button>
              )}
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>{place.title}</h1>
            <p className='text-[#B0B0B0] text-[15px]'>{place.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Back Button */}
      <div className="relative mt-10">
        <button className="px-6 py-3 bg-[#3252DF] text-white rounded-[7px] absolute right-0">
          <a href="/" className="text-[16px]">Retour à l'accueil</a>
        </button>
      </div>
    </main>
  )
}

export default Origin
