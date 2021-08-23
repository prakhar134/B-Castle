import React from 'react'
import { useSelector } from 'react-redux'

const UserStats = () => {

    const { current, profit, investment } = useSelector(state => state?.Admin)

    return (
        <div className="styled-box">
            <div className="s-box s-box-2">
                Current Investment: ₹{investment.toFixed(2)}
            </div>
            <div className="s-box s-box-3">
                Current Value: ₹{current.toFixed(2)}
            </div>
            <div className="s-box s-box-1">
                Current Net Profit: ₹{profit.toFixed(2)}
            </div>
        </div>
    )
}

export default UserStats
