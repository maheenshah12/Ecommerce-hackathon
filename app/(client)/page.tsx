// import Image from "next/image";
// import {Button} from "@/components/ui/button";
import Hero from "../../components/hero";
// import Footer from "../components/footer";
// import { getAllProducts } from "@/sanity/helpers";
// import {  getAllNextProduct } from "@/sanity/helpers";
// import ProductList from "../../components/productList";
// import Container from '@/components/Container';
// import Random from "@/components/random";
// import next from "next";

export default async function Home() {
  // const products = await getAllProducts();
  // const next = await  getAllNextProduct();
  // console.log(products);

  return (
   <>
   <Hero/>
   {/* <Footer/> */}

   {/* <Container>
   <ProductList products={ products } title={true}/>  
   </Container> */}
  
   
   
   </>
  );
}
