import {Carousel} from "react-bootstrap";
import "./ShopBigCarousel.css";

import testlogo from "../ShopBanners/pj-manalo-small-space-desk-setup-07.jpg"
import test4 from "./3081c613-aa5f-426c-9e4f-b1ac4fa716c9.webp"
import test5 from "./625462b3-3f87-4dfc-8f07-1d36961abac6.webp"
import React from "react";


export const ShopBigCarousel = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item className="carousel-wrapper">
                    <img className="carousel-image" src={test5} alt=""/>
                </Carousel.Item>
                <Carousel.Item className="carousel-wrapper">
                    <img className="carousel-image" src={test4} alt=""/>
                </Carousel.Item>
            </Carousel>
        </>
    );
};