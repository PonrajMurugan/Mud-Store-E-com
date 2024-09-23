import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navBar.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  const cartCount = useSelector((state) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0));

  const handleShopClick = () => {
    window.scroll(0, 0);
  };

  const handleNavClick = () => {
    const navbarCollapse = navbarRef.current;
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); 
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleShopClick}>
            <img src='https://mudkart.com/cdn/shop/files/Mudkart_Logo-01_1_1.png?v=1721278980' alt='logo' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => { handleShopClick(); handleNavClick(); }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shops" onClick={() => { handleShopClick(); handleNavClick(); }}>Shops</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kitchenware" onClick={() => { handleShopClick(); handleNavClick(); }}>Kitchen-Ware</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/earthenware" onClick={() => { handleShopClick(); handleNavClick(); }}>Earthen-Ware</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/filters" onClick={() => { handleShopClick(); handleNavClick(); }}>Filters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/decor" onClick={() => { handleShopClick(); handleNavClick(); }}>Decor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={() => { handleShopClick(); handleNavClick(); }}>
                  Cart-Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cart" onClick={() => { handleShopClick(); handleNavClick(); }}>
                  <i className="bi bi-cart-fill"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
