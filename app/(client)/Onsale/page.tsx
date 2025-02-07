// "use client";
// import { useRouter } from "next/navigation";
// // import Footer from "@/components/footer";
// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import filter from "@/app/assets/filter.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import downward from "@/app/assets/downward.png";
// import page2shirt from "@/app/assets/page 2 shirt.png";
// import page2stars from "@/app/assets/page 2 stars.png";
// import page2shirt1 from "@/app/assets/page 2 shirt 1.png";
// import page2stars2 from "@/app/assets/page 2 stars2.png";
// import page2shirt2 from "@/app/assets/page 2 shirt 2.png";
// import page2stars3 from "@/app/assets/page 2 stars3.png";
// import page2jeans from "@/app/assets/page 2 jeans.png";
// import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
// import page2shirt4 from "@/app/assets/page 2 shirt 4.png";
// import page2shirt5 from "@/app/assets/page 2 shirt 5.png";
// import page2shirt6 from "@/app/assets/page 2 shirt 6.png";
// import page2shorts from "@/app/assets/page 2 jeans1.png";
// import Filter from "@/components/filter";
// import Number from "@/components/numbers";

// export default function OnSale() {
//   // for new page routing
//   const router = useRouter();

//   const handleImageClick = () => {
//     // for navigation to the next page
//     router.push("/onsale/Details");
//   };
//   return (
//     <>
//       <main className="pb-2">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <div className="flex items-center gap-4 relative pl-12">
//           <div>
//             <Link href={"/"} className="text-gray-400 ">
//               Home
//             </Link>
//           </div>
//           <Image src={greaterthan} alt="" className="w-3 h-3" />
//           <p className="font-font">Casual</p>
//         </div>

//         <div className="flex p-5 md:space-x-5 items-start">
//             < Filter/>

//           {/* right side */}
//           {/* //////////////////////////// */}
//           <div className="flex flex-col w-full space-y-5">
//             {/* Red Div */}
//             <div className=" flex-col w-full">
//               {/* <!-- Main Container --> */}
//               <div className="flex flex-wrap items-center justify-between space-y-0">
//                 {/* <!-- Left Section --> */}
//                 <div className="flex items-center justify-between w-full sm:w-auto">
//                   {/* Casual text visible on large screens */}
//                   <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 sm:block hidden">
//                     Casual
//                   </h1>
//                 </div>

//                 {/* <!-- Right Section --> */}
//                 <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
//                   {/* "Showing 1-10 of 100 Products" text visible on large screens */}
//                   <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
//                     Showing 1-10 of 100 Products
//                   </span>

//                   {/* Sort by dropdown, visible on medium and larger screens */}
//                   <div className="hidden sm:flex items-center space-x-2">
//                     <span className="text-sm md:text-base text-gray-600">
//                       Sort by:
//                     </span>
//                     <span className="font-medium text-sm md:text-base">
//                       Most Popular
//                     </span>
//                     <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Below section for mobile, where filter icon and text align together */}
//               <div className="sm:hidden flex items-center justify-between">
//                 {/* Casual text visible only on mobile */}
//                 <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">
//                   Casual
//                 </h1>

//                 {/* "Showing 1-10 of 100 Products" text visible only on mobile */}
//                 <span className="text-sm md:text-base text-gray-600">
//                   Showing 1-10 of 100 Products
//                 </span>

//                 {/* Filter icon for mobile */}
//                 <button
//                   type="button"
//                   className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
//                   aria-haspopup="dialog"
//                   aria-expanded="false"
//                   aria-controls="radix-:r1e:"
//                   data-state="closed"
//                 >
//                   <Image src={filter} alt="Filter" />
//                 </button>

//                 {/* <Image src={filter} alt="Filter Icon" className="w-6 h-6" /> */}
//               </div>
//             </div>

//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               <div className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt}
//                     onClick={handleImageClick}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </div>

