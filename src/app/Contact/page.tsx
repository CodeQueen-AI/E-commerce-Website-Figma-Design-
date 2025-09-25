import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 rounded-lg">
      <div className="flex">
        
        {/* Left side box (Call Us and Write to Us) */}
        <div className="flex flex-col w-1/3 p-6 space-y-6 absolute left-0">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <div className="p-2 rounded-full bg-red-500 cursor-pointer transition duration-200 flex items-center justify-center">
              <MdOutlinePhone className="text-white" size={30} />
            </div>
            Call To Us
          </h1>
          <p className="text-lg text-black">We are available 24/7, 7 days a week. <br />Phone: +8801611112222</p>

          <hr className="border-t-2 border-gray-300" />

          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <div className="p-2 rounded-full bg-red-500 cursor-pointer transition duration-200 flex items-center justify-center">
              <MdOutlineEmail className="text-white" size={30} />
            </div>
            Write To Us
          </h1>
          <p className="text-lg text-black">Fill out our form and we will contact<br />you within 24 hours</p>
        </div>

        {/* Right side box (Contact Form) */}
        <div className="flex flex-col w-2/3 p-6 bg-white shadow-md rounded-lg ml-[33%]">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Form</h3>
          <form className="space-y-4">
            {/* Name and Email in the same line */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Message input */}
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={4}
            ></textarea>

            {/* Send button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

