import "./ProductsList.css";

import React, {useEffect, useState} from "react";
import axios from "axios";
import { Product } from "../../types/product.types"

export const ProductsList = () => {

    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProductList(response.data); // Zakładamy, że response.data jest Product[]
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania danych:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="seard-categories-wrapper">
            <div className="search-result-wrapper">
                <p className="result-search">Search result of <span>'FIFA 2023'</span></p>
                <div className="dropdown-container">
                    <select className="custom-dropdown">
                        <option value="lower-price">Lower price</option>
                        <option value="higher-price">Higher price</option>
                        <option value="most-popular">Most popular</option>
                    </select>
                </div>
            </div>
            <div className="prod-categories-list">
                <div className="filters-container">
                    <div className="search-filters-container">
                        <p className="filters-container-paragraph"><i
                            className=" filters-search-icon fa-solid fa-magnifying-glass"></i>SEARCH FILTER
                        </p>
                    </div>
                    <div className="input-search-container">
                        <input type="text" className="filters-container-input" placeholder="Search..."/>
                    </div>
                    <div className="categories-cont filters-categories">
                        <p className="paragraph-categories">Categories</p>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="RPG"/>
                            <label htmlFor="RPG" className="checkbox-p">RPG</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="FPS"/>
                            <label htmlFor="FPS" className="checkbox-p">FPS</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="LOGIC"/>
                            <label htmlFor="LOGIC" className="checkbox-p">LOGIC</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="SPORT"/>
                            <label htmlFor="SPORT" className="checkbox-p">SPORT</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="BATTLE ROYALE"/>
                            <label htmlFor="BATTLE ROYALE" className="checkbox-p">BATTLE ROYALE</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="SIMULATORS"/>
                            <label htmlFor="SIMULATORS" className="checkbox-p">SIMULATORS</label>
                        </div>
                    </div>
                    <div className="categories-cont brands-categories filters-categories">
                        <p className="paragraph-categories">BRANDS</p>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="EA"/>
                            <label htmlFor="EA" className="checkbox-p">EA</label>
                        </div>
                        <div className="filters-checkboxes">
                            <input type="checkbox" id="cdProjectRedCheckbox"/>
                            <label htmlFor="cdProjectRedCheckbox" className="checkbox-p">CD PROJECT
                                RED</label>
                        </div>
                    </div>
                    <div className="brands-categories filters-categories">
                        <p className="paragraph-categories">PRICE RANGE</p>
                        <div className="price-range-inputs">
                            <input type="text" className="min-range" placeholder="$ MIN"/>
                            <p className="price-range-p">-</p>
                            <input type="text" className="max-range" placeholder="$ MAX"/>
                        </div>
                        <button className="btn-filter">FILTER</button>
                    </div>
                </div>
                <div className="products-wrapper-games">
                    {productList && productList.map(prod => (
                        <div className="single-product">
                            <div className="single-product-img">
                                <img src={`http://localhost:5000/uploads/products-images/${prod.image}`} alt=""/>
                            </div>
                            <div className="info-prodcut-wrapper">
                                <div className="wish-list-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                                <div className="single-product-paragraph">
                                    <p className="product-p">{prod.title}</p>
                                </div>
                                <div className="single-product-rate-stock">
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
                                <div className="single-product-description">
                                    <p className="product-description">{prod.shortDescription}</p>
                                </div>
                                <div className="single-product-categories">
                                    <p className="categories-p">Category: <span>{prod.category}</span></p>
                                    <p className="platform-p">Platform: <span>{prod.platform}</span></p>
                                </div>
                                <div className="single-product-price">
                                    <p className="product-price">{prod.price}</p>
                                    <p className="product-price-before">150</p>
                                </div>
                                <button className="single-product-detail">VIEW DETAILS</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};