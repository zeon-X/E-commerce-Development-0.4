import React, { useEffect, useState } from 'react';
import './ProductCarousol.css'

const ProductCarousol = ({ imageArray }) => {

    const [go, setGo] = useState(0);
    const [end, setEnd] = useState(2);
    const [len, setLen] = useState(0);

    const [displayImage, setDisplayImage] = useState('');
    const [cycleImage, setCycleImage] = useState([]);



    //load the initial arry
    useEffect(() => {
        if (imageArray) {
            setLen(imageArray?.length);
            setDisplayImage(imageArray[0]);
        }
    }, [imageArray]);



    //update the 3 pic array
    useEffect(() => {
        let tem = imageArray;
        tem = tem?.slice(end === len ? go - 1 : go, end + 1);
        setCycleImage(tem);
    },
        [go, end, imageArray]
    )


    //imageClick
    const handleImageClick = (imgLink) => {
        setDisplayImage(imgLink);
    }


    //top prev
    const handleUpBTN = () => {
        if (go !== 0) {
            setGo(go - 1);
            setEnd(go + 1);
        }
    }

    //bottom nxt
    const handleDownBTN = () => {
        if (end !== len) {
            setEnd(end + 1);
            setGo(end - 1);
        }
    }



    return (
        <div className='_content flex justify-between '>



            {/* LARGE ----------- DISPLAY IMG  */}
            <div
                style={{ height: "450px" }}
                className='w-4/5 flex justify-center items-center overflow-hidden '>

                <img
                    className='p-0 display_img'
                    style={{ height: "380px" }}
                    src={displayImage}
                    alt=""
                />
            </div>




            {/* MORE IMG --------------- */}
            <div className='w-1/5 flex flex-col items-center justify-between ml-3 border-2 border-gray-100'>

                {/* UP BTN  */}
                <button onClick={handleUpBTN} className='w-full flex justify-center arrow_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>

                {/* MORE IMGS  */}
                <div className='flex flex-col items-center justify-between '>
                    {
                        cycleImage?.map(x => {

                            return (
                                <button
                                    onClick={() => handleImageClick(x)}
                                    className='m-2'
                                    key={x}
                                >
                                    <img className='cycle_img' style={{ height: "100px" }} src={x} alt="" />
                                </button>
                            )
                        })
                    }
                </div>

                {/* DOWN BTN  */}
                <button onClick={handleDownBTN} className='w-full flex justify-center arrow_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default ProductCarousol;