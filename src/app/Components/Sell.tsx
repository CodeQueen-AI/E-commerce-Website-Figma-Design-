import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Product = () => {
  return (
    <div className="mt-32 mx-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="w-4 h-10 rounded bg-red-600 mr-3"></div>
            <p className="text-red-600 font-bold text-lg">This Month</p>
          </div>
          <p className="text-3xl font-semibold">Best Selling Products</p>
        </div>
        {/* Move the button to the right side */}
        <div className="ml-auto mt-6">
          <button className="bg-red-500 text-white h-16 w-44 py-2 px-6 rounded-md">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-12">
        {/* Category1 */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/S1.png"
                alt="s1"
                className="rounded-xl object-cover w-48 h-48"
              />
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
          <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">The north coat</h2>
          <p className="text-red-500 mr-32">$260 <del className="text-gray-500 font-bold">  $360</del></p>
          {/* Rating Stars and Number in a Single Line */}
          <p className="text-gray-500 mr-16 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(65)</span>
          </p>
        </div>

        {/* Category2 */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/S2.png"
                alt="S2"
                className="rounded-xl object-cover w-48 h-48"
              />
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
          <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">Gucci duffle bag</h2>
          <p className="text-red-500 mr-32">$960 <del className="text-gray-500 font-bold">  $1160</del></p>
          {/* Rating Stars and Number in a Single Line */}
          <p className="text-gray-500 mr-16 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(65)</span>
          </p>
        </div>

        {/* Category3 */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/S3.png"
                alt="S3"
                className="rounded-xl object-cover w-48 h-48"
              />
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
          <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">RGB liquid CPU Cooler</h2>
          <p className="text-red-500 mr-32">$160 <del className="text-gray-500 font-bold">  $170</del></p>
          {/* Rating Stars and Number in a Single Line */}
          <p className="text-gray-500 mr-16 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(65)</span>
          </p>
        </div>

        {/* Category4 */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/S4.png"
                alt="S4"
                className="rounded-xl object-cover w-48 h-48"
              />
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
          <h2 className="mt-4 ml-10 text-xl font-semibold whitespace-nowrap">Small Bookself</h2>
          <p className="text-red-500 mr-32">$360</p>
          {/* Rating Stars and Number in a Single Line */}
          <p className="text-gray-500 mr-16 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(65)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