//               {/* 2 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt1}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Polo with Tipping Details
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars2} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>
//               {/* 3 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt2}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Black Striped T-shirt
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars3} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $120
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>
//               {/* 4 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2jeans}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SKINNY FIT JEANS
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $240
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $260
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>
//               {/* 5 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt3}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars2} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>
//               {/* 6 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt4}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SLEEVE STRIPED T-SHIRT
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars3} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $130
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">
//                     -30%
//                   </span>
//                 </div>
//               </a>
//               {/* 7 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt5}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   VERTICAL STRIPED SHIRT
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars3} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $212
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $232
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>
//               {/* 8 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shirt6}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   COURAGE GRAPHIC T-SHIRT
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </a>
//               {/* 9 same div */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
//                   <Image
//                     src={page2shorts}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   LOOSE FIT BERMUDA SHORTS
//                 </strong>{" "}
//                 {/* Adjusted margin-bottom */}
//                 <div className="flex items-center mb-1">
//                   {" "}
//                   {/* Adjusted margin-bottom to reduce gap */}
//                   <Image src={page2stars} alt="" className="-mt-6" />{" "}
//                   {/* Stars image size adjustment if needed */}
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $80
//                   </span>
//                 </div>
//               </a>
//             </div>
//             {/* end */}
//             <hr className="border-t-black/10" />
//           <Number/>
//           </div>
//           {/* end */}
//         </div>
//       </main>
//       {/* <Footer/> */}
//     </>
//   );
// }

// /////////////////////////////////////
// 2 gpt code
// "use client";
// import { useRouter } from "next/navigation";
// import * as React from "react";
// import { useState } from "react"; // Import useState for managing filter modal visibility
// import Link from "next/link";
// import Image from "next/image";
// import filter from "@/app/assets/filter.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import downward from "@/app/assets/downward.png";
// import page2shirt from "@/app/assets/page 2 shirt.png";
// import page2stars from "@/app/assets/page 2 stars.png";
// import page2shirt1 from "@/app/assets/page 2 shirt 1.png";
// import page2stars2 from "@/app/assets/page 2 stars2.png";
// import page2shirt2 from "@/app/assets/page 2 shirt 2.png";
// import page2stars3 from "@/app/assets/page 2 stars3.png";
// import page2jeans from "@/app/assets/page 2 jeans.png";
// import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
// import page2shirt4 from "@/app/assets/page 2 shirt 4.png";
// import page2shirt5 from "@/app/assets/page 2 shirt 5.png";
// import page2shirt6 from "@/app/assets/page 2 shirt 6.png";
// import page2shorts from "@/app/assets/page 2 jeans1.png";
// import Filter from "@/components/filter";
// import Number from "@/components/numbers";

