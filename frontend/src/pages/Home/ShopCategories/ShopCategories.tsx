import "./ShopCategories.css"
import React from "react";
import {Link} from "react-router-dom";


export const ShopCategories = () => {


    return (
        <>
            <h2 className="categories offers-title">CATEGORIES</h2>
            <div className="categories-container">
                <div className="wrapper-categories">
                    <i className="categories-icon fa-solid fa-khanda"></i>
                    <Link className='link-categories' to="/">RPG</Link>
                </div>
                <div className="wrapper-categories">
                    <i className="categories-icon fa-solid fa-gun"></i>
                    <Link className='link-categories' to="/">FPS</Link>
                </div>
                <div className="wrapper-categories">
                    <i className="categories-icon fa-solid fa-brain"></i>
                    <Link className='link-categories' to="/">LOGIC</Link>
                </div>
                <div className="wrapper-categories">
                    <i className="categories-icon fa-solid fa-volleyball"></i>
                    <Link className='link-categories' to="/">SPORT</Link>
                </div>
            </div>
        </>
    );
};