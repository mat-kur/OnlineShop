import "./AddAddressModal.css"
import React, {useState} from "react";
import {AddAddressModalTypes} from "./AddAddressModal.types";


export const AddAddressModal: React.FC<AddAddressModalTypes> = ({isOpen,setIsOpen, toggleModal}) => {


    return (
        <div>
            <div className="add-address-container">
            <button onClick={toggleModal}>Add Address</button>
            </div>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>×</span>
                        <h2>Add Address</h2>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Country" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Postal Code" />
                        <textarea placeholder="Address"></textarea>
                            <button className="modal-button-add" onClick={toggleModal}>Add Address</button>
                    </div>
                </div>
            )}
        </div>
    );
};
