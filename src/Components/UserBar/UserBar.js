import React from 'react'
import style from './index.module.css'
const UserBar = ({id, name, email, balance, admin}) => {

    const goToUser = id => {
        console.log(id);
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
