import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Sale = () => {
  return (
    <div className="mt-32 mx-20">
      {/* Sale Timer Section */}
      <div className="flex items-center">
        {/* Left Section: "Today's" and "Flash Sales" */}
        <div className="flex flex-col items-start">
          {/* Vertical Line and "Today's" */}
          <div className="flex items-center mb-2">
            <div className="w-4 h-10 rounded bg-red-600 mr-3"></div>
            <p className="text-red-600 font-bold text-lg">Today's</p>
          </div>

          {/* Flash Sales Heading */}
          <p className="text-3xl font-semibold">Flash Sales</p>
        </div>

        {/* Right Section: Timer */}
        <div className="flex items-center space-x-8 ml-16 mt-11">
          {/* Days */}
          <div className="text-center">
            <p className="text-lg font-medium">Days</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold">03</span>
              <span className="text-red-600 text-3xl font-bold mx-1 flex items-center">:</span>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <p className="text-lg font-medium">Hours</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold">23</span>
              <span className="text-red-600 text-3xl font-bold mx-1 flex items-center">:</span>
            </div>
          </div>

          {/* Minutes */}
          <div className="text-center">
            <p className="text-lg font-medium">Minutes</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold">59</span>
              <span className="text-red-600 text-3xl font-bold mx-1 flex items-center">:</span>
            </div>
          </div>

          {/* Seconds */}
          <div className="text-center">
            <p className="text-lg font-medium">Seconds</p>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold">56</span>
            </div>
          </div>
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

      {/* Category Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-12">
        {/* Category1 */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
            {/* Red Rectangle */}
            <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-md">
              -40%
            </div>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/F1.jpg"
                alt="F21"
                className="rounded-xl object-cover w-48 h-48"
              />
            </div>

            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 tracking-tight text-center bg-black text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
              <h1 className="text-base">Add To Cart</h1>
            </div>

            <div className="block lg:hidden absolute bottom-0 duration-500 z-[100] text-center text-white w-full p-4 shadow-lg">
              <h1 className="text-base font-extrabold tracking-tight">Add to Cart</h1>
            </div>

            {/* Heart and Eye Icons inside a circular box */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {/* Eye Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <IoEyeOutline size={20} />
              </div>
              {/* Heart Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <IoIosHeartEmpty size={20} />
              </div>
            </div>
          </div>

          {/* Heading below the category box */}
          <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">HAVIT HV-G92 Gamepad</h2>
          <p className="text-red-500 mr-32">$120 <del className="text-gray-500 font-bold">  $160</del></p>
          {/* Rating Stars and Number in a Single Line */}
          <p className="text-gray-500 mr-16 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(88)</span>
          </p>
        </div>
        {/* Category2 */}
      <div className="flex flex-col items-center">
      <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
        {/* Red Rectangle */}
        <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-md">
          -35%
        </div>

        {/* Image Centering */}
        <div className="flex justify-center items-center h-full">
          <img
            src="/F2.jpg"
            alt="F2"
            className="rounded-xl object-cover w-48 h-48"
          />
        </div>

        <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 tracking-tight text-center bg-black text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
          <h1 className="text-base">Add To Cart</h1>
        </div>

        <div className="block lg:hidden absolute bottom-0 duration-500 z-[100] text-center text-white w-full p-4 shadow-lg">
          <h1 className="text-base font-extrabold tracking-tight">Add to Cart</h1>
        </div>

        {/* Heart and Eye Icons inside a circular box */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {/* Eye Icon */}
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <IoEyeOutline size={20} />
          </div>
          {/* Heart Icon */}
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <IoIosHeartEmpty size={20} />
          </div>
        </div>
      </div>

      {/* Heading below the category box */}
      <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">AK -900 Wired Keyboard</h2>
      <p className="text-red-500 mr-32">$960 <del className="text-gray-500 font-bold">  $1160</del></p>
      {/* Rating Stars and Number in a Single Line */}
      <p className="text-gray-500 mr-16 flex items-center">
        <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(75)</span>
      </p>
      </div>

        {/* Category3 */}
        <div className="flex flex-col items-center">
        <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
          {/* Red Rectangle */}
          <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-md">
            -30%
          </div>

          {/* Image Centering */}
          <div className="flex justify-center items-center h-full">
            <img
              src="/F3.jpg"
              alt="F3"
              className="rounded-xl object-cover w-48 h-48"
            />
          </div>

          <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 tracking-tight text-center bg-black text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
            <h1 className="text-base">Add To Cart</h1>
          </div>

          <div className="block lg:hidden absolute bottom-0 duration-500 z-[100] text-center text-white w-full p-4 shadow-lg">
            <h1 className="text-base font-extrabold tracking-tight">Add to Cart</h1>
          </div>

          {/* Heart and Eye Icons inside a circular box */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            {/* Eye Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <IoEyeOutline size={20} />
            </div>
            {/* Heart Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <IoIosHeartEmpty size={20} />
            </div>
          </div>
        </div>

        {/* Heading below the category box */}
        <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">IPS LCD Gaming Monitor</h2>
        <p className="text-red-500 mr-32">$370 <del className="text-gray-500 font-bold">  $400</del></p>
        {/* Rating Stars and Number in a Single Line */}
        <p className="text-gray-500 mr-16 flex items-center">
          <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(99)</span>
        </p>
        </div>

      {/* Category4 */}
      <div className="flex flex-col items-center">
      <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
        {/* Red Rectangle */}
        <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-md">
          -25%
        </div>

        {/* Image Centering */}
        <div className="flex justify-center items-center h-full">
          <img
            src="/F4.png"
            alt="F4"
            className="rounded-xl object-cover w-48 h-48"
          />
        </div>

        <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 tracking-tight text-center bg-black text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
          <h1 className="text-base">Add To Cart</h1>
        </div>

        <div className="block lg:hidden absolute bottom-0 duration-500 z-[100] text-center text-white w-full p-4 shadow-lg">
          <h1 className="text-base font-extrabold tracking-tight">Add to Cart</h1>
        </div>

        {/* Heart and Eye Icons inside a circular box */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {/* Eye Icon */}
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <IoEyeOutline size={20} />
          </div>
          {/* Heart Icon */}
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <IoIosHeartEmpty size={20} />
          </div>
        </div>
      </div>

      {/* Heading below the category box */}
      <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">S-Series Comfort Chair</h2>
      <p className="text-red-500 mr-32">$375 <del className="text-gray-500 font-bold">  $400</del></p>
      {/* Rating Stars and Number in a Single Line */}
      <p className="text-gray-500 mr-16 flex items-center">
        <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(99)</span>
      </p>
      </div>
      </div>

      {/* Centered "View All Products" Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white h-16 w-62 py-2 px-6 rounded-md">
          View All Products
        </button>
      </div>
      {/* Line */}
      <div className="flex justify-center mt-16">
        <div className="w-full h-1 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Sale;
