// // import Image from "next/image";
// // // import Footer from "@/components/footer";
// // import page2shirt from "@/app/assets/multi shirt.png";
// // import greaterthan from "@/app/assets/greaterthan.png";
// // import dustbin from "@/app/assets/dustbin.png";
// // import minus from "@/app/assets/minus.png";
// // import plus from "@/app/assets/plus.png";
// // import page2jeans  from "@/app/assets/page 2 jeans.png";
// // import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
// // import coupon from "@/app/assets/coupon.png";
// // // import rightarrow from "@/app/assets/right arrow.png";
// // import { FaArrowRight } from "react-icons/fa";

// // export default function Cart(){
// //     return(
// //       <>
// //       <hr className="h-[1px]  bg border-t-black/10 mb-5 sm:mb-6"/>
// //       <main className="pb-2 m-8">
// //         <div className="max-w-frame mx-auto px-4 xl:px-0">
// //           <nav className="mb-2 sm:mb-6">
// //             <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5">
// //               <li className="inline-flex items-center gap-1.5">
// //                 <a className="transition hover:text-black text-gray-500" href="./">Home</a>
// //               </li>
// //               <li><Image src={greaterthan} alt=""/></li>
// //               <li className="inline-flex items-center gap-1.5">
// //                 <span className="font-normal">Cart</span>
// //               </li>
// //             </ol>
// //           </nav>
// //           {/*  heading*/}
// //         <h2 className="font-extrabold text-[32px] md:text-[40px] text-black mb:5 md:mb-6">YOUR CART</h2>
// // <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
// //   <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
// //   <div className="flex items-center space-x-4">
// //     <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
// //     <Image src={page2shirt} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
// //     </a>
// //    <div className="flex w-full flex-col">
// //      <div className="flex items-center justify-between">
// //       <h3 className="font-bold">Gradient Graphic T-shirt</h3>
// // <Image src={dustbin} alt=""/>
// // </div>
// // {/*  */}
// // <div className="mt-1">
// //   <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
// //   <span className="text-gray-600 text-xs md:text-sm">Large</span>
// // </div>
// // <div className="mb-auto -mt-1.5">
// //   <span className="text-black text-xs md:text-sm mr-1">Color:</span>
// //   <span className="text-gray-600 text-xs md:text-sm">Brown</span>
// // </div>
// // <div className="flex items-center flex-wrap justify-between">
// // <div className="flex items-center space-x-[5px] xl:space-x-2.5">
// // <span className="font-bold text-black text-xl xl:text-2xl">$145</span>
// // </div>
// // {/*  */}
// // <div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
// // <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
// // <span className="font-medium text-sm sm:text-base">1</span>
// // <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
// // </div>
// // </div>
// // </div>

// // </div>
// // <hr className="border-t-black/10"/>
// //  {/* 2 div */}
// // <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
// //   <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
// //   <div className="flex items-center space-x-4">
// //     <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
// //     <Image src={page2shirt3} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
// //     </a>
// //    <div className="flex w-full flex-col">
// //      <div className="flex items-center justify-between">
// //       <h3 className="font-bold">Checkered Shirt</h3>
// // <Image src={dustbin} alt=""/>
// // </div>
// // <div className="mt-1">
// //   <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
// //   <span className="text-gray-600 text-xs md:text-sm">Medium</span>
// // </div>
// // <div className="mb-auto -mt-1.5">
// //   <span className="text-black text-xs md:text-sm mr-1">Color:</span>
// //   <span className="text-gray-600 text-xs md:text-sm">Red</span>
// // </div>
// // <div className="flex items-center flex-wrap justify-between">
// // <div className="flex items-center space-x-[5px] xl:space-x-2.5">
// // <span className="font-bold text-black text-xl xl:text-2xl">$180</span>
// // </div>
// // <div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
// // <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
// // <span className="font-medium text-sm sm:text-base">1</span>
// // <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
// // </div>
// // </div>
// // </div>
// // </div>
// // </div>
// //  </div>
// //  <hr className="border-t-black/10"/>
// //   {/* 3 div */}
// // <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
// //   <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
// //   <div className="flex items-center space-x-4">
// //     <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
// //     <Image src={page2jeans} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
// //     </a>
// //    <div className="flex w-full flex-col">
// //      <div className="flex items-center justify-between">
// //       <h3 className="font-bold">Gradient Graphic T-shirt</h3>
// // <Image src={dustbin} alt=""/>
// // </div>
// // <div className="mt-1">
// //   <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
// //   <span className="text-gray-600 text-xs md:text-sm">Large</span>
// // </div>
// // <div className="mb-auto -mt-1.5">
// //   <span className="text-black text-xs md:text-sm mr-1">Color:</span>
// //   <span className="text-gray-600 text-xs md:text-sm">Blue</span>
// // </div>
// // <div className="flex items-center flex-wrap justify-between">
// // <div className="flex items-center space-x-[5px] xl:space-x-2.5">
// // <span className="font-bold text-black text-xl xl:text-2xl">$245</span>
// // </div>
// // <div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
// // <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
// // <span className="font-medium text-sm sm:text-base">1</span>
// // <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
// // </div>
// // </div>
// // </div>
// // </div>
// // </div>
// //  </div>
// //  {/* <hr className="border-t-black/10"/> */}
// // </div>
// // {/* new section */}
// // <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-gray-300">
// //   <h6 className="text-xl md:text-2xl font-bold text-black">Order Summary</h6>
// //   <div className="flex flex-col space-y-5">
// //   <div className="flex items-center justify-between">
// //     <span className="md:text-xl text-gray-500">Subtotal</span>
// //     <span className="md:text-xl font-bold">$585</span>
// //   </div>

