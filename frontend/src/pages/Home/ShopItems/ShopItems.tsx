import React, {useEffect, useState} from 'react';
import './ShopItems.css';
import logo3 from "./i-fifa-23-gra-pc.png";
import logo4 from "./i-cyberpunk-2077-digital.png"
import logo5 from "./elex2.png"
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
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [slideDirection, setSlideDirection] = useState('right');
    const [offersProducts, setOffersProducts] = useState(MOCK_PRODUCTS);

    // useEffect(() => {
    //     const autoSlide = setInterval(() => {
    //         setSlideDirection('left');
    //         goToNextProduct();
    //     }, 3000);
    //
    //     return () => clearInterval(autoSlide);
    // }, [currentIndex]);

    // const goToNextProduct = () => {
    //     setSlideDirection('next');
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % offersProducts.length);
    // };
    //
    // const prevProduct = () => {
    //     setSlideDirection('prev');
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + offersProducts.length) % offersProducts.length);
    // };
    //
    //
    //
    //
    // const product = offersProducts[currentIndex];
    // const nextProductIndex = (currentIndex + 1) % offersProducts.length;
    // const nextProduct = offersProducts[nextProductIndex];


    return (
        <Carousel>
            {offersProducts && offersProducts.map(product => (
                <Carousel.Item key={product.id}>
                    <img
                        className="d-block w-100"
                        src={product.imgSrc}
                        alt={product.title}
                    />
                    <Carousel.Caption>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );

    // return (
    //     <>
    //         <h2 className="offers-title">OFFERS</h2>
    //         <div className="item-wrapper">
    //             <i onClick={prevProduct} className="arrow-slide-left fa-solid fa-chevron-left"></i>
    //             <div className="shop-main-items-container">
    //                 <div className={`shop-main-items ${slideDirection === 'next' ? 'slide-left' : 'slide-right'}`} key={currentIndex}
    //                      onTransitionEnd={() => setSlideDirection('')}>
    //                     {/* Aktualny produkt */}
    //                     {renderProductItem(product)}
    //                 </div>
    //                 <div className={`shop-main-items-static ${slideDirection === 'next' ? 'slide-right-static' : 'slide-left-static'}`} key={nextProductIndex}>
    //                     {/* Następny produkt */}
    //                     {renderProductItem(nextProduct)}
    //                 </div>
    //             </div>
    //             <i onClick={goToNextProduct} className="arrow-slide-right fa-solid fa-chevron-right"></i>
    //         </div>
    //     </>
    // );
}

// const renderProductItem = (product: any) => {
//     return (
//         <div className="shop-items-container">
//             <div className="like-btn heart-btn">
//                 <i className="fa-regular fa-heart"></i>
//             </div>
//             <div className="home-shop-item">
//                 <img src={product.imgSrc} alt="" className="shop-item-img" />
//             </div>
//             <div className="item-rate">
//                 <div className="item-stars">
//                     <i className="fill-star fa-solid fa-star"></i>
//                     <i className="fill-star fa-solid fa-star"></i>
//                     <i className="fill-star fa-solid fa-star"></i>
//                     <i className="fill-star fa-solid fa-star"></i>
//                     <i className="fa-regular fa-star"></i>
//                 </div>
//                 <button className="stock">INSTOCK</button>
//             </div>
//             <div className="item-info-container">
//                 <div className="home-item-title">
//                     <p className="title">{product.title}</p>
//                 </div>
//                 <div className="home-item-content">
//                     <p className="description">{product.description}</p>
//                 </div>
//                 <div className="home-item-info">
//                     <p className="item-info-p">Gatunek: <span>{product.genre}</span></p>
//                     <p className="item-info-p">Platforma: <span>{product.platform}</span></p>
//                 </div>
//                 <div className="home-item-price">
//                     <p className="item-price">{product.price}</p>
//                     <p className="price-before">{product.priceBefore}</p>
//                 </div>
//                 <div className="button-detail">
//                     <button className="detail">VIEW DETAILS</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

