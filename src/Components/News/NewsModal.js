import React from 'react'
import { useSelector } from 'react-redux'
import Moment from 'react-moment'

const NewsModal = () => {

    const { current } = useSelector(state => state.News)

    if(!current)
        return <span className="loading">Loading...</span>

    return (
        <div style={{minWidth: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', alignItems: 'center', width: '100%', height: '100%', borderRadius: '25px'}}>
            <img src={current && current?.image} alt={current && current?.title} style={{objectFit: 'cover'}} width="100%" height="400px" />
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="news__card__content">
                        <span><Moment format="YYYY/MM/DD HH:MM">{Date( parseInt( current && current?._id?.toString()?.substring(0,8), 16 ) * 1000 )}</Moment></span>
                        <div className="news__card__footer">
                        <span>Author: Admin Aakash</span>
                        </div>
                    </div>
            <h1 style={{fontSize: '1.5em', textAlign: 'center', fontWeight: 500}}>{current && current?.title}</h1>
            <p style={{fontSize: '1.1em', padding: '15px 50px', textAlign:'justify', textAlignLast: 'center'}}>{current && current?.description}</p>
        </div>
    )
}

export default NewsModal
