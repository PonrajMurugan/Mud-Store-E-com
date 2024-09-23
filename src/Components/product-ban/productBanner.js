import React from 'react';
import "./productBanner.css";
import { useNavigate } from 'react-router-dom';

const ProductBanner = () => {

    const navigate = useNavigate();

    const handleShopClick = () => {
        navigate('/shops'); 
        window.scroll(0,0);
    };

    return (
        <div  data-aos="fade-up" className="product-banner">
             <div>
                    <h1 className='product-head'>OUR FEATURED PRODUCT</h1>
                </div>

            <div className="banner-container">
               
                <div className="banner-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/clay-cooker.jpeg' alt='Mud-Photo' />
                </div>
                <div className="banner-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/clay-utensils-kitchenwares.jpeg' alt='Mud-Photo' />  &nbsp;
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/clay-pot.jpeg' alt='Mud-Photo' />                
                </div>
                {/* <div className="banner-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/clay-pot.jpeg' alt='Mud-Photo' />
                </div> */}
                <div className="banner-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/clay-filter.jpeg' alt='Mud-Photo' />
                </div>
                <div className="banner-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/06/fridge-mitticool.jpeg' alt='Mud-Photo' />
                </div>
            </div>
            <button className='btn btn-secondary shop-but' onClick={handleShopClick}>SHOP</button>
        </div>
    );
};

export default ProductBanner;
