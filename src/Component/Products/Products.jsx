import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

const Products = () => {
  return (
    <div id="products" className="products-section flex items-center justify-center flex-col px-8 pt-12 w-full mb-12">
      <div className="text-green-600 text-3xl border-l-6 px-4  ">
        Products
      </div>

       <div className="w-full flex justify-center py-12">
      <div className="w-[80%]">
        <Splide
        className=""
          options={{
            perPage: 3,
            gap: '3rem',
            autoplay: false,
            interval: 1000,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 1,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label="Products"
        >
          {[Product1, Product2, Product3, Product4].map((img, index) => (
             

            <SplideSlide key={index}>
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-100 object-contain rounded-lg"
                />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
    </div>
  );
};

export default Products;
