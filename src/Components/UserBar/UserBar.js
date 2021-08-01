import React from 'react'
import style from './index.module.css'
import { useHistory } from 'react-router'
const UserBar = ({id, name, email, balance, admin }) => {

    const history = useHistory()
    const goToUser = id => {
        history.push(`/admin/user/${id}`)
    }

    return (
        <div onClick={() => !admin && goToUser(id)} className={[style.bar, !admin && style.pointy].join(' ')}>
            <span className={style.name}>{name}</span>
            <span className={style.email}>{email}</span>
            <span className={admin ? style.isAdmin : style.isUser}>{admin ? "admin" : "user"}</span>
            <span className={[style.balance, (parseInt(balance) < 200 && !admin) && style.textRed].join(' ')}>{!admin ? balance : "-"}</span>
        </div>
    )
}

export default UserBar
