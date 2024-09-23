import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navBar/navBar';
import SimpleSlider from './Components/banner/banner';
import ProductBanner from './Components/product-ban/productBanner';
import CookingPot from './Components/cookingPots/cookingPot';
import CenterMode from './Components/banner-Two/bannerTwo';
import Logo from './Components/Logo/logo';
import MudProduct from './Components/mudProduct/mudProduct';
import Shipping from './Components/Shipping/shipping';
import SupportedBy from './Components/supportedBy/supportedBy';
import AboutContact from './Components/footer/footer';
import KitchenWare from './Components/kitchenWare/kitchenWare'; 
import EarthenWare from './Components/earthenWare/earthenWare';
import Filters from './Components/filters/filters';
import Decor from './Components/decor/decor';
import Shops from './Components/shops/shops';
import PotDetails from './Components/cookingPots/cookingDetails';
import MudDetails from './Components/mudProduct/mudProductDetails';
import Cart from './Components/addCart/cart';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SimpleSlider />
            <ProductBanner />
            <CookingPot />
            <CenterMode />
            <Logo />
            <MudProduct />
            <Shipping />
            <SupportedBy />
            <AboutContact />
          </>
        } />
        <Route path="/kitchenware" element={
          <>
            <KitchenWare />
            <AboutContact />
          </>
        } />
        <Route path="/earthenware" element={
          <>
            <EarthenWare />
            <AboutContact />
          </>
        } />
        <Route path="/filters" element={
          <>
            <Filters />
            <AboutContact />
          </>
        } />
        <Route path="/decor" element={
          <>
            <Decor />
            <AboutContact />
          </>
        } />
        <Route path="/shops" element={
          <>
            <Shops />
            <AboutContact />
          </>
        } />
        <Route path="/cookingDetails/:potId" element={
          <>
            <PotDetails />
            <AboutContact />
          </>
        } />
        <Route path="/mudDetails/:productId" element={
          <>
            <MudDetails />
            <AboutContact />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
