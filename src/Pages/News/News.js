import React, { useState } from 'react'
import LoginHead from '../../Components/LoginHead/loginHead'
import Sidebar from '../../Components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { getCurrentNews } from '../../actions/news'
import NewsModal from '../../Components/News/NewsModal'

const News = () => {

    const dispatch = useDispatch()
    const { news } = useSelector(state => state.News)

    const [open, setOpen] = useState(false);
    const onOpenModal = (id) => {
        dispatch(getCurrentNews(id))
        setOpen(true);
    }
    const onCloseModal = () => {
        setOpen(false);
        dispatch({type: 'REMOVE_CURRENT'})
    }

    return (
        <>
            <LoginHead />
            <Sidebar />
            <Modal classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
            }} 
            open={open} onClose={onCloseModal} center>
                <NewsModal />
            </Modal>
            <div className="main_display" style={{display: 'flex', justifyContent: 'space-between', padding: '15px 5px', alignItems: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                <div className="news" id="news">
                <h1 className="news__heading">Latest News</h1>
                <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
                <div className="news__cards">
                    { news.map((ne) => (
                    <div onClick={() => onOpenModal(ne._id)} className="news__cards__card">
                    <div className="news__card__image">
                        <img width="400px" height="400px" style={{objectFit: 'cover'}} src={ne.image} alt="" />
                    </div>
                    <div className="news__card__content">
                        <span><Moment format="YYYY/MM/DD HH:MM">{Date( parseInt( ne._id.toString().substring(0,8), 16 ) * 1000 )}</Moment></span>
                        <p>{ne.title}</p>
                        <div className="news__card__footer">
                        <span>Author: Admin Aakash</span>
                        </div>
                    </div>
                    </div>
                    )) }
                </div>
                <Link to="/dashboard" className="special">Go Back</Link>
            </div>
            </div>
        </>
    )
}

export default News
