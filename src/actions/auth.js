import axios from 'axios';
import { url } from '../api';
import history from '../Utilities/history';
import setAuthToken from '../Utilities/setAuthToken';

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

export const getUser = (token) => async (dispatch, getState) => {
  setAuthToken(token)
  const data = await axios
    .get(`${url}/self`)
    .then((res) => {
      dispatch({ type: 'USER_FETCHED', payload: res.data });
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'ERROR' });
      return null;
    });
  return data;
};