// //   <div className="flex items-center justify-between">
// //     <span className="md:text-xl text-gray-500">Discount (-20%)</span>
// //     <span className="md:text-xl text-red-600 font-bold">-$113</span>
// //   </div>

// //   <div className="flex items-center justify-between">
// //     <span className="md:text-xl text-gray-500">Delivery Fee</span>
// //     <span className="md:text-xl font-bold">$15</span>
// //   </div>
// //   <hr className="border-t-black/10"/>
// //   <div className="flex items-center justify-between">
// //     <span className="md:text-xl  text-2xl text-black font-bold">Total</span>
// //     <span className="md:text-xl text-2xl font-bold">$533</span>
// //   </div>
// // </div>
// // <h2>hiiiii</h2>

// // <div className="flex space-x-3">
// //   <div className="transition-all relative flex items-center rounded-full w-full overflow-hidden bg-[#F0F0F0]">
// //     <div className="input-group-text mr-3">
// //       <Image src={coupon} alt="" className="text-gray-600 text-2xl"/>
// //     </div>
// //     <input className="input-control w-full py-3 pr-4 outline-none placeholder:font-medium placeholder:text-sm bg-transparent placeholder:text-gray-500" placeholder="Add Promo Code" type="text"></input>
// //   </div>
// //   <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition shadow hover:bg-slate-900 px-4 py-2 bg-black text-white rounded-full w-full max-w-[119px] h-[48px]">Apply</button>
// // </div>
// // <button className="inline-flex items-center justify-center whitespace-nowrap shadow hover:bg-gray-800 transition-all hover:translate-x-2 px-4 text-sm md:text-[16px] font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] ">Go to Checkout
// // <FaArrowRight className="ml-4 transition-all hover:translate-x-2 text-xl" />
// //   {/* <Image src={rightarrow} alt="" className="text-white"/> */}
// // </button>

// // </div>

// // {/* next work */}

// //   {/* end */}
// //   {/* <h2>hiiiii</h2> */}
// // </div>
// //  {/* de end */}
// //     </div>

// //       </main>
// //     {/* <Footer/> */}

// //       </>
// //     );
// //    }
// ///////////////////////////////////////
// "use client";
// import { useEffect, useState } from "react";
// import Loader from "@/components/Loader";
// import { useAuth, useUser } from "@clerk/nextjs";
// import Container from "@/components/Container";
// import NoAccessCart from "@/components/NoAccessCart";
// import useCartStore from "@/store";
// import Link from "next/link";
// import greaterthan from "@/app/assets/greaterthan.png";
// import Image from "next/image";
// import PriceFormatter from "@/components/PriceFormatter";

// const CartPage = () => {
//   const {
//     deleteCartProduct,
//     getTotalPrice,
//     getItemCount,
//     getSubTotalPrice,
//     resetCart,
//   } = useCartStore();

//   const [isClient, setIsClient] = useState(false);
//   const { isSignedIn } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const groupedItems = useCartStore((state) => state.getGroupedItems());
//   const { user } = useUser();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return <Loader />;
//   }

//   return (
//     <>

