import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../../actions/admin'
import './addNews.css'

const AddNews = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const body = {
            title, 
            description,
            image
        }
        props.setModal()
        dispatch(addNews(body))
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
