import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import '../style.css'; 

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="product-list">
            <h1>Products</h1>
            <div className="product-cards">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <Link to={`/products/${product._id}`} className="product-link">
                            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
                            <div className="product-details">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
