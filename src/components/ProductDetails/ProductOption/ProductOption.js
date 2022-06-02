import React, { useEffect, useState } from 'react';
import './ProductOption.css'

const ProductOption = ({ productDetails }) => {

    return (
        <div className='w-full flex flex-col items-start'>

            {/* Title  */}
            <p className='text-2xl uppercase font-bold'>
                {productDetails?.title}
            </p>

            {/* Rating  */}
            <div className='my-2'>
                <p className='text-gray-600'>Rating : {productDetails?.rating?.rate} ({productDetails?.rating?.totalRate})</p>
            </div>

            {/* Price  */}

            <div>
                {
                    (productDetails?.price?.discount !== 0)
                        ?

                        <div className='flex text-lg'>
                            <p className='text-red-500 line-through'>
                                BDT {productDetails?.price?.prevPrice}
                            </p>
                            <p className='ml-3 text-grey-600'>
                                BDT {productDetails?.price?.currentPrice}
                            </p>
                            <p className='text-red-500 ml-5'>
                                ({productDetails?.price?.discount} % Off)
                            </p>
                        </div>

                        :
                        <p>
                        </p>
                }
            </div>


            {/* OPTIONS DIV  */}
            <div>

            </div>


            {/* ADD TO CART  */}
            <button className='add_to_cart_btn mt-5 mb-3'>
                Add to Cart
            </button>

            {/* Add to wishlist  */}
            <button className='flex justify-center text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save to Wishlist
            </button>


        </div>
    );
};

export default ProductOption;