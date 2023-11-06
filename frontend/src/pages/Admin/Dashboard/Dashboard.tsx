import "./Dashboard.css";
import {AdminNav} from "../../../components/Admin/AdminNav/AdminNav";


const orders = [
    {id: '001', product: 'Widget A', user: 'user@example.com', price: '$19.99', status: 'Pending'},
    {id: '002', product: 'Widget B', user: 'user2@example.com', price: '$29.99', status: 'Completed'},
    // ... więcej zamówień
];

export const Dashboard = () => {


    return (
        <div className="dashboard-wrapper">
            <AdminNav/>
            <div className="admin-dashboard-container">
                <div className="admin-dashboard">
                    <div className="admin-dashboard-pending">
                        <p className="admin-dashboard-p">Orders pending <span>12</span></p>
                        <i className="clock-pending fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div className="admin-dashboard-completed">
                        <p className="admin-dashboard-p">Orders completed <span>22</span></p>
                        <i className="check-completed fa-regular fa-circle-check"></i>
                    </div>
                    <div className="admin-dashboard-cancelled">
                        <p className="admin-dashboard-p">Orders cancelled <span>8</span></p>
                        <i className="x-cancelled fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
                {/*<div className="orders-table-container">*/}
                {/*    <table className="orders-table">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>ID</th>*/}
                {/*            <th>Product Name</th>*/}
                {/*            <th>User Email</th>*/}
                {/*            <th>Price</th>*/}
                {/*            <th>Status</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {orders.map(order => (*/}
                {/*            <tr key={order.id}>*/}
                {/*                <td data-label="ID:">{order.id}</td>*/}
                {/*                <td data-label="Product Name:">{order.product}</td>*/}
                {/*                <td data-label="User Email:">{order.user}</td>*/}
                {/*                <td data-label="Price:">{order.price}</td>*/}
                {/*                <td data-label="Status:">{order.status}</td>*/}
                {/*            </tr>*/}
                {/*        ))}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};