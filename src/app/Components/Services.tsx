import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import Link from "next/link";

export default function FeatureSection() {
  return (
    <div className="relative bg-white py-12">
      <div className="container mx-auto flex flex-col items-center space-y-8 md:flex-row md:justify-around md:space-y-0">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-8 border-gray-300 bg-black text-white shadow-md">
            <TbTruckDelivery size={30} />
          </div>
          <h3 className="text-lg font-bold mt-4">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 mt-2">Free delivery for all orders over $140</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-8 border-gray-300 bg-black text-white shadow-md">
            <PiHeadphones size={30} />
          </div>
          <h3 className="text-lg font-bold mt-4">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 mt-2">Friendly 24/7 customer support</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-8 border-gray-300 bg-black text-white shadow-md">
            <FaShieldAlt size={30} />
          </div>
          <h3 className="text-lg font-bold mt-4">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 mt-2">We return money within 30 days</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-2 right-4">
        <Link href="#">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-8 shadow-md cursor-pointer" style={{ backgroundColor: '#F5F5F5' }}>
            <span className="text-lg font-bold"><FaArrowUp /></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
