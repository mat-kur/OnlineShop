import "./AdminNavigation.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminNavigationTypes } from "./AdminNavigation.types";

export const AdminNavigation: React.FC<AdminNavigationTypes> = ({
                                                                    isMenuOpen,
                                                                    setIsMenuOpen,
                                                                    toggleMenu,
                                                                }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <>
            <div className={`overlay ${isMenuOpen ? 'overlay-show' : ''}`} onClick={toggleMenu} />
            <div className={`admin-navi ${isMenuOpen ? 'admin-navi-open' : 'admin-navi-closed'}`}>
                <i onClick={toggleMenu} className="admin-navi-close fa-solid fa-xmark"></i>
                <h3 className="admin-navi-title">
                    <span>O</span>nline-<span>S</span>hop
                </h3>
                <ul className="admin-navi-list">
                    <li className="admin-navi-item"><Link to="/"><i className="fa-solid fa-chart-line"></i> Dashboard</Link></li>
                    <li className="admin-navi-item" onClick={toggleSubMenu}>
                        <Link to="#" className={`${isSubMenuOpen ? 'no-border' : ''} admin-nav-submenu`}>
                            <i className="fa-solid fa-boxes-stacked"></i> Products
                            <i className={`${isSubMenuOpen ? 'submenu-arrow fa-solid fa-caret-down' : 'submenu-arrow fa-solid fa-caret-right'}`}></i>
                        </Link>
                        {isSubMenuOpen && (
                            <ul className="sub-admin-nav-list">
                                <li className="sub-admin-nav-item"><Link to="/admin/products/add-product">Add Product</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/product-list">Product List</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/hot-offers">Hot Offers</Link></li>
                                <li className="sub-admin-nav-item"><Link to="/admin/products/discounts">Discounts</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="admin-navi-item"><Link to="/"><i className="admin-nav-cart fa-solid fa-cart-shopping"></i> Orders</Link></li>
                    <li className="admin-navi-item"><Link to="/"><i className="fa-solid fa-users"></i> Users</Link></li>
                </ul>
            </div>
        </>
    );
};
