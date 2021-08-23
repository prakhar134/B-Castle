import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrent, getInvestment, getProfit } from '../../actions/admin'
import { url } from '../../api'
import setAuthToken from '../../Utilities/setAuthToken'
const Portfoliobar = ({ trade }) => {

    const [price, setPrice] = useState(0)

    const getPrice = async () => {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const res = await axios.get(`${url}/price/${trade.name}`)
        setPrice(res.data.price)
        dispatch(getCurrent(trade.quantity * res.data.price))
        dispatch(getProfit(((trade.quantity * res.data.price) - (trade.quantity * (trade.price / trade.buy)))))
        dispatch(getInvestment((trade.price / trade.buy) * trade.quantity ))
    }

    const dispatch = useDispatch()


    useEffect(() => {
        getPrice()
    }, [trade])

    return (
        <tr>
            <td style={{fontSize: '1.1em', fontWeight: '600'}}>{trade.name}</td>
            <td>{trade.quantity}</td>
            <td>{trade.price / trade.buy}</td>
            <td style={{minWidth: '100px'}}>{ price ? <span style={{fontWeight: 700}}>{price}</span> : <span style={{backgroundColor: 'whitesmoke', border: '2px solid grey', padding: '5px 10px', borderRadius: '5px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', cursor: 'pointer', fontSize: '0.9em'}}>Get Price</span>}</td>
            <td>{price ? ((trade.quantity * price).toFixed(2)) : 0}</td>
            <td style={{ fontWeight: 'bold', color: ((trade.quantity * price) - (trade.quantity * (trade.price / trade.buy))) > 0 ? "green" : "red" }} >{price ? (((trade.quantity * price) - (trade.quantity * (trade.price / trade.buy))).toFixed(2) - (((trade.quantity * price) - (trade.quantity * (trade.price / trade.buy))).toFixed(2) * 0.2)): 0}</td>
        </tr>
    )
}

export default Portfoliobar