// export default function OnSale() {
//   const router = useRouter();
//   // State to control mobile filter modal visibility
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const handleImageClick = () => {
//     router.push("/onsale/Details");
//   };

//   return (
//     <>
//       <main className="pb-2">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <div className="flex items-center gap-4 relative pl-12">
//           <div>
//             <Link href={"/"} className="text-gray-400">
//               Home
//             </Link>
//           </div>
//           <Image src={greaterthan} alt="" className="w-3 h-3" />
//           <p className="font-font">Casual</p>
//         </div>

//         <div className="flex p-5 md:space-x-5 items-start">
//           {/* Desktop Filter Sidebar: Visible on md and larger screens */}
//           <div className="hidden md:block">
//             <Filter />
//           </div>

//           {/* Right side / Main Content Area */}
//           <div className="flex flex-col w-full space-y-5">
//             {/* Header Section */}
//             <div className="flex-col w-full">
//               <div className="flex flex-wrap items-center justify-between space-y-0">
//                 {/* Left Section (Desktop Title) */}
//                 <div className="flex items-center justify-between w-full sm:w-auto">
//                   <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 sm:block hidden">
//                     Casual
//                   </h1>
//                 </div>

//                 {/* Right Section (Desktop Sort Info) */}
//                 <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
//                   <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
//                     Showing 1-10 of 100 Products
//                   </span>
//                   <div className="hidden sm:flex items-center space-x-2">
//                     <span className="text-sm md:text-base text-gray-600">
//                       Sort by:
//                     </span>
//                     <span className="font-medium text-sm md:text-base">
//                       Most Popular
//                     </span>
//                     <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Header */}
//               <div className="sm:hidden flex items-center justify-between">
//                 <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">
//                   Casual
//                 </h1>
//                 <span className="text-sm md:text-base text-gray-600">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 {/* Mobile Filter Button */}
//                 <button
//                   type="button"
//                   onClick={() => setIsFilterOpen(true)}
//                   className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
//                   aria-haspopup="dialog"
//                   aria-expanded={isFilterOpen}
//                   aria-controls="mobile-filter"
//                 >
//                   <Image src={filter} alt="Filter" />
//                 </button>
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               {/* Product Item 1 */}
//               <div className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt}
//                     onClick={handleImageClick}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </div>

//               {/* Product Item 2 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt1}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Polo with Tipping Details
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars2} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 3 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt2}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Black Striped T-shirt
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars3} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $120
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6 p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 4 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2jeans}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SKINNY FIT JEANS
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $240
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $260
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6 p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 5 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt3}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars2} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 6 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt4}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SLEEVE STRIPED T-SHIRT
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars3} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $130
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6 p-2 relative ml-3">
//                     -30%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 7 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt5}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   VERTICAL STRIPED SHIRT
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars3} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $212
//                   </span>
//                   <span className="text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl">
//                     $232
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl -mt-6 p-2 relative ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 8 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt6}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   COURAGE GRAPHIC T-SHIRT
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 9 */}
//               <a
//                 href="./"
//                 className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shorts}
//                     alt=""
//                     width="295"
//                     height="298"
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   LOOSE FIT BERMUDA SHORTS
//                 </strong>
//                 <div className="flex items-center mb-1">
//                   <Image src={page2stars} alt="" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-[5px] xl:space-x-2.5">
//                   <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
//                     $80
//                   </span>
//                 </div>
//               </a>
//             </div>

//             <hr className="border-t-black/10" />
//             <Number />
//           </div>
//         </div>
//       </main>

//       {/* Mobile Filter Modal */}
//       {isFilterOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 z-40 bg-black/50"
//             onClick={() => setIsFilterOpen(false)}
//           />
//           {/* Modal sliding up from the bottom */}
//           <div
//             id="mobile-filter"
//             className="fixed inset-x-0 bottom-0 z-50 bg-white p-4 rounded-t-lg shadow-lg transform transition-transform duration-300"
//           >
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setIsFilterOpen(false)}
//                 className="text-gray-500"
//               >
//                 Close
//               </button>
//             </div>
//             <Filter />
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// //////////////////////////////////////////////
// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// // Asset imports
// import filter from "@/app/assets/filter.png";
// import greaterthan from "@/app/assets/greaterthan.png";
// import downward from "@/app/assets/downward.png";
// import page2shirt from "@/app/assets/page 2 shirt.png";
// import page2stars from "@/app/assets/page 2 stars.png";
// import page2shirt1 from "@/app/assets/page 2 shirt 1.png";
// import page2stars2 from "@/app/assets/page 2 stars2.png";
// import page2shirt2 from "@/app/assets/page 2 shirt 2.png";
// import page2stars3 from "@/app/assets/page 2 stars3.png";
// import page2jeans from "@/app/assets/page 2 jeans.png";
// import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
// import page2shirt4 from "@/app/assets/page 2 shirt 4.png";
// import page2shirt5 from "@/app/assets/page 2 shirt 5.png";
// import page2shirt6 from "@/app/assets/page 2 shirt 6.png";
// import page2shorts from "@/app/assets/page 2 jeans1.png";

// // Component imports
// import Filter from "@/components/filter";
// import Number from "@/components/numbers";

