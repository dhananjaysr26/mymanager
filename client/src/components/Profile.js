import React, { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'

import '../styles/Profile.css'
import defaultPic from "../images/profile-pic.png"
import wifiPic from "../images/wifi.gif"
import settingIcon from "../images/setting.png"

const axios = require('axios');

function Profile() {
    const [profileData, setProfileData] = useState({})
    const [noOfDays, setnoOfDays] = useState()
    const todaysDate = new Date();

    useEffect(() => {
        axios.get('/profile').then((res) => {
            console.log(res.data)
            setProfileData(res.data[0])
            setnoOfDays(differenceInCalendarDays(todaysDate, new Date(profileData.CountDate)))
            console.log(profileData.CountDate)
            console.log(noOfDays)

        })
    }, [1])

    return (
        <div className='container'>
            <div className="profile-box">
                <img className='menu-icon' src={wifiPic} alt='menu' />
                <img className='setting-icon' src={settingIcon} alt='setting' />
                <img className='profile-pic' src={defaultPic} alt='userPic' />
                <h1>{profileData.Name}</h1>
                <p>Wifi Used:{todaysDate.getDate()}</p>
                <button className='balance'>Balance: 500 ₹</button>
                <div className='profile-bottom'>
                    <p>Payment history</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
