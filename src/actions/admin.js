import axios from 'axios'
import { url } from '../api';
import setAuthToken from '../Utilities/setAuthToken';

export const getAllUsers = () => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.get(`${url}/users`)
        dispatch({
            type: "GET_ALL_USER",
            payload: res.data
        })
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}

export const getPrice = (symbol) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.get(`${url}/price/${symbol}`)
        const payload = {
            price: res.data.price,
            symbol
        }
        dispatch({
            type: "GET_PRICE",
            payload
        })
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}