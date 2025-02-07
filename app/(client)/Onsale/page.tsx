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

