import React from 'react'
import '../styles/Profile.css'
import defaultPic from "../images/profile-pic.png"
import wifiPic from "../images/wifi.gif"
import settingIcon from "../images/setting.png"
function Profile() {
    return (
        <div className='container'>
            <div className="profile-box">
                <img className='menu-icon' src={wifiPic} alt='menu' />
                <img className='setting-icon' src={settingIcon} alt='setting' />
                <img className='profile-pic' src={defaultPic} alt='userPic' />
                <h1>Dhananjay Singh</h1>
                <p>Wifi Used: 23 Days</p>
                <button className='balance'>Balance: 500 ₹</button>
                <div className='profile-bottom'>
                    <p>Payment history</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
