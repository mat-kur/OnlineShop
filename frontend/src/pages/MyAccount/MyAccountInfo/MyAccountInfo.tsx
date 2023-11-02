import "./MyAccountInfo.css";
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import {Link} from "react-router-dom";
import React from "react";


export const MyAccountInfo = () => {

    return (
        <div className="my-account-info">
            <div className="links-nav">
                <Link to="/" className="homelink">Home</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> My Account</Link>
            </div>
            <MyAccountNav/>
            <div className="info-container">
                <p className="info-p">My Account</p>
                <form className="account-changes">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" name="firstname"></input>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastrname" name="lastname"></input>
                    <label htmlFor="tel">Telephone</label>
                    <input type="number" id="tel" name="tel"></input>
                    <label htmlFor="email">Email</label>
                    <input type="number" id="number" name="number"></input>
                    <button className="save-changes">SAVE CHANGES</button>
                </form>
            </div>
        </div>
    );
};