// export default function OnSale() {
//   const router = useRouter();
//   // State to control mobile filter modal visibility
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const handleImageClick = () => {
//     router.push("/onsale/Details");
//   };

//   return (
//     <>
//       <main className="pb-2">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <div className="flex items-center gap-4 relative pl-12">
//           <div>
//             <Link href="/" className="text-gray-400">
//               Home
//             </Link>
//           </div>
//           <Image src={greaterthan} alt=">" className="w-3 h-3" />
//           <p className="font-font">Casual</p>
//         </div>

//         <div className="flex p-5 md:space-x-5 items-start">
//           {/* Desktop Filter Sidebar (visible on md and larger screens) */}
//           <div className="hidden md:block">
//             <Filter />
//           </div>

//           {/* Main Content Area */}
//           <div className="flex flex-col w-full space-y-5">
//             {/* Header Section */}
//             <div className="flex-col w-full">
//               <div className="flex flex-wrap items-center justify-between space-y-0">
//                 {/* Desktop Title */}
//                 <div className="flex items-center justify-between w-full sm:w-auto">
//                   <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 hidden sm:block">
//                     Casual
//                   </h1>
//                 </div>

//                 {/* Desktop Sort Info */}
//                 <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
//                   <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
//                     Showing 1-10 of 100 Products
//                   </span>
//                   <div className="hidden sm:flex items-center space-x-2">
//                     <span className="text-sm md:text-base text-gray-600">
//                       Sort by:
//                     </span>
//                     <span className="font-medium text-sm md:text-base">
//                       Most Popular
//                     </span>
//                     <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Header */}
//               <div className="sm:hidden flex items-center justify-between">
//                 <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">
//                   Casual
//                 </h1>
//                 <span className="text-sm md:text-base text-gray-600">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 {/* Mobile Filter Button */}
//                 <button
//                   type="button"
//                   onClick={() => {
//                     console.log("Opening filter modal");
//                     setIsFilterOpen(true);
//                   }}
//                   className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
//                   aria-haspopup="dialog"
//                   aria-expanded={isFilterOpen}
//                   aria-controls="mobile-filter"
//                 >
//                   <Image src={filter} alt="Filter" />
//                 </button>
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               {/* Product Item 1 */}
//               <div className="flex flex-col gap-4">
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt}
//                     onClick={handleImageClick}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </div>

//               {/* Product Item 2 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt1}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Polo with Tipping Details
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars2} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 3 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt2}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Black Striped T-shirt
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars3} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $120
//                   </span>
//                   <span className="text-gray-600 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl p-2 ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 4 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2jeans}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SKINNY FIT JEANS
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $240
//                   </span>
//                   <span className="text-gray-600 font-bold line-through text-xl xl:text-2xl">
//                     $260
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl p-2 ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 5 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt3}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   Gradient Graphic T-shirt
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars2} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $180
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 6 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt4}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   SLEEVE STRIPED T-SHIRT
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars3} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $130
//                   </span>
//                   <span className="text-gray-600 font-bold line-through text-xl xl:text-2xl">
//                     $160
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl p-2 ml-3">
//                     -30%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 7 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt5}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   VERTICAL STRIPED SHIRT
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars3} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $212
//                   </span>
//                   <span className="text-gray-600 font-bold line-through text-xl xl:text-2xl">
//                     $232
//                   </span>
//                   <span className="text-red-500 bg-red-200 rounded-2xl p-2 ml-3">
//                     -20%
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 8 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shirt6}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   COURAGE GRAPHIC T-SHIRT
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $145
//                   </span>
//                 </div>
//               </a>

//               {/* Product Item 9 */}
//               <a
//                 href="./"
//                 className="flex flex-col gap-4"
//               >
//                 <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full overflow-hidden">
//                   <Image
//                     src={page2shorts}
//                     alt=""
//                     width={295}
//                     height={298}
//                     className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//                 <strong className="text-black font-bold xl:text-xl mb-1.5">
//                   LOOSE FIT BERMUDA SHORTS
//                 </strong>
//                 <div className="flex items-center">
//                   <Image src={page2stars} alt="Stars" className="-mt-6" />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-black text-xl xl:text-2xl">
//                     $80
//                   </span>
//                 </div>
//               </a>
//             </div>

