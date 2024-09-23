import React from 'react';
import './kitchenWare.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const kitchenWare = [
    {
        "id": 1,
        "about": "MUD FILTER 5L",
        "img": "https://mudkart.com/cdn/shop/files/6118-640x640_1.png?v=1717043667&width=533",
        "price": 1500
    },
    {
        "id": 2,
        "about": "COFFEE CUP",
        "img": "https://mudkart.com/cdn/shop/files/vjn08110-640x640.png?v=1716985824",
        "price": 800
    },
    {
        "id": 3,
        "about": "TEA CUP",
        "img": "https://mudkart.com/cdn/shop/files/vjn08124-640x640.png?v=1716985606",
        "price": 400
    },
    {
        "id": 4,
        "about": "FLORAL CUP",
        "img": "https://mudkart.com/cdn/shop/files/vjn08121-640x640.png?v=1716985444",
        "price": 400
    },
    {
        "id": 5,
        "about": "CURRY POT",
        "img": "https://mudkart.com/cdn/shop/files/Image-19.jpg?v=1716455515&width=720",
        "price": 800
    },
    {
        "id": 6,
        "about": "WATER JUG 1L",
        "img": "https://mudkart.com/cdn/shop/files/183.png?v=1716879591&width=720",
        "price": 900
    },
    {
        "id": 7,
        "about": "HOT BOX",
        "img": "https://mudkart.com/cdn/shop/files/317.png?v=1717041777&width=720",
        "price": 1200
    },
    {
        "id": 8,
        "about": "STORAGE POT",
        "img": "https://mudkart.com/cdn/shop/files/Sprout_Maker_dcfbc9f3-46e2-4853-bf8c-cbe56a915741.webp?v=1721897304&width=720",
        "price": 1800
    }
]

const KitchenWare = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item)); 
    };
    
    return (
        <div  data-aos="zoom-out-down" className="kitchenware-section">
        <h1 className="kitchenware-title">Kitchen Ware</h1>
        <div className="kitchenware-container container">
            {kitchenWare.map(item => (
                <div key={item.id} className="kitchenware-item">
                    <img src={item.img} alt={item.name} className="kitchenware-image" />
                    <h3 className="kitchenware-name">{item.about}</h3>
                    <p className="kitchenware-price"> ₹ {item.price}</p>
                    <button className='btn btn-primary'  onClick={() => handleAddToCart(item)}>Add Cart</button>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default KitchenWare;
