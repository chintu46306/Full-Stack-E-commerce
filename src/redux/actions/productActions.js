import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/product');
    dispatch({ type: 'SET_PRODUCTS', payload: response.data });
};
