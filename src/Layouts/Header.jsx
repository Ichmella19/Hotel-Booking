import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#FFFFFF] py-4 border-b border-[2px] text-white fixed top-0 left-0 z-50 " style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="w-full mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[100px]">
        {/* Logo */}
        <p className="text-black text-[18px]"> <span className="text-[#3252DF] text-[18px] ">Lanka</span>Stay.</p>

        {/* Burger menu button - mobile only */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#333]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex flex-row gap-10 font-medium text-[16px] items-center ">
            <li className="relative cursor-pointer  text-[#3252DF]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-white py-2 px-3 rounded-[12px] text-[#3252DF]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="relative cursor-pointer text-[#152C5B]">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "bg-white py-2 px-3 rounded-[12px] text-black" : ""
                }
              >
                Hotels
              </NavLink>
            </li>
            <li className="relative cursor-pointer text-[#152C5B]">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "bg-white py-2 px-3 rounded-[12px] text-black" : ""
                }
              >
                Rooms
              </NavLink>
            </li>
            <li className="relative cursor-pointer text-[#152C5B]">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "bg-white py-2 px-3 rounded-[12px] text-black" : ""
                }
              >
              About
              </NavLink>
            </li>
            <li className="relative cursor-pointer text-[#152C5B]">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "bg-white py-2 px-3 rounded-[12px] text-black" : ""
                }
              >
                Contact Me
              </NavLink>
            </li>
            <button className="flex gap-x-2 p-3 bg-[#3252DF] text-white rounded-[7px]">
             
                <a href="/Login" className="text-[16px]">Login</a>
            </button>
          </ul>
        </nav>
      </div>

      {/* Menu mobile avec animation et style violet */}
      <div
        className={`lg:hidden fixed top-[64px] left-0 w-full z-40 bg-[#5700FF] text-white px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-[16px] font-medium">
          <li className="text-[#3252DF]">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="text-[#152C5B]">
            <Link to="/About" onClick={toggleMenu}>
         Hotels
            </Link>
          </li>
          <li className="text-[#152C5B]">
            <Link to="/Portfolio" onClick={toggleMenu}>
              Rooms
            </Link>
          </li>
          <li className="text-[#152C5B]">
            <Link to="/Portfolio" onClick={toggleMenu}>
            About
            </Link>
          </li>
          <li className="text-[#152C5B]">
            <Link to="/Contact" onClick={toggleMenu}>
              Contact Me
            </Link>
          </li>
          <li>
            <button className="flex gap-x-2 p-3 bg-white text-[#3252DF] rounded-[7px]">
            
              <p className="text-[16px]">Login</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
