import "./NavBar.css"
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {NavBarProps} from "./NavBar.types";


export const NavBar: React.FC<NavBarProps> = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {

    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return(
        <>
            {isMenuOpen && (
                <nav className="main-navbar">
                    <i onClick={toggleMenu} className="hide-nav fa-solid fa-xmark"></i>
                    <div className="search-bar-container">
                        <input type="text" className="search-input" placeholder="Search"></input>
                        <i className="fas fa-search search-icon"></i>
                    </div>
                    <ul className="main-nav-list">
                        <li className="main-nav-item"><Link className='main-nav-item' to="#">Homepage</Link></li>
                        <li className={`main-nav-item`} onClick={toggleSubMenu}>
                            <Link className={`${isSubMenuOpen ? 'no-border' : ''} main-nav-item`} to="#">My account <i className={`${isSubMenuOpen ? 'submenu-arrow fa-solid fa-caret-up' : 'submenu-arrow fa-solid fa-caret-down'}`}></i></Link>
                            {isSubMenuOpen && (
                                <ul className="sub-nav-list">
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="#">Menu 1</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="#">Menu 2</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="#">Menu 3</Link></li>
                                    <li className="sub-nav-item"><Link className='sub-nav-item' to="#">Menu 4</Link></li>

                                </ul>
                            )}
                        </li>
                        <li className="main-nav-item"><Link className='main-nav-item' to="#">Homepage</Link></li>
                        <li className="main-nav-item"><Link className='main-nav-item' to="#">Homepage</Link></li>

                    </ul>
                </nav>
            )}
        </>
    )
}