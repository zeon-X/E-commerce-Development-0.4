import React, { useEffect, useState } from 'react';
import useX from '../../../CustomHooks/useX';
import ProductCarousol from '../ProductCarousol/ProductCarousol';
import ProductDiscription from '../ProductDiscription/ProductDiscription';
import ProductOption from '../ProductOption/ProductOption';
import './ProductDetails.css'

const ProductDetails = () => {

    const [prodDetails] = useX('productdetails');
    const [productDetails, setProductDetails] = useState({});
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        setProductDetails(prodDetails[0]);
    }, [prodDetails])

    useEffect(() => {
        setImageArray(productDetails?.image);
    }, [productDetails])

    return (
        <div color='#F5F5F5' className='_container items-center'>
            <div className='_content product_details_section p-10 m-10 '>




                <div className='grid gap-10 lg:grid-cols-2 sm:grid-cols-1'>

                    {/* Image Left  */}
                    <div className='flex justify-center'>
                        <ProductCarousol imageArray={imageArray}></ProductCarousol>
                    </div>


                    {/* Product veraity + etc right  */}
                    <div className='flex justify-center'>
                        <ProductOption productDetails={productDetails}></ProductOption>
                    </div>

                </div>










                {/* Policy + ETC */}
                <div className='mt-20'>
                    <ProductDiscription details={productDetails?.details}></ProductDiscription>
                </div>



            </div>
        </div>
    );
};

export default ProductDetails;