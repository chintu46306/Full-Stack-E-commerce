// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthForm from './components/AuthForm';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './style.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<AuthForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<ProductList />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
