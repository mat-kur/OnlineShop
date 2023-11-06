import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';


export const AdminNav = () => {
    return (
        <div className="admin-nav">
            <ul className="admin-nav-list">
                <li><Link to="#"><i className="fa-solid fa-chart-line"></i><span> Dashboard</span></Link></li>
                <li><Link to="#"><i className="fa-solid fa-box-open"></i><span> Products</span></Link></li>
                <li><Link to="#"><i className="fa-solid fa-clipboard-list"></i><span> Orders</span></Link></li>
                <li><Link to="#"><i className="fa-solid fa-users"></i><span> Users</span></Link></li>
            </ul>
        </div>
    );
};
