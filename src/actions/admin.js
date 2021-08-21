import axios from 'axios'
import { url } from '../api';
import setAuthToken from '../Utilities/setAuthToken';
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";


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

export const getUser = (id) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.get(`${url}/user/${id}`)
        dispatch({
            type: "GET_USER",
            payload: res.data
        })
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}

export const addBalance = (id, amount) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const body = {
            amount
        }
        const res = await axios.patch(`${url}/addBalance/${id}`, body)
        dispatch({
            type: "GET_USER",
            payload: res.data
        })
        } catch (error) {
            toastifier("Cant perform this action right now", { type: 'error' })
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}

export const addTrade = (id, data) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.patch(`${url}/addTrade/${id}`, data)
        dispatch({
            type: "GET_USER",
            payload: res.data
        })
        
        } catch (error) {
            toastifier("Cant perform this action", { type: 'error' })
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}

export const addNews = (data) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.post(`${url}/news`, data)
        dispatch({
            type: "ADD_NEWS",
            payload: res.data
        })
        
        } catch (error) {
            toastifier("Cant perform this action", { type: 'error' })
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
            toastifier("Please try again later", { type: 'error' })
            dispatch({ type: 'ERROR' });
            return null;
        }
}

export const getCurrent = amt => async dispatch => {
    try {
        dispatch({
            type: 'GET_CURRENT',
            payload: parseFloat(amt)
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
        return null;
    }
}

export const getProfit = amt => async dispatch => {
    console.log(amt);
    try {
        dispatch({
            type: 'GET_PROFIT',
            payload: parseFloat(amt)
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
        return null;
    }
}

export const getInvestment = amt => async dispatch => {
    try {
        dispatch({
            type: 'GET_INVESTMENT',
            payload: parseFloat(amt)
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
        return null;
    }
}