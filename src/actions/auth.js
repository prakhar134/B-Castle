import axios from 'axios';
import { url } from '../api';

export const Signin = (body) => async (dispatch, getState) => {
  const data = await axios
    .post(`${url}/signin`, body)
    .then((res) => {
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
      localStorage.setItem('token', res.data.token);
      dispatch({ type: 'SIGNED_UP', payload: res.data.result });
      dispatch(Signin());
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'ERROR' });
      return null;
    });
  return data;
};
export const getUser = (token) => async (dispatch, getState) => {
  const data = await axios
    .get(`${url}/user/${token}`)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: 'USER_FETCHED', payload: res.data.result });
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'ERROR' });
      return null;
    });
  return data;
};
