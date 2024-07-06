import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch({ type: 'LOGIN', payload: response.data }); 
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};

// src/redux/actions/authActions.js
export const setUserId = (userId) => ({
    type: 'SET_USER_ID',
    payload: userId,
});
