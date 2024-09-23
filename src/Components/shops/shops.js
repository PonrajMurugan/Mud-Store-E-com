import React from 'react';
import './shops.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';



const shops = [
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
    },
    {
        "id": 9,
        "about": "RICE COOKER",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/TW_13-PhotoRoom-1.png-PhotoRoom-1-1.png",
        "price": 100
    },
    {
        "id": 10,
        "about": "GRAVY POT",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/kadai1-768x768.jpg",
        "price": 100
    },
    {
        "id": 11,
        "about": "TAWA SMALL",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/Simple-tawa-with-HHandle-2-1-768x768.jpg",
        "price": 100
    },
    {
        "id": 12,
        "about": "TAWA SMALL B",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/Nonstick-tawa-with-handle-2-768x768.jpg",
        "price": 100
    },
    {
        "id": 13,
        "about": "TAWA LARGE",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/simple-tawa-4-768x768.jpg",
        "price": 100
    },
    {
        "id": 14,
        "about": "TAWA LARGE B",
        "img": "https://mitticool.com/wp-content/uploads/2020/12/Nonstick-tawa-with-handle-4-768x768.jpg",
        "price": 100
    },
    {
        "id": 15,
        "about": "STORAGE POT",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/Biriyani-pot-2-1-768x768.jpg",
        "price": 100
    },
    {
        "id": 16,
        "about": "SERVE POT",
        "img": "https://mitticool.com/wp-content/uploads/2018/11/MH-handi-2-1-768x768.jpg",
        "price": 100
    },
    {
        "id": 17,
        "about": "Black Spade Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2021/11/White-Water-Pot-Black-Spade-11-L-2-595x595.jpg",
        "price": 2500
    },
    {
        "id": 18,
        "about": "Drum Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Drum-11-L-2-595x595.jpg",
        "price": 2400
    },
    {
        "id": 19,
        "about": "Cart Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Cart-11-L-2-595x595.jpg",
        "price": 2300
    },
    {
        "id": 20,
        "about": "Dancing Doll Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Dancing-Doll-11-L-2-595x595.jpg",
        "price": 2800
    },
    {
        "id": 21,
        "about": "Floral Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2019/04/White-Water-Pot-Floral-12-L-2-1-595x595.jpg",
        "price": 3000
    },
    {
        "id": 22,
        "about": "Royal Kites Water Pot",
        "img": "https://mitticool.com/wp-content/uploads/2021/02/White-Water-Pot-Royal-Kites-12-L-2-595x595.jpg",
        "price": 2950
    },
    {
        "id": 23,
        "about": "Abstract Cross Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Abstract-Cross-13-L-2-595x595.jpg",
        "price": 2800
    },
    {
        "id": 24,
        "about": "Dancing Doll Pot",
        "img": "https://mitticool.com/wp-content/uploads/2022/04/White-Water-Pot-Dancing-Doll-13-L-2-595x595.jpg",
        "price": 3500
    },
    {
        "id": 25,
        "about": "Clay Pottery Lamp",
        "img": "https://mudkart.com/cdn/shop/files/204.png?v=1716888383&width=720",
        "price": 500
    },
    {
        "id": 26,
        "about": "Decorative Wall Plate",
        "img": "https://mudkart.com/cdn/shop/files/42.png?v=1716783621&width=533",
        "price": 500
    },
    {
        "id": 27,
        "about": "Handcrafted Vase",
        "img": "https://mudkart.com/cdn/shop/files/vjn08386-640x640.png?v=1717044772&width=533",
        "price": 500
    },
    {
        "id": 28,
        "about": "Clay Tea Set",
        "img": "https://mudkart.com/cdn/shop/files/91_1.png?v=1720506691&width=533",
        "price": 500
    },
    {
        "id": 29,
        "about": "Mud Sculptures",
        "img": "https://mudkart.com/cdn/shop/files/71.png?v=1716792124&width=533",
        "price": 500
    },
    {
        "id": 30,
        "about": "Decorative Clay Bird",
        "img": "https://mudkart.com/cdn/shop/files/459.png?v=1721390792&width=533",
        "price": 500
    },
    {
        "id": 31,
        "about": "Earthen Water Jug",
        "img": "https://mudkart.com/cdn/shop/files/Untitleddesign_33.png?v=1718858174&width=720",
        "price": 500
    },
    {
        "id": 32,
        "about": "Traditional Clay Pot",
        "img": "https://mudkart.com/cdn/shop/files/img_0333-1024x1024.png?v=1716900458&width=720",
        "price": 500
    }
]


const Shops = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (shop) => {
        dispatch(addItemToCart(shop)); 
    };

    return (
        <div>
            <h1 className='all-products'>All Products</h1>
       
        <div className="shop-container">            
        {shops.map((shop) => (
            <div key={shop.id} className="shop-card">
                <img src={shop.img || shop.image} alt={shop.name} className="shop-image" />
                <h2 className="shop-name">{shop.about}</h2>
                <p className="shop-price"> ₹ {shop.price}</p>
                <button className='btn btn-secondary ac  ' onClick={() => handleAddToCart(shop)}>Add to Cart</button>
            </div>
        ))}
    </div>
    </div>
    );
};

export default Shops;