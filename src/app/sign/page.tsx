// pages/signup.js
import React from 'react';

export default function Signup() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full bg-cover bg-center" style={{ backgroundImage: "url('/Sign.png')" }}>
          {/* Placeholder for the image */}
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Account</h2>
          <p className="text-gray-600 mb-6">Fill out the information below to get started.</p>

          {/* Form */}
          <form>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-0 text-gray-500 text-sm transition-all duration-200"
              >
                Name
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 text-gray-500 text-sm transition-all duration-200"
              >
                Email
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-transparent"
              />
              <label
                htmlFor="phone"
                className="absolute top-0 left-0 text-gray-500 text-sm transition-all duration-200"
              >
                Phone
              </label>
            </div>

            <button className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded shadow hover:bg-red-600">
              Create an Account
            </button>

            <button
              type="button"
              className="mt-4 w-full py-2 px-4 border border-gray-300 text-gray-700 font-bold rounded shadow hover:bg-gray-100"
            >
              Create Account with Google
            </button>
          </form>

          {/* Already have an account */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
