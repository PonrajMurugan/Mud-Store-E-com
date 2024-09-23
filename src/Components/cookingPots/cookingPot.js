import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';
import "./cookingPot.css";

const cookingPots = [
    {
        id: 1,
        img: "https://mudkart.com/cdn/shop/files/249.webp?v=1721899001&width=533",
        about: "FISH CURRY POT",
        price: 535,
    },
    {
        id: 2,
        img: "https://mudkart.com/cdn/shop/files/VJN08424copy_bf16516e-de1a-43e8-ac9d-371b9faf7983_1.webp?v=1721906316&width=533",
        about: "TEA CLAY POT",
        price: 590,
    },
    {
        id: 3,
        img: "https://mudkart.com/cdn/shop/files/Fryingpanandkadai-02_1.webp?v=1721899541&width=533",
        about: "FRYING PAN",
        price: 700,
    },
    {
        id: 4,
        img: "https://mudkart.com/cdn/shop/files/Untitled_design_-_2024-07-25T144050.559.webp?v=1721898691&width=533",
        about: "GRAVY POT",
        price: 430,
    },
];

const CookingPot = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleDetailsClick = (id) => {
        navigate(`/cookingDetails/${id}`);
        window.scroll(0,0);
    };

    const handleAddToCart = (pot) => {
        dispatch(addItemToCart(pot)); 
    };

    return (
        <div data-aos="fade-down" className="cooking-pot">
            <div className="header-cooking">
                <h1 className="header-cooking-h1">OUR POPULAR PRODUCTS</h1>
                <h6 className="header-cooking-h6">DISCOVER THE ART OF COOKING WITH TERRACOTTA POTS</h6>
            </div>
            <div className="product-grid">
                {cookingPots.map(pot => (
                    <div className="product-item" key={pot.id}>
                        <img src={pot.img} alt={pot.about} />
                        <h5>{pot.about}</h5>
                        <p>Price: ₹ {pot.price}</p>
                        <button className='btn btn-primary' onClick={() => handleDetailsClick(pot.id)}>View Details</button>
                        {/* <button className='btn btn-secondary ac  ' onClick={() => handleAddToCart(pot)}>Add to Cart</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CookingPot;
