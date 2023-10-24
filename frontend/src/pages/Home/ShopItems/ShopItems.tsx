import React, {useEffect, useState} from 'react';
import './ShopItems.css';
import logo3 from "./i-fifa-23-gra-pc.png";

export const ShopItems = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');

    const products = [
        {
            title: "FIFA 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
            genre: "Sportowa",
            platform: "PC",
            price: "30 zł",
            priceBefore: "60 zł",
            imgSrc: logo3
        },
        {
            title: "FIFAdsadsafda 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
            genre: "Sportowa",
            platform: "PC",
            price: "30 zł",
            priceBefore: "60 zł",
            imgSrc: logo3
        },
        {
            title: "FdsadsaIFAdsadsafda 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam!",
            genre: "Sportowa",
            platform: "PC",
            price: "30 zł",
            priceBefore: "60 zł",
            imgSrc: logo3
        },
    ];

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setSlideDirection('left'); // Ustaw kierunek na lewo dla automatycznego przewijania
            nextProduct();
        }, 5000); // Przewijaj co 5 sekund

        return () => clearInterval(autoSlide); // Czyść interval, gdy komponent jest odmontowywany
    }, [currentIndex]);

    const nextProduct = () => {
        setSlideDirection('left'); // Ustaw kierunek na lewo dla przewijania w prawo
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setSlideDirection('right'); // Ustaw kierunek na prawo dla przewijania w lewo
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };


    const product = products[currentIndex];

    return (
        <>
            <h2>OFFERS</h2>
            <div className={`shop-main-items ${slideDirection === 'left' ? 'slide-left' : ''}`} key={currentIndex}>
                <button className="arrow-slide-left" onClick={prevProduct}>&lt;</button>
                <div className="shop-items-container">
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
                <button className="arrow-slide-right" onClick={nextProduct}>&gt;</button>
            </div>
        </>
    );
};

