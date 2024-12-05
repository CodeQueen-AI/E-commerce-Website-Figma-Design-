import React from 'react';

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Header Section */}
        <div className="flex items-center justify-between w-full mb-10 pl-5">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <div className="w-4 h-10 rounded bg-red-600 mr-3"></div>
              <p className="text-red-600 font-bold text-lg">This Month</p>
            </div>
            <p className="text-3xl font-semibold text-black">Best Selling Products</p>
          </div>
        </div>
        {/* End of Header Section */}
        
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="relative md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="N1.png"
              />
              <div className="absolute bottom-0 left-6 p-4 text-white">
                <h2 className="text-lg font-medium mb-2">PlayStation 5</h2>
                <p className="text-sm mb-2">Black and white version of the PS5 <br /> coming out on sale.</p>
                <a href="#" className="text-white underline">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="relative md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="N2.png"
              />
              <div className="absolute bottom-0 left-6 p-4 text-white">
                <h2 className="text-lg font-medium mb-2">Women's Collections</h2>
                <p className="text-sm mb-2">Featured women collections that give you another vibe.</p>
                <a href="#" className="text-white underline">Shop Now</a>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="N3.png"
              />
              <div className="absolute bottom-0 left-6 p-4 text-white">
                <h2 className="text-lg font-medium mb-2">Speakers</h2>
                <p className="text-sm mb-2">Amazon wireless speakers.</p>
                <a href="#" className="text-white underline">Shop Now</a>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="N4.png"
              />
              <div className="absolute bottom-0 left-6 p-4 text-white">
                <h2 className="text-lg font-medium mb-2">Perfume</h2>
                <p className="text-sm mb-2">GUCCI INTENSE OUD</p>
                <a href="#" className="text-white underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
