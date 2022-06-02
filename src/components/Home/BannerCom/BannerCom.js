import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import './BannerCom.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCom = ({ data }) => {

    // const [x, setX] = useX('carousolImage');

    var settings = {
        className: "",
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const navigate = useNavigate();


    return (
        <div className="w-full slider">
            <Slider {...settings}>

                {
                    data.map((item) => {
                        return (
                            <div key={item?.id} className="">
                                <button
                                    onClick={() => {
                                        navigate(`${item?.link}`)
                                    }}
                                    style={{ backgroundImage: `url(${item?.image})` }}
                                    className='carousol_cover_photo'
                                >
                                </button>
                            </div>
                        )
                    })
                }


            </Slider>
        </div>
    );
};

export default BannerCom;