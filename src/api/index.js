export const url = `http://localhost:5000/api`;
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
