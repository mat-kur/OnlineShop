import "./Login.css"
import React from "react";
import {Link} from "react-router-dom";


export const Login = () => {


    return (
        <div className="login-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form className="login-form">
                        <div className="input-container">
                            <i className="fa-regular fa-envelope icon-login"></i>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="login-button">LOGIN</button>
                    </form>
                    <div className="create-account">
                        <p className="create-account-p">Don't have an account?</p>
                        <button className="link-register"><Link to="/register">CREATE ACCOUNT</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};