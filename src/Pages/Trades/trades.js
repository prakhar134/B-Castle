import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginHead from '../../Components/LoginHead/loginHead'
import Sidebar from '../../Components/Sidebar'
import { getPrice } from '../../actions/admin'
import print from 'ink-html'
const Trades = () => {

    const { user } = useSelector(state => state?.Auth)
    const { price } = useSelector(state => state?.Admin)
    const dispatch = useDispatch()
    const trades = user?.trades

    const onClick = symbol => {
        dispatch(getPrice(symbol))
    }

    const download = () => {
        print(document.getElementById('toDownload'))
    }

    return (
        <div style={{width: "100%", textAlign: 'center', overflowX: 'hidden'}}>
        <LoginHead />
        <Sidebar/>
        <div className="main_display" style={{textAlign: 'center', overflowX: 'scroll'}}>
            <h1 style={{textAlign: 'center', margin: 'inherit auto'}} className="news__heading">Your latest trades</h1>
            <table>
                <tr>
                    <th style={{minWidth: '100px'}}>Coin</th>
                    <th>Trading Price</th>
                    <th>Trading quantity</th>
                    <th style={{minWidth: '100px'}}>Current Price</th>
                    <th></th>
                </tr>
                {trades && trades?.map(trade => (
                    <tr>
                        <td style={{fontSize: '1.2em', fontWeight: '600'}}>{trade.name}</td>
                        <td>{trade.price}</td>
                        <td>{trade.quantity}</td>
                        <td>{ price.symbol !== trade.name ? <span onClick={() => onClick(trade.name)} style={{backgroundColor: 'whitesmoke', border: '2px solid grey', padding: '5px 10px', borderRadius: '5px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', cursor: 'pointer', fontSize: '0.9em'}}>Get Price</span> : <span style={{fontWeight: 700, fontSize: '1.3em'}}>{price.price}</span>}</td>
                        <td><span style={trade.type === 'buy' ? {padding: '5px 20px', borderRadius: '15px', backgroundColor: 'rgba(0, 250, 50, 0.2)', color: 'green'} : {padding: '1px 20px', borderRadius: '15px', backgroundColor: 'rgba(250, 50, 0, 0.2)', color: 'red'}}>{trade.type}</span></td>
                    </tr>
                ))}
            </table>
        </div>
        <div id="toDownload" style={{display: "none", textAlign: 'center', marginLeft: "300px"}}>
            <h1 style={{textAlign: 'center', margin: 'inherit auto'}} className="news__heading">Your latest trades</h1>
            <table>
                <tr>
                    <th>Coin</th>
                    <th>Trading Price</th>
                    <th>Trading quantity</th>
                    <th></th>
                </tr>
                {trades && trades?.map(trade => (
                    <tr>
                        <td style={{fontSize: '1.2em', fontWeight: '600'}}>{trade.name}</td>
                        <td>{trade.price}</td>
                        <td>{trade.quantity}</td>
                        <td><span style={trade.type === 'buy' ? {padding: '5px 20px', borderRadius: '15px', backgroundColor: 'rgba(0, 250, 50, 0.2)', color: 'green'} : {padding: '1px 20px', borderRadius: '15px', backgroundColor: 'rgba(250, 50, 0, 0.2)', color: 'red'}}>{trade.type}</span></td>
                    </tr>
                ))}
            </table>
        </div>
        <div className="main_display" style={{textAlign: 'center'}}>
            <button style={{textAlign: 'center', margin: 'inherit auto'}}  className="special" onClick={download}>Download as PDF</button>
        </div>
        </div>
    )
}

export default Trades
