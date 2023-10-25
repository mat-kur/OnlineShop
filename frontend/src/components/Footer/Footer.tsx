import "./Footer.css"
import React from "react";


export const Footer = () => {



    return (
        <footer>
            <div className="wrapper-footer">
                <h3 className="footer-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="wrapper-email">
                    <i className="footer-icon fa-regular fa-envelope"></i>
                    <p className="email">example@example.com</p>
                </div>
                <div className="wrapper-phone">
                    <i className="footer-icon fa-solid fa-phone"></i>
                    <p className="phone">111-222-333</p>
                </div>
            </div>
        </footer>
    );
}