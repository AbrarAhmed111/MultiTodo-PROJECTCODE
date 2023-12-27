// authReducer.js
const initialState = {
    authError: null,
  };
  
  const data = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP_SUCCESS':
        return { ...state, authError: null };
      case 'SIGN_UP_ERROR':
        return { ...state, authError: action.error.message };
      case 'LOGIN_SUCCESS':
        return { ...state, authError: null };
      case 'LOGIN_ERROR':
        return { ...state, authError: action.error.message };
      default:
        return state;
    }
  };
  
  export default data;
  