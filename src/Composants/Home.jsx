import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bidon from "../assets/Images/Bidon.png";
import Camera from "../assets/Images/Camera.png";
import Location from "../assets/Images/Location.png";
import Banner from "../assets/Images/Banner.png";
import Frame from "../assets/Images/Frame.png";
import Vector from "../assets/Images/Vector.png";
import Add_location from "../assets/Images/add-location.png";
import Pic from "../assets/Images/pic.png";
import Pic2 from "../assets/Images/pic2.png";
import Pic3 from "../assets/Images/pic3.png";
import Pic4 from "../assets/Images/pic4.png";
import Pic5 from "../assets/Images/pic5.png";
import Pic6 from "../assets/Images/pic6.png";
import Pic7 from "../assets/Images/pic7.png";
import Pic8 from "../assets/Images/pic8.png";
import Pic9 from "../assets/Images/pic9.png";
import Pic10 from "../assets/Images/pic10.png";
import Pic11 from "../assets/Images/pic11.png";
import Pic12 from "../assets/Images/pic12.png";
import Pic13 from "../assets/Images/pic13.png";
import { ChevronDown } from 'lucide-react';
import Origin from './Origin';

const properties = [
  {
    id: 1,
    image: Pic,
    price: 50,
    title: "Blue Origin Fams",
    location: "Galle, Sri Lanka",
    featured: true
  },
  {
    id: 2,
    image: Pic5,
    price: 22,
    title: "Ocean Land",
    location: "Trincomalee, Sri Lanka",
    row: 1
  },
  {
    id: 3,
    image: Pic4,
    price: 856,
    title: "Stark House",
    location: "Dehiwala, Sri Lanka",
    row: 1
  },
  {
    id: 4,
    image: Pic2,
    price: 62,
    title: "Vinna Vill",
    location: "Beruwala, Sri Lanka",
    row: 2
  },
  {
    id: 5,
    image: Pic4,
    price: 72,
    title: "Bobox",
    location: "Kandy, Sri Lanka",
    row: 2
  }
];  