//       <div className="bg-gray-50 pb-10">
//         {isSignedIn ? (
//           <Container>
//             {groupedItems?.length ? (
//               <>
//                 <div className="mb-2 sm:mb-6">
//                   <div className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5">
//                     <div className="inline-flex items-center gap-1.5">
//                       <Link
//                         className="transition hover:text-black text-gray-500"
//                         href="./"
//                       >
//                         Home
//                       </Link>
//                     </div>
//                     <div>
//                       <Image src={greaterthan} alt="." />
//                     </div>
//                     <div className="inline-flex items-center gap-1.5">
//                       {" "}
//                       <span className="font-normal">Cart</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/*  heading*/}
//                 <h2 className="font-extrabold text-[32px] md:text-[40px] text-black mb:5 md:mb-6">
//                   YOUR CART
//                 </h2>
//                 {/* left / right */}
//                 <div className="grid lg:grid-cols-3 md:gap-8">
//                   <div className="lg:col-span-1">
//                     <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
//                       <h2 className="text-xl md:text-2xl font-bold text-black">
//                         {" "}
//                         Order Summary
//                       </h2>
//                       {/* <div className="space-y-4"> */}
//                         <div className="flex items-center justify-between">
//                           <span>Subtotal</span>
//                           {/* <PriceFormatter
//                           //  price={getSubTotalPrice()}
//                           //  oldPrice={getSubTotalPrice()}
//                           //  discount={getSubTotalPrice()}

//                           //  price={product?.price}
//                           //  oldPrice={product?.oldPrice}
//                           //  discount={product?.discount}
//                           /> */}
//                         {/* </div> */}
//                       </div>
//                       {/* 2 line */}
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           <span>Discount</span>
//                           <PriceFormatter
//                           amount ={getSubTotalPrice() - getTotalPrice()}

//                           //  price={product?.price}
//                           //  oldPrice={product?.oldPrice}
//                           //  discount={product?.discount}
//                           />
//                         </div>
//                       </div>
//                       {/* end of 2 line */}
//                     </div>
//                   </div>

//                   {/* right side */}
//                   <div className="lg:col-span-2">right</div>
//                 </div>
//               </>
//             ) : (
//               <div>empty cart</div>
//             )}
//           </Container>
//         ) : (
//           <div>
//             {" "}
//             <NoAccessCart />{" "}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;

// ////////////////////////////////////////////////

