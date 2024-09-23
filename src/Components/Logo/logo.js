import React from 'react';
import './logo.css'


const Logo = () => {
    return (
        <div   className="features-container">
         
        <div className="feature-item">
      
               
        
            <div className="feature-item-inner">
                <div className="feature-item-front">
                    <img src='https://mitticool.com/wp-content/uploads/2018/12/Asset-6.png' alt='logo' />
                    <h4>Made With Natural Ingredients</h4>
                    <p>Made with Five cow elements — cow milk, yogurt, ghee, cow dung, gojran</p>
                </div>
                <div className="feature-item-back">
                    <h4>More Info</h4>
                    <p>Learn more about our natural ingredients and their benefits.</p>
                </div>
            </div>
        </div>
        <div className="feature-item">
            <div className="feature-item-inner">
                <div className="feature-item-front">
                    <img src='https://mitticool.com/wp-content/uploads/2018/12/Asset-5.png' alt='logo' />
                    <h4>Long Lasting And Quality Sticks</h4>
                    <p>Get long-lasting and best quality incense sticks that are made with natural ingredients.</p>
                </div>
                <div className="feature-item-back">
                    <h4>More Info</h4>
                    <p>Discover how our incense sticks are made for longer-lasting fragrance.</p>
                </div>
            </div>
        </div>
        <div className="feature-item">
            <div className="feature-item-inner">
                <div className="feature-item-front">
                    <img src='https://mitticool.com/wp-content/uploads/2018/12/Asset-7.png' alt='logo' />
                    <h4>Delivery Within a Week</h4>
                    <p>Get Mitticool’s incense sticks delivered at your door anywhere in India.</p>
                </div>
                <div className="feature-item-back">
                    <h4>More Info</h4>
                    <p>We ensure prompt delivery within a week to your doorstep.</p>
                </div>
            </div>
        </div>
    </div>
    
    
    );
};


export default Logo;