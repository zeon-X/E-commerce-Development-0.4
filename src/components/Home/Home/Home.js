import React from 'react';
import useX from '../../../CustomHooks/useX';
import ProductContainerSlider from '../../Product/ProductContainerSlider/ProductContainerSlider';
import BannerCom from '../BannerCom/BannerCom';
import './Home.css'

const Home = () => {

    //Banner
    const [data1] = useX('carousolImage');

    //Product Slider
    const [data2] = useX('product');
    let sectionTitle = "BEST SELLER PRODUCTS";

    
    return (
        <div className='overflow-hidden'>
            <BannerCom key={1} data={data1}></BannerCom>
            <ProductContainerSlider key={2} data={data2} sectionTitle={sectionTitle} ></ProductContainerSlider>
        </div>
    );
};

export default Home;