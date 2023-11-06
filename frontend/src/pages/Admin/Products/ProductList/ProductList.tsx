import "./ProductList.css";

const products = [
    { id: 1, title: 'Product A', price: '$19.99', imageUrl: 'link-do-obrazka' },
    { id: 2, title: 'Product B', price: '$29.99', imageUrl: 'link-do-obrazka' },
    // ... więcej produktów
];

export const ProductList = () => {


    return (
        <div className="products-table-mobile">
            {products.map(product => (
                <div className="product-entry">
                    <div className="product-detail">
                        <b>Title:</b> <span>Product Name</span>
                    </div>
                    <div className="product-detail">
                        <b>Price:</b> <span>$99.99</span>
                    </div>
                    <div className="product-actions">
                        <button className="action-edit">Edit</button>
                        <button className="action-delete">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};