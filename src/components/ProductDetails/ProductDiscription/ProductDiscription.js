import React, { useEffect, useState } from 'react';
import './ProductDiscription.css';
import userdp from '../../../assets/icons/user.jpg';

const ProductDiscription = ({ details }) => {

    const [productDetails, setProductDetails] = useState([]);
    const [activeDetails, setActiveDetails] = useState({});
    const [len, setLen] = useState(3);

    const [btnActive, setBtnActive] = useState(0);



    useEffect(() => {
        if (details) {
            setLen(details.length);
            setProductDetails(details);
            setBtnActive(details[0]?.id);
            setActiveDetails(details[0]);
        }
    }, [details])

    const handleDetailsOptionBtnClick = (id) => {
        let tem = productDetails.filter(x => x.id === id);
        setActiveDetails(tem[0]);

        setBtnActive(id);
    }

    // console.log(productDetails[2])
    //console.log(len) //${len}

    return (
        <div>
            {/* BTNS  */}
            <div className={`grid gap-0 grid-cols-3`}>
                {
                    productDetails.map(x => {
                        return (
                            <button
                                onClick={() => handleDetailsOptionBtnClick(x?.id)}
                                key={x?.id}
                                className={btnActive === x?.id ? "details_btn details_btn_active" : "details_btn"}>
                                {x?.name}
                            </button>
                        )
                    })
                }
            </div>

            {/* discription  */}
            <div className=''>
                {
                    (activeDetails?.name !== 'reviews')
                        ?
                        <div className='p-5 border-2 border-gray-100'>
                            <p className=''>
                                {activeDetails?.dis}
                            </p>
                        </div>
                        :
                        <div className='p-5 border-2 border-gray-100'>
                            {
                                activeDetails?.dis.map((x) => {
                                    return (
                                        <div key={x?.id} className='flex my-5 p-3 rounded  shadow-sm'>

                                            <div>
                                                <img
                                                    style={{ borderRadius: "50%", height: "70px" }}
                                                    src={x?.image ? x?.image : userdp}
                                                    alt=""
                                                />
                                            </div>

                                            <div className='mx-5 text-gray-500'>
                                                <p className='font-bold'>Name : {x?.name}</p>
                                                <p className='font-bold'>Rating : {x?.rating}</p>
                                                <p className='text-sm font-bold'>Date : {x?.date}</p>
                                            </div>

                                            <div className=''>
                                                {x?.text}
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                }
            </div>
        </div>
    );
};

export default ProductDiscription;