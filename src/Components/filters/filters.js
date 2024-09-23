import React from 'react';
import './filters.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const filters = [
    {
        "id": 1,
        "about": "Black Spade Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2021/11/White-Water-Pot-Black-Spade-11-L-2-595x595.jpg",
        "price": 2500
    },
    {
        "id": 2,
        "about": "Drum Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Drum-11-L-2-595x595.jpg",
        "price": 2400
    },
    {
        "id": 3,
        "about": "Cart Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Cart-11-L-2-595x595.jpg",
        "price": 2300
    },
    {
        "id": 4,
        "about": "Dancing Doll Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Dancing-Doll-11-L-2-595x595.jpg",
        "price": 2800
    },
    {
        "id": 5,
        "about": "Floral Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2019/04/White-Water-Pot-Floral-12-L-2-1-595x595.jpg",
        "price": 3000
    },
    {
        "id": 6,
        "about": "Royal Kites Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2021/02/White-Water-Pot-Royal-Kites-12-L-2-595x595.jpg",
        "price": 2950
    },
    {
        "id": 7,
        "about": "Abstract Cross Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Abstract-Cross-13-L-2-595x595.jpg",
        "price": 2800
    },
    {
        "id": 8,
        "about": "Dancing Doll Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Dancing-Doll-13-L-2-595x595.jpg",
        "price": 3500
    }
]


const Filters = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item)); 
    };


    return (
        <div  data-aos="zoom-out-down" className="filters-section">
            <h1 className="filters-title">Filter Pots</h1>
            <div className="filters-container ">
                {filters.map(item => (
                    <div key={item.id} className="filter-item ">
                        <img src={item.img} alt={item.name} className="filter-image" />
                        <h3 className="filter-name">{item.about}</h3>
                        <p className="filter-price"> ₹ {item.price}</p>
                        <button className='btn btn-danger' onClick={() => handleAddToCart(item)}>Add Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filters;
