import React from 'react'

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[400px] w-full max-w-[1100px] mx-auto flex justify-between items-center px-10 mt-20"
      style={{ backgroundImage: 'url(Banner.png)' }} >
      
      {/* Content Section */}
      <div className="text-white text-left">
        <p className='text-[#00FF66] green-700 font-bold'>Categories</p>
        <h1 className="text-4xl font-semibold">Enhance Your <br />Music Experience</h1>
        
        <div className="flex gap-4 mt-4">
          {/* Circles */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-center text-black text-sm font-semibold">
            23 <br />Days
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-center text-black text-sm font-semibold">
            05 <br />Hours
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-center text-black text-sm font-semibold">
            59 <br />Minutes
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-center text-black text-sm font-semibold">
            35 <br />Seconds
          </div>
        </div>
        
        {/* Button */}
        <button className="bg-[#00FF66] text-white py-2 px-6 mt-6 rounded-md h-10 w-34 ">
         Buy Now!
        </button>
      </div>
    </div>
  )
}

export default Banner