//             <hr className="border-t-black/10" />
//             <Number />
//           </div>
//         </div>
//       </main>

//       {/* Mobile Filter Modal */}
//       {isFilterOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 z-40 bg-black/50"
//             onClick={() => setIsFilterOpen(false)}
//           />
//           {/* Modal Container */}
//           <div
//             id="mobile-filter"
//             className="fixed inset-x-0 bottom-0 z-50 bg-white p-4 rounded-t-lg shadow-lg transform transition-transform duration-300"
//           >
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setIsFilterOpen(false)}
//                 className="text-gray-500"
//               >
//                 Close
//               </button>
//             </div>
//             <Filter />
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// ////////////////////////////

// import Link from "next/link";
// import Image from "next/image";
// import greaterthan from "@/app/assets/greaterthan.png";
// import downward from "@/app/assets/downward.png";
// import { getAllProducts } from "@/sanity/helpers";
// // Component imports
// import Filter from "@/components/filter";
// import Number from "@/components/numbers";
// import ResponsiveButton from "@/components/responsive_button";
// import Practice from "@/components/practice";

// export default async function OnSale() {
//   const products = await getAllProducts();

//   return (
//     <>
//       <main className="pb-2">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <div className="flex items-center gap-4 relative pl-12">
//           <div>
//             <Link href="/" className="text-gray-400">
//               Home
//             </Link>
//           </div>
//           <Image src={greaterthan} alt=">" className="w-3 h-3" />
//           <p className="font-font">Casual</p>
//         </div>

//         <div className="flex p-5 md:space-x-5 items-start">
//           {/* Desktop Filter Sidebar (visible on md and larger screens) */}
//           <div className="hidden md:block">
//             <Filter />
//           </div>

//           {/* Main Content Area */}
//           <div className="flex flex-col w-full space-y-5">
//             {/* Header Section */}
//             <div className="flex-col w-full">
//               <div className="flex flex-wrap items-center justify-between space-y-0">
//                 {/* Desktop Title */}
//                 <div className="flex items-center justify-between w-full sm:w-auto">
//                   <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 hidden sm:block">
//                     Casual
//                   </h1>
//                 </div>

//                 {/* Desktop Sort Info */}
//                 <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
//                   <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
//                     Showing 1-10 of 100 Products
//                   </span>
//                   <div className="hidden sm:flex items-center space-x-2">
//                     <span className="text-sm md:text-base text-gray-600">
//                       Sort by:
//                     </span>
//                     <span className="font-medium text-sm md:text-base">
//                       Most Popular
//                     </span>
//                     <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Header */}
//               <div className="sm:hidden flex items-center justify-between">
//                 <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">
//                   Casual
//                 </h1>
//                 <span className="text-sm md:text-base text-gray-600">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 {/* Mobile Filter Button */}
//                 <ResponsiveButton />
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="w-full bg-blue-600 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               {/*  start copy code */}

//               <div className="flex bg-orange-400 flex-col gap-4">
//                 <Practice products={products} />
//               </div>
//               {/* end copy code */}
//             </div>
//             {/* end of divs */}

//             <hr className="border-t-black/10" />
//             <Number />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
////////////////////////////
// ///////////////////////////
// import Link from "next/link";
// import Image from "next/image";
// import greaterthan from "@/app/assets/greaterthan.png";
// import downward from "@/app/assets/downward.png";
// import { getAllProducts } from "@/sanity/helpers";
// // Component imports
// import Filter from "@/components/filter";
// import Number from "@/components/numbers";
// import ResponsiveButton from "@/components/responsive_button";
// import Practice from "@/components/practice";

// export default async function OnSale() {
//   const products = await getAllProducts();

