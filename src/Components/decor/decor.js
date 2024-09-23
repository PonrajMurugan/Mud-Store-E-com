import React from 'react';
import './decor.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const decor = [
    {
        "id": 1,
        "about": "Clay Pottery Lamp",
        "img": "https://mudkart.com/cdn/shop/files/204.png?v=1716888383&width=720",
        "price": 1500,
        "description": "Natural clay for sculpting and pottery"
    },
    {
        "id": 2,
        "about": "new stove",
        "img": "https://mudkart.com/cdn/shop/files/42.png?v=1716783621&width=533",
        "price": 1200,
        "description": "Organic soil amendments that improve plant health"
    },
    {
        "id": 3,
        "about": "old stove",
        "img": "https://mudkart.com/cdn/shop/files/vjn08386-640x640.png?v=1717044772&width=533",
        "price": 1100,
        "description": "Eco-friendly craft kits for hands-on projects"
    },
    {
        "id": 4,
        "about": "pooja lamp old",
        "img": "https://mudkart.com/cdn/shop/files/91_1.png?v=1720506691&width=533",
        "price": 500,
        "description": "Unique decorative mud-based items, perfect for home décor"
    },
    {
        "id": 5,
        "about": "pooja lamp new",
        "img": "https://mudkart.com/cdn/shop/files/71.png?v=1716792124&width=533",
        "price": 700,
        "description": "Custom orders tailored to your specific needs"
    },
    {
        "id": 6,
        "about": "Decorative bell",
        "img": "https://mudkart.com/cdn/shop/files/459.png?v=1721390792&width=533",
        "price": 1050,
        "description": "Organic soil amendments that improve plant health"
    },
    {
        "id": 7,
        "about": "decorative vessel",
        "img": "https://mudkart.com/cdn/shop/files/Untitleddesign_33.png?v=1718858174&width=720",
        "price": 700,
        "description": "Natural clay for sculpting and pottery"
    },
    {
        "id": 8,
        "about": "water vessel",
        "img": "https://mudkart.com/cdn/shop/files/img_0333-1024x1024.png?v=1716900458&width=720",
        "price": 400,
        "description": "Custom orders tailored to your specific needs"
    }
]


const Decor = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item)); 
    };


    return (
        <div  data-aos="zoom-out-down" className="decor-section">
        <h1 className="decor-title">Decor Collection</h1>
        <div className="decor-container">
            {decor.map(item => (
                <div key={item.id} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={item.img} alt={item.name} className="decor-image" />
                            <h3 className="decor-name">{item.about}</h3>
                            <p className="decor-price"> ₹ {item.price}</p>
                             <button className='btn btn-danger' onClick={() => handleAddToCart(item)}>Add Cart</button>
                        </div>
                        <div className="flip-card-back">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <button className='btn btn-danger' onClick={() => handleAddToCart(item)}>Add Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Decor;
