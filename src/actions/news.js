import axios from 'axios';
import { url } from '../api';

export const getNews = () => async dispatch => {
    try {
        const news = await axios.get(`${url}/news`)
        if(localStorage.getItem('token'))
            dispatch({
                type: "GET_NEWS",
                payload: news.data
            })
        else
            dispatch({
                type: "GET_NEWS",
                payload: news.data.slice(0,3)
            })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'ERROR' });
        return null;
    }
}

export const getCurrentNews = (id) => async dispatch => {
    try {
        const news = await axios.get(`${url}/news/${id}`)
        dispatch({
            type: "CURRENT_NEWS",
            payload: news.data
        })
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR' });
            return null;
        }
}