import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ImUser } from 'react-icons/im'
import { AiOutlineDashboard } from 'react-icons/ai'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { logoutUser } from '../../actions/auth'
import { Link } from 'react-router-dom'


const Sidebar = () => {

    const { user } = useSelector(state => state.Auth)
    const dispatch = useDispatch()

    if(user?.isAdmin)
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '300px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', background: 'linear-gradient(180deg, rgba(72,134,207,1) 0%, rgba(85,200,131,1) 100%)', color: '#fff'}}>
                <h1 style={{marginBlockStart: 0, padding: '25px 10px'}}>Logo</h1>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/adminPanel"><div style={{display: 'flex', width: '100%', alignItems: 'center'}}><AiOutlineDashboard style={{marginLeft: '20px', marginRight: '15px'}} size="1.5em" /><h2 style={{fontWeight: 400, padding: '10px 10px', marginBlockStart: 0, marginBlockEnd: 0}}>Dashboard</h2></div></Link>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/admin"><div style={{display: 'flex', width: '100%', alignItems: 'center'}}><RiLogoutBoxLine style={{marginLeft: '20px', marginRight: '15px'}} size="1.5em" /><h2 style={{fontWeight: 400, padding: '10px 10px', marginBlockStart: 0, marginBlockEnd: 0}} onClick={() => dispatch(logoutUser())}>Logout</h2></div></Link>
            </div>
        )
    else
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '300px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', background: 'linear-gradient(180deg, rgba(72,134,207,1) 0%, rgba(85,200,131,1) 100%)', color: '#fff'}}>
                <h1 style={{marginBlockStart: 0, padding: '25px 10px'}}>Logo</h1>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/dashboard"><div style={{display: 'flex', width: '100%', alignItems: 'center'}}><ImUser style={{marginLeft: '20px', marginRight: '15px'}} size="1.5em" /><h2 style={{fontWeight: 400, padding: '10px 10px', marginBlockStart: 0, marginBlockEnd: 0}}>{user?.name}</h2></div></Link>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/dashboard"><div style={{display: 'flex', width: '100%', alignItems: 'center'}}><AiOutlineDashboard style={{marginLeft: '20px', marginRight: '15px'}} size="1.5em" /><h2 style={{fontWeight: 400, padding: '10px 10px', marginBlockStart: 0, marginBlockEnd: 0}}>Dashboard</h2></div></Link>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/"><div style={{display: 'flex', width: '100%', alignItems: 'center'}}><RiLogoutBoxLine style={{marginLeft: '20px', marginRight: '15px'}} size="1.5em" /><h2 style={{fontWeight: 400, padding: '10px 10px', marginBlockStart: 0, marginBlockEnd: 0}} onClick={() => dispatch(logoutUser())}>Logout</h2></div></Link>
            </div>
        )
}

export default Sidebar
