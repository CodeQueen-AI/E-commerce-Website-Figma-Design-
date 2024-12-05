// pages/about.js
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-8 md:flex md:items-center md:justify-between bg-white rounded-lg shadow-lg">
        <div className="md:w-1/2 w-full md:pr-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut aliquet volutpat tortor, a sollicitudin sapien scelerisque ut. Fusce nec arcu 
            id risus elementum varius. Nunc malesuada nisl vitae nisi pharetra, eget tincidunt 
            sapien tincidunt.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Curabitur ut ultricies metus. Donec facilisis nunc sit amet dui dignissim, a sodales 
            lectus faucibus. Proin in ante at libero sodales bibendum id vel lorem. Nullam eu 
            neque velit.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <img
            src="/About.png"
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