"use client";
import Container from "@/components/Container";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import {
  useAuth,
  // , useUser
} from "@clerk/nextjs";
import {
  // ShoppingBag
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EmptyCart from "@/components/EmptyCart";
import NoAccessToCart from "@/components/NoAccessCart";
import Loader from "@/components/Loader";
import greaterthan from "@/app/assets/greaterthan.png";
import coupon from "@/app/assets/coupon.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import {
//   createCheckoutSession,
//   Metadata,
// } from "@/actions/createCheckoutSession";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  // const [loading, setLoading] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  // const { user } = useUser();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };

  // const handleCheckout = async () => {
  //   setLoading(true);
  //   try {
  //     const metadata: Metadata = {
  //       orderNumber: crypto.randomUUID(),
  //       customerName: user?.fullName ?? "Unknown",
  //       customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
  //       clerkUserId: user!.id,
  //     };
  //     const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
  //     if (checkoutUrl) {
  //       window.location.href = checkoutUrl;
  //     }
  //   } catch (error) {
  //     console.error("Error creating checkout session:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };
  return (
    <div className="bg-gray-50 pb-10">
      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              {/*  */}
              <div className="mb-2 sm:mb-6">
                <div className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5">
                  <div className="inline-flex items-center gap-1.5">
                    <Link
                      className="transition hover:text-black text-gray-500"
                      href="./"
                    >
                      {" "}
                      Home
                    </Link>
                  </div>
                  <div>
                    <Image src={greaterthan} alt="." />
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    {" "}
                    <span className="font-normal">Cart</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center gap-2 py-5">
                {/* <ShoppingBag className="h-6 w-6 text-primary" /> */}
                <h1 className="font-extrabold text-[32px] md:text-[40px] text-black">
                  YOUR CART
                </h1>
              </div>
              {/* both side main work side  */}
              <div className="grid lg:grid-cols-3 md:gap-8">
                <div className="lg:col-span-1">
                  {/* main left side */}
                  <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="md:text-xl text-black/60">
                          SubTotal
                        </span>
                        <PriceFormatter amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span className="md:text-xl text-black/60">
                          Discount
                        </span>
                        <PriceFormatter
                          amount={-(getSubTotalPrice() - getTotalPrice())}
                        />
                      </div>

                      <div className="flex justify-between">
                        <span className="md:text-xl text-black/60">
                          Delivery Fee
                        </span>
                        <div>Free</div>
                      </div>

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span className="md:text-xl text-black">Total</span>

                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      {/*  */}

                      <div className="flex space-x-3">
                        <div className="transition-all relative flex items-center rounded-full w-full overflow-hidden bg-[#F0F0F0]">
                          <div className="input-group-text mr-3">
                            <Image
                              src={coupon}
                              alt=""
                              className="text-gray-600 ml-4 text-2xl"
                            />
                          </div>
                          <input
                            className="input-control w-full py-3 pr-4 outline-none placeholder:font-medium placeholder:text-sm bg-transparent placeholder:text-gray-500"
                            placeholder="Add Promo Code"
                            type="text"
                          ></input>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition shadow hover:bg-slate-900 px-4 py-2 bg-black text-white rounded-full w-full max-w-[119px] h-[48px]">
                          Apply
                        </button>
                      </div>
                      <button className="inline-flex items-center justify-center whitespace-nowrap shadow hover:bg-gray-800 transition-all hover:translate-x-2 px-4 text-sm md:text-[16px] font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] ">
                        Go to Checkout
                        <FaArrowRight className="ml-4 transition-all hover:translate-x-2 text-xl" />
                        {/* <Image src={rightarrow} alt="" className="text-white"/> */}
                      </button>

                      {/*  */}
                      {/* <Button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="w-full"
                        size="lg"
                      >
                        {loading ? "Processing" : "Proceed to Checkout"}
                      </Button> */}
                      <Link
                        href="/Onsale"
                        className="inline-flex items-center justify-center whitespace-nowrap shadow hover:bg-gray-800 transition-all hover:translate-x-2 px-4 text-sm md:text-[16px] font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] "
                      >
                        <FaArrowLeft className="mr-4 transition-all hover:translate-x-2 text-xl" />
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Product View start */}
                <div className="lg:col-span-2 rounded-lg">
                  {/* <div className="grid grid-cols-5 md:grid-cols-6 border rounded-tr-lg rounded-tl-lg bg-white p-2.5 text-base font-semibold">
                    <h2 className="col-span-2 md:col-span-3">Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Total</h2>
                  </div> */}
                  <div className="border bg-white rounded-br-lg rounded-bl-lg">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="grid grid-cols-5 md:grid-cols-6 border-b p-2.5 last:border-b-0"
                        >
                          <div className="col-span-2 md:col-span-3 flex items-center">
                            {/* <Trash2
                              onClick={() => handleDeleteProduct(product?._id)}
                              className="w-4 h-4 md:w-5 md:h-5 mr-1 text-red-600"
                            /> */}
                            {product?.image && (
                              <div className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group">
                                <Image
                                  src={urlFor(product.image).url()}
                                  alt="productImage"
                                  width={300}
                                  height={300}
                                  loading="lazy"
                                  className="w-10 h-10 md:w-full md:h-14 object-cover group-hover:scale-105 overflow-hidden transition-transform duration-500"
                                />
                              </div>
                            )}
                            <h2 className="text-black font-bold text-base xl:text-xl">
                              {product?.name}
                            </h2>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <PriceFormatter amount={product?.price} />
                            </div>
                            <Trash2
                              onClick={() => handleDeleteProduct(product?._id)}
                              className="w-4 h-4 md:w-5 md:h-5 mr-1 text-red-600 "
                            />
                          </div>

                          <QuantityButtons
                            product={product}
                            className="text-sm gap-0 md:gap-1"
                          />
                          <div className="flex items-center">
                            <PriceFormatter
                              amount={
                                product?.price ? product.price * itemCount : 0
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                    <Button
                      onClick={handleResetCart}
                      className="m-5 font-semibold"
                      variant="destructive"
                    >
                      Reset Cart
                    </Button>
                  </div>
                </div>

                <div className="md:hidden fixed bottom-0 left-0 w-full bg-lightBg">
                  <div className="bg-white p-4 rounded-lg border mx-4">
                    <h2 className="text-lg font-semibold mb-2">
                      Order Summary
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>SubTotal</span>
                        <PriceFormatter amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <PriceFormatter
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>

                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>

                      {/*  */}

                      {/*  */}
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                      <Link
                        href="/"
                        className="block text-center text-sm text-primary hover:underline"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Product View end */}
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
