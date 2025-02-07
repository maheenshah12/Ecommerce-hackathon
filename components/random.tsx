import { NextProduct } from "@/sanity.types";
// import ProductCard2 from "./ProductCard2";

interface Props {
    next: NextProduct[];
}

const Random = ({ next }: Props) => {
  
    return (
        <>
        {/* <div className="flex justify-center ">
          <h1 className="text-black mt-9 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-4">
           Top Selling
          </h1>
        </div> */}
      
       <div className="flex justify-center">
      <div className="p-4 mt-9 grid gap-4 
             sm:gap-6 md:gap-8 lg:gap-80 xl:gap-80 2xl:gap-80
             grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             xl:grid-cols-5 2xl:grid-cols-6 mx-auto
          ">
 {/* {next?.map((next) => (
      
      <ProductCard2 key={next?._id} next={next}/>
     ))} */}
     </div>
     </div>
    
    
      </>
    )}

    export default Random;