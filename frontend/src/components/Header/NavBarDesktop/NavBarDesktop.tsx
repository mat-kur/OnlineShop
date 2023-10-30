import { Link } from "react-router-dom";
import {useState} from "react";
import "./NavBarDesktop.css"

export const NavBarDesktop = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <nav className="desktop-nav">
            <ul className="desktop-list">
                <Link className="desktop-item" to='/'>Homepage</Link>
                <Link className="desktop-item" to='/'>Support</Link>
                <Link className="desktop-item" to='/products-list'>Products</Link>
                <Link className="desktop-item" to='/'>Menu 2</Link>
                <li className="desktop-item-submenu" onClick={toggleSubMenu}>
                    My account <i className={`${isSubMenuOpen ? 'desktop-arrow fa-solid fa-caret-up' : 'desktop-arrow fa-solid fa-caret-down'}`}></i>
                    <ul className={`${isSubMenuOpen ? 'desktop-submenu-open' : 'desktop-submenu'}`}>
                        <li className="li-submenu-item"><Link className='desktop-submenu-item' to="#">My profile</Link></li>
                        <li className="li-submenu-item"><Link className='desktop-submenu-item' to="#">My orders</Link></li>
                        <li className="li-submenu-item"><Link className='desktop-submenu-item' to="#">Wish list</Link></li>
                        <li className="li-submenu-item"><Link className='desktop-submenu-item' to="#">SubMenu 4</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
