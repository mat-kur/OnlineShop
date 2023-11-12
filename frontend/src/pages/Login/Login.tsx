import React, {ChangeEvent, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    // const history = useHistory();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/login", credentials);
            const { access_token } = response.data;

            // Możesz zapisać token w localStorage lub w stanie globalnym aplikacji
            localStorage.setItem("token", access_token);

            // Przekieruj do strony głównej lub dashboardu użytkownika
            // history.push("/dashboard");
        } catch (error) {
            console.error("Login failed:");
            // Tutaj możesz wyświetlić błąd użytkownikowi
        }
    };

    return (
        <div className="login-992">
            <div className="login-wrapper">
                <h3 className="login-title header-title"><span>O</span>nline-<span>S</span>hop</h3>
                <div className="login-panel">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <i className="fa fa-user icon-login"></i>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock icon-login"></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            LOGIN
                        </button>
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