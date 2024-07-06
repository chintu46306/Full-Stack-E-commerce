import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    // const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/product/sproduct/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleAddToCart = () => {
        const cartProduct = {
            // userId: userId,
            title: product.title,
            image: product.thumbnail,
            count: 1,
            price: Number(product.price),
            sellingPrice: Number(product.sellingPrice),
            discount: Number(product.discount),
            quantity: Number(product.quantity),
            color: product.color[0],
            size: 'adjustable'
        };

        console.log('Cart:', cartProduct);
        dispatch(addToCart(cartProduct));
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
