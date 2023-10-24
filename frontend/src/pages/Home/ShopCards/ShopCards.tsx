import "./ShopCards.css";
import logo from "./tttt.png"

export const ShopCards = () => {

    return (
        <>
            <div className="banner">
                <div className="image-container">
                    <img className="banner-img" src={logo} alt=""/>
                </div>
            </div>
            <div className="shop-cart-container">
                <div className="shop-cart">
                    <div className="shop-icon">
                        <i className="truck-icon fa-solid fa-truck"></i>
                    </div>
                    <div className="shop-info">
                        <p className="shop-info-title">Free Shipping</p>
                        <p className="shop-info-content">Orders over $100</p>
                    </div>
                </div>
                <div className="shop-cart">
                    <div className="shop-icon">
                        <i className="money-icon fa-solid fa-money-bill-1-wave"></i>
                    </div>
                    <div className="shop-info">
                        <p className="shop-info-title">Money Back</p>
                        <p className="shop-info-content">With a 30 day</p>
                    </div>
                </div>
                <div className="shop-cart">
                    <div className="shop-icon">
                        <i className="shield-icon fa-solid fa-shield-halved"></i>
                    </div>
                    <div className="shop-info">
                        <p className="shop-info-title">Payment</p>
                        <p className="shop-info-content">Secure Payment</p>
                    </div>
                </div>
                <div className="shop-cart">
                    <div className="shop-icon">
                        <i className="headset-icon fa-solid fa-headset"></i>
                    </div>
                    <div className="shop-info">
                        <p className="shop-info-title">Support</p>
                        <p className="shop-info-content">Support 24/7</p>
                    </div>
                </div>
            </div>
        </>
    );
};