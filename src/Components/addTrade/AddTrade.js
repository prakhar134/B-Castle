import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTrade } from '../../actions/admin'

const AddTrade = (props) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("buy")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [dateOfTrade, setDate] = useState("")
    const dispatch = useDispatch()

    const id = window.location.href.split('/')[window.location.href.split('/').length - 1]

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            price,
            type,
            quantity,
            dateOfTrade
        }
        dispatch(addTrade(id, data))
        props.setModal()
    }

    return (
        <div className="add__news">
            <h1 className="news__heading">Add Trade</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
                <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} placeholder="sell" />
                <div className="input_group2">
                    <input type="number" name="price" step="1" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Price" />
                    <input type="number" name="qty" step="1" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Enter quantity" />
                </div>
                <input type="date" name="date" value={dateOfTrade} onChange={e => setDate(e.target.value)} placeholder="Enter date trade was made" />
                <input type="submit" className="special" value="Add trade" />
            </form>
        </div>
    )
}

export default AddTrade
