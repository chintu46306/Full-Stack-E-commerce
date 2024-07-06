// src/components/Cart.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, removeFromCart } from '../redux/actions/cartActions';
import '../style.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <li key={item._id} className="cart-item">
                        <img src={item.products[0].thumbnail} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.products[0].title}</h3>
                            <p>Price: ${item.product[0].price}</p>
                            <button
                                className="remove-button"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
