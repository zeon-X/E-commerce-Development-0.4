import React, { useState } from 'react';
import HedaerNavLinks from '../HeaderNavLinks/HedaerNavLinks';
import HeaderSection from '../HeaderSection/HeaderSection';
import HeaderToastMessage from '../HeaderToastMessage/HeaderToastMessage';
import './Header.css'

const Header = () => {
    const [toastState, setToastState] = useState(true);
    const handleToastState = () => {
        setToastState(!toastState);
    }
    return (
        <div className='_container items-center shadow-lg header_section_lg'>
            

            {/* TOAST  */}
            <div className={toastState?"w-full":"hidden"}>
                <HeaderToastMessage handleToastState={handleToastState}></HeaderToastMessage>
            </div>
            




            {/* HEADER SEARCH ,LOGO, REGISTER, WISH LIST */}
            <div style={{ backgroundColor: "rgb(246, 245, 245)" }} className='w-full flex justify-center'>
                <HeaderSection image={"https://i.ibb.co/qWM2C5R/a-01.png"}></HeaderSection>
            </div>




            {/* NAVLINK  */}
            <HedaerNavLinks></HedaerNavLinks>

        </div>
    );
};

export default Header;