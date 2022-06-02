import React, { useEffect, useState } from 'react';
import CustomLink from '../../../Utilities/CustomLink';
import './HeaderNavLinksCom.css';

const HeaderNavLinksCom = ({ x }) => {

    const { link, name } = x;
    const [subMenu, setSubMenu] = useState([]);
    useEffect(() => {
        if (x?.submenu) {
            setSubMenu(x?.submenu);
        }
    }, [x?.submenu])


    return (
        <div className='mx-6 text-gray-500 font-semibold text-sm  menu_link_container'>
            <CustomLink to={link}>{name}</CustomLink>
            {
                x?.submenu
                    ?

                    <div className='mega_menu_container flex flex-col '>
                        {
                            subMenu.map((menu) => {
                                return (
                                    <div key={menu?.subname} className='my-3 text-black'>
                                        <CustomLink to={menu?.sublink}>{menu?.subname}</CustomLink>
                                    </div>
                                )
                            })
                        }
                    </div>

                    :

                    <></>

            }
        </div>
    );
};

export default HeaderNavLinksCom;