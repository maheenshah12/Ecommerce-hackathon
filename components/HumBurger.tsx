'use client'
import React from 'react'
import Image from "next/image";
import {useState} from "react";
// import humburger from "@/app/assets/humburger.png";
import humburger from "@/app/assets/humburger.png";
import Link from 'next/link';
// import vector from "@/app/assets/Vector.png";
import vector from "@/app/assets/vector.png";


const HumBurger = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* humburger menu for mobile */}
    <div className="lg:hidden">
   <Image src={humburger} alt="humburger" className="w-6 h-6 cursor-pointer"
     onClick={() => setMenuOpen(!menuOpen)}/>
    </div>

    {/* for humBurger */}
    <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-gray-950 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            {/* <IoMdClose /> */}
             <Image src={vector} alt="Close Icon" className="text-black"/>
          </button>

          {/* Center Heading */}
          <div className="flex justify-center items-center h-[80px] border-b-2">
            <h2 className="text-white font-bold font-font text-xl lg:text-[32px] mb-2">SHOP.Co</h2>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-black">
            <Link href={"/"} className="hover:underline text-white hover:text-gray-700 transition duration-200">
              Shop
            </Link>
            <Link href={"/Onsale"}  className="hover:underline text-white hover:text-gray-700 transition duration-200">
              On Sale
            </Link>
            <Link href={"/Onsale"}  className="hover:underline text-white hover:text-gray-700 transition duration-200">
              New Arrivals
            </Link>
            <Link href={"/Onsale"} className="hover:underline text-white hover:text-gray-700 transition duration-200">
              Brands
            </Link>
          </ul>

        </div>
      {/* </div> */}



    </>
  )
}

export default HumBurger
