import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/actions/authActions';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData); // Debugging statement
        try {
            const response = await axios.post('http://localhost:3000/user/login', formData);
            console.log('User logged in:', response.data);
            const userId = response.data.id; // Adjust based on your response structure
            dispatch(setUserId(userId));
            console.log("UserID: ", userId);
            
            // Handle login success (e.g., redirect to dashboard)
        } catch (error) {
            console.error('Error logging in user:', error);
            // Handle login failure (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
