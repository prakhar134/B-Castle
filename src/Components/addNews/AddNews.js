import React, { useState } from 'react'
import './addNews.css'

const AddNews = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="add__news">
            <h1 className="news__heading">Add News</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Text" />
                <textarea type="text" name="desc" rows="15" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
                <input type="url" name="image" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image URL" />
                <input type="submit" className="special" value="Add news" />
            </form>
        </div>
    )
}

export default AddNews
