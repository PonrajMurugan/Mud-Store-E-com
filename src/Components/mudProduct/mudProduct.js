import React from 'react';
import './mudProduct.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const mudProducts = [
    {
        id: 1,
        img: "https://mudkart.com/cdn/shop/files/Untitled_design_-_2024-07-25T144334.131.webp?v=1721898863&width=533",
        about: "CURRY POT",
        price: 550,
    },
    {
        id: 2,
        img: "https://mudkart.com/cdn/shop/files/270.webp?v=1721898932",
        about: "CURD SETTLER",
        price: 850,
    },
    {
        id: 3,
        img: "https://mudkart.com/cdn/shop/files/362.png?v=1718944507&width=533",
        about: "CURRY CLAY POT",
        price: 875,
    },
    {
        id: 4,
        img: "https://mudkart.com/cdn/shop/files/Untitleddesign_1_d2e09be4-6ae9-4c90-b19b-0f4e26ac3e55_1.webp?v=1721899052&width=533",
        about: "SPECIAL POT",
        price: 468,
    },
];

const MudProduct = () => {


        const navigate = useNavigate(); 
        const dispatch = useDispatch();
    
        const handleDetailsClick = (id) => {
            console.log(`Navigating to details page of item with id: ${id}`); 
            navigate(`/mudDetails/${id}`);
            window.scroll(0,0)
        };

        const handleAddToCart = (product) => {
            dispatch(addItemToCart(product)); 
        };

    return (
        <div data-aos="fade-up-right"    className="mud-product">
            <h1>TRENDING PRODUCT</h1>
            <div className="product-grid">
                {mudProducts.map(product => (
                    <div className="product-items" key={product.id}>
                        <img src={product.img} alt={product.about} />
                        <h4>{product.about}</h4>
                        <p>Price: ₹ {product.price}</p>
                        <button className='btn btn-primary'  onClick={() => handleDetailsClick(product.id)}>View Details</button>
                        {/* <button className='btn btn-secondary ac  ' onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MudProduct;
