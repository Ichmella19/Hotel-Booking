 import React from 'react'
  import Rectangle6 from "../assets/Images/Rectangle6.png";
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
 const Origin= () => {
   
     return (
         <main className='w-full h-full bg-[#FFFFFF] mt-[60px] min-h-screen overflow-hidden  px-[30px] md:px-[100px] pb-[30px]' style={{ fontFamily: 'Poppins, sans-serif' }}>
<section className="md:flex md:py-[100px] py-[50px] justify-center items-center relative">
  {/* Liens à gauche */}
  <div className="absolute left-6 md:left-[0px] top-0 md:top-auto flex items-start gap-x-1">
    <a href="" className="text-[#B0B0B0]">Home</a>
    <a href="" className="text-[#152C5B]">/ Hotels Details</a>
  </div>

  {/* Titre centré */}
  <div className="flex flex-col text-center">
    <h1 className="text-[#152C5B] text-[36px] font-semibold">Blue Origin Fams</h1>
    <p className='text-[#B0B0B0]'>Galle, Sri Lanka</p>
  </div>
 
</section>
<section className='flex w-[100%] gap-x-3'>
        <div className='w-[50%] cursor-pointer'>
            <img src={Rectangle6} alt="" />
        </div>
        <div className='w-[50%] flex flex-col gap-y-3 cursor-pointer'>
             <img src={Rectangle7} alt="" className=' h-[215px]'/>
              <img src={Rectangle8} alt="" className=' h-[215px]'/>
        </div>
</section>
<section className='flex flex-col py-[30px]'>
<div className='flex w-[100%] gap-x-6'>
<div className='w-[50%] flex flex-col gap-y-2'>
<h1 className='text-[#152C5B]  text-[20px]'>About the place</h1>
<p className='text-[#B0B0B0] text-[16px]'>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
<p className='text-[#B0B0B0] text-[16px]'>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
</div>
<div className='w-[50%] border-[#E5E5E5] border-[1px] rounded-[15px] p-[30px] gap-y-2 flex flex-col justify-center items-center'>
<p className='text-[#152C5B]  text-[20px]'>Start Booking</p>
<h1 className='text-[36px] text-[#1ABC9C]'>$200 <span className='text-[36px] text-[#B0B0B0]'> per Day</span></h1>
<button className="px-20 py-2 bg-[#3252DF] text-white rounded-[7px] w-fit">
    <p className="text-[16px]">Book Now!</p>
  </button>
</div>
</div>
<div className='flex flex-wrap gap-x-[57px]  py-[60px] w-full'>
  {/* Chambre */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Bedroom1} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>1</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>bedroom</span>
    </div>
  </div>

  {/* Salon */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Livingroom} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>1</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>living room</span>
    </div>
  </div>

  {/* Salle de bain */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Bedroom} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>1</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>bathroom</span>
    </div>
  </div>

  {/* Salle à manger */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Diningroom} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>1</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>dining room</span>
    </div>
  </div>

  {/* WiFi */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Wifi} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>10</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>mbp/s</span>
    </div>
  </div>

  {/* Climatisation */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Ac} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>7</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>unit ready</span>
    </div>
  </div>

  {/* Réfrigérateur */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Kulkas} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>1</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>refigrator</span>
    </div>
  </div>

  {/* Télévision */}
  <div className='flex flex-col gap-y-2 flex-shrink-0'>
    <img src={Tv} alt="" className='w-10 h-10'/>
    <div className='flex gap-x-2'>
      <h1 className='text-[16px] text-[#152C5B] whitespace-nowrap'>2</h1>
      <span className='text-[#B0B0B0] whitespace-nowrap'>television</span>
    </div>
  </div>
</div>
</section>
 <section className='py-[60px] flex gap-x-7'>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Rectangle9} alt="" />
               
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Green Lake</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Nature</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Rectangle10} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Dog Clubs</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Pool</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Rectangle11} alt="" />
                 <button className='absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex'> 
            <p className='text-[#FFFFFF] text-[16px]'>Popular <span className='text-[#FFFFFF] text-[16px]'> choice</span></p>
        </button>
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Labour and Wait</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Shopping</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Rectangle12} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Snorkeling</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Beach</p>
        </div>
     </section>
        </main>
     )
 }

 export default Origin