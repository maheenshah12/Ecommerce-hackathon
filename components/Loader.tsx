import React from "react";
import star from "@/app/assets/star.png";
import Image from "next/image";
const Loader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-white p-10 flex items-center justify-center ">
        <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-800 animate-spin-slow"/>
        <Image
          src={star}
          alt="loader Image"
          className="w-14 h-14 object-cover"
        />
        </div>
      </div>
    </>
  );
};

export default Loader;
