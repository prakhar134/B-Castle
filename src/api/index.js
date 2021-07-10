import axios from 'axios';

export const url = `https://bcastle.herokuapp.com/api`;
export const tokenConfig = (getState) => {
  const token = getState().auth.accessToken;
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
