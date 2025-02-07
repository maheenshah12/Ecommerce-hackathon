import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import PriceView from "@/components/PriceView";
import { getProductBySlug } from "@/sanity/helpers";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import stars from "@/app/assets/Star 1.png";
import DetailPage from "@/components/DetailPage";
import FourProduct from "@/components/fourProduct";
import { getAllProducts } from "@/sanity/helpers";
const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }
  const products = await getAllProducts();

  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-10"></div>
        <Container className="flex flex-col md:flex-row gap-10 py-10">
          {product?.image && (
            <div className="w-full md:w-1/2 h-auto border border-darkBlue/20 shadow-md rounded-md group overflow-hidden">
              <Image
                src={urlFor(product?.image).url()}
                alt="productImage"
                width={700}
                height={700}
                priority
                className="w-full max-h-[550px] object-cover group-hover:scale-110 hoverEffect rounded-md"
              />
            </div>
          )}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div>
              <p className="text-4xl font-bold mb-2">{product?.name}</p>
              <div className="flex items-center gap-2">
                <div className="text-lightText flex items-center gap-.5 text-sm">
                  {Array.from({ length: 5 }).map((_, index) => {
                    // const isLastStar = index === 4;
                    return (
                      <Image
                        src={stars}
                        key={index}
                        alt=""
                        className="mt-1 h-6 w-6"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <PriceView
              price={product?.price}
              oldPrice={product?.oldPrice}
              discount={product?.discount}
              // description={product?.description}

              // priceClassName="font-bold text-black text-2xl sm:text-[32px]"
              // oldPriceClassName="font-bold text-black/40 line-through text-2xl sm:text-[32px] md:text-[28px] lg:text-[24px]"
              // discountClassName="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]"
            />

            <div className="text-sm text-gray-600 tracking-wide">
              {/* <Description description={product?.description || ""} /> */}

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo eum quos perferendis repellat corporis quisquam ab
                minus illo impedit, expedita, excepturi temporibus blanditiis
                alias est itaque obcaecati debitis earum in!
              </p>
            </div>
            <DetailPage />

            <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-10"></div>
            <AddToCartButton product={product} />
          </div>
        </Container>
      </div>
      {/* you mai also like */}

      <Container>
        <FourProduct products={products} title={true} />
      </Container>
    </>
  );
};

export default ProductPage;
