// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
