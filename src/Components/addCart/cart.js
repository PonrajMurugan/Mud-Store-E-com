import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart, updateQuantity } from '../Redux/cartSlice';
import './cart.css'; 

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRemoveFromCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }));
        } else {
            dispatch(removeItemFromCart(id));
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            alert(`Thank you, ${name}! Your email is ${email}`);
            dispatch(clearCart()); 
            setName('');
            setEmail('');
        } else {
            alert('Please fill out both name and email fields.');
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart">No items in the cart</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.img} alt={item.about} className="cart-item-img" />
                            <div className="cart-item-details">
                                <h4>{item.about}</h4>
                                <p>Price: ₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button className="btn-remove" onClick={() => handleRemoveFromCart(item.id, item.quantity)}>Remove One</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Price: ₹{totalPrice}</h3>
                        <button className="btn-clear-cart" onClick={handleClearCart}>Clear Cart</button>
                    </div>

                        <form className="cart-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Cart;
