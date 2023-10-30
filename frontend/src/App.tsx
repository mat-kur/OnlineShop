import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductsList} from "./pages/ProductsList/ProductsList";
import {ProductDetails} from "./pages/ProductDetails/ProductDetails";


function App() {
  return (
    <div className="App">
        <Header title='test'/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products-list" element={<ProductsList/>}/>
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
