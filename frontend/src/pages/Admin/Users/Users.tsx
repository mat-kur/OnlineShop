import "./Users.css";
import {AdminHeader} from "../../../components/Admin/AdminHeader/AdminHeader";

import useravatar from "../../ProductDetails/UsersComments/istockphoto-1337144146-612x612.jpg"


export const Users = () => {


    return (
        <>
            <AdminHeader/>
            <div className="admin-users-wrapper">
                <div className="admin-single-user">
                    <img src={useravatar} alt=""/>
                    <div>
                        <p>Jhon</p>
                        <p>Doe</p>
                        <p>jhon.done@test.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};