import "./MyAccountAddress.css"
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import React, {useState} from "react";
import {AddAddressModal} from "./AddAddressModal/AddAddressModal";
import {HeaderProps} from "../../../components/Header/Header.types";
import {AddAddressModalTypes} from "./AddAddressModal/AddAddressModal.types";


export const MyAccountAddress: React.FC<AddAddressModalTypes> = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="adress-wrapper">
            <MyAccountNav/>
            <div className="address-container">
                <h2>My Address</h2>
                <div className="card">
                    <h3>John Doe</h3>
                    <p>Olavarría, Buenos Aires</p>
                    <p>7400</p>
                    <p>Av. Colón 0101</p>
                    <p>(+01)1234567890</p>
                    <div className="icons">
                        <span>🖊️</span>
                        <span>🗑️</span>
                    </div>
                </div>
                <div className="card">
                    <h3>John Doe</h3>
                    <p>Olavarría, Buenos Aires</p>
                    <p>7400</p>
                    <p>Av. Colón 0101</p>
                    <p>(+01)1234567890</p>
                    <div className="icons">
                        <span>🖊️</span>
                        <span>🗑️</span>
                    </div>
                </div>
            </div>
            <>
                <AddAddressModal isOpen={isOpen} toggleModal={toggleModal} />
            </>
        </div>
    );
};