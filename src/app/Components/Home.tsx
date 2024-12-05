import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
           {/* Vertical Items and Line */}
        <div className="flex items-start ml-20 mr-20">
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center mt-8'>Woman's Fashion <IoIosArrowForward className='ml-9 mt-1 text-xl font-bold'/></li>
            <li className='flex items-center'>Men's Fashion <IoIosArrowForward className='ml-16 mt-1 text-xl font-bold'/></li>
            <li className='flex items-center'>Electronics</li>
            <li className='flex items-center'>Home & Lifestyle</li>
            <li className='flex items-center'>Medicine</li>
            <li className='flex items-center'>Sports & Outdoor</li>
            <li className='flex items-center'>Baby's & Toys</li>
            <li className='flex items-center'>Groceries & Pets</li>
            <li className='flex items-center'>Health & Beauty</li>
          </ul>
        <div className="flex flex-col justify-start ml-8">
            <hr className="border-l-2 border-gray-300 h-96" />
            <img 
              src="/Home img.png" 
              alt="Image" 
              className="absolute top-30 right-10 mt-8" 
              style={{ maxHeight: '80%', width: 'auto' }}/>
        </div>
        </div>
        </div>
  );
};

export default Home;