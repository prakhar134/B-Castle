import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './index.css'

const UserInfo = (props) => {

    const { user } = useSelector(state => state.Auth)
    const [msg, setMsg] = useState("You are updating profile")
    if(!user)
        return <span className="loading">Loading...</span>

    const onSubmit = (e) => {
        e.preventDefault()
        setMsg("Profile updated")
    }

    if(props.update)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{msg} of {user.name.split(' ')[0]}</h1>
                <h3 style={{color: '#555', marginTop: '-15px', marginBottom: '35px', fontWeight: 400, textAlign: 'center'}}>{user.email}</h3>

                <form onSubmit={onSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <div style={{marginBottom: '25px'}} className="input_group">
                        <label>Current Balance</label>
                        <h2 style={{margin: '-2px', fontSize: '2rem'}}>₹{user.balance}</h2>
                    </div>
                    <div className="input_group">
                        <label htmlFor="name">Update your Name</label>
                        <input type="text" name="name" value={user.name} />
                    </div>
                    <div className="input_group">
                        <label htmlFor="mail">Update your Email</label>
                        <input type="email" name="mail" value={user.email} />
                    </div>
                    <div className="group_2">
                        <div className="input_group">
                            <label htmlFor="pass1">Update your Password</label>
                            <input type="password" name="pass1" value="newPassword" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="pass2">Confirm your Password</label>
                            <input type="password" name="pass2" value="newPassword" />
                        </div>
                    </div>
                    <input style={{marginTop: '25px'}} type="submit" value="Update Profile" className="special" />
                </form>
            </div>
        )

    return (
        <div>
            <h1>Welcome Abroad, {user.name.split(' ')[0]}</h1>
            <h3 style={{color: '#555', marginTop: '-15px', marginBottom: '35px', fontWeight: 400, textAlign: 'center'}}>{user.email}</h3>
        </div>
    )
}

export default UserInfo
