import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../../Utilities/CustomLink';
import './HeaderSection.css'

const HeaderSection = ({ image }) => {


    return (
        <div className='_content header_section flex items-center justify-between'>



            {/* LOGO + SEARCH  */}
            <div className='flex items-center'>
                {/* logo */}
                <Link to="/">
                    <img style={{ height: "75px" }} src={image} alt="" />
                </Link>


                {/* seacrch bar */}
                <div>
                    <form className='search_form_section flex items-center'>
                        <input style={{ fontSize: "14px" }} type="text" placeholder="Try Liquid Lipstick" />
                        <button>Search</button>
                    </form>
                </div>
            </div>


            {/* Login Register  */}
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <CustomLink to='/login'>Login</CustomLink>
                <p>/</p>
                <CustomLink to='/register'>Register</CustomLink>
            </div>


            {/* Wishlist  */}
            <div className='flex items-center'>

                <CustomLink to='/wishlist'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                </CustomLink>

                <CustomLink to='/cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                </CustomLink>

                <CustomLink to='/offer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                </CustomLink>

            </div>
        </div>
    );
};

export default HeaderSection;