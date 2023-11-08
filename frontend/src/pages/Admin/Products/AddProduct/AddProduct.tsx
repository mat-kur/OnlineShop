import "./AddProduct.css";


export const AddProduct = () => {


    return (
            <div className="add-prodduct-container">
                <form className="add-product-form">
                    <p className="add-product-title">Add new product</p>
                    <div className="form-group">
                        <label htmlFor="productTitle"><i className="fa-solid fa-heading"></i> Title</label>
                        <input type="text" id="productTitle" name="title" placeholder="Enter product title" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="shortDescription"><i className="fa-solid fa-align-left"></i> Short
                            Description</label>
                        <textarea id="shortDescription" name="shortDescription"
                                  placeholder="Enter a short description of the product" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="longDescription"><i className="fa-solid fa-align-justify"></i> Long Description</label>
                        <textarea id="longDescription" name="longDescription"
                                  placeholder="Enter a detailed description of the product" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productImage"><i className="fa-solid fa-image"></i> Image File</label>
                        <input type="file" id="productImage" name="image" accept="image/*" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="platformSelect"><i className="fa-solid fa-gamepad"></i> Platform</label>
                        <select id="platformSelect" name="platform" required>
                            <option value="">Select platform</option>
                            <option value="PC">PC</option>
                            <option value="PS4">PS4</option>
                            <option value="XBOX">XBOX</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categorySelect"><i className="fa-solid fa-layer-group"></i> Category</label>
                        <select id="categorySelect" name="category" required>
                            <option value="">Select category</option>
                            <option value="RPG">RPG</option>
                            <option value="SPORT">Sport</option>
                            <option value="FPS">FPS</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price"><i className="fa-solid fa-tag"></i> Price</label>
                        <input type="number" id="price" name="price" placeholder="Enter product price" min="0"
                               step="0.01" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="discount"><i className="fa-solid fa-percent"></i> Discount </label>
                        <input type="number" id="discount" name="discount" placeholder="Enter discount percentage"
                               min="0" max="100"/>
                    </div>

                    <button type="submit" className="submit-button"><i className="fa-solid fa-plus"></i> Add Product
                    </button>
                </form>



            </div>
    );
};