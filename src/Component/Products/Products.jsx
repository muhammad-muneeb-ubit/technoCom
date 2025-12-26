import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Product1 from '../../assets/product1.png'
import Product2 from '../../assets/product2.png'
import Product3 from '../../assets/product3.png'
import Product4 from '../../assets/product4.png'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Products = () => {
  return (
    <div className='products-section flex items-center justify-center flex-col px-8 pt-12 w-full mb-12'>
        <div className='text-green-600 text-xl border-l-6 px-4 py-2 '>Products</div>
        <div className='flex justify-center items-center'>
            <Splide aria-label="Products Images">
              <SplideSlide>
                <img src={Product1} alt="Product 1"/>
              </SplideSlide>
              <SplideSlide>
                <img src={Product2} alt="Product 2"/>
              </SplideSlide>
              <SplideSlide>
                <img src={Product3} alt="Product 3"/>
              </SplideSlide>
              <SplideSlide>
                <img src={Product4} alt="Product 4"/>
              </SplideSlide>
            </Splide>
        </div>
    </div>
  )
}

export default Products