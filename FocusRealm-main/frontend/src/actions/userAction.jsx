import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_SUCCESS,
 LOGOUT_FAIL,
  CLEAR_ERRORS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS ,
   FORGOT_PASSWORD_FAIL,
   RESET_PASSWORD_REQUEST,
RESET_PASSWORD_SUCCESS ,
RESET_PASSWORD_FAIL ,
UPDATE_PASSWORD_REQUEST ,
 UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL ,
  LOAD_USER_REQUEST ,
 LOAD_USER_SUCCESS ,
  LOAD_USER_FAIL 
} from '../constants/userConstants';

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { 'Content-Type': 'application/json'} };

    const { data } = await axios.post(`https://focusrealm-1.onrender.com/api/v1/login`, { email, password }, {withCredentials:true},config);
     
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });


    // document.cookie = `token=${data.token}`;
    
  } catch (error) {
     dispatch({ type: LOGIN_FAIL, payload:error.response.data.message});
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { 'Content-Type': 'application/json'} };

    const { data } = await axios.post(`https://focusrealm-1.onrender.com/api/v1/register`, userData,{withCredentials:true}, config);

  

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });

        // Retrieve the token from the cookie

     // document.cookie = `token=${token}`;
  } catch (error) {
     dispatch({ type: REGISTER_USER_FAIL, payload:  error.response.data.message});
  }
};

 // Load User
 export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`https://focusrealm-1.onrender.com/api/v1/me`,{withCredentials:true});

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user});

    
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`https://focusrealm-1.onrender.com/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload:  error.response.data.message });
  }
};

  
 

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `https://focusrealm-1.onrender.com/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`https://focusrealm-1.onrender.com/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `https://focusrealm-1.onrender.com/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
