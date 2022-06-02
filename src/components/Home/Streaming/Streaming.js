import React from 'react';
import './Streaming.css';

const Streaming = () => {
    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
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
        <div className='_container items-center'>
            <div className='_content'>



            </div>
        </div>
    );
};

export default Streaming;