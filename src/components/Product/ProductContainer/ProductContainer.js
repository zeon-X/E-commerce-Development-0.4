import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductContainer.css'

//NORMAL GRID CONTAINER

const ProductContainer = () => {
    return (
        <div className='_container items-center my-20'>
            <p className='text-3xl uppercase mb-5'>
                BEST SELLER PRODUCTS
            </p>
            <div className='w-3/4 grid gap-6 lg:grid-cols-4 sm:grid-cols-1'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>


            </div>

        </div>
    );
};

export default ProductContainer;