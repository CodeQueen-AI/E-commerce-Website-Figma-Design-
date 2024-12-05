import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Sale = () => {
  return (
    <div className="mt-32 mx-20">
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="w-4 h-10 rounded bg-red-600 mr-3"></div>
            <p className="text-red-600 font-bold text-lg">Our Products</p>
          </div>
          <p className="text-3xl font-semibold">Explore Our Products</p>
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
        {/* Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-12">
          {/* Category1 */}
          <div className="flex flex-col items-center">
          <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

            {/* Image Centering */}
            <div className="flex justify-center items-center h-full">
              <img
                src="/P1.png"
                alt="P1"
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
          <h2 className="mt-4 ml-5 text-xl font-semibold whitespace-nowrap">Breed Dry Dog Food</h2> 
            <div className="flex items-center mt-2">
            <p className="text-red-500 mr-4">$100</p>
            <p className="text-gray-500 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(35)</span>
            </p>
          </div>
          </div>

           {/* Category2 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

              {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P2.png"
                  alt="P2"
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
            <h2 className="mt-4 ml-5 text-xl font-semibold whitespace-nowrap">CANON EOS DSLR Camera</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$360</p>
              <p className="text-gray-500 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(95)</span>
              </p>
          </div>
          </div>

          {/* Category3 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

              {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P3.png"
                  alt="P3"
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
            <h2 className="mt-4 ml-5 text-xl font-semibold whitespace-nowrap">ASUS FHD Gaming Laptop</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$700</p>
              <p className="text-gray-500 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(325)</span>
              </p>
          </div>
          </div>

           {/* Category4 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

              {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P4.png"
                  alt="P4"
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
            <h2 className="mt-4 ml-5 text-xl font-semibold whitespace-nowrap">Curology Product Set</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$500</p>
              <p className="text-gray-500 flex items-center">
            <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(145)</span>
              </p>
          </div>
          </div>

          {/* Category5 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
              {/* Red Rectangle */}
              <div className="absolute top-5 left-5 bg-[#00FF66]  text-white text-sm font-bold py-1 px-3 rounded-md">
                NEW
              </div>

              {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P5.png"
                  alt="P5"
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
            <h2 className="mt-4 ml-2 text-xl font-semibold whitespace-nowrap">Kids Electric Car</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$960</p>
              <p className="text-gray-500 flex items-center">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(65)</span>
              </p>
          </div>
          {/* Red Circles Section */}
          <div className="flex mt-4 space-x-4">
          <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-black ring-2 ring-white"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          </div>
          </div>

          {/* Category6 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>

              {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P6.png"
                  alt="P6"
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
            <h2 className="mt-4 ml-2 text-xl font-semibold whitespace-nowrap">Jr,Zoom Soccer Cleats</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$1160</p>
              <p className="text-gray-500 flex items-center">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(35)</span>
              </p>
          </div>
          {/* Red Circles Section */}
          <div className="flex mt-4 space-x-4">
          <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black ring-2 ring-white"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          </div>
          </div>

          {/* Category7 */}
          <div className="flex flex-col items-center">
              <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
                {/* Red Rectangle */}
                <div className="absolute top-5 left-5 bg-[#00FF66]  text-white text-sm font-bold py-1 px-3 rounded-md">
                  NEW
                </div>

                {/* Image Centering */}
                <div className="flex justify-center items-center h-full">
                  <img
                    src="/P7.png"
                    alt="P7"
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
              <h2 className="mt-4 ml-2 text-xl font-semibold whitespace-nowrap">GP11 Shooter USB Gamepad</h2> 
                <div className="flex items-center mt-2">
                <p className="text-red-500 mr-4">$660</p>
                <p className="text-gray-500 flex items-center">
                <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(55)</span>
                </p>
            </div>
            {/* Red Circles Section */}
            <div className="flex mt-4 space-x-4">
            <div className="w-4 h-4 bg-black rounded-full border-2 border-black ring-2 ring-white"></div>
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Category8 */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden z-10 mx-auto group relative rounded-lg border-2 h-72 w-72 transition-all duration-300" style={{ backgroundColor: '#F5f5f5' }}>
          {/* Image Centering */}
              <div className="flex justify-center items-center h-full">
                <img
                  src="/P8.png"
                  alt="P8"
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
            <h2 className="mt-4 ml-2 text-xl font-semibold whitespace-nowrap">Quilted Satin Jacket</h2> 
              <div className="flex items-center mt-2">
              <p className="text-red-500 mr-4">$660</p>
              <p className="text-gray-500 flex items-center">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span className="ml-2 font-bold">(55)</span>
              </p>
          </div>
          {/* Red Circles Section */}
          <div className="flex mt-4 space-x-4">
          <div className="w-4 h-4 bg-black rounded-full border-2 border-black ring-2 ring-white"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          </div>

          </div>
        </div>

        {/*Button */}
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
