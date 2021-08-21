import React from 'react'
import { useSelector } from 'react-redux'
import Portfoliobar from './PortfolioBar'
const PortfolioSection = () => {

    const { user } = useSelector(state => state?.Auth)
    const trades = user?.user?.trades

    return (
        <div style={{width: "100%", overflowX: 'scroll', textAlign: 'center', marginTop: '2em'}}>
        <h1 className="news__heading">Your Portfolio</h1>
            <table style={{overflow: 'scroll'}}>
                <tr>
                    <th>Coin</th>
                    <th>Quantity</th>
                    <th>Avg. Buy Price</th>
                    <th>Current Price</th>
                    <th>Current Value</th>
                    <th>Total P&L</th>
                </tr>
                {user?.portfolio && user?.portfolio?.map(trade => (
                    <Portfoliobar trade={trade} />
                ))}
            </table>
            {
                (!trades || trades.length === 0) && (
                    <p className="noTrades">No Trade Found</p>
                )
            }
        </div>
    )
}

export default PortfolioSection
