import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { id, image, title, price, btn_title, btn_link } = product;
    console.log(id);
    const navigate = useNavigate();
    return (
        <div className='shadow-lg flex flex-col items-center product_card mx-1'>
            <img

                style={{ height: "250px" }}
                src={image}
                alt=""
            />
            <div className='p-4 text-sm'>
                <p className='uppercase text-center font-bold'>
                    {title}
                </p>
                <p className='text-center text-sm mt-2'>
                    BDT {price}
                </p>
            </div>
            <button
                onClick={() => {
                    navigate(`${btn_link}`)
                }}
                className='uppercase w-full bg-black text-white py-3'
            >
                {btn_title}
            </button>

        </div>
    );
};

export default ProductCard;