//   return (
//     <>
//       <main className="pb-2">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <div className="flex items-center gap-4 relative pl-12">
//           <div>
//             <Link href="/" className="text-gray-400">
//               Home
//             </Link>
//           </div>
//           <Image src={greaterthan} alt=">" className="w-3 h-3" />
//           <p className="font-font">Casual</p>
//         </div>

//         <div className="flex p-5 md:space-x-5 items-start">
//           {/* Desktop Filter Sidebar (visible on md and larger screens) */}
//           <div className="hidden md:block">
//             <Filter />
//           </div>

//           {/* Main Content Area */}
//           <div className="flex flex-col w-full space-y-5">
//             {/* Header Section */}
//             <div className="flex-col w-full">
//               <div className="flex flex-wrap items-center justify-between space-y-0">
//                 {/* Desktop Title */}
//                 <div className="flex items-center justify-between w-full sm:w-auto">
//                   <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 hidden sm:block">
//                     Casual
//                   </h1>
//                 </div>

//                 {/* Desktop Sort Info */}
//                 <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
//                   <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
//                     Showing 1-10 of 100 Products
//                   </span>
//                   <div className="hidden sm:flex items-center space-x-2">
//                     <span className="text-sm md:text-base text-gray-600">
//                       Sort by:
//                     </span>
//                     <span className="font-medium text-sm md:text-base">
//                       Most Popular
//                     </span>
//                     <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Header */}
//               <div className="sm:hidden flex items-center justify-between">
//                 <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">
//                   Casual
//                 </h1>
//                 <span className="text-sm md:text-base text-gray-600">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 {/* Mobile Filter Button flex bg-orange-400 flex-col gap-4*/}
//                 <ResponsiveButton />
//               </div>
//             </div>

//             {/* Products Grid w-full bg-blue-600 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5*/}
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               <div className="flex flex-col items-start aspect-auto">
//                 <Practice products={products} />
//               </div>
//             </div>

//             <hr className="border-t-black/10" />
//             <Number />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// //////////////////////
import Link from "next/link";
import Image from "next/image";
import greaterthan from "@/app/assets/greaterthan.png";
import downward from "@/app/assets/downward.png";
import { getAllProducts } from "@/sanity/helpers";

// Component imports
import Filter from "@/components/filter";
import Number from "@/components/numbers";
import ResponsiveButton from "@/components/responsive_button";
import Practice from "@/components/practice";

export default async function OnSale() {
  const products = await getAllProducts();

  return (
    <main className="pb-2">
      {/* Horizontal Line */}
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 sm:gap-4 px-4 sm:px-12">
        <Link href="/" className="text-gray-400 text-sm sm:text-base">
          Home
        </Link>
        <Image src={greaterthan} alt=">" className="w-3 h-3" />
        <p className="font-font text-sm sm:text-base">Casual</p>
      </div>

      {/* Page Content */}
      <div className="flex flex-col md:flex-row p-5 md:space-x-5">
        {/* Sidebar Filter - Hidden on small screens */}
        <div className="hidden md:block">
          <Filter />
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full space-y-5">
          {/* Header Section */}
          <div className="flex flex-wrap items-center justify-between">
            {/* Desktop Title */}
            <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] hidden sm:block">
              Casual
            </h1>

            {/* Desktop Sort Info */}
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm md:text-base text-gray-600">
                Showing 1-10 of 100 Products
              </span>
              <span className="text-sm md:text-base text-gray-600">|</span>
              <span className="font-medium text-sm md:text-base">
                Most Popular
              </span>
              <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden flex items-center justify-between space-y-5">
            <h1 className="font-bold text-lg">Casual</h1>
            <span className="text-sm text-gray-600">1-10 of 100</span>
            <ResponsiveButton />
          </div>

          {/* Products Grid */}
          {/* <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"> */}
            {/* <div className="flex flex-col items-start"> */}
              <Practice products={products} />
            {/* </div> */}
          {/* </div> */}

          {/* Footer Pagination */}
          <hr className="border-t-black/10" />
          <Number />
        </div>
      </div>
    </main>
  );
}

