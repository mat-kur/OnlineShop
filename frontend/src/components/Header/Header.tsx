import "./Header.css"
import {HeaderProps} from "./Header.types";
import React, {useState} from "react";
import {NavBar} from "./NavBar/NavBar";
import {Bucket} from "./Bucket/Bucket";



export const Header: React.FC<HeaderProps> = props => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBucketMenuOpen, setIsBucketMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleBucketMenu = () => {
        setIsBucketMenuOpen(prev => !prev);
    };

    return (
        <>
            <header className="main-header">
                <i onClick={toggleMenu} className="header-bars fa-solid fa-bars"></i>
                <h1 className="header-title"><span>O</span>nline-<span>S</span>hop</h1>
                <div className="icon-badge-container">
                    <i onClick={toggleBucketMenu} className="header-bucket fa-solid fa-bag-shopping"></i>
                    <span className="icon-badge">1</span>
                </div>
            </header>
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>
            <Bucket isBucketMenuOpen={isBucketMenuOpen} setIsBucketMenuOpen={setIsBucketMenuOpen} toggleBucketMenu={toggleBucketMenu}/>
        </>
    );
}