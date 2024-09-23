import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './mudProductDetails.css';
import { FaTruck, FaStar } from 'react-icons/fa';
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

const MudDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = mudProducts.find(p => p.id === parseInt(productId));

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product)); 
    };

    return (
        <div className="pot-details">
            {product ? (
                <>
                    <img src={product.img} alt={product.about} className="pot-image" />
                    <h1>{product.about}</h1>
                    <p className="price">Price: ₹ {product.price}</p>
                    {/* <p>{pot.description}</p> */}
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                    <button className='btn btn-secondary ac  ' onClick={() => handleAddToCart(product)}>Add to Cart</button>

                    <div className="shipping-details">
                        <FaTruck className="shipping-icon" />
                        <div>
                            <h3>Shipping Information</h3>
                            <p>Free shipping on orders over ₹1000.</p>
                            <p>Delivery within 5-7 business days.</p>
                        </div>
                    </div>

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

export default MudDetails;
