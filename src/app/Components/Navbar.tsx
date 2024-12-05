"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser, FiSettings, FiClipboard, FiLogOut, FiStar, FiXCircle } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative bg-black h-10 text-white flex items-center justify-center text-center py-2 font-light">
        <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <span className="underline ml-4">Shop Now</span>
        </div>
        <span className="absolute right-0 pr-7 flex items-center">
          English <IoIosArrowDown className="ml-1" />
        </span>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between mt-4 w-full">
        <h1 className="font-semibold text-3xl ml-20 mr-20">Exclusive</h1>
        <ul className="flex space-x-10 justify-center flex-grow">
          <li>
            <Link href="/"
              className="hover:underline transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/Contact"
              className="hover:underline transition duration-300">Contact</Link>
          </li>
          <li>
            <Link href="/about"
              className="hover:underline transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/sign"
              className="hover:underline transition duration-300">Sign Up</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div
          className="relative flex items-center border border-gray-300 rounded-md px-4 py-2 w-80 ml-auto mr-4"
          style={{ backgroundColor: "#F5f5f5" }}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent focus:outline-none text-gray-800 pr-10"
          />
          <FiSearch className="text-black absolute right-4" size={25} />
        </div>

        {/* Icons: Heart, Cart, User */}
        <div className="flex items-center space-x-6 ml-4 mr-8">
          {/* Heart Icon with Hover Effect */}
          <div className="p-2 rounded-full hover:bg-red-500 cursor-pointer transition duration-200 flex items-center justify-center">
            <IoIosHeartEmpty className="text-black hover:text-white" size={30} />
          </div>

          {/* Cart Icon with Hover Effect */}
          <div className="p-2 rounded-full hover:bg-red-500 cursor-pointer transition duration-200 flex items-center justify-center">
            <IoCartOutline className="text-black hover:text-white" size={30} />
          </div>

          {/* User Icon with Hover and Dropdown */}
          <div className="relative">
            <div
              className="p-2 rounded-full hover:bg-red-500 cursor-pointer transition duration-200 flex items-center justify-center"
              onClick={toggleDropdown}
            >
              <FiUser className="text-black hover:text-white" size={30} />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="py-2 text-white">
                  <li className="px-4 py-2 hover:bg-black cursor-pointer flex items-center text-white">
                    <FiSettings className="mr-2 text-white" /> Manage My Account
                  </li>
                  <li className="px-4 py-2 hover:bg-black cursor-pointer flex items-center text-white">
                    <FiClipboard className="mr-2 text-white" /> My Orders
                  </li>
                  <li className="px-4 py-2 hover:bg-black cursor-pointer flex items-center text-white">
                    <FiXCircle className="mr-2 text-white" /> My Cancellations
                  </li>
                  <li className="px-4 py-2 hover:bg-black cursor-pointer flex items-center text-white">
                    <FiStar className="mr-2 text-white" /> My Reviews
                  </li>
                  <li className="px-4 py-2 hover:bg-black cursor-pointer flex items-center text-white">
                    <FiLogOut className="mr-2 text-white" /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-gray-300 mt-4" />
    </div>
  );
};

export default Navbar;
