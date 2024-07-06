// src/redux/actions/cartActions.js
import axios from 'axios';

export const addToCart = (product) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3000/user/cart', product);
        dispatch({
            type: 'ADD_TO_CART',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error adding to cart:', error);
        // Optionally, you can dispatch an error action here
    }
};

export const removeFromCart = (productId) => async (dispatch) => {
    try {
        await axios.post('http://localhost:3000/user/cart-remove', { id: productId });
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: productId,
        });
    } catch (error) {
        console.error('Error removing from cart:', error);
        // Optionally, you can dispatch an error action here
    }
};

export const fetchCart = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3000/user/cart');
        dispatch({
            type: 'FETCH_CART',
            payload: response.data,
        });
    console.log(response);

    } catch (error) {
        console.error('Error fetching cart:', error);
        // Optionally, you can dispatch an error action here
    }
};
