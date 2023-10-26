import React, {useEffect, useState} from 'react';
import './ShopItems.css';
import logo3 from "./i-fifa-23-gra-pc.png";
import logo4 from "./i-cyberpunk-2077-digital.png"
import logo5 from "./elex2.png"
import logoitem from "./100b9e36-03d1-4c4e-98a2-0f51b0753b7c.png"
import {Carousel} from "react-bootstrap";


const MOCK_PRODUCTS = [
    {
        id: 1,
        title: "FIFA 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
        genre: "Sportowa",
        platform: "PC",
        price: "30 zł",
        priceBefore: "60 zł",
        imgSrc: logo3
    },
    {
        id: 2,
        title: "Elex 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
        genre: "RPG",
        platform: "PC",
        price: "130 zł",
        priceBefore: "160 zł",
        imgSrc: logo5
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
        genre: "FPP, RPG",
        platform: "PC",
        price: "130 zł",
        priceBefore: "170 zł",
        imgSrc: logo4
    },
];
export const ShopItems = () => {

    const [offersProducts, setOffersProducts] = useState(MOCK_PRODUCTS);

    return (
        <>
            <h2 className="offers-title">OFFERS</h2>
            <div className="item-container">
                <div className="about-container">
                    <h3 className="about header-title"><span>O</span>nline-<span>S</span>hop</h3>
                    <ul className="about-list">
                        <li className='about-item'>Best prices</li>
                        <li className='about-item'>Fast delivery</li>
                        <li className='about-item'>24/7 support</li>
                        <li className='about-item'>Money back</li>
                        <li className='about-item'>Secure Payment</li>
                    </ul>
                </div>
                <Carousel>
                    {offersProducts && offersProducts.map(product => (
                        <Carousel.Item key={product.id}>
                            <div className="shop-items-container">
                                <div className="like-btn heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                                <div className="home-shop-item">
                                    <img src={product.imgSrc} alt="" className="shop-item-img"/>
                                </div>
                                <div className="item-rate">
                                    <div className="item-stars">
                                        <i className="fill-star fa-solid fa-star"></i>
                                        <i className="fill-star fa-solid fa-star"></i>
                                        <i className="fill-star fa-solid fa-star"></i>
                                        <i className="fill-star fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <button className="stock">INSTOCK</button>
                                </div>
                                <div className="item-info-container">
                                    <div className="home-item-title">
                                        <p className="title">{product.title}</p>
                                    </div>
                                    <div className="home-item-content">
                                        <p className="description">{product.description}</p>
                                    </div>
                                    <div className="home-item-info">
                                        <p className="item-info-p">Gatunek: <span>{product.genre}</span></p>
                                        <p className="item-info-p">Platforma: <span>{product.platform}</span></p>
                                    </div>
                                    <div className="home-item-price">
                                        <p className="item-price">{product.price}</p>
                                        <p className="price-before">{product.priceBefore}</p>
                                    </div>
                                    <div className="button-detail">
                                        <button className="detail">VIEW DETAILS</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
}



