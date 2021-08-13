import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const UserStats = () => {

    const { user } = useSelector(state => state?.Auth)
    const [coins, setCoins] = useState(0)
    const [invest, setInvest] = useState(0)

    const calci = () => {
        let x = 0, y = 0;
        user?.trades.forEach(t => {
            x = x + t.quantity;
            y = y + (t.quantity * t.price)
        })
        setCoins(x)
        setInvest(y)
        console.log("object");
    }

    useEffect(() => {
        calci()
        // eslint-disable-next-line 
    }, [user])
    
    if(!user)
        return <span className="loading">Loading...</span>

    return (
        <div className="styled-box">
            <div className="s-box s-box-1">
                Coins in Account: {coins}
            </div>
            <div className="s-box s-box-2">
                Total Investment: ₹{invest}
            </div>
            <div className="s-box s-box-3">
                Balance left: ₹{user.balance}
            </div>
        </div>
    )
}

export default UserStats
