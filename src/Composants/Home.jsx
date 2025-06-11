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
      featured: true // Pour la grande carte à gauche
    },
    {
      id: 2,
      image: Pic5,
      price: 22,
      title: "Ocean Land",
      location: "Trincomalee, Sri Lanka",
      row: 1 // Première ligne de la colonne droite
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
      row: 2 // Deuxième ligne de la colonne droite
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
 const Home= () => {
        const featuredProperty = properties.find(p => p.featured);
  const rightColumnProperties = properties.filter(p => !p.featured);
      const [selectedNumber, setSelectedNumber] = useState(0);
      const [isOpen, setIsOpen] = useState(false);
      const handleSelect = (num) => {
        setSelectedNumber(num);
        setIsOpen(false);
      };

      const [selectedHotel, setSelectedHotel] = useState(null)
     return (
        <main className='w-full h-full bg-[#FFFFFF] mt-[60px] min-h-screen overflow-hidden  px-[30px] md:px-[100px] ' style={{ fontFamily: 'Poppins, sans-serif' }}>
 {selectedHotel ? (
        // 👉 Si un hôtel est sélectionné : afficher uniquement Origin
        <Origin
          title={selectedHotel.title}
          image={selectedHotel.image}
            price={selectedHotel.price}
          // Tu peux ajouter un bouton retour ici si tu veux revenir à Home
        />
      ) : (
        // 👉 Sinon, afficher tout le contenu de la page Home
        <>
          <section className="md:flex md:py-[100px] py-[50px] relative w-[100%]">
        <div className='flex flex-col gap-y-5 w-[50%]'>
               <h1 className='font-bold text-[#152C5B] text-[40px] w-[450px]'>Forget Busy Work,
               Start Next Vacation</h1>
               <p className='text-[#B0B0B0] text-[16px] w-[350px]'>We provide what you need to enjoy your 
holiday with family. Time to make another 
memorable moments.</p>
<button className="px-5 py-2 bg-[#3252DF] text-white rounded-[7px] w-fit">
    <p className="text-[16px]">Show More </p>
  </button>
  <div className='flex gap-x-12 mt-[10%]'>
      <div className='flex flex-col gap-y-1 justify-center items-start '>
            <img src={Bidon} alt="" className='text-start'/>
            <p className="text-[#B0B0B0] text-[16px] font-normal"> <span className="text-[#152C5B] text-[18px] ">2500</span> Users</p>
      </div>
      <div className='flex flex-col gap-y-1 justify-center items-start  ml-[5%]'>
            <img src={Camera} alt="" className='text-start'/>
            <p className="text-[#B0B0B0] text-[16px] font-normal"> <span className="text-[#152C5B] text-[18px] ">200</span> treasure</p>
      </div>
      <div className='flex flex-col gap-y-1 justify-center items-start '>
            <img src={Location} alt="" className='text-start'/>
            <p className="text-[#B0B0B0] text-[16px] font-normal"> <span className="text-[#152C5B] text-[18px] ">100</span> cities</p>
      </div>
  </div>
        </div>
        <div className='w-[50%]'>
        <img src={Banner} alt="" className='text-start'/>
        </div>
     </section>
     <section className='py-[60px] flex justify-center items-center'>
            <div className='flex gap-x-10 bg-[#EAF1FF] rounded-[42px] w-full p-[40px] items-center justify-center'>
        {/* Bouton 1 : Check Available */}
<button className="px-5 py-3 flex items-center justify-center gap-x-4 bg-[#FFFFFF] text-[#1E1E1E] rounded-[12px] w-[250px] shadow">
  <img src={Frame} alt="Check Icon" />
  <p className="text-[16px] inter-font font-semibold">Check Available</p>
</button>

{/* Bouton 2 : Person selector */}
<div className="relative inline-block text-left">
  <button
    className="px-5 py-3 flex  gap-x-4 bg-white text-[#1E1E1E] rounded-[12px] w-[250px] shadow justify-between"
    onClick={() => setIsOpen(!isOpen)}
  >
    <img src={Vector} alt="icon" />
    <p className="text-[16px] inter-font font-semibold">Person</p>
    <span className="text-[16px] font-semibold">{selectedNumber}</span>
    <ChevronDown size={20} className="text-black ml-auto" />
  </button>

  {isOpen && (
    <ul className="absolute z-10 mt-2 w-[200px] bg-white border rounded-md shadow-lg">
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

{/* Bouton 3 : Select Location */}
<button className="px-5 py-3 flex items-center justify-center gap-x-4 bg-[#FFFFFF] text-[#1E1E1E] rounded-[12px] w-[250px] shadow">
  <img src={Add_location} alt="Location Icon" />
  <p className="text-[16px] inter-font font-semibold text-[#1E1E1E]">Select Location</p>
</button>

  <button className="flex gap-x-2 py-2 px-5 bg-[#3252DF] text-white rounded-[12px]">
             
              <p className="text-[18px] text-[#FFFCFC]">Search</p>
            </button>
  

            </div>
           
     </section>
     <section className='py-[60px] '>
      <p className='text-start text-[#152C5B] text-[20px] font-semibold'>Most Picked</p>
         <div className='flex gap-x-7 mt-[30px]'>
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
      <div className='flex flex-col gap-y-7'>
        {/* Ligne 1 */}
        <div className='flex gap-x-7'>
          {rightColumnProperties
            .filter(p => p.row === 1)
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
        

        {/* Ligne 2 */}
        <div className='flex gap-x-7'>
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
     <section className='py-[60px] flex gap-x-7'>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic9} alt="" />
                <button className='absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex'> 
            <p className='text-[#FFFFFF] text-[16px]'>Popular <span className='text-[#FFFFFF] text-[16px]'> choice</span></p>
        </button>
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Shangri-La </h1>
            <p className='text-[#B0B0B0] text-[15px]'>Colombo, Sri Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic6} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Top View</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Hikkaduwe, Sri Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic7} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Green Villa</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Kandy, Sri Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic8} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Wodden Pit</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Ambalangode, Sri Lanka</p>
        </div>
     </section>
     <section className='py-[60px] flex gap-x-7'>
        
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic10} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Boutiqe</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Kandy, Sri Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic11} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Modern</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Nuwereliya, Sri Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic12} alt="" />
                
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Silver Rain</h1>
            <p className='text-[#B0B0B0] text-[15px]'>Dehiwala, Sri  Lanka</p>
        </div>
        <div className='flex flex-col gap-y-3 text-start'>
            <div className='relative'>
                <img src={Pic13} alt="" />
                <button className='absolute top-0 bg-[#3252DF] text-white px-5 py-2 rounded-bl-[16px] rounded-tr-[16px] right-0 w-fit justify-center items-center flex'> 
            <p className='text-[#FFFFFF] text-[16px]'>Popular <span className='text-[#FFFFFF] text-[16px]'> choice</span></p>
        </button>
            </div>
            <h1 className='text-[18px] text-[#152C5B]'>Cashville </h1>
            <p className='text-[#B0B0B0] text-[15px]'>Ampara, Sri Lanka</p>
        </div>
     </section>

        </>
      )}
    
    
     </main>
     )
 }

 export default Home