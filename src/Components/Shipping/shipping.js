import React from 'react';
import './shipping.css';

const ShippingWithIcons = () => {
    return (
        <div  className="shipping-section">
            <h1 className="shipping-title">Why Choose Us?</h1>

            <div className="shipping-container">
                <div className="shipping-item">
                    <i className="bi bi-truck shipping-icon"></i>
                    <h4>Fast Delivery</h4>
                    <h6>Get Products At Your Doorstep</h6>
                </div>

                <div className="shipping-item">
                    <i className="bi bi-shield-check shipping-icon"></i>
                    <h4>Secure Payments</h4>
                    <h6>Safe and Secure Transactions</h6>
                </div>

                <div className="shipping-item">
                    <i className="bi bi-chat-dots shipping-icon"></i>
                    <h4>24/7 Support</h4>
                    <h6>We’re Here to Help</h6>
                </div>

                <div className="shipping-item">
                    <i className="bi bi-award shipping-icon"></i>
                    <h4>Quality Assurance</h4>
                    <h6>Only the Best Products</h6>
                </div>

                <div className="shipping-item">
                    <i className="bi bi-box-seam shipping-icon"></i>
                    <h4>Safe Packaging</h4>
                    <h6>Secure Packaging for Products</h6>
                </div>

                <div className="shipping-item">
                    <i className="bi bi-clock shipping-icon"></i>
                    <h4>On-time Delivery</h4>
                    <h6>Never Miss a Deadline</h6>
                </div>
            </div>
        </div>
    );
};

export default ShippingWithIcons;
