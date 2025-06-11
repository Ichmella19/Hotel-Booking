import React from 'react';
 import Rectangle13 from "../assets/Images/Rectangle13.png";
const Booking = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6">
      {/* Étapes de réservation */}
      <div className="flex justify-center items-center mb-8 space-x-6">
        <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center">2</div>
        <div className="bg-gray-200 text-black rounded-full w-10 h-10 flex items-center justify-center">3</div>
      </div>

      {/* Titre */}
      
      <h2 className="text-2xl font-bold text-center mb-2">Booking Information</h2>
      <p className="text-center text-gray-500 mb-8">Please fill up the blank fields below</p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Image */}
        <div className="flex flex-col items-center">
          <img 
            src={Rectangle13}
            alt="Blue Origin Farms" 
            className="w-72 h-48 object-cover rounded-md shadow-md" 
          />
          <div className='flex gap-x-3 mt-2'>
             <p className="text-[20px] text-[#152C5B] ">Blue Origin Farms</p>
          <p className="text-[15px] text-gray-500 mt-1">Galle, Sri Lanka</p>
          </div>
         
        </div>

        {/* Détails de réservation */}
        <div className="flex-1 md:border-l border-gray-200 md:pl-8">
          {/* Durée du séjour */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">How long you will stay?</label>
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 text-white px-3 py-1 rounded">−</button>
              <span className="text-lg font-semibold">2 Days</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded">+</button>
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Pick a Date</label>
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <span>20 Jan - 22 Jan</span>
            </div>
          </div>

          {/* Prix */}
          <p className="text-gray-500">
            You will pay <span className="text-black font-semibold">$400 USD</span>
            <br />
            per <span className="font-bold text-blue-600">2 Days</span>
          </p>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex flex-col justify-center mt-8 items-center gap-y-3">
        <button className="bg-blue-600 text-white px-20 py-2 rounded hover:bg-blue-700 w-fit">
          Book Now
        </button>
        <button className="bg-gray-100 text-gray-500 px-20 py-2 rounded cursor-not-allowed w-fit">
          Cancel
        </button>
      </div>
    </div>
    
  );
  
};



export default Booking;