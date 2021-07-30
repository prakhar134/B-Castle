import axios from 'axios';
import { url } from '../api';
import history from '../Utilities/history';
import setAuthToken from '../Utilities/setAuthToken';
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";

export const Signin = (body) => async (dispatch, getState) => {
  const data = await axios
    .post(`${url}/signin`, body)
    .then((res) => {
      setAuthToken(res.data.result)
      localStorage.setItem('token', res.data.token);
      dispatch({ type: 'SIGNED_IN', payload: res.data.result });
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'ERROR' });
      toastifier("Invalid Credentials", { type: "error" })
      return null;
    });
  return data;
};

export const Signup = (body) => async (dispatch, getState) => {
  const data = await axios
    .post(`${url}/signup`, body)
    .then((res) => {
      setAuthToken(res.data.result)
      localStorage.setItem('token', res.data.token);
      dispatch({ type: 'SIGNED_UP', payload: res.data.result });
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      toastifier("Can't Register now", { type: "error" })
      dispatch({ type: 'ERROR' });
      return null;
    });
  return data;
};

export const logoutUser = () => async dispatch => {
  localStorage.removeItem('token')
  dispatch({ type: 'LOGOUT_USER' })
  history.push('/')
}

export const getUser = () => async (dispatch, getState) => {
  const tokenStorage = localStorage.getItem('token')
  setAuthToken(tokenStorage)
  const data = await axios
    .get(`${url}/self`)
    .then((res) => {
      dispatch({ type: 'USER_FETCHED', payload: res.data });
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'ERROR' });
      toastifier("Something went wrong", { type: "error" })
      return null;
    });
  return data;
};

export const updateUser = (updatedData) => async dispatch => {
  try {
    const token = localStorage.getItem('token')
    setAuthToken(token)
    const data = await axios.put(`${url}/self`, updatedData)
    getUser()
    return data;
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ERROR' });
      toastifier("Something went wrong", { type: "error" })
      return null;
  }
};
