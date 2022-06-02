import React, { useEffect, useState } from 'react';
import './HeaderToastMessage.css'

const HeaderToastMessage = ({ handleToastState }) => {

    const [headerToastMessage, setHeaderToastMessage] = useState("");
    useEffect(() => {
        setHeaderToastMessage("FREE Matte Lipstick + Pouch on a spend of Rs.999 and above");
    }, []);



    return (
        <div style={{ backgroundColor: "#212121" }} className='w-full flex justify-center items-center relative'>

            <div>

            </div>

            <p className='text-center text-gray-500 my-2 text-sm'>
                {headerToastMessage}
            </p>

            <button onClick={handleToastState} className='absolute right-5'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "white" }} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

        </div>
    );
};

export default HeaderToastMessage;