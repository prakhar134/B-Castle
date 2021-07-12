import React from 'react'
import Sidebar from '../../Components/Sidebar'
import News from '../../Components/News/News';
import './index.css'
import { Link } from 'react-router-dom'
import LoginHead from '../../Components/LoginHead/loginHead';
import UserInfo from '../../Components/UserInfo/userInfo';

const Dashboard = () => {
    return (
        <>
            <LoginHead />
            <Sidebar />
            <div style={{width: 'calc(100% - 300px)', backgroundColor: 'aliceblue', marginLeft: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className="main_display">
                <UserInfo />
                <Link className="special" to="/update">Update Profile</Link>
            </div>
            <div style={{width: 'calc(100% - 300px)', backgroundColor: 'aliceblue', marginLeft: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingottom: '25px'}} className="main_display">
                <News />
                <Link style={{marginBottom: '40px'}} className="special" to="/news">Read More</Link>
            </div>
        </>
    )
}

export default Dashboard
