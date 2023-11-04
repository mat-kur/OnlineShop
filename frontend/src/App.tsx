import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductsList} from "./pages/ProductsList/ProductsList";
import {ProductDetails} from "./pages/ProductDetails/ProductDetails";
import {WishList} from "./pages/WishList/WishList";
import {ShoppingCart} from "./pages/ShoppingCart/ShoppingCart";
import {MyAccountNav} from "./pages/MyAccount/MyAccountNav/MyAccountNav";
import {MyAccountInfo} from "./pages/MyAccount/MyAccountInfo/MyAccountInfo";
import {MyAccountAddress} from "./pages/MyAccount/MyAccountAddress/MyAccountAddress";
import {MyOrders} from "./pages/MyAccount/MyOrders/MyOrders";
import {MyAccountSupport} from "./pages/MyAccount/MyAccountSupport/MyAccountSupport";


function App() {
  return (
    <div className="App">
        <Header title='test'/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products-list" element={<ProductsList/>}/>
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
            <Route path="/my-account/wish-list/:id" element={<WishList/>}/>
            <Route path="/my-account/cart/:id" element={<ShoppingCart/>}/>
            <Route path="/my-account/info/1" element={<MyAccountInfo/>}/>
            <Route path="/my-account/address/1" element={<MyAccountAddress/>}/>
            <Route path="/my-account/myorders/1" element={<MyOrders/>}/>
            <Route path="/my-account/support/1" element={<MyAccountSupport/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
