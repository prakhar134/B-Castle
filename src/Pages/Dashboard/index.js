import React from 'react'
import Sidebar from '../../Components/Sidebar'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/auth'
const Dashboard = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div style={{width: 'calc(100% - 300px)', marginLeft: '300px', height: '50px', display: 'flex', justifyContent: 'space-between', padding: '15px 5px', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                <ul style={{listStyle: "none", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <li style={{padding: "5px 15px"}}>
                        <a style={{textDecoration: 'none'}} href="#!">Home</a>
                    </li>
                    <li style={{padding: "5px 15px"}}>
                        <a style={{textDecoration: 'none'}} href="#!">Contact</a>
                    </li>
                </ul>    
                <ul style={{listStyle: "none", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <li onClick={() => dispatch(logoutUser())} style={{marginRight: "50px", textAlign: 'center'}}>
                        <a style={{textDecoration: 'none', padding: "10px 25px", borderRadius: "25px", border: "1px solid #999", width: "70px"}} href="#!">Logout</a>
                    </li>
                </ul>
            </div>   
            <Sidebar />
        </>
    )
}

export default Dashboard
