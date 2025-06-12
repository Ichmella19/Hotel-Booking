import React from 'react';
import { Bell, Settings, MessageSquare, LogOut, Edit, Trash2 } from 'lucide-react';
import Picc from '../assets/Images/picc.png'
import Dashboard from '../assets/Images/dashboard.png'
import Setting from '../assets/Images/settings.png'
import Message from '../assets/Images/messages.png'
import Refunds from '../assets/Images/refunds.png'
import Question from '../assets/Images/questions.png'

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between gap-y-10">
        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-10">Lanka<span className="text-gray-900">Stay.</span></h1>
          <ul className="space-y-6">
            <div className='flex gap-x-3'>
                <img src={Dashboard} alt="" />
                      <li className="text-gray-600 font-medium hover:text-blue-700 cursor-pointer">Dashboard</li>
            </div>
         
            <li className="text-blue-700 font-semibold border-l-4 border-blue-700 pl-2">Bookings</li>
             <div className='flex  gap-x-3'>
                <img src={Refunds} alt="" />
                  <li className="text-gray-600 font-medium hover:text-blue-700 cursor-pointer">Refunds</li>
          </div>
          <div className='flex gap-x-3'>
                <img src={Message} alt="" />
                <li className="text-gray-600 font-medium hover:text-blue-700 cursor-pointer">Message</li>
          </div>
            <div className='flex gap-x-3'>
                <img src={Question} alt="" />
                 <li className="text-gray-600 font-medium hover:text-blue-700 cursor-pointer">Help</li>
            </div>
           <div className='flex gap-x-3'>
                <img src={Setting} alt="" />
                <li className="text-gray-600 font-medium hover:text-blue-700 cursor-pointer">Setting</li>
           </div>
            
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Hello, User</h2>
            <p className="text-sm text-gray-500">Have a nice day</p>
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <img src="" className="w-8 h-8 rounded-full" />
            <div className="text-sm text-right">
              <p className="font-medium">John Wick</p>
              <p className="text-gray-400 text-xs">User</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search documents"
            className="border border-gray-300 px-3 py-2 rounded-md w-1/3"
          />
          <div className="flex space-x-2">
            <button className="border p-2 rounded-md"><i className="fas fa-file"></i></button>
            <button className="border p-2 rounded-md"><i className="fas fa-th-large"></i></button>
            <button className="border p-2 rounded-md"><i className="fas fa-list"></i></button>
            <button className="border p-2 rounded-md"><i className="fas fa-trash"></i></button>
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 px-2 py-1 rounded-md">
              <option>Booking</option>
            </select>
            <select className="border border-gray-300 px-2 py-1 rounded-md">
              <option>Refund</option>
            </select>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md">+</button>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Booking List</h3>
          <p className="text-sm text-gray-400 mb-4">Lorem ipsum lorem uoij,kn</p>

          <div className="border border-gray-200 rounded-xl overflow-hidden max-w-xs relative">
            <div className="relative">
              <img src={Picc} alt="Booking" className="w-full h-48 object-cover rounded-t-xl" />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">$200 per night</span>
              <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                <p>Blue Origin Farms</p>
                <p className="text-xs">Galle, Sri Lanka</p>
              </div>
            </div>

            <div className="p-4 text-sm text-gray-700">
              <p>20 Jan – 22 Jan</p>
              <p>02 Days</p>
              <p>Galle to Colombo Road 245, Main Street, Galle.</p>
              <p>Initial Payment <strong>$200</strong></p>
              <p>Total Payment <strong>$400</strong></p>

              <div className="flex justify-end items-center mt-3 space-x-2">
                <button className="text-blue-600 hover:underline">
                  <Edit size={16} />
                </button>
                <button className="text-red-600 hover:underline">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
