import React from 'react';
import Slider from 'react-slick/lib/slider';
import ProductCard from '../ProductCard/ProductCard';
import './ProductContainerSlider.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//SLIDE PRODUCT CONTAINER

const ProductContainerSlider = ({ data, sectionTitle }) => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        dotsClass: "slick-dots",
        centerPadding: "50px",
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 2, slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings:
                {
                    slidesToShow: 3, slidesToScroll: 3
                }
            }
        ]
    };


    return (
        <div className='_container items-center my-20'>
            <p className='text-3xl uppercase mb-5'>
                {sectionTitle}
            </p>
            <div className='w-4/5'>

                <Slider {...settings}>

                    {
                        data?.map((item) => {
                            return (
                                <ProductCard key={item.id} product={item}></ProductCard>
                            )
                        })
                    }

                </Slider>

            </div>
        </div>
    );
};

export default ProductContainerSlider;