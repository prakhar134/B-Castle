import React, { useState } from 'react'

const AddTrade = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("buy")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="add__news">
            <h1 className="news__heading">Add News</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
                <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} placeholder="Buy Or Sell" />
                <div className="input_group2">
                    <input type="number" name="price" step="1" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Price" />
                    <input type="number" name="qty" step="1" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Enter quantity" />
                </div>
                <input type="submit" className="special" value="Add news" />
            </form>
        </div>
    )
}

export default AddTrade
