import "./ShopItems.css"

import logo3 from "./i-fifa-23-gra-pc.png"
export const ShopItems = () => {


    return (
        <>
            <h2>OFFERS</h2>
            <div className="shop-main-items">
                <div className="shop-items-container">
                    <div className="home-shop-item">
                        <img src={logo3} alt="" className="shop-item-img"/>
                    </div>
                    <div className="item-rate">
                        <div className="item-stars">
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <button className="stock">INSTOCK</button>
                    </div>
                    <div className="item-info-container">
                        <div className="home-item-title">
                            <p className="title">FIFA 2023</p>
                        </div>
                        <div className="home-item-content">
                            <p className="description">Lorem ipsum dolor fkdjgjdskhj hgfd hjgfsd fasfdsafsdafsdafs</p>
                        </div>
                        <div className="home-item-info">
                            <p>Platforma: <span>PC</span></p>
                            <p>Gatunek: <span>Sportowa</span></p>
                        </div>
                        <div className="home-item-price">
                            <p className="item-price">30 zł</p>
                            <p className="price-before">60 zł</p>
                        </div>
                        <div className="button-detail">
                            <button className="detail">VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};