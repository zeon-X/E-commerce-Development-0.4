import React from 'react';
import { Link } from 'react-router-dom';
import useFooterInfo from '../../CustomHooks/useFooterInfo';
import useFooterLinks from '../../CustomHooks/useFooterLinks';
import './Footer.css';

const Footer = () => {

    let logo = "https://i.ibb.co/WnbKmbH/aleeha-thech-01.png";
    const [footerLinks, setFooterLinks] = useFooterLinks();
    const [footerInfos, setFooterInfos] = useFooterInfo();

    let date = new Date();

    return (
        <div
            className='_container items-center pt-6 footer_section text-white bg-black'>



            {/* IMAGE  + SOCIAL  */}
            <div className='flex flex-col items-center'>
                {/* logo  */}
                <img
                    className='shadow-lg'
                    style={{
                        height: "100px",
                        // width: "80px",
                        // border: "1px solid grey",
                        margin: "10px",
                        // borderRadius: "50%"
                    }}
                    src={logo} alt=""
                />

                {/* social  */}
                <div className='flex items-center mt-3'>
                    {
                        footerLinks.map((X) => {
                            return (
                                <div key={X.platformlogo} className='mx-5 shadow-lg'>
                                    <a _target="blank" href={X.link}>
                                        <img style={{ height: "30px" }} src={X.platformlogo} alt="" />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>




            <div className='w-4/5 flex flex-col mt-20 mb-6'>


                {/* SUSCRIBE NEWLETTER  + GET APP     */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8'>

                    <div>
                        <p className='text-xl font-semibold mb-3'>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </p>

                        <div className='mt-1'>
                            <input className='border-b bg-black mr-4' type="email" placeholder='Your email address' />
                            <button className='bg-pink-600 text-white py-2 px-5 rounded'>
                                SIGN UP
                            </button>
                        </div>

                    </div>

                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold mb-3'>
                            GET THE NEW ALEEHA STORE APP TODAY
                        </p>
                        <div className='flex items-center mt-1'>
                            <p className='text-gray-500'>
                                Tap into a better shopping experience.
                            </p>
                            <a className='ml-5 mr-2' href="">
                                <img className='shadow-xl' style={{ height: "40px" }} src={"https://i.ibb.co/W5QLXdR/Get-It-On-Google-Play-Transparent-PNG.png"} alt="" />
                            </a>
                            <a href="">
                                <img className='shadow-xl' style={{ height: "40px" }} src={"https://i.ibb.co/6b2ksXP/get-it-on-app-store.png"} alt="" />
                            </a>
                        </div>
                    </div>

                </div>


                {/* INFORMATION  */}

                <div className='flex flex-col items-start justify-start my-8'>
                    <p className='text-xl font-semibold mb-3'>
                        INFORMATION
                    </p>
                    <div className='flex flex-wrap items-center mt-1'>
                        {
                            footerInfos.map((info) => {
                                return (
                                    <div key={info.infoname} className='mr-11 text-gray-500'>
                                        <Link to={info.link}>{info.infoname}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* GET IN TOUH  */}
                <div className='flex flex-col items-start justify-start mb-8'>
                    <p className='text-xl font-semibold mb-3'>
                        GET IN TOUCH
                    </p>

                    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-6 w-full mt-1'>


                        <div className='flex flex-col items-start'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <p className='text-lg'>Call us at</p>
                            </div>
                            <p className='text-gray-500 text-sm'>+8801402199906</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-lg'>Support</p>
                            <p className='text-gray-500 text-sm'>hello@sugarcosmetics.com</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='text-lg'>WORK WITH US</p>
                            <p className='text-gray-500 text-sm'>car@sugarcosmetics.com</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='text-lg'>PRESS & MEDIA</p>
                            <p className='text-gray-500 text-sm'>pr@sugarcosmetics.com</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='text-lg'>INFLUENCER COLLAB</p>
                            <p className='text-gray-500 text-sm'>Join us</p>
                        </div>


                    </div>
                </div>

                {/* BORDER  */}
                <div className='border-t border-gray-300 w-full shadow-lg mt-5' />

                <p className='text-center mt-4 text-sm'>
                    Copyright © {date.getFullYear()} Aleeha Techonologies. All rights reserved.
                </p>

            </div>
        </div>
    );
};

export default Footer;