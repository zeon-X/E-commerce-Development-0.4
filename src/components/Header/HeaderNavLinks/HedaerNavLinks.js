import React from 'react';
import useNavLinks from '../../../CustomHooks/useNavLinks';
import HeaderNavLinksCom from '../HeaderNavLinksCom/HeaderNavLinksCom';
import './HedaerNavLinks.css'

const HedaerNavLinks = () => {

    const [navLinks, setNavLinks] = useNavLinks();

    return (
        <div className='_container items-center bg-white'>
            <div className='_content flex items-center py-2 nav_links_section'>
                {
                    navLinks.map((x) => {
                        return <HeaderNavLinksCom key={x.id} x={x}></HeaderNavLinksCom>
                    })
                }
            </div>
        </div>
    );
};

export default HedaerNavLinks;