const Home = () => {
  const featuredProperty = properties.find(p => p.featured);
  const rightColumnProperties = properties.filter(p => !p.featured);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (num) => {
    setSelectedNumber(num);
    setIsOpen(false);
  };

  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <main className='w-full h-full bg-[#FFFFFF] mt-[60px] min-h-screen overflow-hidden px-4 md:px-[30px] lg:px-[100px]' style={{ fontFamily: 'Poppins, sans-serif' }}>
      {selectedHotel ? (
        <Origin
          title={selectedHotel.title}
          image={selectedHotel.image}
          price={selectedHotel.price}
        />
      ) : (
        <>
          {/* Section Hero - Responsive */}
          <section className="flex flex-col lg:flex-row py-[30px] md:py-[50px] lg:py-[100px] relative w-full">
            <div className='flex flex-col gap-y-5 w-full lg:w-[50%] mb-8 lg:mb-0'>
              <h1 className='font-bold text-[#152C5B] text-[28px] md:text-[36px] lg:text-[40px] w-full lg:w-[450px]'>
                Forget Busy Work, Start Next Vacation
              </h1>
              <p className='text-[#B0B0B0] text-[14px] md:text-[16px] w-full lg:w-[350px]'>
                We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
              </p>
              <button className="px-5 py-2 bg-[#3252DF] text-white rounded-[7px] w-fit mt-4">
                <p className="text-[14px] md:text-[16px]">Show More</p>
              </button>
              
              <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-12 mt-6 md:mt-[5%] lg:mt-[10%]'>
                <div className='flex flex-col gap-y-1 justify-center items-start'>
                  <img src={Bidon} alt="Users" className='text-start'/>
                  <p className="text-[#B0B0B0] text-[14px] md:text-[16px] font-normal"> 
                    <span className="text-[#152C5B] text-[16px] md:text-[18px]">2500</span> Users
                  </p>
                </div>
                <div className='flex flex-col gap-y-1 justify-center items-start'>
                  <img src={Camera} alt="Treasure" className='text-start'/>
                  <p className="text-[#B0B0B0] text-[14px] md:text-[16px] font-normal"> 
                    <span className="text-[#152C5B] text-[16px] md:text-[18px]">200</span> treasure
                  </p>
                </div>
                <div className='flex flex-col gap-y-1 justify-center items-start'>
                  <img src={Location} alt="Cities" className='text-start'/>
                  <p className="text-[#B0B0B0] text-[14px] md:text-[16px] font-normal"> 
                    <span className="text-[#152C5B] text-[16px] md:text-[18px]">100</span> cities
                  </p>
                </div>
              </div>
            </div>
            
            <div className='w-full lg:w-[50%] flex justify-center'>
              <img src={Banner} alt="Vacation" className='max-w-full h-auto'/>
            </div>
          </section>

          {/* Section de recherche - Responsive */}
          <section className='py-[30px] md:py-[40px] lg:py-[60px] flex justify-center'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 bg-[#EAF1FF] rounded-[24px] md:rounded-[32px] lg:rounded-[42px] w-full p-4 md:p-6 lg:p-[40px] items-center'>
              <button className="px-4 py-3 flex items-center justify-center gap-x-4 bg-white text-[#1E1E1E] rounded-[12px] w-full md:w-[200px] lg:w-[250px] shadow">
                <img src={Frame} alt="Check Icon" className="w-5 h-5" />
                <p className="text-[14px] md:text-[16px] inter-font font-semibold">Check Available</p>
              </button>

              <div className="relative inline-block text-left w-full md:w-auto">
                <button
                  className="px-4 py-3 flex gap-x-4 bg-white text-[#1E1E1E] rounded-[12px] w-full md:w-[200px] lg:w-[250px] shadow justify-between"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center gap-x-4">
                    <img src={Vector} alt="icon" className="w-5 h-5" />
                    <p className="text-[14px] md:text-[16px] inter-font font-semibold">Person</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[14px] md:text-[16px] font-semibold">{selectedNumber}</span>
                    <ChevronDown size={20} className="text-black ml-2" />
                  </div>
                </button>

                {isOpen && (
                  <ul className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
                    {Array.from({ length: 10 }, (_, i) => (
                      <li
                        key={i}
                        onClick={() => handleSelect(i)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button className="px-4 py-3 flex items-center justify-center gap-x-4 bg-white text-[#1E1E1E] rounded-[12px] w-full md:w-[200px] lg:w-[250px] shadow">
                <img src={Add_location} alt="Location Icon" className="w-5 h-5" />
                <p className="text-[14px] md:text-[16px] inter-font font-semibold">Select Location</p>
              </button>

              <button className="flex gap-x-2 py-2 px-5 bg-[#3252DF] text-white rounded-[12px] w-full md:w-auto">
                <p className="text-[16px] md:text-[18px] text-[#FFFCFC]">Search</p>
              </button>
            </div>
          </section>

          {/* Section Most Picked - Responsive */}
           <section className='py-[60px] '>
      <p className='text-start text-[#152C5B] text-[20px] font-semibold'>Most Picked</p>
         <div className='md:flex gap-x-7 mt-[30px]'>
      {/* Carte principale (gauche) */}
    
        <div className='relative cursor-pointer' onClick={() => setSelectedHotel(featuredProperty)}>
          <img src={featuredProperty.image} alt={featuredProperty.title} />
          <button className='absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex'> 
            <p className='text-[#FFFFFF] text-[16px]'>$ {featuredProperty.price} <span className='text-[#FFFFFF] text-[16px]'> per night</span></p>
          </button>
          <div className='flex flex-col text-start absolute bottom-[25px] ml-[30px] gap-y-2'>
            <h1 className='text-[18px] text-[#FFFFFF]'>{featuredProperty.title}</h1>
            <p className='text-[15px] text-[#FFFFFF]'>{featuredProperty.location}</p>
          </div>
        </div>
  

      {/* Colonne droite */}
      <div className='flex flex-col gap-y-7 mt-10 md:mt-0'>
        {/* Ligne 1 */}
       <div className="flex flex-col md:flex-row md:gap-x-7 gap-y-7">
  {rightColumnProperties
    .filter(p => p.row === 1)
    .map(property => (
      <div
        key={property.id}
        className="relative cursor-pointer"
        onClick={() => setSelectedHotel(property)}
      >
        <img src={property.image} alt={property.title} />
        
        <button className="absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex">
          <p className="text-[#FFFFFF] text-[16px]">
            $ {property.price} <span className="text-[#FFFFFF] text-[16px]">per night</span>
          </p>
        </button>

        <div className="flex flex-col text-start absolute bottom-[25px] ml-[30px] gap-y-2">
          <h1 className="text-[18px] text-[#FFFFFF]">{property.title}</h1>
          <p className="text-[15px] text-[#FFFFFF]">{property.location}</p>
        </div>
      </div>
    ))}
</div>

        

        {/* Ligne 2 */}
        <div className='flex flex-col md:flex-row md:gap-x-7 gap-y-7'>
          {rightColumnProperties
            .filter(p => p.row === 2)
            .map(property => (
              <div key={property.id} className='relative cursor-pointer' onClick={ () => setSelectedHotel(property)}>
                <img src={property.image} alt={property.title} />
                <button className='absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex'> 
                  <p className='text-[#FFFFFF] text-[16px]'>$ {property.price} <span className='text-[#FFFFFF] text-[16px]'> per night</span></p>
                </button>
                <div className='flex flex-col text-start absolute bottom-[25px] ml-[30px] gap-y-2'>
                  <h1 className='text-[18px] text-[#FFFFFF]'>{property.title}</h1>
                  <p className='text-[15px] text-[#FFFFFF]'>{property.location}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
     </section>

          {/* Sections d'hôtels - Responsive */}
          <section className='py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7'>
            {[Pic9, Pic6, Pic7, Pic8].map((img, index) => (
              <div key={index} className='flex flex-col gap-y-2 md:gap-y-3 text-start'>
                <div className='relative'>
                  <img 
                    src={img} 
                    alt={`Hotel ${index + 1}`} 
                    className='w-full h-auto object-cover rounded-lg'
                  />
                  {index === 0 && (
                    <button className='absolute top-0 right-0 bg-[#3252DF] text-white px-3 py-1 md:px-4 md:py-2 rounded-bl-[16px] rounded-tr-[16px]'>
                      <p className='text-[12px] md:text-[14px]'>Popular choice</p>
                    </button>
                  )}
                </div>
                <h1 className='text-[16px] md:text-[18px] text-[#152C5B]'>
                  {index === 0 ? "Shangri-La" : 
                   index === 1 ? "Top View" : 
                   index === 2 ? "Green Villa" : "Wodden Pit"}
                </h1>
                <p className='text-[#B0B0B0] text-[14px]'>
                  {index === 0 ? "Colombo, Sri Lanka" : 
                   index === 1 ? "Hikkaduwe, Sri Lanka" : 
                   index === 2 ? "Kandy, Sri Lanka" : "Ambalangode, Sri Lanka"}
                </p>
              </div>
            ))}
          </section>
          
          <section className='py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7'>
            {[Pic10, Pic11, Pic12, Pic13].map((img, index) => (
              <div key={index} className='flex flex-col gap-y-2 md:gap-y-3 text-start'>
                <div className='relative'>
                  <img 
                    src={img} 
                    alt={`Hotel ${index + 5}`} 
                    className='w-full h-auto object-cover rounded-lg'
                  />
                  {index === 3 && (
                    <button className='absolute top-0 right-0 bg-[#3252DF] text-white px-3 py-1 md:px-4 md:py-2 rounded-bl-[16px] rounded-tr-[16px]'>
                      <p className='text-[12px] md:text-[14px]'>Popular choice</p>
                    </button>
                  )}
                </div>
                <h1 className='text-[16px] md:text-[18px] text-[#152C5B]'>
                  {index === 0 ? "Boutiqe" : 
                   index === 1 ? "Modern" : 
                   index === 2 ? "Silver Rain" : "Cashville"}
                </h1>
                <p className='text-[#B0B0B0] text-[14px]'>
                  {index === 0 ? "Kandy, Sri Lanka" : 
                   index === 1 ? "Nuwereliya, Sri Lanka" : 
                   index === 2 ? "Dehiwala, Sri Lanka" : "Ampara, Sri Lanka"}
                </p>
              </div>
            ))}
          </section>
        </>
      )}
    </main>
  )
}

export default Home;