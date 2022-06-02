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
            <button className=' text-sm wishlist_btn'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Save to Wishlist
            </button>


        </div>
    );
};

export default ProductOption;