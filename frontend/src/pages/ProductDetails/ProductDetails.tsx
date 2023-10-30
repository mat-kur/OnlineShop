import "./ProductDetails.css";

import logo from "../Home/ShopItems/i-fifa-23-gra-pc.png"
import React from "react";


export const ProductDetails = () => {


    return (
        <>
            <div className="prod-details">
                <div className="prod-img">
                    <img src={logo} alt=""/>
                </div>
                <div className="prod-info">
                    <p className="prod-title">FIFA 2023</p>
                    <div className="prod-rate single-product-rate-stock">
                        <div className="product-stars">
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="product-button">
                            <button className="product-stock">INSTOCK</button>
                        </div>
                    </div>
                    <div className="prod-price-cont">
                        <p className="prod-price">100 zł</p>
                        <p className="prod-price-before">170zł</p>
                    </div>
                    <div className="prod-short-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, maiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nihil.</p>
                    </div>
                    <div className="prod-actions">
                        <input className="number-input" type="number" min="0" max="100" step="1" value="50"/>
                        <button className="prod-add">ADD TO CART</button>
                        <button className="prod-wishlist"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};