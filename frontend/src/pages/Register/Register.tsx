import "./Register.css";
import {Link} from "react-router-dom";
import React from "react";


export const Register = () => {



    return (
        <div className="login-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form className="login-form">
                        <div className="input-container">
                            <i className="fa fa-user icon-login"></i>
                            <input type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div className="input-container">
                            <i className="fa-regular fa-envelope icon-login"></i>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input type="repassword" id="repassword" name="repassword" placeholder="Repat password" />
                        </div>
                        <button type="submit" className="login-button">REGISTER</button>
                    </form>
                    <div className="create-account">
                        <p className="create-account-p">Already have an account?</p>
                        <button className="link-register"><Link to="/login">LOGIN</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};