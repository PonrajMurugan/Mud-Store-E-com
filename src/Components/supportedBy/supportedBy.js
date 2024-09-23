import React from 'react';
import './supportedBy.css';

const SupportedBy = () => {
    return (
        <div  data-aos="zoom-in-right" className="supported-by">
            <h1 className="supported-by-title">SUPPORTED BY</h1>
            <div className="logo-container">
                <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2018/11/makein-india.png' alt='Make in India' />
                </div>
                <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2018/11/nif.png' alt='NIF' />
                </div>
                <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2018/11/honeybee.png' alt='Honeybee' />
                </div>
                <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2018/11/sristi.png' alt='Sristi' />
                </div>
                <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2018/11/startup-india.jpg' alt='Startup India' />
                </div>
                {/* <div className="logo-item">
                    <img src='https://mitticool.com/wp-content/uploads/2021/09/gian-logo.png' alt='GIAN' />
                </div> */}
            </div>
        </div>
    );
};

export default SupportedBy;
