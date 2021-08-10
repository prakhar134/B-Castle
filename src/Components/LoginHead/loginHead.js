import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/auth'

const LoginHead = () => {

    const dispatch = useDispatch()

    return (
        <div className="main_display" style={{height: '50px', display: 'flex', justifyContent: 'space-between', padding: '15px 5px', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <ul style={{listStyle: "none", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <li style={{padding: "5px 8px"}}>
                <a style={{textDecoration: 'none'}} href="/dashboard">Dashboard</a>
            </li>
            <li style={{padding: "5px 8px"}}>
                <a style={{textDecoration: 'none'}} href="/my-trades">Trades</a>
            </li>
        </ul>    
        <ul style={{listStyle: "none", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <li onClick={() => dispatch(logoutUser())} style={{marginRight: "50px", textAlign: 'center'}}>
                <a style={{textDecoration: 'none', padding: "10px 25px", borderRadius: "25px", border: "1px solid #999", width: "70px"}} href="#!">Logout</a>
            </li>
        </ul>
    </div>
    )
}

export default LoginHead
