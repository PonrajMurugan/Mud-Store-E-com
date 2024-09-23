import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './cookingDetails.css';
import { FaTruck, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const cookingPots = [
    {
        id: 1,
        img: "https://mudkart.com/cdn/shop/files/249.webp?v=1721899001&width=533",
        about: "FISH CURRY POT",
        price: 535,
        description: "Perfect for making authentic fish curry."
    },
    {
        id: 2,
        img: "https://mudkart.com/cdn/shop/files/VJN08424copy_bf16516e-de1a-43e8-ac9d-371b9faf7983_1.webp?v=1721906316&width=533",
        about: "TEA CLAY POT",
        price: 590,
        description: "Great for brewing traditional tea."
    },
    {
        id: 3,
        img: "https://mudkart.com/cdn/shop/files/Fryingpanandkadai-02_1.webp?v=1721899541&width=533",
        about: "FRYING PAN",
        price: 700,
        description: "Ideal for frying and stir-frying."
    },
    {
        id: 4,
        img: "https://mudkart.com/cdn/shop/files/Untitled_design_-_2024-07-25T144050.559.webp?v=1721898691&width=533",
        about: "GRAVY POT",
        price: 430,
        description: "Excellent for preparing gravy-based dishes."
    },
];

const PotDetails = () => {
    const { potId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pot = cookingPots.find(p => p.id === parseInt(potId));

    
    const handleAddToCart = (pot) => {
        dispatch(addItemToCart(pot)); 
    };

    return (
        <div className="pot-details">
            {pot ? (
                <>
                    <img src={pot.img} alt={pot.about} className="pot-image" />
                    <h1>{pot.about}</h1>
                    <p className="price">Price: ₹ {pot.price}</p>
                    <p>{pot.description}</p>
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                    <button className='btn btn-secondary ac  ' onClick={() => handleAddToCart(pot)}>Add to Cart</button>

                    {/* Shipping Details Section */}
                    <div className="shipping-details">
                        <FaTruck className="shipping-icon" />
                        <div>
                            <h3>Shipping Information</h3>
                            <p>Free shipping on orders over ₹1000.</p>
                            <p>Delivery within 5-7 business days.</p>
                        </div>
                    </div>

                    {/* Customer Reviews Section */}
                    <div className="reviews">
                        <h3>Customer Reviews</h3>
                        <div className="review">
                            <FaStar className="star-icon" />
                            <p>“This pot is fantastic! Perfect for my fish curry.” - Ayesha</p>
                        </div>
                        <div className="review">
                            <FaStar className="star-icon" />
                            <p>“I love my tea clay pot! Highly recommend.” - Ravi</p>
                        </div>
                    </div>

                    {/* Care Instructions Section */}
                    <div className="care-instructions">
                        <h3>Care Instructions</h3>
                        <p>Hand wash only. Avoid harsh detergents. Store in a dry place.</p>
                    </div>
                </>
            ) : (
                <div>
                    <p>Product not found.</p>
                    <button onClick={() => navigate('/')} className="btn btn-secondary">Go Back</button>
                </div>
            )}
        </div>
    );
};

export default PotDetails;
