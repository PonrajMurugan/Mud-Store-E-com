import React from 'react';
import './earthenWare.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

const earthenWare = [
    { id: 1, about: 'RICE COOKER ', price: 1100, img: 'https://mitticool.com/wp-content/uploads/2018/11/TW_13-PhotoRoom-1.png-PhotoRoom-1-1.png' },
    { id: 2, about: 'GRAVY POT', price: 1200, img: 'https://mitticool.com/wp-content/uploads/2018/11/kadai1-768x768.jpg' },
    { id: 3, about: 'TAWA SMALL', price: 1500, img: 'https://mitticool.com/wp-content/uploads/2018/11/Simple-tawa-with-HHandle-2-1-768x768.jpg' },
    { id: 4, about: 'TAWA SMALL B', price: 1600, img: 'https://mitticool.com/wp-content/uploads/2018/11/Nonstick-tawa-with-handle-2-768x768.jpg' },
    { id: 5, about: 'TAWA LARGE', price: 1500, img: 'https://mitticool.com/wp-content/uploads/2018/11/simple-tawa-4-768x768.jpg' },
    { id: 6, about: 'TAWA LARGE B', price: 1600, img: 'https://mitticool.com/wp-content/uploads/2020/12/Nonstick-tawa-with-handle-4-768x768.jpg' },
    { id: 7, about: 'STORAGE POT', price: 700, img: 'https://mitticool.com/wp-content/uploads/2018/11/Biriyani-pot-2-1-768x768.jpg' },
    { id: 8, about: 'SERVE POT', price: 500, img: 'https://mitticool.com/wp-content/uploads/2018/11/MH-handi-2-1-768x768.jpg' },
];

const EarthenWare = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item)); 
    };

    return (
        <div  data-aos="zoom-out-down" className="earthenware-section">
            <h1 className="earthenware-title">Earthen Ware</h1>
            <div className="earthenware-container container">
                {earthenWare.map(item => (
                    <div key={item.id} className="earthenware-item">
                        <img src={item.img} alt={item.name} className="earthenware-image" />
                        <h3 className="earthenware-name">{item.about}</h3>
                        <p className="earthenware-price"> ₹ {item.price}</p>
                        <button className='btn btn-danger'  onClick={() => handleAddToCart(item)}>Add Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EarthenWare;
