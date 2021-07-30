import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPrice } from '../../actions/admin'
import './tradebar.css'
const Tradebar = () => {

    const { user } = useSelector(state => state?.Auth)
    const { price } = useSelector(state => state?.Admin)
    const trades = user?.trades

    const dispatch = useDispatch()

    const onClick = symbol => {
        dispatch(getPrice(symbol))
    }

    return (
        <div style={{width: "100%", textAlign: 'center', marginTop: '2em'}}>
        <h1 className="news__heading">Your latest trades</h1>
            <table>
                <tr>
                    <th>Coin</th>
                    <th>Trading Price</th>
                    <th>Trading quantity</th>
                    <th>Current Price</th>
                    <th></th>
                </tr>
                {trades && trades?.slice(0, 3)?.map(trade => (
                    <tr>
                        <td style={{fontSize: '1.1em', fontWeight: '600'}}>{trade.name}</td>
                        <td>{trade.price}</td>
                        <td>{trade.quantity}</td>
                        <td>{ price.symbol !== trade.name ? <span onClick={() => onClick(trade.name)} style={{backgroundColor: 'whitesmoke', border: '2px solid grey', padding: '5px 10px', borderRadius: '5px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', cursor: 'pointer', fontSize: '0.9em'}}>Get Price</span> : <span style={{fontWeight: 700}}>{price.price}</span>}</td>
                        <td><span style={trade.type === 'buy' ? {padding: '5px 20px', borderRadius: '15px', backgroundColor: 'rgba(0, 250, 50, 0.2)', color: 'green'} : {padding: '1px 20px', borderRadius: '15px', backgroundColor: 'rgba(250, 50, 0, 0.2)', color: 'red'}}>{trade.type}</span></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Tradebar
