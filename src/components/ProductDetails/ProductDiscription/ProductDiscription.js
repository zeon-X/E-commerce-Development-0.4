import React, { useEffect, useState } from 'react';
import './ProductDiscription.css'

const ProductDiscription = ({ details }) => {

    const [productDetails, setProductDetails] = useState([]);
    const [len, setLen] = useState(0);

    const [btnActive, setBtnActive] = useState(0);

    console.log(productDetails)

    useEffect(() => {
        if (details) {
            setLen(details.length)
            setProductDetails(details);
            setBtnActive(details[0]?.id)
        }
    }, [details])

    return (
        <div>
            {/* BTNS  */}
            <div className={`grid gap-0 grid-cols-${len}`}>
                {
                    productDetails.map(x => {
                        return (
                            <button
                                onClick={() => setBtnActive(x?.id)}
                                key={x?.id}
                                className={btnActive===x?.id?"details_btn details_btn_active":"details_btn"}>
                                {x?.name}
                            </button>
                        )
                    })
                }
            </div>
            
            {/* discription  */}
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default ProductDiscription;