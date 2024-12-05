import React from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FiWatch } from "react-icons/fi";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad2 } from "react-icons/lu";

const Category = () => {
  return (
    <div className="mt-32 mx-20">
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="w-4 h-10 rounded bg-red-600 mr-3"></div>
            <p className="text-red-600 font-bold text-lg">Categories</p>
          </div>
          <p className="text-3xl font-semibold">Browse By Category</p>
        </div>

        {/* Arrows */}
        <div className="flex items-center space-x-4 ml-auto">
          <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: '#F5f5f5' }}>
            <IoIosArrowRoundBack size={28} />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: '#F5f5f5' }}>
            <IoIosArrowRoundForward size={28} />
          </div>
        </div>
      </div>

      {/* Six boxes with hover effect */}
      <div className="flex gap-8 mt-6">
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <CiMobile4 size={60} />
        </div>
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <HiOutlineComputerDesktop size={60} />
        </div>
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <FiWatch size={60} />
        </div>
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <CiCamera size={60} />
        </div>
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <PiHeadphones size={60} />
        </div>
        <div className="w-[1170px] h-[145px] border border-gray-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <LuGamepad2 size={60} />
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-full h-1 bg-gray-300"></div>
      </div>
    </div>
  )
}

export default Category;
