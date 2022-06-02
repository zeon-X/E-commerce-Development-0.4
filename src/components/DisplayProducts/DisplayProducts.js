import React from 'react';
import useX from '../../CustomHooks/useX';
import './DisplayProducts.css';

const DisplayProducts = () => {
    const [products] = useX('product');
    // console.log(products)
    return (
        <div className='_container items-center bg-gray-100 '>
            <div className='_content my-16'>
                <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

                    {
                        products.map(x => {
                            return (
                                <div key={x?.id} className='bg-white product_item_displayproduct'>
                                    <div className=' flex flex-col items-center mx-1'>
                                        {/* IMAGE */}
                                        <img

                                            style={{ height: "250px" }}
                                            src={x?.image}
                                            alt=""
                                        />
                                        {/* TITLE + Price */}
                                        <div className='p-4 text-sm'>
                                            <p className='uppercase text-center font-bold'>
                                                {x?.title}
                                            </p>
                                            <p className='text-center text-sm mt-2'>
                                                BDT {x?.price}
                                            </p>
                                        </div>

                                        {/* BTN SECTION  */}
                                        <div className='flex items-center w-full border-2 border-gray-900 mt-2 displayproduct_btns'>
                                            {/* wishlist btn  */}
                                            <button className='w-1/4 flex justify-center'>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>

                                            </button>

                                            {/* purchase btn  */}
                                            <button className='w-3/4 bg-black text-white '>
                                                {
                                                    x?.btn_title
                                                }
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default DisplayProducts;