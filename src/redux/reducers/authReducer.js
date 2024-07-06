// src/redux/reducers/authReducer.js
const initialState = {
  user: null,
  userId: null, // Add this line
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_USER_ID':
          return {
              ...state,
              userId: action.payload,
          };
      // Add other cases for login, logout, etc.
      default:
          return state;
  }
};

export default authReducer;
