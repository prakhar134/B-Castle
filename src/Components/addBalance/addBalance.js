import React, { useState } from 'react'

const AddBalance = () => {

    const [amount, setAmount] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="add__news">
            <h1 className="news__heading">Add Balance</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount Value" />
                <input type="submit" className="special" value="Add Balance" />
            </form>
        </div>
    )
}

export default AddBalance
