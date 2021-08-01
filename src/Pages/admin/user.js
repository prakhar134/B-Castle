import React, { useState, useEffect } from 'react'
import LoginHead from '../../Components/LoginHead/loginHead'
import Sidebar from '../../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getPrice, getUser } from '../../actions/admin'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import AddBalance from '../../Components/addBalance/addBalance'
import AddTrade from '../../Components/addTrade/AddTrade'

const User = () => {

    const dispatch = useDispatch()
    const id = window.location.href.split('/')[(window.location.href.split('/').length - 1)]

    useEffect(() => {
        dispatch(getUser(id))
        // eslint-disable-next-line
    }, [id])

    const { user } = useSelector(state => state?.Admin)
    const { price } = useSelector(state => state?.Admin)
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    const onClick = symbol => {
        dispatch(getPrice(symbol))
    }

    if(!user)
    return(<div style={{width: 'calc(100% - 300px)', marginLeft: '300px'}}>
            Loading...
        </div>)

    return (
        <>
            <Modal open={modal} onClose={() => setModal(false)} center>
                <AddBalance />
            </Modal>
            <Modal open={modal2} onClose={() => setModal2(false)} center>
                <AddTrade />
            </Modal>
            <LoginHead />
            <div style={{width: 'calc(100% - 300px)', marginLeft: '300px'}}>
                <p style={{fontSize: '2.5rem', textAlign: 'center', fontWeight: 700, color: user.balance < 200 ? "red" : "green" }} className="user_balance">₹{user.balance}</p>
                <div style={{marginBottom: '35px'}} className="flex">
                    <span onClick={() => setModal2(true)} className={ user.balance > 200 ? "special" : "normal"}>Add Trade</span>
                    <span onClick={() => setModal(true)} className={ user.balance > 200 ? "normal" : "special"}>Add Balance</span>
                </div>
                <form style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '50%', margin: 'auto'}}>
                    <div className="input_group">
                        <label htmlFor="name">User's Name</label>
                        <input type="text" name="name" value={user.name} />
                    </div>
                    <div className="input_group">
                        <label htmlFor="mail">User's Email</label>
                        <input type="email" name="mail" value={user.email} />
                    </div>
                </form>
                <h1 style={{textAlign: 'center'}} className="news__heading">User's Last trades</h1>
            <table>
                <tr>
                    <th>Coin</th>
                    <th>Trading Price</th>
                    <th>Trading quantity</th>
                    <th>Current Price</th>
                    <th></th>
                </tr>
                {user && user.trades && user.trades.reverse()?.slice(0, 3)?.map(trade => (
                    <tr>
                        <td style={{fontSize: '1.1em', fontWeight: '600'}}>{trade.name}</td>
                        <td>{trade.price}</td>
                        <td>{trade.quantity}</td>
                        <td>{ price.symbol !== trade.name ? <span onClick={() => onClick(trade.name)} style={{backgroundColor: 'whitesmoke', border: '2px solid grey', padding: '5px 10px', borderRadius: '5px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', cursor: 'pointer', fontSize: '0.9em'}}>Get Price</span> : <span style={{fontWeight: 700}}>{price.price}</span>}</td>
                        <td><span style={trade.type === 'buy' ? {padding: '5px 20px', borderRadius: '15px', backgroundColor: 'rgba(0, 250, 50, 0.2)', color: 'green'} : {padding: '1px 20px', borderRadius: '15px', backgroundColor: 'rgba(250, 50, 0, 0.2)', color: 'red'}}>{trade.type}</span></td>
                    </tr>
                ))}
            </table>
            {
                (!user.trades || user.trades.length === 0) && (
                    <p className="noTrades">No Trade Found</p>
                )
            }
            </div>
            <Sidebar />
        </>
    )
}

export default User
