import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../actions/auth'
import './index.css'
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";

const UserInfo = (props) => {

    const { user } = useSelector(state => state?.Auth)
    const [name, setName] = useState(user?.user.name)
    const [email, setEmail] = useState(user?.user.email)
    const [password, setPassword] = useState()
    const [confirmPassword, setPassword2] = useState()
    const [msg, setMsg] = useState("You are updating profile")
    const dispatch = useDispatch()
    if(!user)
        return <span className="loading">Loading...</span>

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPassword)
            toastifier("Password dont match", { type: 'error' })
        else{
            const data = { name, email, password, confirmPassword }
            dispatch(updateUser(data))
            setMsg("Profile updated")   
        }
    }

    if(props.update)
        return (
            <>
                <h1 style={{textAlign: 'center', maxWidth: '80%'}}>{msg} of {user?.user.name.split(' ')[0]}</h1>
                <h3 style={{color: '#555', marginTop: '-15px', marginBottom: '35px', fontWeight: 400, textAlign: 'center'}}>{user?.user.email}</h3>

                <form onSubmit={onSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto'}}>
                    <div style={{marginBottom: '25px'}} className="input_group">
                        <label>Current Balance</label>
                        <h2 style={{margin: '-2px', fontSize: '2rem'}}>₹{user?.user.balance}</h2>
                    </div>
                    <div className="input_group">
                        <label htmlFor="name">Update your Name</label>
                        <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div className="input_group">
                        <label htmlFor="mail">Update your Email</label>
                        <input type="email" name="mail" onChange={e => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="group_2">
                        <div className="input_group">
                            <label htmlFor="pass1">Update your Password</label>
                            <input type="password" name="pass1" onChange={e => setPassword(e.target.value)} placeholder="********" value={password} />
                        </div>
                        <div className="input_group">
                            <label htmlFor="pass2">Confirm your Password</label>
                            <input type="password" name="pass2" onChange={e => setPassword2(e.target.value)} placeholder="********" value={confirmPassword} />
                        </div>
                    </div>
                    <input style={{marginTop: '25px'}} type="submit" value="Update Profile" className="special" />
                </form>
            </>
        )

    return (
        <div>
            <h1>Welcome Abroad, {user?.user.name?.split(' ')[0]}</h1>
            <h3 style={{color: '#555', marginTop: '-15px', marginBottom: '35px', fontWeight: 400, textAlign: 'center'}}>{user?.user.email}</h3>
        </div>
    )
}

export default UserInfo
