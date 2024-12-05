import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-5 flex flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <h2 className="text-lg font-bold">Exclusive</h2>
          <p className="mt-4">Subscribe</p>
          <p className="mt-2">Get 10% off your first order</p>
          <div className="mt-4">
            <div className="flex items-center bg-gray-800 text-white py-1 px-2 w-full max-w-xs border border-gray-600 rounded-md focus:outline-none">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white py-1 px-2 flex-grow focus:outline-none"
              />
              <button className="text-white px-2">
                <LuSendHorizontal/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-lg font-bold">Support</h2>
          <p className="mt-4">111 Bijoy sarani, Dhaka <br /> DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p className="mt-2">+88015-88888-9999</p>
        </div>
        <div className="w-full md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-lg font-bold">Account</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-lg font-bold">Quick Link</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-lg font-bold">Download App</h2>
          <p className="mt-4">Save $3 with App New User Only</p>
          <div className="mt-4">
            <img src="Footer1.png" alt="Google Play" className="mx-auto md:mx-0" />
          </div>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <FiFacebook/>
            <LuTwitter/>
            <FaInstagram/>
            <SlSocialLinkedin/>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-gray-500 text-sm text-center">© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
