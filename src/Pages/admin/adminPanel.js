import React, { useState, useEffect } from 'react'
import LoginHead from '../../Components/LoginHead/loginHead'
import Sidebar from '../../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../actions/admin'
import UserBar from '../../Components/UserBar/UserBar'
import './admin.css'

const AdminPanel = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line 
    }, [])
    var { users } = useSelector(state => state.Admin)
    const [value, setValue] = useState("")
    const [usersF, setUsersF] = useState([])

    const onChange = e => {
        setValue(e.target.value)
        users = users.filter(user => ((user.name.indexOf(value) !== -1) || (user.email.indexOf(value) !== -1)))
        setUsersF(users)
    }

    return (
        <div>
            <LoginHead />
                <div className="main" style={{width: 'calc(100% - 300px)', marginLeft: '300px'}}>
                    <input placeholder="Search Users" type="text" value={value} onChange={onChange} className="filter" />
                    <div style={{width: "100%"}} className="table">
                        {
                            value.length === 0 ?
                                users?.map(user => (
                                    <UserBar key={user._id} id={user.id} name={user.name} email={user.email} balance={user.balance} admin={user.isAdmin} />
                                ))
                            :
                                usersF?.map(user => (
                                    <UserBar key={user._id} id={user.id} name={user.name} email={user.email} balance={user.balance} admin={user.isAdmin} />
                                ))
                        }
                    </div>
                </div>
            <Sidebar />
        </div>
    )
}

export default AdminPanel
