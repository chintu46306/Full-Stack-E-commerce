// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    // Add other reducers here
});

export default rootReducer;
