import React from 'react'
import LoginHead from '../../Components/LoginHead/loginHead'
import Sidebar from '../../Components/Sidebar'
import UserInfo from '../../Components/UserInfo/userInfo'
import './index.css'

const ProfileUpdate = () => {
    return (
        <>
            <LoginHead />
            <Sidebar />
            <div style={{width: 'calc(100% - 300px)', marginLeft: '300px', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingottom: '25px'}} className="main_display">
                <UserInfo update={true}/>
            </div>
            <div style={{width: 'calc(100% - 300px)', marginLeft: '300px', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingottom: '25px'}} className="main_display">
                <h1>Want to add Balance?</h1>
                <div style={{width: '100%'}} className="flex">
                    <div className="payCard_small">
                        <h4>Extra Small</h4>
                        <h1>₹5000</h1>
                        <span style={{padding: '5px 20px', color: 'red', backgroundColor: 'rgba(255,0,0, 0.2)', borderRadius: '15px', marginTop: '55px'}}>Enjoy Perks</span>
                        <ul>
                            <li>
                                This is one of the Perks single
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                            <li>
                                This is one of the Perks triple
                            </li>
                            <li>
                                This is one of the Perks normal
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                        </ul>
                    </div>
                    <div className="payCard_small recommend">
                        <span style={{padding: '5px 20px', marginTop: '15px', color: 'blue', backgroundColor: 'rgba(0,0,250, 0.2)', borderRadius: '15px'}}>Recommended</span>
                        <h4>Regular</h4>
                        <h1>₹10000</h1>
                        <span style={{padding: '5px 20px', color: 'red', backgroundColor: 'rgba(255,0,0, 0.2)', borderRadius: '15px', marginTop: '55px'}}>Enjoy Perks</span>
                        <span style={{padding: '5px 20px', color: 'green', backgroundColor: 'rgba(0,255,0, 0.2)', borderRadius: '15px', marginTop: '5px'}}>Win Goodies</span>
                        <ul>
                            <li>
                                This is one of the Perks single
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                            <li>
                                This is one of the Perks triple
                            </li>
                            <li>
                                This is one of the Perks normal
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                            <li>
                                This is one of the Perks normal
                            </li>
                        </ul>
                    </div>
                    <div className="payCard_small">
                        <h4>Extra Large</h4>
                        <h1>₹15000</h1>
                        <span style={{padding: '5px 20px', color: 'red', backgroundColor: 'rgba(255,0,0, 0.2)', borderRadius: '15px', marginTop: '55px'}}>Enjoy Perks</span>
                        <span style={{padding: '5px 20px', color: 'green', backgroundColor: 'rgba(0,255,0, 0.2)', borderRadius: '15px', marginTop: '5px'}}>Win Goodies</span>
                        <ul>
                            <li>
                                This is one of the Perks single
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                            <li>
                                This is one of the Perks triple
                            </li>
                            <li>
                                This is one of the Perks normal
                            </li>
                            <li>
                                This is one of the Perks
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="special" style={{marginBottom: '25px'}} href="#!">Request Balance</a>
            </div>
        </>
    )
}

export default ProfileUpdate
