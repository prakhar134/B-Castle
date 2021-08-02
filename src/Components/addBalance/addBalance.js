import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBalance } from '../../actions/admin'

const AddBalance = (props) => {

    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1]
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addBalance(id, amount))
        props.setModal()
    }

    return (
        <div className="add__news">
            <h1 className="news__heading">Add Balance</h1>
            <form onSubmit={onSubmit}>
                <input type="number" step="1" name="title" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount Value" />
                <input type="submit" className="special" value="Add Balance" />
            </form>
        </div>
    )
}

export default AddBalance
